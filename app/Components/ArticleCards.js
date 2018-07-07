'use strict';

import React from 'react'
import axios from 'axios'

var cardStyle = {
  width: "16rem"
}

module.exports = React.createClass({
  handleClick() {
    const article = this.props.article;

    axios.post('/api/saved', {
      title: this.props.article.headline.main,
      date: this.props.article.pub_date,
      url: this.props.article.web_url
    }).then(() => {
      this.props.setSaved();
      this.props.onDelete(this.props.index);
    }
   );
  },
  
  render() {
    var imgUrl = "https://static01.nyt.com/" + this.props.article.multimedia[0].url;
    return (
      <div className="card mx-1 my-2" style={cardStyle}>
        <img className="card-img-top" src={imgUrl}></img>
          <div className="card-body">
            <a href={this.props.article.web_url}>
              <p className= "card-text">{this.props.article.pub_date.substring(0,10)}</p>
              <p className= "card-text h3">{this.props.article.headline.main}</p>
              <p className= "card-text">{this.props.article.snippet}</p>
            </a> 
          </div>
        <button className="btn btn-primary" type="submit" onClick={this.handleClick}>Save article</button>
      </div>








      
    )
  }
});