import React from 'react';

import { storiesOf } from '@storybook/react';

import { FilenameTextField } from "..";

storiesOf('FilenameTextField', module)
  .add('example', () => (
    <FilenameTextField filename={} onFilenameChange={}/>
  ));
