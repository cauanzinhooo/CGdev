import { render } from '@testing-library/react';

import WorkSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<WorkSection />);
    expect(container).toBeInTheDocument();
  });
});
