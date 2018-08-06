import React from 'react';

import {
  StyledSlideOutMenu,
  StyledFadedBackground,
} from './styles';

class BurgerMenu extends React.Component {
  render() {
    const { isOpen, placement, children, onClose } = this.props;
    return (
      <React.Fragment>
        <StyledFadedBackground isOpen={isOpen} />
        <StyledSlideOutMenu
          isOpen={isOpen}
          placement={placement}
        >
          <div onClick={onClose}>Close</div>
          {children}
        </StyledSlideOutMenu>
      </React.Fragment>
    );
  }
}

export default BurgerMenu;