import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //usestate
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)


  }
  //useeffect for async componentDidMount() {}   --[] listen=empty array means nothing

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} -NewsMonkey`;
    updateNews();
  }, [])



  // const handlePreviousClick = async () => {
  //   console.log("previous");

  //   setPage(page - 1)
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   console.log("next");

  //   setPage(page + 1)
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    // setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    // this.setState({ loading: true });  cz we want to show spinner while loading on top
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setLoading(false,)

  };


  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "40px 0px", marginTop: "100px" }}>
        Top {capitalizeFirstLetter(props.category)} headline
      </h1>
      {/* uncomment done cz upr spinner ikhane ke lie */}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );

}
// we write defaultprops and proptypes in fbc at the end 
News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
