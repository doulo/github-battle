var React = require('react');
var PropTypes = React.PropTypes;

//writing a stateless function

function ConfirmBattle (props) {
  return props.isLoading === true
  ? <p>LOADING!</p>
  : <p>Confirm Battle</p>
}

module.exports = ConfirmBattle;
