function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function clampString(value, maxLen) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const v = email.trim();
  if (v.length > 254) return false;
  // Reasonable (not perfect) validation.
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function isValidPhone(phone) {
  if (typeof phone !== "string") return false;
  const v = phone.trim();
  if (v.length < 6 || v.length > 32) return false;
  return /^[0-9\s.\-+()]+$/.test(v);
}

export function validateContactPayload(body) {
  const name = clampString(body?.name, 120);
  const email = clampString(body?.email, 254);
  const phone = clampString(body?.phone, 32);
  const address = clampString(body?.address, 200);
  const message = clampString(body?.message, 4000);

  const website = clampString(body?.website, 200);
  const formStartedAtRaw = body?.formStartedAt;
  const formStartedAt =
    typeof formStartedAtRaw === "number" && Number.isFinite(formStartedAtRaw)
      ? Math.floor(formStartedAtRaw)
      : null;

  const eventDate = clampString(body?.eventDate, 40);
  const guests = clampString(body?.guests, 20);
  const service = clampString(body?.service, 80);

  if (!isNonEmptyString(name)) {
    return { ok: false, error: "Veuillez renseigner votre nom." };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "Veuillez renseigner un email valide." };
  }
  if (!isValidPhone(phone)) {
    return { ok: false, error: "Veuillez renseigner un téléphone valide." };
  }
  if (!isNonEmptyString(message) || message.length < 10) {
    return { ok: false, error: "Veuillez écrire un message (au moins 10 caractères)." };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      address,
      message,
      website,
      formStartedAt,
      eventDate,
      guests,
      service,
    },
  };
}
