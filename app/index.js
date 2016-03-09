var USER_DATA = {
  name: 'Andy Kim',
  username: 'doulos',
  image: 'https://avatars.githubusercontent.com/u/597302?v=3'
}

var React = require('react');
var ReactDOM = require('react-dom');

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <div style={{color: 'blue', cursor:'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </div>
    )
  }
})

var ProfilePic = React.createClass({
  render: function () {
      return <img src={this.props.imageUrl} alt="" style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl = {this.props.user.image} />
        <ProfileLink username = {this.props.user.username} />
        <ProfileName name = {this.props.user.name} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
