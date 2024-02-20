import { render } from '@testing-library/react';

import imagetest from '@/public/assets/images/FILES.svg';

import AboutTeste from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(
      <AboutTeste description="desc" title="title" image={imagetest} />,
    );
    expect(container).toBeInTheDocument();
  });
});
