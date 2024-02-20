import { fireEvent, render, waitFor } from '@testing-library/react';

import StepsSection from './indes';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<StepsSection />);
    expect(container).toBeInTheDocument();
  });
  it('should show the planejamento card', async () => {
    const { getByText } = render(<StepsSection />);
    fireEvent.click(getByText('2- Planejamento'));
    await waitFor(() => {
      expect(getByText('2- Planejamento')).toBeInTheDocument();
    });
  });
  it('should show the desenvolvimento card', async () => {
    const { getByText } = render(<StepsSection />);
    fireEvent.click(getByText('3- Desenvolvimento'));
    await waitFor(() => {
      expect(getByText('3- Desenvolvimento')).toBeInTheDocument();
    });
  });
  it('should show the desenvolvimento card', async () => {
    const { getByText } = render(<StepsSection />);
    fireEvent.click(getByText('4- Entrega'));
    await waitFor(() => {
      expect(getByText('4- Entrega')).toBeInTheDocument();
    });
  });
});
