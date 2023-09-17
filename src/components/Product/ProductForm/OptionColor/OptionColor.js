import clsx from 'clsx';
import styles from '../../Product.module.scss';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  // const uniqueNameColors = [...new Set(colors)];

  /** 
filter() method to create a uniqueNameColors array that contains only those colors
 whose index is equal to the index of the first occurrence of that color in the colors array. */
  const uniqueNameColors = colors.filter(
    (color, index) => colors.indexOf(color) === index
  );

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {uniqueNameColors.map((color) => (
          <li key={color}>
            <button
              onClick={() => setCurrentColor(color)}
              type='button'
              className={clsx(
                prepareColorClassName(color),
                currentColor === color && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;
