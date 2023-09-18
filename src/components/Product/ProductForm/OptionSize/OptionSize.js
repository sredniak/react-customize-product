import clsx from 'clsx';
import styles from '../../Product.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={size.name}>
            <button
              onClick={() => {
                setCurrentSize(size);
              }}
              type='button'
              className={clsx(size.name === currentSize && styles.active)}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;