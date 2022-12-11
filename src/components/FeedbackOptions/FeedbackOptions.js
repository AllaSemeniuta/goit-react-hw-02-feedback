import { Box } from 'components/Box/Box';
import { Button } from './FeedbackOptions.styled';

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
