import React from 'react';

import { storiesOf } from '@storybook/react';

import { FilenameTextField } from "..";

const filename = '';

const onFilenameChange = () => {};

storiesOf('FilenameTextField', module)
  .add('example', () => (
    <FilenameTextField
      filename={filename}
      onFilenameChange={onFilenameChange}
    />
  ));
