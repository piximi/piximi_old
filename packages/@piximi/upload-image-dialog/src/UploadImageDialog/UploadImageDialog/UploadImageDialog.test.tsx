import { shallow } from 'enzyme';
import * as React from 'react';
import { UploadImageDialog } from './UploadImageDialog';

const closeDialog = () => {};

it('UploadImageDialog', () => {
  shallow(<UploadImageDialog closeDialog={closeDialog} openedDialog />);
});
