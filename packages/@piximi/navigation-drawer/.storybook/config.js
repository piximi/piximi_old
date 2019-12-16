import {configure} from "@storybook/react";

const req = require.context(
  "../src/NavigationDrawer/NavigationDrawer",
  true,
  /\.stories\.(ts|tsx)$/
);

configure(() => {
  req.keys().forEach((filename) => req(filename));
}, module);
