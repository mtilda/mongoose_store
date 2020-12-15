const React = require('react');

class Nav extends React.Component {
  render () {
    const { leftContent, centerContent, rightContent, style } = this.props;

    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', ...style }}>
        <div style={{ display: 'flex', justifyContent: 'left' }}>{leftContent}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>{centerContent}</div>
        <div style={{ display: 'flex', justifyContent: 'right' }}>{rightContent}</div>
      </nav>
    );
  }
}

module.exports = Nav;
