import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Box } from '@components/ui';

const activeState = p => css`
  &:hover {
    background-color: ${p.theme.colors.background.race.hover};
    border-color: ${p.theme.colors.red.f1};
  }
`;

export const RaceWrapper = styled(Box)`
  background-color: ${p => p.theme.colors.background.race.main};
  border: 3px solid #fff;
  transition: all 0.2s ease-in-out;
  ${p => (p.hoverState ? activeState : '')};
`;

export const RaceNumber = styled(Box)`
  background-color: ${p => p.theme.colors.background.race.number};
`;
