import 'intersection-observer';

import { render } from '@testing-library/react';

import WorksSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<WorksSection />);
    expect(container).toBeInTheDocument();
  });
});
