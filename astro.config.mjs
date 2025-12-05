import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logo from './public/logo.png';

export default defineConfig({
  integrations: [
    starlight({
      title: "ASM Dashboard – Documentación",
      description: "Documentación oficial de los módulos ASM",

      logo: {
        src: logo,
        alt: "ASM Logo"
      },

      sidebar: [
        {
          label: "Módulos del Sistema",
          items: [
            "modulos-maria/administracion",
            "modulos-maria/inscripcion",
            "modulos-maria/finanzas"
          ]
        }
      ],

      // Redes sociales
      social: [
        {
          label: "GitHub",
          icon: "github",
          href: "https://github.com/americanschoolofmanagement"
        }
      ]
    })
  ]
});
