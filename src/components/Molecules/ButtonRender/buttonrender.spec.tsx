import { render } from '@testing-library/react';

import { ButtonRender } from '.';

describe('render the button render', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <ButtonRender.Root>content</ButtonRender.Root>,
    );
    expect(getByText('content')).toBeInTheDocument();
  });
  it('check if the css class is applyied', () => {
    const handleclick = jest.fn();
    const { getByText } = render(
      <ButtonRender.Root selectedStep="Test" onclick={handleclick}>
        Test
      </ButtonRender.Root>,
    );
    const button = getByText('Test');
    expect(button).toHaveClass('!bg-green-100');
  });
});
