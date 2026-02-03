function toBase64(input) {
  return Buffer.from(input, "utf8").toString("base64");
}

export async function sendContactEmailWithMailjet({
  apiKey,
  apiSecret,
  from,
  to,
  cc,
  replyTo,
  subject,
  text,
}) {
  if (!apiKey || !apiSecret) {
    throw new Error("Missing MAILJET_API_KEY / MAILJET_API_SECRET");
  }

  const auth = toBase64(`${apiKey}:${apiSecret}`);

  const payload = {
    Messages: [
      {
        From: { Email: from.email, Name: from.name },
        To: [{ Email: to.email, Name: to.name }],
        ...(cc?.email
          ? { Cc: [{ Email: cc.email, Name: cc.name || cc.email }] }
          : {}),
        ...(replyTo?.email
          ? { ReplyTo: { Email: replyTo.email, Name: replyTo.name || replyTo.email } }
          : {}),
        Subject: subject,
        TextPart: text,
        CustomID: "contact-form",
      },
    ],
  };

  const response = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const bodyText = await response.text().catch(() => "");
    throw new Error(`Mailjet send failed (${response.status}): ${bodyText}`);
  }

  return response.json().catch(() => null);
}
