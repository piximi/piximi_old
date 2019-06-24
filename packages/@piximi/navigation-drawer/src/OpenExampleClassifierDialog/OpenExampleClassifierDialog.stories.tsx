import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpenExampleClassifierDialog } from './OpenExampleClassifierDialog';
import { Category, Image } from '@piximi/types';

const closeMenu = () => {};

const onClose = () => {};

const openClassifier = (
  categories: Category[],
  images: Image[],
  name: string
) =>
  void storiesOf('OpenExampleClassifierDialog', module).add('example', () => (
    <OpenExampleClassifierDialog
      closeMenu={closeMenu}
      onClose={onClose}
      open
      openClassifier={openClassifier}
    />
  ));
