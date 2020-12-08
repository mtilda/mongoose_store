const React = require('react');

const style = {
  fontSize: '1.2rem',
  height: '2.2em',
  padding: '0 1em 0 1em',
  backgroundColor: 'transparent',
  border: 'transparent',
  fontWeight: 'bold',
  cursor: 'pointer'
};

class NavLink extends React.Component {
  render () {
    let method = this.props.method || 'GET';
    let href = this.props.href || '/';
    const label = this.props.label;

    if (method === 'PUT' || method === 'DELETE') {
      href = href + `?_method=${method}`;
      method = 'POST';
    }

    return (
      <form method={method} action={href}>
        <input type='submit' value={label} style={{ ...style, ...this.props.style }} />
      </form>
    );
  }
}

module.exports = NavLink;
