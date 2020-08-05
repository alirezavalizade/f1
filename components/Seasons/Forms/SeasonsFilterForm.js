import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SlideIn, Box, Heading } from '@components/ui';
import SeasonsList from './SeasonsList';

const SeasonsFilterForm = ({ onSubmit }) => {
  const [values, setValues] = useState({});

  const handleSetValues = newValues => {
    setValues(currentValues => ({ ...currentValues, ...newValues }));
  };

  useEffect(() => {
    if (onSubmit) {
      onSubmit(values);
    }
  }, [onSubmit, values]);

  return (
    <SlideIn in>
      {styles => (
        <Box {...styles}>
          <Heading>Select a season</Heading>
          <SeasonsList handleSetValues={handleSetValues} />
        </Box>
      )}
    </SlideIn>
  );
};

SeasonsFilterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SeasonsFilterForm;
