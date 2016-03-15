var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../style').transparentBg;


var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Welcome to GitHub Battle</h1>
        <p className="lead">Prepare for Battle</p>
        <Link to='/playerOne'>
          <button
            className="btn btn-block btn-success"
            type="submit">Get Started
          </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
