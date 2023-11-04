import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

const useNavigateFunction = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => useNavigateFunction,
  };
});

describe('<Home />', () => {
  test('Home mounts properly', () => {
    const wrapper = render(<Home />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const textElement = screen.getByText('Welcome to Code Challenge for MVST');
    expect(textElement).toBeInTheDocument();
  });

  test('Home page navigates to github info page', async () => {
    const wrapper = render(<Home />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();
    const input = screen.getByTestId('inputUsername');

    // input exists in the form component
    expect(input).toBeTruthy();
    const field = screen.getByTestId('inputUsername').querySelector('input');

    // is empty
    expect(screen.getByTestId('searchButton')).toBeDisabled();

    expect(field).toBeInTheDocument();
    if (field) {
      fireEvent.change(field, { target: { value: 'egenerse' } });
      expect(field.value).toBe('egenerse');

      const button = screen.getByTestId('searchButton');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);

      expect(useNavigateFunction).toHaveBeenCalledWith('/repos/egenerse');
    }
  });
});
