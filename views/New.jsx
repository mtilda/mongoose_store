const React = require('react');
const Layout = require('./Components/Layout');

class New extends React.Component {
  render () {
    return (
      <Layout>
        <a href='/product'><button>back</button></a>
        <h2>New Product</h2>
        <form action='/product' method='POST'>
          Name: <input type='text' name='name' /><br />
          Description: <input type='text' name='description' /><br />
          Image: <input type='text' name='image' /><br />
          Price: <input type='text' name='price' /><br />
          Quantity: <input type='text' name='quantity' /><br />
          <input type='submit' name='' value='Create Product' />
        </form>
      </Layout>
    );
  }
}

module.exports = New;
