/* Utility function that determines the direction the SlideOutMenu component comes from and returns to based on its given placement prop */

export const determineTransform = (isOpen, placement, width) => { // eslint-disable-line
  if (isOpen && placement === 'right') {
    return `translateX(calc(100vw - ${width}px))`;
  }
  if (!isOpen && placement === 'right') {
    return 'translateX(calc(100vw))';
  }
  if (isOpen && placement === 'left') {
    return 'translateX(0px)';
  }
  if (!isOpen && placement === 'left') {
    return `translateX(-${width}px)`;
  }
};