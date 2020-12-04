const React = require('react');

const styles = {
  card: {
    width: '350px',
    height: '400px',
    backgroundColor: '#DEF',
    borderRadius: '20px',
    border: '2px solid black',
    overflow: 'hidden'
  },
  title: {
    margin: 0,
    padding: '10px',
    fontSize: '2rem',
    color: '#000000'
  },
  img: {
    margin: 0,
    width: '100%',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  price: {
    margin: 0,
    padding: '10px',
    fontSize: '1.5rem'
  },
  p: {
    margin: 0,
    padding: '10px',
    fontSize: '1.2rem'
  }
};

class ProductCard extends React.Component {
  render () {
    const product = this.props.product;
    const index = this.props.index;

    return (
      <li key={index} style={styles.card}>
        <h3 style={styles.title}>
          <a href={`/product/${index}`}>
            {product.name}
          </a>
        </h3>
        <a href={`/product/${index}`}>
          <div style={{ ...styles.img, backgroundImage: `url(${product.image})` }} />
        </a>
        <h4 style={styles.price}>${product.price}</h4>
        <p style={styles.p}>{product.description}</p>
      </li>
    );
  }
}

module.exports = ProductCard;
