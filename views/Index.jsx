const React = require('react');

const styles = {
  h1: {
    width: '100%',
    textAlign: 'center'
  }
};

class Index extends React.Component {
  render () {
    return (
      <>
        <h1 style={styles.h1}>Mongoose Store</h1>
        <hr />
        <a href='/product/new'><button>new product</button></a>
      </>
    );
  }
}

module.exports = Index;
