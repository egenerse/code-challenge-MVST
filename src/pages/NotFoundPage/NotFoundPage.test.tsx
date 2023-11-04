import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import NotFoundPage from '.';
import { BrowserRouter } from 'react-router-dom';

const useNavigateFunction = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => useNavigateFunction,
  };
});

describe('<NotFoundPage />', () => {
  test('NotFoundPage mounts properly', () => {
    const wrapper = render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const textElement = screen.getByText('404 - Page Not Found');
    expect(textElement).toBeInTheDocument();
  });

  test('NotFoundPage navigates to homepage', async () => {
    const wrapper = render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const button = screen.getByText('Go To Home Page');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(useNavigateFunction).toHaveBeenCalledWith('/');
  });
});
