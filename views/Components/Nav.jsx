const React = require('react');

class Nav extends React.Component {
  render () {
    const { leftContent, centerContent, rightContent, style } = this.props;

    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', ...style }}>
        {leftContent
          ? <div style={{ display: 'flex', justifyContent: 'left' }}>{leftContent}</div>
          : <></>}
        {centerContent
          ? <div style={{ display: 'flex', justifyContent: 'center' }}>{centerContent}</div>
          : <></>}
        {rightContent
          ? <div style={{ display: 'flex', justifyContent: 'right' }}>{rightContent}</div>
          : <></>}
      </nav>
    );
  }
}

module.exports = Nav;
