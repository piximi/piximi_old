import { configure, EnzymeAdapter } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

type Options = {
  adapter: EnzymeAdapter;
};

const options: Options = {
  adapter: new Adapter()
};

configure(options);
