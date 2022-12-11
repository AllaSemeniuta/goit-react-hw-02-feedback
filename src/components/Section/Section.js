import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  return <Title>{title}</Title>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
