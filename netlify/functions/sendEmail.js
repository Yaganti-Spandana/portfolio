import nodemailer from "nodemailer";

export async function handler(event, context) {
  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: "No request body" }) };
    }

    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Modern card-style HTML template with emojis
    const htmlContent = `
      <div style="
        font-family: 'Arial', sans-serif;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #eee;
        max-width: 600px;
        margin: auto;
      ">
        <h2 style="color: #4CAF50; text-align: center;">📬 New Contact Form Message</h2>
        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>✉️ Email:</strong> ${email}</p>
        <p><strong>💬 Message:</strong></p>
        <div style="
          padding: 15px;
          background-color: #ffffff;
          border-left: 4px solid #4CAF50;
          border-radius: 5px;
          margin-bottom: 20px;
        ">${message}</div>
        <hr style="border:none; border-top:1px solid #eee;" />
        <p style="font-size: 0.9em; color: #777;">
          🌐 Sent from your website contact form.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 New message from ${name}`,
      text: `Sender: ${email}\n\n${message}`,
      html: htmlContent,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
