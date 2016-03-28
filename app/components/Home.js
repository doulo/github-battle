var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');


var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Welcome to GitHub Battle</h1>
        <p className="lead">Prepare for Battle</p>
        <Link to='/playerOne'>
          <button
            className="btn btn-block btn-success"
            type="submit">Get Started
          </button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
