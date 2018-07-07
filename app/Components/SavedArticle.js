'use strict';

import React from 'react'
import axios from 'axios'

module.exports = React.createClass({
  handleClick() {
    axios.delete(`/api/saved/${this.props.article._id}`).then(() => this.props.setSaved());
  },
  
  render() {
    return (
      <ul className="list-group">
        <li className="h4 list-group-item d-flex justify-content-between"><a href={this.props.article.url}>{this.props.article.title}</a>
          <button className="btn btn-danger btn-sm" type="submit" onClick={this.handleClick}>Delete</button>
        </li>
      </ul>
    )
  }
});