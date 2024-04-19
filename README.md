<h1>Prueba Módulo 7 - Banco Soles</h1>
<h2>Paso a paso</h2>
<ol>
<h3><li>Levantar servidor</li></h3>
<p>El servidor lo levantamos en index.js mientras que routes.js contendrá todas las rutas CRUD del Banco Soles.<p>
<p>También comprobamos la función getDate() para comprobar la conexión con nuestra base de datos con nuestras tablas: usuarios y transferencias</p>
<img src=''>
<h3><li>Consultas sql de tabla usuarios</li></h3>
<p>En la carpeta de controllers tenemos 2 archivos: consultas.js para la tabla usuarios y transferencias.js para la tabla transferencias.</p>
<p>En la carpeta 'queries' están las funciones que conectarán las consultas con 'routes.js'</p>
<p>Comenzamos con las rutas GET/usuarios y POST/usuario para mostrar y agregar datos a la tabla de usuarios.</p>
<img src=''>
<figcaption>Recomiendo agregar al menos 1 usuario desde la base de datos para verificar que está leyendo los datos desde el html.</figcaption>
<p>A continuación, trabajamos con la ruta PUT/usuario (para trabajar con todos los datos a excepción del id) y DELETE/usuario(usamos el id para eliminar).</p>
<h3><li>Consultas sql de tabla transferencias</li></h3>
<p>Esta fue la parte que más problemas dio, ya que al trabajar con claves foráneas debíamos cambiar el balance cada que hacemos una transacción</p>
<p>Por alguna razón no estaba colocando los datos del emisor en su respectiva columna y además tenía 2 fechas. Esto debido a que en el html ya estaba incluido.Sin embargo, al revisar en dBeaver los datos se agregaban en sus respectivas casillas.</p>
<img src=''>
<p>Noté que en 'verTransferencia' (transferencias.js, línea 46) debía cambiar el orden de los elementos, dejando la fecha en primer lugar.</p>
<p>Realicé una última inspección y noté que la función para eliminar usuarios no daba respuestas y arrojaba el siguiente error:<p>
<img src=''>
<p>Volví a dBeaver para alterar la tabla:</p>
<img src=''>
<p>No fue suficiente pues había que cambiar la función para eliminar usuarios planteándola como una transacción.</p>
<img src=''>
<figcaption>Así era la función antes de crear las transacciones.</figcaption>
<p>Comprobé las consultas en sql eliminando al usuario de id=5:</p>
<img src=''>
<p>Y de ahí cambié la función en consultas.js:</p>
<img src=''>
<figcaption>Una transacción debe tener un 'begin' y un 'commit'</figcaption>
<p>Finalmente logré eliminár a un usuario desde el navegador, en este caso a Kylie:</p>
<img src=''>
<p>Ajusté el estilo del boton 'editar' para dar una jerarquía menor a 'eliminar', y agregué usuarios y otras transacciones para comprobar su funcionamiento:</p>
<img src=''>
</ol>