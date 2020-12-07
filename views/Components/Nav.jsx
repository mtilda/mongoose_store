const React = require('react');

class Nav extends React.Component {
  render () {
    return (
      <nav style={{ display: 'flex', gap: '10px' }}>
        {this.props.children}
      </nav>
    );
  }
}

module.exports = Nav;
