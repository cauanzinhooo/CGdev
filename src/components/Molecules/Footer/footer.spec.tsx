import { render } from '@testing-library/react';

import Footer from '.';

describe('render the footer', () => {
  it('should render the component', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
