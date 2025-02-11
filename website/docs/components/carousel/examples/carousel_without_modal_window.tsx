import React from 'react';
import { Box, Flex } from '@semcore/ui/flex-box';
import Carousel from '@semcore/ui/carousel';

const images = [
  'https://picsum.photos/id/1023/600/400',
  'https://picsum.photos/id/1024/600/400',
  'https://picsum.photos/id/1025/600/400',
];
const altTexts = [
  'A cyclist performing stunts in the forest',
  'A vulture flies with its wings spread wide',
  'A pug wrapped in a blanket sits on the road in the forest',
];
const width = 600;
const imageWidth = width - 75;

const Demo = () => (
  <Carousel
    w={width}
    aria-roledescription='image carousel'
    aria-label='Beauty of Nature'
    indicators='preview'
  >
    {images.map((url, index) => (
      <Carousel.Item tag='img' key={url} src={url} w={imageWidth} alt={altTexts[index]} />
    ))}
  </Carousel>
);

export default Demo;
