import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ErrorPage from '.';
import { BrowserRouter } from 'react-router-dom';

const useNavigateFunction = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => useNavigateFunction,
  };
});

describe('<ErrorPage />', () => {
  test('ErrorPage mounts properly', () => {
    const wrapper = render(<ErrorPage />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const textElement = screen.getByText('Upps something went wrong, You can go to Home page for searching user');
    expect(textElement).toBeInTheDocument();
  });

  test('error page navigates to home page', () => {
    const wrapper = render(<ErrorPage />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const button = screen.getByTestId('goHomeButton');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(useNavigateFunction).toHaveBeenCalledWith('/');
  });
});
