import styled from 'styled-components';

export const OptionsList = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 16px;

  padding: 0;
  margin: 0;
`;

export const OptionButton = styled.button`
  display: block;

  width: 160px;
  height: 48px;
  padding: 8px;

  border: none;
  border-radius: 4px;
  outline: none;

  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;

  cursor: pointer;

  background-color: ${props => {
    switch (props.option) {
      case 'good':
        return '#22c55e';

      case 'neutral':
        return '#3b82f6';

      case 'bad':
        return '#ef4444';

      default:
        return '#111827';
    }
  }};

  :hover,
  :focus {
    background-color: ${props => {
      switch (props.option) {
        case 'good':
          return '#16a34a';

        case 'neutral':
          return '#2563eb';

        case 'bad':
          return '#dc2626';

        default:
          return '#111827';
      }
    }};
  }
`;
