import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ErrorPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('<ErrorPage />', () => {
  test.skip('ErrorPage mounts properly', () => {
    const wrapper = render(<ErrorPage />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const textElement = screen.getByText('Upps something went wrong, You can go to Home page for searching user');

    // Perform assertions as needed.
    expect(textElement).toBeInTheDocument();
  }),
    test('error page navigates to home page', () => {
      const wrapper = render(<ErrorPage />, { wrapper: BrowserRouter });
      expect(wrapper).toBeTruthy();
      const button = screen.getByText(/Go To Home Page/i);
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });
});
