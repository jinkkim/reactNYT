var React = require("react");
var Results = require("./children/Results");
var Saved = require("./children/Saved");
var Search = require("./children/Search");
var helpers = require("./utils/helpers");


var Main = React.createClass({
  getInitialState: function() {
    return { searchTopic: "", results: [], saved: [] };
    console.log("Initial state?");
  },

  // If the component changes (i.e. if search terms are entered) ...
  componentDidUpdate: function() {
    helpers.runQuery(this.state.searchTopic, this.state.searchStartyear, this.state.searchEndyear).then(function(data) {
      // Yes: I know this is a bad idea. I am struggling.

      this.setState({ 
        title: data.response.docs[0].headline.main, 
        title2: data.response.docs[1].headline.main,
        title3: data.response.docs[2].headline.main,
        title4: data.response.docs[3].headline.main,
        title5: data.response.docs[4].headline.main,
        summary: data.response.docs[0].snippet, 
        summary2: data.response.docs[1].snippet,
        summary3: data.response.docs[2].snippet,
        summary4: data.response.docs[3].snippet,
        summary5: data.response.docs[4].snippet,
        pubdate: data.response.docs[0].pub_date.slice(0,10),
        pubdate2: data.response.docs[1].pub_date.slice(0,10),
        pubdate3: data.response.docs[2].pub_date.slice(0,10),
        pubdate4: data.response.docs[3].pub_date.slice(0,10),
        pubdate5: data.response.docs[4].pub_date.slice(0,10)
      });
    }.bind(this));
  },

  // Allow children to update the parent.
  setSearch: function(topic, startyear, endyear) {
    this.setState ({ searchTopic: topic, searchStartyear: startyear, searchEndyear: endyear})
  },

  render: function() {
    return (
	 <div className="main-container">
 	  <nav>
  	    <div className="nav-wrapper">
    	 <a href="#" className="brand-logo">NYT Article Scrubber</a>
     	  <ul id="nav-mobile" className="right hide-on-med-and-down">
     		<li><a href="#">Search</a></li>
        	<li><a href="#">Results</a></li>
        	<li><a href="#">Saved</a></li>
          </ul>
  		</div>
 	  </nav>
  	  <div className="container grid">
    	<div className="row grid-name">
      		<div className="col s12 center">
      			<Search setSearch={this.setSearch} />
      		</div>
      	</div>
      </div>
      <div className="container grid">
    	<div className="row grid-name">
      		<div className="col s12 center">
        {/*Yes: Bad idea. Moving on for time, sanity.*/}
      			<Results 
              title={this.state.title} 
              title2={this.state.title2} 
              title3={this.state.title3} 
              title4={this.state.title4} 
              title5={this.state.title5} 
              summary={this.state.summary} 
              summary2={this.state.summary2} 
              summary3={this.state.summary3} 
              summary4={this.state.summary4} 
              summary5={this.state.summary5} 
              pubdate={this.state.pubdate} 
              pubdate2={this.state.pubdate2} 
              pubdate3={this.state.pubdate3} 
              pubdate4={this.state.pubdate4} 
              pubdate5={this.state.pubdate5}
            />
      		</div>
      	</div>
      </div>
     </div>
    );
  }
});

module.exports = Main;
