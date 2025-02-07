// src/components/sections/Contact/ContactForm.test.jsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ContactForm from './ContactForm';

// Mocks
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>
  }
}));

vi.mock('lucide-react', () => ({
  Send: () => <div data-testid="send-icon">Send</div>,
  Check: () => <div data-testid="check-icon">Check</div>
}));

vi.mock('@/components/common/Typography', () => ({
  H3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  H4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  BodyText: ({ children, ...props }) => <p {...props}>{children}</p>
}));

vi.mock('@/components/ui/Button', () => ({
  default: ({ children, ...props }) => <button {...props}>{children}</button>
}));

// i18n setup
i18n.use(initReactI18next).init({
  lng: 'de',
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
            phone: {
              label: 'Telefon',
              placeholder: '+49'
            },
            company: {
              label: 'Unternehmen',
              placeholder: 'Ihr Unternehmen'
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

describe('ContactForm', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );
    global.fetch.mockClear();
  });

  it('renders all form fields', () => {
    expect(screen.getByTestId('input-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-email')).toBeInTheDocument();
    expect(screen.getByTestId('input-message')).toBeInTheDocument();
  });

it('shows validation errors for empty required fields', async () => {
  const submitButton = screen.getByTestId('submit-button');
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText('Name ist erforderlich')).toBeInTheDocument();
    expect(screen.getByText('E-Mail ist erforderlich')).toBeInTheDocument();
    expect(screen.getByText('Nachricht ist erforderlich')).toBeInTheDocument();
  });
});
  it('submits form successfully', async () => {
    global.fetch.mockImplementationOnce(() => 
      Promise.resolve({ ok: true })
    );

    fireEvent.change(screen.getByTestId('input-name'), {
      target: { value: 'Test User' }
    });
    fireEvent.change(screen.getByTestId('input-email'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByTestId('input-message'), {
      target: { value: 'Test message' }
    });

    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByText(/nachricht erfolgreich gesendet!/i)).toBeInTheDocument();
    });
  });
});