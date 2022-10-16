import PropTypes from 'prop-types';
import css from './NoFeedback.module.css';

const NoFeedback = ({ message }) => (
  <p className={css.noFeedbacksMessage}>{message}</p>
);
NoFeedback.propTypes = {
  message: PropTypes.string,
};
export default NoFeedback;
