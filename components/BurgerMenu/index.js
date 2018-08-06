import React from 'react';

import {
  StyledSlideOutMenu,
  StyledFadedBackground,
} from './styles';

class BurgerMenu extends React.Component {
  render() {
    const { isOpen, width, placement, children } = this.props;
    return (
      <React.Fragment>
        <StyledFadedBackground isOpen={isOpen} />
        <StyledSlideOutMenu
          width={width}
          isOpen={isOpen}
          placement={placement}
        >
          {children}
        </StyledSlideOutMenu>
      </React.Fragment>
    );
  }
}

export default BurgerMenu;
