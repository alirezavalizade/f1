import PropTypes from 'prop-types';

import { Toggler } from '@components/ui';
import ResultItem from './ResultItem';

const togglerProps = {
  btnText: ['Show all', 'Show less'],
  variantColor: 'teal',
  variant: 'link',
  marginY: '20px'
};

const LosersList = ({ data, ...rest }) => {
  if (!data.length) {
    return null;
  }
  return (
    <Toggler {...togglerProps} {...rest}>
      {data.map(item => (
        <ResultItem key={item.driverId} data={item} />
      ))}
    </Toggler>
  );
};

LosersList.propTypes = {
  data: PropTypes.array.isRequired
};

export default LosersList;
