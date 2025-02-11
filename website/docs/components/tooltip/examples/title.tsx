import React from 'react';
import Tooltip from '@semcore/ui/tooltip';
import { Box, Flex } from '@semcore/ui/flex-box';
import Link from '@semcore/ui/link';

const Demo = () => (
  <Flex>
    <Box m='auto' p={5}>
      <Tooltip title='Hello, stranger' tag={Link}>
        Trigger
      </Tooltip>
    </Box>
  </Flex>
);

export default Demo;
