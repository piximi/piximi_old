import ReactDOM from 'react-dom';
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

  ReactDOM.render(e, document.createElement('div'));
});
