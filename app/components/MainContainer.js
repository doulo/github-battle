var React = require('react');
var PropTypes = React.PropTypes;
var style = ('../style');

function MainContainer (props) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={style.transprentBg}>
      {props.children}
    </div>
  )
}
module.exports = MainContainer;
