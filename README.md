# Documentación Tigmed - Sistema de Citas

Este sitio web de documentación está construido usando [Docusaurus](https://docusaurus.io/), un generador de sitios web estáticos moderno.

## Acerca de este proyecto

Esta es la documentación oficial del **Sistema Tigmed**. Contiene:

- 📖 **Documentación completa** del sistema
- 🗓️ **Guías de gestión de citas** médicas
- ⚙️ **Instrucciones de configuración** del sistema
- 📚 **Glosario** de términos médicos y del sistema
- 📰 **Blog** con novedades y actualizaciones

## Instalación

```bash
npm install
```

## Desarrollo Local

```bash
npm start
```

Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin necesidad de reiniciar el servidor.

El sitio estará disponible en: `http://localhost:3000`

## Build de Producción

```bash
npm run build
```

Este comando genera contenido estático en el directorio `build` y puede ser servido usando cualquier servicio de hosting de contenido estático.

## Estructura del Proyecto

```
my-website/
├── blog/                    # Entradas del blog
├── docs/                    # Documentación principal
│   ├── gestion-citas/      # Gestión de citas médicas
│   ├── configuracion/      # Configuración del sistema
│   └── glosario/           # Términos y definiciones
├── src/                     # Código fuente personalizado
├── static/                  # Archivos estáticos
└── docusaurus.config.ts     # Configuración de Docusaurus
```

## Contribuir a la Documentación

1. **Agregar nueva documentación**: Crea archivos `.md` en la carpeta `docs/`
2. **Escribir entradas de blog**: Agrega archivos en la carpeta `blog/`
3. **Actualizar configuración**: Modifica `docusaurus.config.ts`
4. **Personalizar estilos**: Edita archivos en `src/css/`

## Despliegue

Usando SSH:

```bash
USE_SSH=true npm run deploy
```

Sin usar SSH:

```bash
GIT_USER=<Tu usuario de GitHub> npm run deploy
```

Si estás usando GitHub Pages para hosting, este comando es una forma conveniente de construir el sitio web y hacer push a la rama `gh-pages`.

## Soporte

Para soporte técnico o preguntas sobre la documentación:
- 📧 Email: soporte@tigmed.com
- 🌐 Web: www.tigmed.com
- 📚 Documentación: Esta misma página

---

**Desarrollado por el Equipo Tigmed** 💙
