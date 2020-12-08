const React = require('react');
const Layout = require('./Components/Layout');
const Nav = require('./Components/Nav');
const NavSection = require('./Components/NavSection');
const NavLink = require('./Components/NavLink');

const styles = {
  form: {
    lineHeight: '1.5em'
  },
  description: {
    height: '4em',
    wordBreak: 'break-word'
  }
};

class New extends React.Component {
  render () {
    const product = this.props.product || {
      id: undefined,
      name: '',
      description: '',
      image: '',
      price: '',
      quantity: ''
    };

    return (
      <Layout>
        <Nav justify='space-between'>
          <NavSection justify='left'>
            <NavLink
              method='GET'
              href='/product'
              label='Cancel'
            />
          </NavSection>
          <NavSection justify='right'>
            <NavLink
              method='DELETE'
              href={`/product/${product.id}`}
              label='Delete'
            />
          </NavSection>
        </Nav>

        <h2>Edit Product</h2>
        <form action={`/product/${product.id}/?_method=PUT`} method='POST' style={styles.form}>
          <label>Name: </label><br />
          <input type='text' name='name' defaultValue={product.name} /><br />
          <label>Description: </label><br />
          <input type='text' name='description' defaultValue={product.description} style={styles.description} /><br />
          <label>Image URL: </label><br />
          <input type='text' name='image' defaultValue={product.image} /><br />
          <label>Price: </label><br />
          <input type='text' name='price' defaultValue={product.price} /><br />
          <label>Quantity: </label><br />
          <input type='text' name='quantity' defaultValue={product.quantity} /><br />
          <input type='submit' value='Submit' />
        </form>
      </Layout>
    );
  }
}

module.exports = New;
