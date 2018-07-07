'use strict';

import React from 'react'
import axios from 'axios'

module.exports = React.createClass({
  getInitialState() {
    return { search_term: '', begin_date: '', end_date: '' }
  },

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();

    const query = {
      params: {
        api_key: "dbe8e8866d4c46f3ba08729395ce3e0b",
        q: this.state.search_term
      }
    }

    if (this.state.begin_date) query.params.begin_date = `${this.state.begin_date}0101`;
    if (this.state.end_date)   query.params.end_date   = `${this.state.end_date}1231`;

    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', query).then(response => {
      this.props.setResults(response.data.response.docs);
      this.setState({ search_term: '', begin_date: undefined, end_date: undefined });
    })
  },

  render() {
    return (
      <div className="container border p-3">
        <p className="text-center display-4">Search</p>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label htmlFor="search_term">Search Term</label>
              <input type="text" 
                  value={this.state.search_term}
                  id="search_term"
                  className="form-control form-control-lg col-12"
                  onChange={this.handleChange}
                  required
              />
          </div>

          <div className="row">
              <div className="form-group col-6">
                  <label htmlFor="start_year">Start Year</label>
                  <input
                      type="number"
                      value={this.state.begin_date || ''}
                      id="begin_date"
                      className="form-control "
                      onChange={this.handleChange}
                  />
          </div>

          <div className="form-group col-6">
                  <label htmlFor="end_year">End Year</label>
                  <input
                      type="number"
                      value={this.state.end_date || ''}
                      id="end_date"
                      className="form-control "
                      onChange={this.handleChange}
                  />
              </div>
          </div>

          <button className="btn btn-primary btn-lg offset-11" type="submit" name="action">Search</button>
        </form>
      </div>
    )
  }
});