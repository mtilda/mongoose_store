const React = require('react');

class ProductCard extends React.Component {
  render () {
    const product = this.props.product;
    const index = this.props.index;

    return (
      <li key={index}>
        <a href={`/product/${index}`}>
          <h3>{product.name}</h3>
        </a>
        <a href={`/product/${index}`}>
          <img aria-hidden='true' src={product.image} alt={product.description} />
        </a>
        <p>{product.description}</p>
      </li>
    );
  }
}

module.exports = ProductCard;
