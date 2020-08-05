import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@components/ui';

const Toggler = ({ children, btnText, onStateChanged, ...rest }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    onStateChanged();
  }, [show, onStateChanged]);

  return (
    <div>
      {show ? children : null}
      <Button onClick={() => setShow(!show)} {...rest}>
        {show ? btnText[1] : btnText[0]}
      </Button>
    </div>
  );
};

Toggler.defaultProps = {
  onStateChanged: () => {}
};

Toggler.propTypes = {
  children: PropTypes.any.isRequired,
  btnText: PropTypes.arrayOf(PropTypes.string).isRequired,
  onStateChanged: PropTypes.func
};

export default Toggler;
