import PropTypes from 'prop-types';
import css from './FeedbackSection.module.css';

const Section = ({ title, children }) => (
  <section>
    {title && <h2 className={css.feedback_header}>{title}</h2>}
    {children}
  </section>
);
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Section;
