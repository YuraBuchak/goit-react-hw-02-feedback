import PropTypes from 'prop-types';
import css from './App.module.css';

export const FeedbackOptions = ({ options, handleClickBtn }) => (
  <div className={css.wrapperBtn}>
    {options.map(option => (
      <button
        type="button"
        className={css.btn}
        key={option.toLowerCase()}
        name={option.toLowerCase()}
        onClick={event => handleClickBtn(event.target.name)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};
