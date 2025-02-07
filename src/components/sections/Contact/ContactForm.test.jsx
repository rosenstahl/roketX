// src/components/sections/Contact/ContactForm.test.jsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ContactForm from './ContactForm';
import { sendEmail } from '@/services/emailService';

// Mock für sendEmail
vi.mock('@/services/emailService', () => ({
  sendEmail: vi.fn()
}));

// Mock für framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>
  }
}));

// Mock für Typography Komponenten
vi.mock('@/components/common/Typography', () => ({
  H3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  H4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  BodyText: ({ children, ...props }) => <p {...props}>{children}</p>
}));

// Mock für Button Komponente
vi.mock('@/components/ui/Button', () => ({
  default: ({ children, ...props }) => <button {...props}>{children}</button>
}));

// Mock für Package Data
vi.mock('@/components/sections/PackageComparison/packageData', () => ({
  packages: [
    { id: 'startup', title: 'Startup Package', color: '#000', isPopular: true },
    { id: 'business', title: 'Business Package', color: '#000', isPopular: false }
  ]
}));

// i18n Setup
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
              label: 'Name',
              placeholder: 'Ihr Name',
              error: 'Name ist erforderlich'
            },
            email: {
              label: 'E-Mail',
              placeholder: 'ihre@email.de',
              error: 'E-Mail ist erforderlich',
              invalid: 'Ungültige E-Mail-Adresse'
            },
            message: {
              label: 'Nachricht',
              placeholder: 'Ihre Nachricht...',
              error: 'Nachricht ist erforderlich'
            },
            package: {
              label: 'Interessiertes Paket'
            }
          },
          submit: {
            button: 'Nachricht senden',
            sending: 'Wird gesendet...'
          },
          success: {
            title: 'Nachricht erfolgreich gesendet!',
            message: 'Wir werden uns schnellstmöglich bei Ihnen melden.'
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

  it('renders all form fields', async () => {
    await waitFor(() => {
      expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /nachricht/i })).toBeInTheDocument();
    });
  });

  it('shows validation errors for empty required fields', async () => {
    const submitButton = screen.getByRole('button', { name: /nachricht senden/i });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      const nameError = screen.getByText('Name ist erforderlich');
      const emailError = screen.getByText('E-Mail ist erforderlich');
      const messageError = screen.getByText('Nachricht ist erforderlich');

      expect(nameError).toBeInTheDocument();
      expect(emailError).toBeInTheDocument();
      expect(messageError).toBeInTheDocument();
    });
  });

it('shows validation errors for empty required fields', async () => {
  const submitButton = screen.getByRole('button', { name: /nachricht senden/i });
  fireEvent.click(submitButton);

  await waitFor(() => {
    const nameErrorElement = screen.getByTestId('error-name');
    const emailErrorElement = screen.getByTestId('error-email');
    const messageErrorElement = screen.getByTestId('error-message');

    expect(nameErrorElement).toBeInTheDocument();
    expect(emailErrorElement).toBeInTheDocument();
    expect(messageErrorElement).toBeInTheDocument();
  });
});

it('shows error for invalid email', async () => {
  // Eingabefelder finden
  const emailInput = screen.getByTestId('input-email');
  const nameInput = screen.getByTestId('input-name');
  const messageInput = screen.getByTestId('input-message');
  
  // Alle Pflichtfelder ausfüllen
  fireEvent.change(nameInput, { target: { value: 'Test User' } });
  fireEvent.change(messageInput, { target: { value: 'Test Message' } });
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  
  // Formular absenden
  const submitButton = screen.getByRole('button', { name: /nachricht senden/i });
  fireEvent.click(submitButton);

  // Auf Fehlermeldung warten
  await waitFor(() => {
    const emailErrorElement = screen.getByTestId('error-email');
    expect(emailErrorElement).toBeInTheDocument();
  });
});
  it('submits form successfully', async () => {
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /e-mail/i });
    const messageInput = screen.getByRole('textbox', { name: /nachricht/i });
    const submitButton = screen.getByRole('button', { name: /nachricht senden/i });

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    sendEmail.mockResolvedValueOnce();

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Nachricht erfolgreich gesendet!')).toBeInTheDocument();
    });

    expect(sendEmail).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com',
      phone: '',
      company: '',
      package: '',
      message: 'Test message'
    }, 'contact');
  });
});