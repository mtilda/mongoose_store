const React = require('react');

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
        <input type='submit' value={label} />
      </form>
    );
  }
}

module.exports = NavLink;
