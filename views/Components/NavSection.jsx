const React = require('react');

class NavSection extends React.Component {
  render () {
    return (
      <div style={{ display: 'flex', justifyContent: this.props.justify, ...this.props.style }}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = NavSection;
