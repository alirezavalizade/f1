import { Box } from '@components/ui';

import FlagIcon from '@public/vectors/flag.svg';

const Header = () => {
  return (
    <Box
      padding="20px"
      d="flex"
      justifyContent="space-between"
      pos="relative"
      zIndex={1}
    >
      <FlagIcon width="80" height="80" />
    </Box>
  );
};

export default Header;
