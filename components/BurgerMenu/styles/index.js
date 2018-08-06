import styled from 'styled-components';

export const StyledFadedBackground = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  opacity: ${({ isOpen }) => isOpen ? '0.7' : '0'};
  transition: all 0.3s ease;
  background-color: black;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

export const StyledSlideOutMenu = styled.div`
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(600px)'};
  background-color: white;
  width: 600px;
  height: 100%;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`;
