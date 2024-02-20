import { render } from '@testing-library/react';

import { BestTecnologies } from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<BestTecnologies />);
    expect(container).toBeInTheDocument();
  });
});
