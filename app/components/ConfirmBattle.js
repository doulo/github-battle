var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../style');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetail');
var UserDetailWrapper = require('./UserDetailWrapper');
var MainContainer = require('./MainContainer');
//writing a stateless function

function ConfirmBattle (props) {
  return props.isLoading === true
  ? <p>LOADING!</p>
  : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailWrapper header='Player One'>
            <UserDetails info={props.playerInfo[0]} />
          </UserDetailWrapper>
          <UserDetailWrapper header='Player Two'>
            <UserDetails info={props.playerInfo[1]} />
          </UserDetailWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitialBattle}>INITIATE BATTLE BUTTON</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>
                Reselect Player
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;
