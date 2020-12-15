const React = require('react');
const Layout = require('./Components/Layout');
const Nav = require('./Components/Nav');
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
        <Nav
          leftContent={
            <NavLink
              method='GET'
              href='/product'
              label='Cancel'
            />
          }
          rightContent={
            <NavLink
              method='DELETE'
              href={`/product/${product.id}`}
              label='Delete'
            />
          }
        />

        <h2>Edit Product</h2>
        <form action={`/product/${product.id}/?_method=PUT`} method='POST' style={styles.form}>
          <label>Name: </label><br aria-hidden='true' />
          <input type='text' name='name' defaultValue={product.name} /><br aria-hidden='true' />
          <label>Description: </label><br aria-hidden='true' />
          <input type='text' name='description' defaultValue={product.description} style={styles.description} /><br aria-hidden='true' />
          <label>Image URL: </label><br aria-hidden='true' />
          <input type='text' name='image' defaultValue={product.image} /><br aria-hidden='true' />
          <label>Price: </label><br aria-hidden='true' />
          <input type='text' name='price' defaultValue={product.price} /><br aria-hidden='true' />
          <label>Quantity: </label><br aria-hidden='true' />
          <input type='text' name='quantity' defaultValue={product.quantity} /><br aria-hidden='true' />
          <input type='submit' value='Submit' />
        </form>
      </Layout>
    );
  }
}

module.exports = New;
