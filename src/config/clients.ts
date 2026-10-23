export type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

/** Most marks display at 40px. Files are 80px tall. Castaño and Occo are taller so the wordmark stays readable. */
export const CLIENTS: ClientLogo[] = [
  { name: "10Code", src: "/images/clients/10code.webp", width: 150, height: 40 },
  { name: "Andaoliva", src: "/images/clients/andaoliva.webp", width: 183, height: 40 },
  { name: "Castaño", src: "/images/clients/castano.webp", width: 64, height: 64 },
  { name: "CICA", src: "/images/clients/cica.webp", width: 212, height: 32 },
  { name: "Contesur", src: "/images/clients/contesur.webp", width: 132, height: 40 },
  { name: "Iberia", src: "/images/clients/iberia.webp", width: 180, height: 40 },
  { name: "Iterway", src: "/images/clients/iterway.webp", width: 189, height: 40 },
  { name: "Liverpool", src: "/images/clients/liverpool.webp", width: 163, height: 40 },
  { name: "Los del Río", src: "/images/clients/los-del-rio.webp", width: 34, height: 40 },
  {
    name: "Martínez Medina",
    src: "/images/clients/martinez-medina.webp",
    width: 194,
    height: 40,
  },
  { name: "Occo", src: "/images/clients/occo.webp", width: 83, height: 64 },
  { name: "Ragrom", src: "/images/clients/ragrom.webp", width: 75, height: 40 },
  { name: "Trucksur", src: "/images/clients/trucksur.webp", width: 136, height: 40 },
  {
    name: "Vórtice Padel Club",
    src: "/images/clients/vortice-padel-club.webp",
    width: 78,
    height: 40,
  },
];
