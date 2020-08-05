import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Box } from '@components/ui';

const filterActiveState = css`
  top: 15%;
  transform: translate3d(0, 0, 0);
`;

export const FiltersWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate3d(0, -60%, 0);
  transition: transform 0.4s ease-in-out, top 0.4s ease-in-out;
  ${p => (p.active ? filterActiveState : '')};
`;

const activeState = css`
  min-height: 100vh;
  min-height: 100%;
  top: 40%;
`;

export const ListWrapper = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  transform: translate3d(0, 0, 0);
  transition: transform 0.4s ease-in-out, top 0.5s ease-in-out;
  background-color: #191923;

  ${p => (p.active ? activeState : '')};
`;
