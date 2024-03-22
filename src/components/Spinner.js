import React, { Component } from 'react'
import loading from "./loading.gif";

export default class Spinner extends Component {
  n
  render() {
    return (
      <div className="text-center sm mar">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
