import React from 'react';
import DropdownMenu from '@semcore/ui/dropdown-menu';
import { ButtonTrigger } from '@semcore/ui/base-trigger';

const Demo = () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger tag={ButtonTrigger}>Click me</DropdownMenu.Trigger>
      <DropdownMenu.Menu>
        <DropdownMenu.Item>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        <DropdownMenu.Item>Item 3</DropdownMenu.Item>
        <DropdownMenu.Item>Item 4</DropdownMenu.Item>
      </DropdownMenu.Menu>
    </DropdownMenu>
  );
};

export default Demo;
