import PropTypes from 'prop-types';

import { Box, Text, Tooltip } from '@components/ui';

import WinnerIcon from '@public/vectors/winner.svg';

const Driver = ({ data, constructor, showAward }) => {
  return (
    <Box d="flex" justifyContent="space-between" flexDir="column">
      <Box d="flex" alignItems="center">
        {showAward ? (
          <Tooltip label="Winner" borderWidth="1px">
            <Box marginRight="10px">
              <WinnerIcon width={30} height={30} fill="#FFF" />
            </Box>
          </Tooltip>
        ) : null}
        <Text fontSize="lg" isTruncated>
          {data.givenName} {data.familyName}, {constructor.name}
        </Text>
      </Box>
    </Box>
  );
};

Driver.defaultProps = {
  showAward: false,
  constructor: {}
};

Driver.propTypes = {
  data: PropTypes.object.isRequired,
  constructor: PropTypes.object,
  showAward: PropTypes.bool
};

export default Driver;
