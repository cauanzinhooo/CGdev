import { render } from '@testing-library/react';
import { Fa500Px } from 'react-icons/fa';

import Button from '.';

describe('<Button>', () => {
  it('should render button component', () => {
    const { getByText } = render(<Button>button</Button>);
    expect(getByText('button')).toBeInTheDocument();
  });
  it('renders icon when provided', () => {
    const { getByTestId } = render(
      <Button icon={<Fa500Px />}>Button Text</Button>,
    );
    const iconElement = getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });
});
