══════════════
MODIFICACIONES
══════════════

<!-- ----------------------------- CONTROLLER ------------------------------ -->

Para solucionar ID al guardar y retornar un DTO completo

- No se modificaron los DTO

Para solucionar ID al modificar y que no se duplique en la base de datos sino que se modifique el mismo objeto

- No se modificaron los controllers
  <!-- --------------------------------- DTO --------------------------------- -->
  Para solucionar ID al guardar y retornar un DTO completo
- Se agregan los setters de los ID

Para solucionar ID al modificar y que no se duplique en la base de datos sino que se modifique el mismo objeto

- No se modificaron los DTO

<!-- ------------------------------ ENTITIES ------------------------------- -->

Para solucionar ID al guardar y retornar un DTO completo

- Se quita el secuenciador para que no sea hibernate el que decide la forma en la que se generan los id, sino que se entrega esa responsabilidad a la base de datos.
- Se mantiene el GenerationType.IDENTITY que toma la manera en que la base de datos genera los IDs

Para solucionar ID al modificar y que no se duplique en la base de datos sino que se modifique el mismo objeto

- No se modificaron las entities

Para solucionar el post de imagen (no se podía agregar una imagen)

- Modificado, antes había un set, pero la relación imagen producto es muchas a una, por lo tanto cada imagen tiene un solo producto.

Para solucionar que la descripción de la política no se estaba guardando en la base de datos:

- Se agregó el mapeo de la columna "descripcion"
- Se agregaron/quitaron @JsonIgnore para que funcionen correctamente los pedidos a la base de datos, ya que había redundancia y generaba errores por bucles

<!-- ------------------------------ SERVICES ------------------------------- -->

Para solucionar ID al guardar y retornar un DTO completo

- Se mantiene la lógica de que solamente se pueda acceder de manera pública al método agregar pero de manera privada a la lógica de cómo se guardan los datos en la base de datos

- Cada método "guardar" ahora retorna un DTO (antes era void), cada método "agregar" también retorna un DTO (antes era void)

Para solucionar ID al modificar y que no se duplique en la base de datos sino que se modifique el mismo objeto

- Se agregó una línea de código en el método "actualizar" que primero busca el ID que viene desde el front, si no existe ese ID arroja una excepción y si existe lo actualiza en la base de datos.

<!-- -------------------------- INTERFACE SERVICE -------------------------- -->

Para solucionar ID al guardar y retornar un DTO completo

- Cada método "agregar" retorna un DTO (antes era void)

Para solucionar ID al modificar y que no se duplique en la base de datos sino que se modifique el mismo objeto

- No se modificaron las interfaces

<!-- ------------------------------- POSTMAN ------------------------------- -->

- Creadas todas las colecciones con Post, Put, Get All y Get By ID, Delete
- Scripts de pruebas (no están todos, pero sí la mayoría)
- Solamente Happy path (faltaría testear más los errores, por ejemplo enviando objetos vacíos)

