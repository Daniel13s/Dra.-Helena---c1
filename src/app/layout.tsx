import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Helena Moreira | Psicóloga Clínica em São José dos Campos",
  description: "Psicóloga clínica especializada em terapia cognitivo-comportamental e psicologia do desenvolvimento.",
  keywords: [
    "Psicóloga São José dos Campos",
    "Terapia Cognitivo-Comportamental",
    "Psicologia do Desenvolvimento",
    "Terapia Online",
    "Apoio Emocional",
    "Saúde Mental",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
