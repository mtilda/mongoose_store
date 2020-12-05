const React = require('react');
const ProductCard = require('./Components/ProductCard');

const styles = {
  h1: {
    width: '100%',
    textAlign: 'center'
  },
  list: {
    margin: '10px auto 0 auto',
    padding: 0,
    maxWidth: '1400px',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  }
};

class Index extends React.Component {
  render () {
    return (
      <>
        <h1 style={styles.h1}>Mongoose Store</h1>
        <hr />
        <a href='/product/new'><button>new product</button></a>
        <ul style={styles.list}>
          {this.props.products.map((product, index) =>
            <ProductCard key={index} product={product} index={index} />
          )}
        </ul>
      </>
    );
  }
}

module.exports = Index;
