

import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserNotFound from '.'
import { BrowserRouter } from 'react-router-dom';

describe('<UserNotFound />', () => {
  test('UserNotFound mounts properly', () => {
    const wrapper = render(<UserNotFound />, { wrapper: BrowserRouter })
    expect(wrapper).toBeTruthy()

    const textElement = screen.getByText('Your search did not match any User.');

    // Perform assertions as needed.
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('Your search did not match any User.');
  })
});
