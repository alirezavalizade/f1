import { getChampId } from '@helpers';

import useSWR from 'swr';
import { useAppState } from '@contexts';

import { List } from '@components/App/Virtual';
import { Box, Heading } from '@components/ui';
import RaceItem from '@components/Races/Widgets/RaceItem';
import { useMemo } from 'react';

const RacesList = () => {
  const { selectedSeason } = useAppState();
  const url = `/${selectedSeason}/results`;
  const {
    data: {
      MRData: {
        RaceTable: { Races: data }
      }
    }
  } = useSWR([url, 'limit', 1000]);

  const champId = useMemo(() => {
    return getChampId(data);
  }, [data]);

  return (
    <Box paddingY="50px">
      <Heading>Races in {selectedSeason}</Heading>
      <List
        data={data}
        renderRow={({ index, measure }) => {
          return (
            <RaceItem
              key={selectedSeason}
              data={data[index]}
              champId={champId}
              onStateChanged={measure}
            />
          );
        }}
      />
    </Box>
  );
};

export default RacesList;
