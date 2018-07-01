// Include React
var React = require("react");

// Creating the Search component
var Search = React.createClass({

// Set input fields when page loads
  getInitialState: function() {
   return (
    this.state = {
      topic: "",
      startyear: "",
      endyear: ""
    });

    this.handleInputChange = this.handleInputChange.bind(this);
},

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

   this.setState({
      [name]: value
    });
},

  // When a user clicks "submit" button ...
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.setSearch(this.state.topic, this.state.startyear, this.state.endyear);
    this.setState({ topic: "", startyear: "", endyear: ""});
  },

  render: function() {
    return (
      <div className="searchContainer">
        <div className="containerName">
         <h4>Search</h4>
        <div className="divider"></div>
       </div>
       <form onSubmit={this.handleSubmit}>
        <div className="col s12 center">
         <h5>Topic</h5>
       </div>
       <div className="input-field col s10 offset-s1">
         <input placeholder="topic" name="topic" className="validate" required type="text" value={this.state.topic} id="topic" onChange={this.handleInputChange}>
         </input>
         <label className="active"></label>
       </div>
       <div className="col s12 center">
         <h5>Start Year</h5>
       </div>
       <div className="input-field col s10 offset-s1">
         <input placeholder="YYYYMMDD" name="startyear" required type="text" value={this.state.startyear} id="startyear" onChange={this.handleInputChange} className="validate">
         </input>
         <label className="active"></label>
       </div>
       <div className="col s12 center">
         <h5>End Year</h5>
       </div>
       <div className="input-field col s10 offset-s1">
         <input placeholder="YYYYMMDD" name="endyear" required type="text" value={this.state.endyear} id="endyear" onChange={this.handleInputChange} className="validate">
         </input>
         <label className="active"></label>
         <button className="waves-effect waves-light btn" type="submit" value="Submit">Submit</button>
        </div>
       </form>
      </div>
    );
  }
});

module.exports = Search

