import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  FormControl,
  FormLabel,
  Select as ChakraSelect
} from '@chakra-ui/core';

const Select = ({
  options,
  defaultValue,
  valueKey,
  labelKey,
  onChange,
  name,
  ...rest
}) => {
  const [value, changeValue] = useState(() => defaultValue);

  useEffect(() => {
    if (onChange && value) {
      onChange({ [name]: value });
    }
  }, [name, value, onChange]);

  return (
    <FormControl>
      {rest.label ? <FormLabel htmlFor={name}>{rest.label}</FormLabel> : null}
      <ChakraSelect
        onChange={e => changeValue(e.target.value)}
        name={name}
        value={value}
        {...rest}
      >
        {options.map(item => {
          return (
            <option key={item[valueKey]} value={item[valueKey]}>
              {item[labelKey]}
            </option>
          );
        })}
      </ChakraSelect>
    </FormControl>
  );
};

Select.defaultProps = {
  options: [],
  valueKey: 'value',
  labelKey: 'label',
  defaultValue: ''
};

Select.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Select;
