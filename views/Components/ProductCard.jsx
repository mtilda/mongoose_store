const React = require('react');

const styles = {
  card: {
    padding: '10px',
    minWidth: '250px',
    height: '320px',
    overflow: 'hidden'
  },
  a: {
    color: '#000'
  },
  img: {
    margin: 0,
    width: '100%',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  title: {
    margin: 0,
    padding: '5px 5px 0 5px',
    fontSize: '1.8rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  price: {
    margin: 0,
    padding: '5px 5px 0 5px',
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#555'
  },
  p: {
    margin: 0,
    padding: '5px',
    fontSize: '1.2rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
};

class ProductCard extends React.Component {
  render () {
    const product = this.props.product;

    return (
      <li style={styles.card}>
        <a href={`/product/${product.id}`}>
          <div style={{ ...styles.img, backgroundImage: `url(${product.image})` }} />
        </a>
        <h3 style={styles.title}>
          <a style={styles.a} href={`/product/${product.id}`}>
            {product.name}
          </a>
        </h3>
        <h4 style={styles.price}>${product.price}</h4>
      </li>
    );
  }
}

module.exports = ProductCard;
