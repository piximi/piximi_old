import { shallow } from 'enzyme';
import * as React from 'react';

import Image from './Image';

it('Image', () => {
  const e = (
    <Image width={0} src={''} openImageViewerDialog={() => {}} height={0} />
  );

  shallow(e);
});
