// Datos globales de la empresa DigiON
// Actualiza estos valores con tu información real antes de publicar

export const SITE_TITLE = "DigiON | Consultoría Digital en Onda, Castellón";
export const SITE_DESCRIPTION =
  "DigiON es tu consultora de transformación digital, protección de la información, formación empresarial y gestión de subvenciones en Onda, Castellón.";

export const COMPANY = {
  name: "DigiON Consultoría",
  shortName: "DigiON",
  slogan: "Tu socio digital en Onda",
  cif: "B-XXXXXXXX", // Actualizar con CIF real
  email: "info@digion.es",
  phone: "+34 964 000 000", // Actualizar con teléfono real
  phoneDisplay: "964 000 000",
  address: {
    street: "Carrer Major, 1",
    city: "Onda",
    province: "Castellón",
    region: "Comunitat Valenciana",
    postalCode: "12200",
    country: "España",
    countryCode: "ES",
  },
  geo: {
    latitude: 39.9625,
    longitude: -0.2717,
  },
  hours: [
    { days: "Lunes - Viernes", hours: "09:00 - 18:00" },
    { days: "Sábado", hours: "10:00 - 13:00" },
  ],
  social: {
    linkedin: "https://linkedin.com/company/digion", // Actualizar
    twitter: "", // Actualizar si aplica
  },
};

export const SERVICES = [
  {
    id: "transformacion-digital",
    title: "Transformación Digital",
    shortDesc:
      "Digitalizamos los procesos de tu empresa para mejorar la eficiencia y la competitividad.",
    icon: "💻",
    href: "/servicios/transformacion-digital",
  },
  {
    id: "proteccion-informacion",
    title: "Protección de la Información",
    shortDesc:
      "Cumplimiento del RGPD, ciberseguridad y gestión segura de los datos de tu empresa.",
    icon: "🔒",
    href: "/servicios/proteccion-informacion",
  },
  {
    id: "formacion",
    title: "Formación Empresarial",
    shortDesc:
      "Programas de formación a medida para capacitar a tu equipo en competencias digitales.",
    icon: "🎓",
    href: "/servicios/formacion",
  },
  {
    id: "subvenciones",
    title: "Gestión de Subvenciones",
    shortDesc:
      "Te ayudamos a acceder al Kit Digital y otras ayudas para la digitalización de tu pyme.",
    icon: "📋",
    href: "/servicios/subvenciones",
  },
];
