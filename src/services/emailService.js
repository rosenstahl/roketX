// src/services/emailService.js - Updated to use Backend API as proxy to FormSubmit.co
export const sendEmail = async (formData, formType = 'landing') => {
  try {
    // Get API URL from window global (set by server) or use default
    const apiUrl = window.__API_URL__ || window.location.origin;
    const endpoint = `${apiUrl}/api/contact`;

    // Prepare payload for backend API
    const payload = {
      ...formData,
      formType,
      timestamp: new Date().toISOString()
    };

    console.info('Sending email via backend API:', {
      endpoint,
      formType,
      hasPackage: !!formData.package,
      timestamp: payload.timestamp
    });

    // Send to backend API (which proxies to FormSubmit.co)
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(payload)
    });

    // Parse response
    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      console.error('Failed to parse backend response:', parseError);
      throw new Error('Server-Antwort konnte nicht verarbeitet werden');
    }

    // Handle non-200 responses
    if (!response.ok) {
      console.error('Backend API error:', {
        status: response.status,
        statusText: response.statusText,
        result
      });

      // Use backend error message if available
      const errorMessage = result?.error || `Server-Fehler: ${response.status}`;
      throw new Error(errorMessage);
    }

    // Handle backend error responses (200 but success: false)
    if (!result.success) {
      console.error('Backend processing failed:', result);
      throw new Error(result.error || 'E-Mail konnte nicht gesendet werden');
    }

    // Success logging
    console.info('Email sent successfully via backend:', {
      requestId: result.data?.id,
      formType,
      timestamp: result.data?.timestamp,
      estimatedResponse: result.data?.estimatedResponse
    });

    // Return success result compatible with existing code
    return {
      success: true,
      requestId: result.data?.id,
      message: result.message,
      timestamp: result.data?.timestamp,
      estimatedResponse: result.data?.estimatedResponse
    };

  } catch (error) {
    // Enhanced error tracking
    const errorDetails = {
      error: error.message,
      formType,
      timestamp: new Date().toISOString(),
      apiUrl: window.__API_URL__ || window.location.origin,
      hasPackage: !!formData?.package,
      formDataKeys: formData ? Object.keys(formData) : []
    };

    console.error('Email sending failed:', errorDetails);
    
    // Sentry error tracking
    if (window.Sentry) {
      window.Sentry.captureException(error, {
        tags: {
          service: 'emailService',
          formType
        },
        extra: errorDetails
      });
    }

    // Provide user-friendly error messages
    let userMessage = error.message;
    
    // Handle specific error types
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      userMessage = 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.';
    } else if (error.message.includes('Zu viele Anfragen')) {
      userMessage = 'Zu viele Anfragen. Bitte warten Sie einen Moment und versuchen Sie es erneut.';
    } else if (error.message.includes('Server-Fehler') || error.message.includes('500')) {
      userMessage = 'Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter info@roketx.de.';
    }

    // Create enhanced error object
    const enhancedError = new Error(userMessage);
    enhancedError.originalError = error;
    enhancedError.details = errorDetails;
    
    throw enhancedError;
  }
};

// Fallback function for direct FormSubmit.co usage (emergency backup)
export const sendEmailDirect = async (formData, formType = 'landing') => {
  console.warn('Using direct FormSubmit.co fallback - backend API unavailable');
  
  try {
    const subject = formType === 'landing'
      ? `Neue Paket-Anfrage: ${formData.package || 'Kein Paket ausgewählt'}`
      : 'Neue Kontaktanfrage (Direct)';

    const response = await fetch('https://formsubmit.co/ajax/info@roketx.de', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        _subject: subject,
        _template: 'table',
        _captcha: false,
        _replyto: formData.email,
        timestamp: new Date().toISOString(),
        source: 'direct_fallback'
      })
    });

    if (!response.ok) {
      throw new Error(`FormSubmit.co error: ${response.status}`);
    }

    const result = await response.json();
    console.info('Direct email sent successfully:', result);
    
    return {
      success: true,
      message: 'E-Mail wurde gesendet (Fallback-Modus)',
      fallback: true
    };

  } catch (error) {
    console.error('Direct email sending failed:', error);
    throw new Error('E-Mail konnte auch über den Fallback-Dienst nicht gesendet werden');
  }
};