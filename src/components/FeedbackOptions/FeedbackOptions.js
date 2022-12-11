import { Box } from 'components/Box/Box';
import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      {options.map((option, index) => (
        <Button key={index} type="button" onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
