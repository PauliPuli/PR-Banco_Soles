<h1>Prueba Módulo 7 - Banco Soles</h1>
<h2>Paso a paso</h2>
<ol>
<h3><li>Levantar servidor</li></h3>
<p>El servidor lo levantamos en index.js mientras que routes.js contendrá todas las rutas CRUD del Banco Soles.<p>
<p>También comprobamos la función getDate() para comprobar la conexión con nuestra base de datos con nuestras tablas: usuarios y transferencias</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/07e42f6d-1999-41ad-bb56-a185b8b304c5'>
<h3><li>Consultas sql de tabla usuarios</li></h3>
<p>En la carpeta de controllers tenemos 2 archivos: consultas.js para la tabla usuarios y transferencias.js para la tabla transferencias.</p>
<p>En la carpeta 'queries' están las funciones que conectarán las consultas con 'routes.js'</p>
<p>Comenzamos con las rutas GET/usuarios y POST/usuario para mostrar y agregar datos a la tabla de usuarios.</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/2c53ba71-ee03-4c03-af31-ce9199f17cda)'>
<figcaption>Recomiendo agregar al menos 1 usuario desde la base de datos para verificar que está leyendo los datos desde el html.</figcaption>
<p>A continuación, trabajamos con la ruta PUT/usuario (para trabajar con todos los datos a excepción del id) y DELETE/usuario(usamos el id para eliminar).</p>
<h3><li>Consultas sql de tabla transferencias</li></h3>
<p>Esta fue la parte que más problemas dio, ya que al trabajar con claves foráneas debíamos cambiar el balance cada que hacemos una transacción</p>
<p>Por alguna razón no estaba colocando los datos del emisor en su respectiva columna y además tenía 2 fechas. Esto debido a que en el html ya estaba incluido.Sin embargo, al revisar en dBeaver los datos se agregaban en sus respectivas casillas.</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/f162b058-226b-4294-8eea-38003a0bd637'>
<p>Noté que en 'verTransferencia' (transferencias.js, línea 46) debía cambiar el orden de los elementos, dejando la fecha en primer lugar.</p>
<p>Realicé una última inspección y noté que la función para eliminar usuarios no daba respuestas y arrojaba el siguiente error:<p>
<img alt='error-delete' src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/bb09870f-5a72-4eaf-9f10-a0ec9e8af061

'>
<p>Volví a dBeaver para alterar la tabla:</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/100c5f21-78ef-468a-be3e-6c79ddadda95
'>
<p>No fue suficiente pues había que cambiar la función para eliminar usuarios planteándola como una transacción.</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/74900389-9efa-4170-a33b-541bb3ff0cd1
'>
<figcaption>(*)Así era la función antes de crear las transacciones.</figcaption>
<p>Comprobé las consultas en sql eliminando al usuario de id=5:</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/a3b314a9-c208-4159-80d9-d1bf647548c1
'>
<p>Y de ahí cambié la función en consultas.js:</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/3d956a4c-f900-48f5-acd4-860e8c2d019d
'>
<figcaption>(**)Una transacción debe tener un 'begin' y un 'commit'</figcaption>
<p>Finalmente logré eliminár a un usuario desde el navegador, en este caso a Kylie:</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/15e43ca6-3079-4ab4-b4ab-08d2012011fe'>
<p>Ajusté el estilo del boton 'editar' para dar una jerarquía menor a 'eliminar', y agregué usuarios y otras transacciones para comprobar su funcionamiento:</p>
<img src='https://github.com/PauliPuli/PR-Banco_Soles/assets/156126623/c978d272-f4eb-43b5-805d-1e2a4d4a6f87'>
</ol>
