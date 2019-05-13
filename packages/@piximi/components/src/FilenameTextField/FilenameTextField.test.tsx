import { shallow } from 'enzyme';
import * as React from 'react';

import FilenameTextField from './FilenameTextField';

it('FilenameTextField', () => {
  const filename = '';

  const onFilenameChange = () => {};

  const e = (
    <FilenameTextField
      filename={filename}
      onFilenameChange={onFilenameChange}
    />
  );

  shallow(e);
});
