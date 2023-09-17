import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm.js';

const Product = ({ id, name, title, basePrice, colors, sizes }) => {
  const getPrice = () => {
    const foundSize = sizes.find((size) => size.name === currentSize);
    return basePrice + foundSize.additionalPrice;
  };

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name: ', title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={sizes}
          colors={colors}
          submitHandler={submitHandler}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
};

export default Product;
