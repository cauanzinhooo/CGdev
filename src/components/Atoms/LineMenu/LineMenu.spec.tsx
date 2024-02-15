import { render } from '@testing-library/react';

import LineMenu from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    };
  },
}));
describe('render LineMenu component', () => {
  it('should render the component', () => {
    const { container } = render(<LineMenu />);
    expect(container).toBeInTheDocument();
  });
});
