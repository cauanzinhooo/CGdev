import { fireEvent, render } from '@testing-library/react';

import Header from '.';

describe('render header', () => {
  it('should render the header component', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
  it('should open menu with click in the button menu', () => {
    const { getByTestId } = render(<Header />);
    const menuButton = getByTestId('menubutton');
    fireEvent.click(menuButton);
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });
  it('should close menu with click in the close button', () => {
    const { getByTestId } = render(<Header />);
    const menuButton = getByTestId('menubutton');
    fireEvent.click(menuButton);
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();

    const closeMenu = getByTestId('closebutton');
    fireEvent.click(closeMenu);

    expect(menu).not.toBeInTheDocument();
  });
});
