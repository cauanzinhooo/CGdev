import * as emailjs from '@emailjs/browser'; // Importe o módulo do emailjs
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';

import Form from '.';

jest.mock('react-toastify');
jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn(),
}));

describe('render form with functions', () => {
  it('should render the component', () => {
    render(<Form />);
    const inputName = screen.getByRole('textbox', { name: 'Name' });
    expect(inputName).toBeInTheDocument();
  });
  it('form submit with success ', async () => {
    const sendFormMock = jest.spyOn(emailjs, 'sendForm');
    const { getByPlaceholderText, getByText } = render(<Form />);

    fireEvent.change(getByPlaceholderText('Seu nome'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(getByPlaceholderText('Seu E-mail'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(getByPlaceholderText('Assunto'), {
      target: { value: 'Test message' },
    });
    fireEvent.click(getByText('Enviar'));
    await waitFor(() => {
      expect(sendFormMock).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalled();
    });
  });
  it('form submit with error', async () => {
    const sendFormMock = jest
      .spyOn(emailjs, 'sendForm')
      .mockImplementation(() => {
        throw new Error('Erro ao enviar o formulário');
      });

    const { getByPlaceholderText, getByText } = render(<Form />);

    fireEvent.change(getByPlaceholderText('Seu nome'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(getByPlaceholderText('Seu E-mail'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(getByPlaceholderText('Assunto'), {
      target: { value: 'Test message' },
    });
    fireEvent.click(getByText('Enviar'));

    // Aguardar a execução do código
    await waitFor(() => {
      // Verificar se a função sendForm foi chamada
      expect(sendFormMock).toHaveBeenCalled();
    });

    // Aguardar a execução do código
    await waitFor(() => {
      // Verificar se a função toast.error foi chamada corretamente
      expect(toast.error).toHaveBeenCalledWith('Erro ao enviar Formulário !', {
        position: toast.POSITION.TOP_LEFT,
      });
    });
  });
});
// it('form submit with success ', async () => {
//   const { getByPlaceholderText, getByText } = render(<Form />);

//   fireEvent.change(getByPlaceholderText('Seu nome'), {
//     target: { value: 'John Doe' },
//   });
//   fireEvent.change(getByPlaceholderText('Seu E-mail'), {
//     target: { value: 'john@example.com' },
//   });
//   fireEvent.change(getByPlaceholderText('Assunto'), {
//     target: { value: 'Test message' },
//   });
//   fireEvent.click(getByText('Enviar'));
//   await waitFor(() => {
//     expect(sendForm)
//   });
//   await waitFor(() => {
//     expect(toast.success).toHaveBeenCalled();
//   });
// });
