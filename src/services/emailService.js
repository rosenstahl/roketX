// src/services/emailService.js
export const sendEmail = async (formData, formType = 'landing') => {
  try {
    // Unterschiedliche Betreff-Zeilen je nach Formular
    const subject = formType === 'landing' 
      ? `Neue Paket-Anfrage: ${formData.selectedPackage}`
      : 'Neue Kontaktanfrage';

    // Hauptsystem
    const response = await fetch('https://formsubmit.co/info@roketx.de', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        _subject: subject,
        _template: 'table' // besseres E-Mail-Layout
      })
    });

    if (!response.ok) throw new Error('Email konnte nicht gesendet werden');
    return true;
  } catch (error) {
    console.error('Email Fehler:', error);
    throw error;
  }
};