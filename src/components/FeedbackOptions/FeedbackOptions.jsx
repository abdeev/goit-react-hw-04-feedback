import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeavefeedback }) => {
  return (
    <ul className={css.feedback_buttons}>
      {options.map(item => (
        <li key={item}>
          <button
            type="button"
            onClick={() => onLeavefeedback(item)}
            className={css.button}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeavefeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
