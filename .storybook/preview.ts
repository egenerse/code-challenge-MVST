import type { Preview } from '@storybook/react';
import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+

const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
