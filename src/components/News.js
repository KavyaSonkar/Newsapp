import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>top headline</h2> 
        <div className='row'>
            <div className='col-md-4'>
                <NewsItems title="myTitle" description="mydescription" imageUrl="https://s.w-x.co/atmosrivercawedam_0.jpg"/>
            </div>
            <div className='col-md-4'>
                <NewsItems/>
            </div>
            <div className='col-md-4'>
                <NewsItems/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
