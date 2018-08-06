import styled from 'styled-components';
import { determineTransform } from './util';

export const StyledFadedBackground = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  opacity: ${({ isOpen }) => isOpen ? '0.7' : '0'};
  transition: all 0.3s ease;
  background-color: black;
  position: absolute;
  width: calc(100vw);
  height: 100%;
  z-index: 100;
`;

export const StyledSlideOutMenu = styled.div`
  transform: ${({ isOpen, placement, width }) => determineTransform(isOpen, placement, width)};
  background-color: ${({ theme }) => theme.kindWhite || 'white'};
  width: ${({ width }) => `${width}px`};
  transition: all 0.3s ease;
  position: absolute;
  height: 100%;
  z-index: 100;
`;
