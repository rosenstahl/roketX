// src/services/emailService.js
export const sendEmail = async (formData, formType = 'landing') => {
  try {
    const subject = formType === 'landing' 
      ? `Neue Paket-Anfrage: ${formData.selectedPackage}`
      : 'Neue Kontaktanfrage';

    // FormSubmit Endpoint aus der Umgebungsvariable
    const endpoint = import.meta.env.VITE_EMAIL_SERVICE;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        _subject: subject,
        _template: 'table',
        _captcha: 'false', // Optional: Captcha deaktivieren
        _next: window.location.origin + '/success' // Optional: Redirect nach Erfolg
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Email konnte nicht gesendet werden: ${error}`);
    }
    return true;
  } catch (error) {
    console.error('Email Fehler:', error);
    throw error;
  }
};