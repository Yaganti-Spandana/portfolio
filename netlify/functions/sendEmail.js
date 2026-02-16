// netlify/functions/sendEmail.js
const fetch = require("node-fetch"); // or use global fetch in Node 18+

exports.handler = async (event) => {
  try {
    // Netlify sometimes sends body as undefined or empty string
    if (!event.body || event.body === "") {
      return { statusCode: 400, body: JSON.stringify({ error: "No request body sent" }) };
    }

    // Parse safely
    let parsed;
    try {
      parsed = JSON.parse(event.body);
    } catch (err) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
    }

    const { name, email, message } = parsed;

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) };
    }

    // EmailJS payload
    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: { name, email, message },
    };

    // ✅ Await **inside** async function
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Handle response safely
    let data;
    try {
      data = await res.json();
    } catch {
      const text = await res.text();
      data = { error: text || "Invalid response" };
    }

    if (!res.ok) {
      console.error("EmailJS error:", data);
      return { statusCode: 500, body: JSON.stringify({ error: "EmailJS API call failed" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
