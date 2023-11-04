import { ReactRenderer } from '@storybook/react';
import { PartialArgsStoryFn } from '@storybook/types';
import { MemoryRouter } from 'react-router-dom';

export const createRouterWithStory = (
  Story: PartialArgsStoryFn<ReactRenderer, object>,
  initialEntries: Array<string> | undefined = [''],
) => (
  <MemoryRouter initialEntries={initialEntries}>
    <div style={{ width: '100vw', height: '100' }}>
      <Story />
    </div>
  </MemoryRouter>
);
