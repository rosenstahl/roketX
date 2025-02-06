import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ContactForm from './ContactForm';
import { sendEmail } from '@/services/emailService';

vi.mock('@/services/emailService', () => ({
  sendEmail: vi.fn()
}));

i18n.use(initReactI18next).init({
  lng: 'de',
  fallbackLng: 'de',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    de: {
      common: {
        contactForm: {
          fields: {
            name: {
              label: 'Name', // Genau dieser Text wird im Test gesucht
              placeholder: 'Ihr Name',
              error: 'Name ist erforderlich'
            },
            email: {
              label: 'E-Mail', // Genau dieser Text wird im Test gesucht
              placeholder: 'ihre@email.de',
              error: 'E-Mail ist erforderlich',
              invalid: 'Ungültige E-Mail-Adresse'
            },
            message: {
              label: 'Nachricht', // Genau dieser Text wird im Test gesucht
              placeholder: 'Ihre Nachricht...',
              error: 'Nachricht ist erforderlich'
            }
          },
          submit: {
            button: 'Nachricht senden' // Genau dieser Text wird im Test gesucht
          }
        }
      }
    }
  }
});

describe('ContactForm Component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );
    vi.clearAllMocks();
  });

});  it('renders all form fields', () => {
    // Label-Text ändern um mit den tatsächlichen Übersetzungen übereinzustimmen
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nachricht/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    // Button-Text ändern um mit den tatsächlichen Übersetzungen übereinzustimmen
    const submitButton = screen.getByText(/nachricht senden/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('error-name')).toHaveTextContent(/name ist erforderlich/i);
      expect(screen.getByTestId('error-email')).toHaveTextContent(/e-mail ist erforderlich/i);
      expect(screen.getByTestId('error-message')).toHaveTextContent(/nachricht ist erforderlich/i);
    });
  });


it('shows error for invalid email', async () => {
  const emailInput = screen.getByTestId('input-email');
  fireEvent.change(emailInput, { 
    target: { value: 'invalid-email' } 
  });

  const submitButton = screen.getByRole('button', { 
    name: /nachricht senden/i 
  });
  fireEvent.click(submitButton);

  await waitFor(() => {
    const emailError = screen.getByTestId('error-email');
    expect(emailError).toHaveTextContent(/ungültige e-mail-adresse/i);
  });
});

it('submits form successfully', async () => {
  // Fill out the form using testids
  fireEvent.change(screen.getByTestId('input-name'), { 
    target: { value: 'Test User' } 
  });
  fireEvent.change(screen.getByTestId('input-email'), { 
    target: { value: 'test@example.com' } 
  });
  fireEvent.change(screen.getByTestId('input-message'), { 
    target: { value: 'Test message' } 
  });

  // Mock successful email send
  sendEmail.mockResolvedValueOnce();

  // Submit form
  const submitButton = screen.getByRole('button', { name: /nachricht senden/i });
  fireEvent.click(submitButton);

  // Wait for success message
  await waitFor(() => {
    expect(screen.getByText(/nachricht erfolgreich gesendet!/i)).toBeInTheDocument();
  });

  // Verify email service was called
  expect(sendEmail).toHaveBeenCalledWith({
    name: 'Test User',
    email: 'test@example.com',
    phone: '',
    company: '',
    package: '',
    message: 'Test message'
  }, 'contact');
});