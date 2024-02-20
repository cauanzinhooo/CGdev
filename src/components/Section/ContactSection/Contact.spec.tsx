import { render } from '@testing-library/react';

import ContactSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<ContactSection />);
    expect(container).toBeInTheDocument();
  });
});
