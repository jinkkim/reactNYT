'use strict';

import React from 'react'

import SavedArticle from './SavedArticle'

module.exports = React.createClass({

  render() {
    return (
      <div className="container border p-3 mb-4">
        <p className="text-center display-4">Saved articles</p>
          {this.props.articles.map((article) =>
            <SavedArticle key={article._id}
                          article={article}
                          setSaved={this.props.setSaved}
            />
          )
          }
      </div>
    )
  }

});