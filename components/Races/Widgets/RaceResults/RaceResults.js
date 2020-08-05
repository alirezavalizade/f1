import { separatedWinnersLosers } from '@helpers';

import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@components/ui';
import LosersList from './LosersList';
import ResultItem from './ResultItem';

const RaceResults = ({ data, champId, onStateChanged }) => {
  const list = useMemo(() => {
    return separatedWinnersLosers(data);
  }, [data]);
  return (
    <Box>
      {list.winners.map(item => (
        <ResultItem key={item.driverId} data={item} champId={champId} />
      ))}
      <LosersList data={list.losers} onStateChanged={onStateChanged} />
    </Box>
  );
};

RaceResults.defaultProps = {
  champId: '',
  onStateChanged: () => {}
};

RaceResults.propTypes = {
  data: PropTypes.array.isRequired,
  champId: PropTypes.string,
  onStateChanged: PropTypes.func
};

export default RaceResults;
