import React from 'react';

import { storiesOf } from '@storybook/react';

import { Dialog } from "..";

storiesOf('Dialog', module)
  .add('example', () => (
    <Dialog open={} onClose={}>
      <div/>
    </Dialog>
  ));
