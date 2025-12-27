"use client";
import { Suspense } from "react";
import config from "../constants/config.js";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappButton() {
  return (
    <Suspense>
      <FloatingWhatsApp
        statusMessage="Activo recientemente"
        className="ws-button"
        avatar="/imagen/LOGO.svg"
        chatMessage="Hola 👋🏽, Estamos aquí para ti. Dejanos un mensaje y te responderemos lo antes posible."
        notification
        notificationDelay={5}
        placeholder="Escribe tu mensaje aquí..."
        phoneNumber={config.contactPhone}
        accountName={config.siteName}
      />
    </Suspense>
  );
}