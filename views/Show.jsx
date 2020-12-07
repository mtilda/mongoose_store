const React = require('react');
const Layout = require('./Components/Layout');
const Nav = require('./Components/Nav');
const NavLink = require('./Components/NavLink');

const styles = {
  body: {
    marginTop: '10px',
    width: '100%',
    overflow: 'hidden',
    display: 'flex'
  },
  img: {
    margin: 0,
    width: '500px',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  aside: {
    flexGrow: 1,
    paddingLeft: '10px'
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
    color: '#555',
    display: 'flex',
    gap: '5px'
  },
  p: {
    margin: 0,
    padding: '5px',
    fontSize: '1.2rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  stock: {
    margin: 0,
    padding: '5px',
    fontSize: '1.5rem'
  }
};

class Show extends React.Component {
  render () {
    const product = this.props.product;

    styles.stock.color = product.quantity > 0 ? '#2B2' : '#E33';

    return (
      <Layout>
        <Nav>
          <NavLink
            method='GET'
            href='/product'
            label='back'
          />
          <NavLink
            method='GET'
            href={`/product/edit/${product.id}`}
            label='edit'
          />
          <NavLink
            method='DELETE'
            href={`/product/${product.id}`}
            label='delete'
          />
        </Nav>

        <div style={styles.body}>
          <div style={{ ...styles.img, backgroundImage: `url(${product.image})` }} />
          <div style={styles.aside}>
            <h3 style={styles.title}>
              {product.name}
            </h3>
            <hr />
            <h4 style={styles.price}><span style={{ fontSize: '0.6em' }}>Price:</span><span style={{ color: '#E33' }}>${product.price}</span></h4>
            <p style={styles.p}>{product.description}</p>
            <p style={styles.stock}>{product.quantity > 0 ? 'In Stock.' : 'Out of Stock.'}</p>
            <p style={styles.p}><span style={{ fontWeight: 'bold' }}>Quanity: </span>{product.quantity}</p>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
