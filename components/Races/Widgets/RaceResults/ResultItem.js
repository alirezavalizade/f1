import { isWinner } from '@helpers';

import PropTypes from 'prop-types';

import AwardIcon from '@public/vectors/award.svg';

import { Box, Text, Tooltip } from '@components/ui';
import { Driver } from '@components/Teams';

import { RaceNumber } from '../elements';

import Status from './Status';

const ResultItem = ({ data, champId }) => {
  const status = data.status.toLowerCase();
  const isChamp = data.Driver.driverId === champId;

  return (
    <Box
      borderBottomWidth="1px"
      borderBottomColor="gray.light100"
      d="flex"
      alignItems="center"
      padding="15px"
      borderRadius="10px"
      opacity={isWinner(data) ? 1 : 0.5}
      backgroundColor={isChamp ? '#161616' : null}
    >
      <Box d="flex" flex="1">
        <Box d="flex" flex="1">
          <Box>
            <RaceNumber
              borderRadius="50%"
              width="30px"
              height="30px"
              d="flex"
              justifyContent="center"
              alignItems="center"
            >
              {data.position}
            </RaceNumber>
          </Box>
          <Box marginLeft="10px" flex="1">
            <Box d="flex" flexDir="column">
              <Driver data={data.Driver} constructor={data.Constructor} />
              <Box d="flex" opacity={0.7}>
                <Box flex="1">
                  <Text>Number: {data.number}</Text>
                  <Text>Points: {data.points}</Text>
                </Box>
                <Box flex="1">
                  <Text>Position: {data.position}</Text>
                  <Text>Grid: {data.grid}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          d="flex"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Status status={status} />
          {isChamp ? (
            <Tooltip label="World Champion" borderWidth="1px">
              <Box
                backgroundColor="yellow.500"
                borderRadius="50%"
                width="50px"
                height="50px"
                alignItems="center"
                d="flex"
                justifyContent="center"
                marginTop="10px"
              >
                <AwardIcon width={30} height={30} fill="#FFF" />
              </Box>
            </Tooltip>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

ResultItem.defaultProps = {
  champId: ''
};

ResultItem.propTypes = {
  data: PropTypes.object.isRequired,
  champId: PropTypes.string
};

export default ResultItem;
