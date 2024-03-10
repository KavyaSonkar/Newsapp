import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
 
constructor(){             //always write super
    super();
    console.log('hello i am constructor for new component');
    this.state={
      articles: [],
      loading:false,
      page:1
    }
}

async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8a709edc2c8c4434a48e5b4208c3eab5&pagesize=18";
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
}


handlePreviousClick= async ()=>{
  console.log("previous");
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8a709edc2c8c4434a48e5b4208c3eab5&page=${this.state.page -1}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({
    page: this.state.page -1,
    articles: parsedData.articles
    
  })
}


handleNextClick= async ()=>{
  console.log('next');

  if(this.state.page +1 > Math.ceil(this.state.totalResults/18)){

  }
  else{
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8a709edc2c8c4434a48e5b4208c3eab5&page=${this.state.page +1} &pagesize=18`;
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({
    page: this.state.page +1,
    articles: parsedData.articles
  
  })
}
}

  render() {
    return (
      <div className="container my-3">
        <h2>News- website top headline</h2> 
        <div className='row'>
        {this.state.articles.map((element)=>{   
          return <div className='col-md-4' key={element.url} >
            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
        </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'> 
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        </div>
      
    )
  }
}

export default News
