var React = require('react');
var PropTypes = React.PropTypes;
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: false,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    console.log('QUERY2', query);
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        />
    );
  }

});

module.exports = ConfirmBattleContainer;
