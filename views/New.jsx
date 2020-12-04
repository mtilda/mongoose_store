const React = require('react');

class New extends React.Component {
  render () {
    return (
      <div>
        <h1>New Product</h1>
        <a href='/product'><button>back</button></a>
        <form action='/product' method='POST'>
          Name: <input type='text' name='name' /><br />
          Description: <input type='text' name='description' /><br />
          Image: <input type='text' name='img' /><br />
          Price: <input type='text' name='price' /><br />
          Quantity: <input type='text' name='qty' /><br />
          <input type='submit' name='' value='Create Product' />
        </form>
      </div>
    );
  }
}

module.exports = New;
