import {
  StatisticsList,
  StatisticsText,
  StatisticsVolume,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <StatisticsText>
          Good: <StatisticsVolume>{good}</StatisticsVolume>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Neutral: <StatisticsVolume>{neutral}</StatisticsVolume>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Bad: <StatisticsVolume>{bad}</StatisticsVolume>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Total: <StatisticsVolume>{total}</StatisticsVolume>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Positive feedback:{' '}
          <StatisticsVolume>{positivePercentage}%</StatisticsVolume>
        </StatisticsText>
      </li>
    </StatisticsList>
  );
};
