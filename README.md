# geografia-trainer
App personal para aprender países, capitales y geografía


## Derechos de autor

© 2026 Didac G. S. Todos los derechos reservados.  
Este repositorio no concede una licencia general de reutilización. Consulta `COPYRIGHT.md`.

## Validación automática

Antes de publicar cambios importantes, ejecutar:

```bash
node validate.js
```

El validador comprueba sintaxis JavaScript, IDs HTML duplicados, datos básicos de países,
referencias de ríos/mares/montañas, consistencia del mapa, assets vacíos, textos provisionales
y varios indicadores de seguridad. El workflow de GitHub Actions ejecuta la misma validación
automáticamente en cada `push` y `pull_request`.
