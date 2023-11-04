import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Loading from '.';

describe('<Loading />', () => {
  test('Loading mounts properly', () => {
    const wrapper = render(<Loading />);
    expect(wrapper).toBeTruthy();
  });
});
