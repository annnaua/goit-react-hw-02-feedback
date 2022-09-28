import PropTypes from 'prop-types';

import { OptionsList, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={option}>
          <OptionButton option={option} onClick={onLeaveFeedback} name={option}>
            {option}
          </OptionButton>
        </li>
      ))}
    </OptionsList>
  );
};
