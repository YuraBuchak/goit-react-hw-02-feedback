import PropTypes from 'prop-types';
import css from './App.module.css';
export const Section = ({ title, children }) => (
  <>
    {title && <h2 className={css.title}>{title}</h2>}
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
};
