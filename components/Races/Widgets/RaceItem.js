import { parseDate } from '@helpers';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Text, IconButton } from '@components/ui';

import { Driver } from '@components/Teams';

import RaceResults from './RaceResults/RaceResults';
import { RaceWrapper, RaceNumber } from './elements';

// virtualState, keep-alive
const cacheState = {};
const RaceItem = ({ data, champId, onStateChanged }) => {
  const id = `${data.raceName}-${data.season}`;

  const [showResults, setShowResults] = useState(() => cacheState[id]);
  const [day, month] = parseDate(data.date);

  useEffect(() => {
    cacheState[id] = showResults;
    onStateChanged();
  }, [data, showResults, onStateChanged, id]);

  return (
    <RaceWrapper
      padding="16px"
      marginBottom="20px"
      borderRadius="0.25rem"
      hoverState={!showResults}
    >
      <Box d="flex">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDir="column"
        >
          <RaceNumber
            borderRadius="50%"
            width="40px"
            height="40px"
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="xl" fontWeight="900">
              {data.round}
            </Text>
          </RaceNumber>
          <Heading
            as="h6"
            size="sm"
            fontWeight="900"
            transform="rotate(-90deg)"
            marginTop="25px"
            marginBottom="20px"
            color="#908f95"
          >
            RACE
          </Heading>
        </Box>
        <Box d="flex" flex="1" marginLeft="10px">
          <Box
            d="flex"
            flex="1"
            flexDir="column"
            justifyContent="space-between"
          >
            <Heading as="h4" size="md" isTruncated>
              {data.raceName}
            </Heading>
            <Box d="flex">
              <Box flex="1" maxWidth="420px">
                <Text color="#7c2294" fontSize="lg" isTruncated>
                  {month} {day}
                </Text>
                <Text fontSize="lg" isTruncated>
                  {data.Circuit.circuitName}
                </Text>
              </Box>
              <Box flex="1">
                <Driver
                  data={data.Results[0].Driver}
                  constructor={data.Results[0].Constructor}
                  showAward
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box d="flex" alignItems="start">
          <IconButton
            fontSize="2xl"
            borderRadius="50%"
            icon={showResults ? 'chevron-up' : 'chevron-down'}
            backgroundColor="transparent"
            onClick={() => setShowResults(!showResults)}
          />
        </Box>
      </Box>
      {showResults ? (
        <Box
          paddingLeft="60px"
          paddingY="20px"
          paddingRight="20px"
          backgroundColor="#222222"
          borderRadius="10px"
          marginTop="20px"
        >
          <RaceResults
            data={data.Results}
            champId={champId}
            onStateChanged={onStateChanged}
          />
        </Box>
      ) : null}
    </RaceWrapper>
  );
};

RaceItem.defaultProps = {
  champId: '',
  onStateChanged: () => {}
};

RaceItem.protoTypes = {
  data: PropTypes.object.isRequired,
  champId: PropTypes.string,
  onStateChanged: PropTypes.func
};

export default RaceItem;
