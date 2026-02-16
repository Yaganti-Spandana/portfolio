const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const service_id = process.env.EMAILJS_SERVICE_ID;
    const template_id = process.env.EMAILJS_TEMPLATE_ID;
    const user_id = process.env.EMAILJS_USER_ID;

    const payload = {
      service_id,
      template_id,
      user_id,
      template_params: { name, email, message },
    };

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Email failed' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
