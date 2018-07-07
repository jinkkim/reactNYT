'use strict';

import React from 'react'

module.exports = React.createClass({
  getInitialState() {
    return { window_height: $(window).height() }
  },
  
  render() {
    return (
      <div className="container d-flex justify-content-center footer">
	      <div className="footercontent">Copyright 2018 <a href="http://www.jinkkim.github.io/porfolio" className="links2">Jin Kim </a> All Rights Reserved. 			
		      <div className = "container d-flex justify-content-around">
			      <a href="https://www.linkedin.com/jinkingkim"><i className='fa fa-linkedin-square'></i></a>
        	  <a href="http://www.github.com/jinkkim"><i className='fa fa-github-square'></i></a>
			      <a href="https://www.instagram.com/k9.cookie"><i className='fa fa-instagram'></i></a>
			      <a href="https://www.youtube.com/"><i className='fa fa-youtube-square'></i></a>		
			      <a href="https://plus.google.com/"><i className='fa fa-google-plus-square'></i></a>
		      </div>								
	      </div>
      </div>
    )
  }
});