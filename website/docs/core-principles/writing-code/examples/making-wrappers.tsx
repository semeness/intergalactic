import React from 'react';
import { wrapIntergalacticComponent } from '@semcore/ui/core';
import Button from '@semcore/ui/button';

const AlertButton = wrapIntergalacticComponent<
  typeof Button,
  {
    handle: ('click' | 'hover')[];
    message: string;
  }
>(({ handle, message, ...restProps }) => {
  const handleClick = () => {
    if (handle.includes('click')) {
      alert(message);
    }
  };
  const handleMouseOver = () => {
    if (handle.includes('hover')) {
      alert(message);
    }
  };

  return <Button {...restProps} onClick={handleClick} onMouseOver={handleMouseOver} />;
});

const Demo = () => (
  <AlertButton handle={['click']} message='Hello world'>
    Click me
  </AlertButton>
);

export default Demo;
