import { storiesOf } from '@storybook/react';
import { NavigationDrawer } from '.';
import * as React from 'react';

const onClose = () => {};

const setBrightness = () => {};

const setContrast = () => {};

const setUnselectedChannels = () => {};

storiesOf('NavigationDrawer', module).add('example', () => (
  <NavigationDrawer
    onClose={onClose}
    open={true}
    src={''}
    imgIdentifier={''}
    setBrightness={setBrightness}
    brightness={0}
    setContrast={setContrast}
    contrast={0}
    setUnselectedChannels={setUnselectedChannels}
    unselectedChannels={[]}
  />
));
