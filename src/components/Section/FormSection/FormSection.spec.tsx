import { render } from '@testing-library/react';

import FormSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<FormSection />);
    expect(container).toBeInTheDocument();
  });
});
