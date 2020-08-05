import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Badge } from '@components/ui';

const Status = ({ status }) => {
  const variant = useMemo(() => {
    if (status === 'finished') {
      return 'green';
    }
    return 'red';
  }, [status]);
  return <Badge variantColor={variant}>{status}</Badge>;
};

Status.propTypes = {
  status: PropTypes.string.isRequired
};

export default Status;
