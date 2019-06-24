import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ImageDialogContent } from './ImageDialogContent';

const onClose = () => {};

const saveEditsGlobally = () => {};

storiesOf('ImageDialogContent', module).add('example', () => (
  <ImageDialogContent
    images={[]}
    imgIdentifier={''}
    src={''}
    onClose={onClose}
    saveEditsGlobally={saveEditsGlobally}
  />
));
