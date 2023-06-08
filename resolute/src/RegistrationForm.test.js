import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
  it('should submit registration form successfully', () => {
    const { getByLabelText, getByText } = render(<RegistrationForm />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const registerButton = getByText('Register');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);

  });

  it('should display error message when form is submitted with missing fields', () => {
    const { getByText } = render(<RegistrationForm />);

    const registerButton = getByText('Register');

    fireEvent.click(registerButton);

  });
});
