
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PersonaScalarFieldEnum = {
  secuencial: 'secuencial',
  tipoIdentificacion: 'tipoIdentificacion',
  identificacion: 'identificacion',
  nombreUnido: 'nombreUnido',
  email: 'email',
  localidad: 'localidad',
  callePrincipal: 'callePrincipal',
  calleSecundaria: 'calleSecundaria',
  ciudadela: 'ciudadela',
  paisOrigen: 'paisOrigen'
};

exports.Prisma.TipoCuentaScalarFieldEnum = {
  secuencial: 'secuencial',
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.CuentaScalarFieldEnum = {
  secuencial: 'secuencial',
  numeroCuenta: 'numeroCuenta',
  saldo: 'saldo',
  estado: 'estado',
  fechaApertura: 'fechaApertura',
  personaSecuencial: 'personaSecuencial',
  tipoCuentaSecuencial: 'tipoCuentaSecuencial',
  fechaCreacion: 'fechaCreacion',
  fechaActualizacion: 'fechaActualizacion'
};

exports.Prisma.TipoTransaccionScalarFieldEnum = {
  secuencial: 'secuencial',
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.TransaccionScalarFieldEnum = {
  secuencial: 'secuencial',
  monto: 'monto',
  fechaTransaccion: 'fechaTransaccion',
  estado: 'estado',
  descripcion: 'descripcion',
  tipoTransaccionSecuencial: 'tipoTransaccionSecuencial',
  cuentaOrigenId: 'cuentaOrigenId',
  cuentaDestinoId: 'cuentaDestinoId'
};

exports.Prisma.ProductoScalarFieldEnum = {
  secuencial: 'secuencial',
  nombre: 'nombre',
  descripcion: 'descripcion',
  tipoProducto: 'tipoProducto'
};

exports.Prisma.ProductoUsuarioScalarFieldEnum = {
  secuencial: 'secuencial',
  usuarioId: 'usuarioId',
  productoId: 'productoId',
  fechaAdquisicion: 'fechaAdquisicion',
  estado: 'estado',
  detalles: 'detalles'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.EstadoCuenta = exports.$Enums.EstadoCuenta = {
  ACTIVA: 'ACTIVA',
  INACTIVA: 'INACTIVA',
  BLOQUEADA: 'BLOQUEADA'
};

exports.EstadoTransaccion = exports.$Enums.EstadoTransaccion = {
  COMPLETADA: 'COMPLETADA',
  PENDIENTE: 'PENDIENTE',
  FALLIDA: 'FALLIDA'
};

exports.TipoProducto = exports.$Enums.TipoProducto = {
  PRESTAMO: 'PRESTAMO',
  INVERSION: 'INVERSION',
  SEGURO: 'SEGURO'
};

exports.EstadoProducto = exports.$Enums.EstadoProducto = {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
  FINALIZADO: 'FINALIZADO'
};

exports.Prisma.ModelName = {
  Persona: 'Persona',
  TipoCuenta: 'TipoCuenta',
  Cuenta: 'Cuenta',
  TipoTransaccion: 'TipoTransaccion',
  Transaccion: 'Transaccion',
  Producto: 'Producto',
  ProductoUsuario: 'ProductoUsuario'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Entretenimiento y Estudios\\Practicas\\00-PROYECTOS-CURSOS\\coop-tesis-nest\\prisma\\clients\\mysql-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\Entretenimiento y Estudios\\Practicas\\00-PROYECTOS-CURSOS\\coop-tesis-nest\\prisma\\mysql-schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.18.0",
  "engineVersion": "4c784e32044a8a016d99474bd02a3b6123742169",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_MYSQL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"./clients/mysql-client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_MYSQL\")\n}\n\nenum EstadoCuenta {\n  ACTIVA\n  INACTIVA\n  BLOQUEADA\n}\n\nenum EstadoTransaccion {\n  COMPLETADA\n  PENDIENTE\n  FALLIDA\n}\n\nenum TipoProducto {\n  PRESTAMO\n  INVERSION\n  SEGURO\n}\n\nenum EstadoProducto {\n  ACTIVO\n  INACTIVO\n  FINALIZADO\n}\n\nmodel Persona {\n  secuencial         Int               @id @default(autoincrement())\n  // Tipo de identificacion de la persona\n  tipoIdentificacion String            @db.Char(2)\n  // Numero de identificacion de la persona\n  identificacion     String            @unique @db.VarChar(15)\n  // Nombre y apellidos completos de la persona\n  nombreUnido        String            @db.VarChar(200)\n  // El email de la persona\n  email              String            @db.VarChar(50)\n  // La locallidad de la persona\n  localidad          String            @db.Char(6)\n  // La calle principal de la\n  callePrincipal     String            @db.VarChar(100)\n  // La calle secundaria de la persona\n  calleSecundaria    String            @db.VarChar(100)\n  //  La ciudadela de la persona\n  ciudadela          String            @db.VarChar(100)\n  // El pais de origen de la persona codigo de pais\n  paisOrigen         String            @db.Char(2)\n  Cuenta             Cuenta[]\n  ProductoUsuario    ProductoUsuario[]\n\n  @@unique([tipoIdentificacion, identificacion], name: \"Index_principal\")\n  @@index([identificacion], map: \"Index_identificacion\")\n  @@map(\"persona\")\n}\n\nmodel TipoCuenta {\n  secuencial  Int      @id @default(autoincrement())\n  nombre      String\n  descripcion String\n  cuentas     Cuenta[]\n\n  @@map(\"tipo_cuenta\")\n}\n\nmodel Cuenta {\n  secuencial    Int          @id @default(autoincrement())\n  numeroCuenta  String       @unique @db.VarChar(20)\n  saldo         Float        @default(0)\n  estado        EstadoCuenta @default(ACTIVA)\n  fechaApertura DateTime     @default(now())\n\n  // Relaciones\n  persona              Persona     @relation(fields: [personaSecuencial], references: [secuencial])\n  personaSecuencial    Int\n  TipoCuenta           TipoCuenta? @relation(fields: [tipoCuentaSecuencial], references: [secuencial])\n  tipoCuentaSecuencial Int?\n\n  fechaCreacion        DateTime      @default(now())\n  fechaActualizacion   DateTime      @updatedAt\n  TransaccionesOrigen  Transaccion[] @relation(\"CuentaOrigen\")\n  TransaccionesDestino Transaccion[] @relation(\"CuentaDestino\")\n\n  @@map(\"cuenta\")\n}\n\nmodel TipoTransaccion {\n  secuencial    Int           @id @default(autoincrement())\n  nombre        String\n  descripcion   String?\n  transacciones Transaccion[]\n\n  @@map(\"tipo_transaccion\")\n}\n\nmodel Transaccion {\n  secuencial       Int               @id @default(autoincrement())\n  monto            Float\n  fechaTransaccion DateTime          @default(now())\n  estado           EstadoTransaccion @default(PENDIENTE)\n  descripcion      String?\n\n  // Relaciones\n  TipoTransaccion           TipoTransaccion? @relation(fields: [tipoTransaccionSecuencial], references: [secuencial])\n  tipoTransaccionSecuencial Int?\n  CuentaOrigen              Cuenta?          @relation(\"CuentaOrigen\", fields: [cuentaOrigenId], references: [secuencial])\n  cuentaOrigenId            Int?\n  CuentaDestino             Cuenta?          @relation(\"CuentaDestino\", fields: [cuentaDestinoId], references: [secuencial])\n  cuentaDestinoId           Int?\n}\n\nmodel Producto {\n  secuencial       Int               @id @default(autoincrement())\n  nombre           String\n  descripcion      String?\n  tipoProducto     TipoProducto\n  productosUsuario ProductoUsuario[]\n}\n\nmodel ProductoUsuario {\n  secuencial       Int            @id @default(autoincrement())\n  usuario          Persona        @relation(fields: [usuarioId], references: [secuencial])\n  usuarioId        Int\n  producto         Producto       @relation(fields: [productoId], references: [secuencial])\n  productoId       Int\n  fechaAdquisicion DateTime       @default(now())\n  estado           EstadoProducto @default(ACTIVO)\n  detalles         Json?\n}\n",
  "inlineSchemaHash": "d87edf1e8f2f39d79b6be52a27901296d2610387d6be7a2b2c6aedbb5374b4b7",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Persona\":{\"dbName\":\"persona\",\"fields\":[{\"name\":\"secuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoIdentificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombreUnido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"callePrincipal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calleSecundaria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ciudadela\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paisOrigen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cuenta\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cuenta\",\"relationName\":\"CuentaToPersona\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductoUsuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductoUsuario\",\"relationName\":\"PersonaToProductoUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tipoIdentificacion\",\"identificacion\"]],\"uniqueIndexes\":[{\"name\":\"Index_principal\",\"fields\":[\"tipoIdentificacion\",\"identificacion\"]}],\"isGenerated\":false},\"TipoCuenta\":{\"dbName\":\"tipo_cuenta\",\"fields\":[{\"name\":\"secuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuentas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cuenta\",\"relationName\":\"CuentaToTipoCuenta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cuenta\":{\"dbName\":\"cuenta\",\"fields\":[{\"name\":\"secuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numeroCuenta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoCuenta\",\"default\":\"ACTIVA\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaApertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Persona\",\"relationName\":\"CuentaToPersona\",\"relationFromFields\":[\"personaSecuencial\"],\"relationToFields\":[\"secuencial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"personaSecuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoCuenta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoCuenta\",\"relationName\":\"CuentaToTipoCuenta\",\"relationFromFields\":[\"tipoCuentaSecuencial\"],\"relationToFields\":[\"secuencial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoCuentaSecuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaCreacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaActualizacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"TransaccionesOrigen\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaccion\",\"relationName\":\"CuentaOrigen\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransaccionesDestino\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaccion\",\"relationName\":\"CuentaDestino\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TipoTransaccion\":{\"dbName\":\"tipo_transaccion\",\"fields\":[{\"name\":\"secuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transacciones\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaccion\",\"relationName\":\"TipoTransaccionToTransaccion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transaccion\":{\"dbName\":null,\"fields\":[{\"name\":\"secuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaTransaccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoTransaccion\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoTransaccion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoTransaccion\",\"relationName\":\"TipoTransaccionToTransaccion\",\"relationFromFields\":[\"tipoTransaccionSecuencial\"],\"relationToFields\":[\"secuencial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoTransaccionSecuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CuentaOrigen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cuenta\",\"relationName\":\"CuentaOrigen\",\"relationFromFields\":[\"cuentaOrigenId\"],\"relationToFields\":[\"secuencial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuentaOrigenId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CuentaDestino\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cuenta\",\"relationName\":\"CuentaDestino\",\"relationFromFields\":[\"cuentaDestinoId\"],\"relationToFields\":[\"secuencial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuentaDestinoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Producto\":{\"dbName\":null,\"fields\":[{\"name\":\"secuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoProducto\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoProducto\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productosUsuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductoUsuario\",\"relationName\":\"ProductoToProductoUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductoUsuario\":{\"dbName\":null,\"fields\":[{\"name\":\"secuencial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Persona\",\"relationName\":\"PersonaToProductoUsuario\",\"relationFromFields\":[\"usuarioId\"],\"relationToFields\":[\"secuencial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"producto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Producto\",\"relationName\":\"ProductoToProductoUsuario\",\"relationFromFields\":[\"productoId\"],\"relationToFields\":[\"secuencial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaAdquisicion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoProducto\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalles\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"EstadoCuenta\":{\"values\":[{\"name\":\"ACTIVA\",\"dbName\":null},{\"name\":\"INACTIVA\",\"dbName\":null},{\"name\":\"BLOQUEADA\",\"dbName\":null}],\"dbName\":null},\"EstadoTransaccion\":{\"values\":[{\"name\":\"COMPLETADA\",\"dbName\":null},{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"FALLIDA\",\"dbName\":null}],\"dbName\":null},\"TipoProducto\":{\"values\":[{\"name\":\"PRESTAMO\",\"dbName\":null},{\"name\":\"INVERSION\",\"dbName\":null},{\"name\":\"SEGURO\",\"dbName\":null}],\"dbName\":null},\"EstadoProducto\":{\"values\":[{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"INACTIVO\",\"dbName\":null},{\"name\":\"FINALIZADO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_MYSQL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_MYSQL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_MYSQL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

