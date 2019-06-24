import { storiesOf } from '@storybook/react';
import { ImageDialogContent } from '.';
import React from 'react';

storiesOf('ImageDialogContent', module).add('example', () => (
  <ImageDialogContent
    src={''}
    imgIdentifier={''}
    saveEditsGlobally={() => {}}
    onClose={() => {}}
    images={[]}
  />
));
