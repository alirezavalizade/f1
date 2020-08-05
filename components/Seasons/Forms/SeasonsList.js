import { memo } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import { Select } from '@components/ui';

const SeasonsList = ({ handleSetValues }) => {
  const {
    data: {
      MRData: {
        SeasonTable: { Seasons: options }
      }
    }
  } = useSWR(['/seasons', 'limit', 100]);

  return (
    <Select
      name="season"
      onChange={handleSetValues}
      options={options}
      placeholder="Select a season"
      labelKey="season"
      valueKey="season"
      backgroundColor="transparent"
      focusBorderColor="red.f1"
      color="#FFF"
      borderWidth="3px"
    />
  );
};

SeasonsList.defaultProps = {
  handleSetValues: () => {}
};

SeasonsList.protoTypes = {
  handleSetValues: PropTypes.func
};

export default memo(SeasonsList, () => {
  return true;
});
