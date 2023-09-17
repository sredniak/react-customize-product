import styles from '../../Product.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  /** 
we create a new uniqueNameSizes array that contains only unique size names.
 Then, we iterate over this uniqueNameSizes array,
 rather than the original sizes array, to render buttons for unique sizes. */
  const uniqueNameSize = [...new Set(sizes.map((size) => size.name))];

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {uniqueNameSize.map((sizeName) => (
          <li key={sizeName}>
            <button
              onClick={() => {
                setCurrentSize(sizeName);
              }}
              type='button'
              className={sizeName === currentSize ? styles.active : ''}
            >
              {sizeName}
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
