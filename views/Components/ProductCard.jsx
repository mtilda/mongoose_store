const React = require('react');

const styles = {
  card: {
    width: '235px',
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
    fontSize: '1.6rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  price: {
    margin: 0,
    padding: '5px 5px 0 5px',
    fontSize: '1.4rem',
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
        <a href={`/product/${product.id}`} aria-hidden='true'>
          <div style={{ ...styles.img, backgroundImage: `url(${product.image})` }} />
        </a>
        <div style={styles.title}>
          <a style={styles.a} href={`/product/${product.id}`}>
            {product.name}
          </a>
        </div>
        <div style={styles.price}><span aria-hidden='true'>$</span>{product.price}<span className='sr-only'>US dollars</span></div>
      </li>
    );
  }
}

module.exports = ProductCard;
