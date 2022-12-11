import { Box } from 'components/Box/Box';
import { Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box as="ul">
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total()}</Item>
      <Item>Positive feedback: {positivePercentage()}%</Item>
    </Box>
  );
};
