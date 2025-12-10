import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import logo from "./public/logo.png";

export default defineConfig({
  integrations: [
    starlight({
      title: "ASM Dashboard - Documentacion",
      description: "Documentacion oficial de los modulos ASM",
      logo: {
        src: logo,
        alt: "ASM Logo",
      },
      sidebar: [
        {
          label: "Modulos del Sistema",
          items: [
            "modulos-maria/administracion",
            "modulos-maria/inscripcion",
            "modulos-maria/finanzas",
          ],
        },
        {
          label: "Modulo de Seguridad",
          items: [
            "seguridad",
            "seguridad/dashboard",
            "seguridad/accesos",
            "seguridad/auditoria",
            "seguridad/permisos",
            "seguridad/roles",
            "seguridad/sesiones",
            "seguridad/usuarios",
          ],
        },
        {
          label: "Modulo Academico",
          autogenerate: { directory: "academico" },
        },
        {
          label: "Prospectos y Asesores",
          autogenerate: { directory: "prospectos-asesores" },
        },
      ],
      social: [
        {
          label: "GitHub",
          icon: "github",
          href: "https://github.com/americanschoolofmanagement",
        },
      ],
    }),
  ],
});