ReadMe

Terminado:
- Modales para agregar categorías, ciudades y características (con íconos) 
- Seguridad: cuando el usuario es administrador puede ingresar por el link del home a la página de alta de producto y completar el formulario. Cuando no es administrador no se renderiza ese enlace
- Cuando se agregan las 3 políticas y se le da click al botón confirmar se hacen los 3 fetch para enviar las nuevas políticas a la base de datos
- El producto se agrega, pero faltan asignarles las características. Las imágenes llevan un post aparte, porque requieren que primero se haya dado de alta el producto, están sujetas al alta del producto. En las características surgió algo y no se están mandando bien al post de producto
- Las imágenes se guardan bien en la base de datos y el producto también, las políticas también (en los elementos)

Pendientes:
- Cuando se hacen los post desde los modales no se está renderizando el listado con lo que se acaba de agregar
- La relación producto/politica tiene que cambiarse por producto/elementosPolitica
- Tanto en características como en imágenes se elimina bien el elemento pero no se renderiza en el placeholder el dato que corresponde...
- Se está redirigiendo al home momentaneamente una vez que se confirma el alta del producto
- Faltan todas las validaciones para:
  - Que no se manden cosas vacías
  - Que no se repitan datos