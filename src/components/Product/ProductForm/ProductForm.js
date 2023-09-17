import styles from '../Product.module.scss';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import Button from './Button/Button';
import PropTypes from 'prop-types';

const ProductForm = ({
  colors,
  sizes,
  submitHandler,
  currentSize,
  currentColor,
  setCurrentSize,
  setCurrentColor,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  /**
we expect an array of "colors" with type string */
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** 
we expect an array "sizes" which has two objects of type string and number */
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
  submitHandler: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;
