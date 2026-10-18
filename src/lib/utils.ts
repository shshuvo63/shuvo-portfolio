/** Local Bangladesh number (01XXXXXXXXX) to an international tel: link. */
export const toTel = (phone: string) =>
  "tel:" + phone.replace(/[^\d+]/g, "").replace(/^0/, "+880");

/** Local number to a wa.me link (country code 880, no plus sign). */
export const toWhatsApp = (phone: string) =>
  "https://wa.me/" + phone.replace(/\D/g, "").replace(/^0/, "880");
