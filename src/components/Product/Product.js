import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm.js';

const Product = ({ name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  /** 
  useMemo saves data in memory and recalculates only when
  one of the changes ([basePrice, currentSize, sizes]) changes. */
  const getPrice = useMemo(() => {
    return basePrice + currentSize.additionalPrice;
  }, [basePrice, currentSize]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name: ', title);
    console.log('Price: ', getPrice, '$');
    console.log('Size: ', currentSize.name);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          sizes={sizes}
          colors={colors}
          submitHandler={submitHandler}
          currentColor={currentColor}
          currentSize={currentSize.name}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
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