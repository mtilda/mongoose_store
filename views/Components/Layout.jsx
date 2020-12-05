const React = require('react');

const styles = {
  h1: {
    width: '100%',
    textAlign: 'center'
  }
};

class Layout extends React.Component {
  render () {
    return (
      <>
        <h1 style={styles.h1}>Mongoose Store</h1>
        <hr />
        {this.props.children}
      </>
    );
  }
}

module.exports = Layout;
