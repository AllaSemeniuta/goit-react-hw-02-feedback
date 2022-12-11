import PropTypes from 'prop-types';

export const Notificstion = ({ message }) => {
  return <p>{message}</p>;
};

Notificstion.propTypes = {
  message: PropTypes.string.isRequired,
};
