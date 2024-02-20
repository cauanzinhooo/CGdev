import { render } from '@testing-library/react';

import AboutSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<AboutSection />);
    expect(container).toBeInTheDocument();
  });
});
