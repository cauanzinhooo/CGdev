import { render } from '@testing-library/react';

import ProjectSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<ProjectSection />);
    expect(container).toBeInTheDocument();
  });
});
