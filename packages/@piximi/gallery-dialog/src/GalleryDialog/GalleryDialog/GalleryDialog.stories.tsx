import React from 'react';
import { storiesOf } from '@storybook/react';
import { GalleryDialog } from './GalleryDialog';
import { Image, Partition } from '@piximi/types';

const resources: Array<string> = [
  'https://images.unsplash.com/photo-1528344227352-9a704db46536?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1519915051686-9fe6ee13633e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1520074881623-f6cc435eb449?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1519730722595-a5ff788dea4d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1519159904364-0edd185dd509?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1520347788611-1654e613e422?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1519197462-7755f76e6fbd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1519914979298-54797f766489?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1517620114540-4f6a4c43f8ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1517574776333-573dcd458764?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1516658273235-6f3ff3b414d1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1516295615676-7ae4303c1c63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ',
  'https://images.unsplash.com/photo-1516298269955-092b585deead?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ'
];

const images: Array<Image> = resources.map((resource, index) => {
  return {
    categoryIdentifier: '',
    identifier: index.toString(),
    data: resource,
    checksum: '',
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 0,
      contrast: 0,
      visible: true,
      visibleChannels: []
    }
  };
});

storiesOf('Gallery', module).add('Unsplashed', () => {
  return <GalleryDialog categories={[]} images={images} />;
});
