import styles from '../Product.module.scss';
import PropTypes from 'prop-types';

const ProductImage = ({ title, name, currentColor }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
  );
};
ProductImage.propTypes = {
  currentColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProductImage;
