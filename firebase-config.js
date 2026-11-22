/* ==================================================================
   KIRY'FOOD · CONFIGURACIÓN DE FIREBASE
   ------------------------------------------------------------------
   ⚠️  ESTE ES EL ÚNICO ARCHIVO que hay que tocar si cambiamos de
       proyecto de Firebase. Las dos páginas (index.html y
       admin.html) leen los datos de aquí.

   Proyecto actual:  negocio-14431

   OJO: estos datos NO son secretos. Se pueden ver en la página y
   está bien: lo que protege la base de datos son las REGLAS
   (archivo firestore.rules), no estos valores.
   ================================================================== */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCj-lFp-Oyl3_C9g1ZEX_iLVkQ7JirsweU",
  authDomain: "negocio-14431.firebaseapp.com",
  databaseURL: "https://negocio-14431-default-rtdb.firebaseio.com",
  projectId: "negocio-14431",
  storageBucket: "negocio-14431.firebasestorage.app",
  messagingSenderId: "6893269735",
  appId: "1:6893269735:web:318d0d985b4fe12c1fa842",
  measurementId: "G-7Z0K6DT2S3"
};

/* ==================================================================
   CORREOS DEL DUEÑO
   ------------------------------------------------------------------
   Escribe aquí el correo (o los correos) del dueño del negocio.
   Con eso la página admin.html le abre el panel.

   ⚠️ IMPORTANTE: este correo tambien tiene que estar escrito en el
   archivo firestore.rules (en la linea que dice  request.auth.token.email in [...] ),
   porque si no, Firebase no le permite leer ni cambiar los pedidos.
   ================================================================== */
window.CORREOS_DUENO = [
  "yustincaly96@gmail.com"
];
