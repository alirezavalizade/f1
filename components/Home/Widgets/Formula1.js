import { Suspense } from 'react';
import { useAppState } from '@contexts';

import { Box, Spinner } from '@components/ui';
import { SeasonsFilterForm } from '@components/Seasons';
import { RaceList } from '@components/Races';

import { FiltersWrapper, ListWrapper } from './elements';

const SuspensedRaceList = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <Suspense fallback={<Spinner size="xl" color="#FFF" />}>
      <RaceList />
    </Suspense>
  );
};

const Formula1 = () => {
  const { selectedSeason, selectSeason } = useAppState();

  return (
    <Box pos="absolute" top="0" h="100%" w="100%">
      <FiltersWrapper
        active={selectedSeason}
        maxW="800px"
        paddingX="20px"
        margin="0 auto"
      >
        <Suspense fallback={<Spinner size="xl" color="#FFF" />}>
          <SeasonsFilterForm onSubmit={({ season }) => selectSeason(season)} />
        </Suspense>
      </FiltersWrapper>
      <ListWrapper active={selectedSeason}>
        <Box maxW="1000px" paddingX="20px" margin="0 auto">
          <SuspensedRaceList show={selectedSeason} />
        </Box>
      </ListWrapper>
    </Box>
  );
};

export default Formula1;
