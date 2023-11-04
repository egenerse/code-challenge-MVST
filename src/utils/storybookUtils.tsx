import { ReactRenderer } from '@storybook/react';
import { PartialArgsStoryFn } from '@storybook/types';
import { MemoryRouter } from 'react-router-dom';

/**
 * Creates a Storybook decorator that wraps a story with a MemoryRouter component
 * from the 'react-router-dom' library. This is useful for testing React components
 * that rely on routing within Storybook.
 *
 * @param Story - The Storybook story (a component or function) to wrap with the MemoryRouter.
 * @param initialEntries - An optional array of initial URL entries for the MemoryRouter.
 *                         Defaults to an array with a single empty string if not provided.
 * @returns A React component that wraps the provided Story with a MemoryRouter.
 */
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
