const React = require('react');

const styles = {
  h1: {
    width: '100%',
    textAlign: 'center'
  },
  body: {
    margin: '0 auto',
    maxWidth: '1000px'
  }
};

class Layout extends React.Component {
  render () {
    return (
      <>
        <h1 style={styles.h1}>Mongoose Store</h1>
        <hr />
        <div style={styles.body}>
          {this.props.children}
        </div>
      </>
    );
  }
}

module.exports = Layout;
