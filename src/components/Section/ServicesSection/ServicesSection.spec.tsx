import { render } from '@testing-library/react';

import ServicesSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<ServicesSection />);
    expect(container).toBeInTheDocument();
  });
});
