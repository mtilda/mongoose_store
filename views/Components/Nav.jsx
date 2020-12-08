const React = require('react');

class Nav extends React.Component {
  render () {
    return (
      <nav style={{ display: 'flex', justifyContent: this.props.justify, ...this.props.style }}>
        {this.props.children}
      </nav>
    );
  }
}

module.exports = Nav;
