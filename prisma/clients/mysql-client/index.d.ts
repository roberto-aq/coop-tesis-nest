
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Persona
 * 
 */
export type Persona = $Result.DefaultSelection<Prisma.$PersonaPayload>
/**
 * Model TipoCuenta
 * 
 */
export type TipoCuenta = $Result.DefaultSelection<Prisma.$TipoCuentaPayload>
/**
 * Model Cuenta
 * 
 */
export type Cuenta = $Result.DefaultSelection<Prisma.$CuentaPayload>
/**
 * Model TipoTransaccion
 * 
 */
export type TipoTransaccion = $Result.DefaultSelection<Prisma.$TipoTransaccionPayload>
/**
 * Model Transaccion
 * 
 */
export type Transaccion = $Result.DefaultSelection<Prisma.$TransaccionPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model ProductoUsuario
 * 
 */
export type ProductoUsuario = $Result.DefaultSelection<Prisma.$ProductoUsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoCuenta: {
  ACTIVA: 'ACTIVA',
  INACTIVA: 'INACTIVA',
  BLOQUEADA: 'BLOQUEADA'
};

export type EstadoCuenta = (typeof EstadoCuenta)[keyof typeof EstadoCuenta]


export const EstadoTransaccion: {
  COMPLETADA: 'COMPLETADA',
  PENDIENTE: 'PENDIENTE',
  FALLIDA: 'FALLIDA'
};

export type EstadoTransaccion = (typeof EstadoTransaccion)[keyof typeof EstadoTransaccion]


export const TipoProducto: {
  PRESTAMO: 'PRESTAMO',
  INVERSION: 'INVERSION',
  SEGURO: 'SEGURO'
};

export type TipoProducto = (typeof TipoProducto)[keyof typeof TipoProducto]


export const EstadoProducto: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
  FINALIZADO: 'FINALIZADO'
};

export type EstadoProducto = (typeof EstadoProducto)[keyof typeof EstadoProducto]

}

export type EstadoCuenta = $Enums.EstadoCuenta

export const EstadoCuenta: typeof $Enums.EstadoCuenta

export type EstadoTransaccion = $Enums.EstadoTransaccion

export const EstadoTransaccion: typeof $Enums.EstadoTransaccion

export type TipoProducto = $Enums.TipoProducto

export const TipoProducto: typeof $Enums.TipoProducto

export type EstadoProducto = $Enums.EstadoProducto

export const EstadoProducto: typeof $Enums.EstadoProducto

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personas
 * const personas = await prisma.persona.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personas
   * const personas = await prisma.persona.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.persona`: Exposes CRUD operations for the **Persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.PersonaDelegate<ExtArgs>;

  /**
   * `prisma.tipoCuenta`: Exposes CRUD operations for the **TipoCuenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoCuentas
    * const tipoCuentas = await prisma.tipoCuenta.findMany()
    * ```
    */
  get tipoCuenta(): Prisma.TipoCuentaDelegate<ExtArgs>;

  /**
   * `prisma.cuenta`: Exposes CRUD operations for the **Cuenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuentas
    * const cuentas = await prisma.cuenta.findMany()
    * ```
    */
  get cuenta(): Prisma.CuentaDelegate<ExtArgs>;

  /**
   * `prisma.tipoTransaccion`: Exposes CRUD operations for the **TipoTransaccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoTransaccions
    * const tipoTransaccions = await prisma.tipoTransaccion.findMany()
    * ```
    */
  get tipoTransaccion(): Prisma.TipoTransaccionDelegate<ExtArgs>;

  /**
   * `prisma.transaccion`: Exposes CRUD operations for the **Transaccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaccions
    * const transaccions = await prisma.transaccion.findMany()
    * ```
    */
  get transaccion(): Prisma.TransaccionDelegate<ExtArgs>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs>;

  /**
   * `prisma.productoUsuario`: Exposes CRUD operations for the **ProductoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductoUsuarios
    * const productoUsuarios = await prisma.productoUsuario.findMany()
    * ```
    */
  get productoUsuario(): Prisma.ProductoUsuarioDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Persona: 'Persona',
    TipoCuenta: 'TipoCuenta',
    Cuenta: 'Cuenta',
    TipoTransaccion: 'TipoTransaccion',
    Transaccion: 'Transaccion',
    Producto: 'Producto',
    ProductoUsuario: 'ProductoUsuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "persona" | "tipoCuenta" | "cuenta" | "tipoTransaccion" | "transaccion" | "producto" | "productoUsuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Persona: {
        payload: Prisma.$PersonaPayload<ExtArgs>
        fields: Prisma.PersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findFirst: {
            args: Prisma.PersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findMany: {
            args: Prisma.PersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          create: {
            args: Prisma.PersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          createMany: {
            args: Prisma.PersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          update: {
            args: Prisma.PersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          deleteMany: {
            args: Prisma.PersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.PersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      TipoCuenta: {
        payload: Prisma.$TipoCuentaPayload<ExtArgs>
        fields: Prisma.TipoCuentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoCuentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoCuentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload>
          }
          findFirst: {
            args: Prisma.TipoCuentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoCuentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload>
          }
          findMany: {
            args: Prisma.TipoCuentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload>[]
          }
          create: {
            args: Prisma.TipoCuentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload>
          }
          createMany: {
            args: Prisma.TipoCuentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoCuentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload>
          }
          update: {
            args: Prisma.TipoCuentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload>
          }
          deleteMany: {
            args: Prisma.TipoCuentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoCuentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoCuentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCuentaPayload>
          }
          aggregate: {
            args: Prisma.TipoCuentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoCuenta>
          }
          groupBy: {
            args: Prisma.TipoCuentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoCuentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCuentaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCuentaCountAggregateOutputType> | number
          }
        }
      }
      Cuenta: {
        payload: Prisma.$CuentaPayload<ExtArgs>
        fields: Prisma.CuentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          findFirst: {
            args: Prisma.CuentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          findMany: {
            args: Prisma.CuentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>[]
          }
          create: {
            args: Prisma.CuentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          createMany: {
            args: Prisma.CuentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CuentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          update: {
            args: Prisma.CuentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          deleteMany: {
            args: Prisma.CuentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          aggregate: {
            args: Prisma.CuentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuenta>
          }
          groupBy: {
            args: Prisma.CuentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuentaCountArgs<ExtArgs>
            result: $Utils.Optional<CuentaCountAggregateOutputType> | number
          }
        }
      }
      TipoTransaccion: {
        payload: Prisma.$TipoTransaccionPayload<ExtArgs>
        fields: Prisma.TipoTransaccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoTransaccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoTransaccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload>
          }
          findFirst: {
            args: Prisma.TipoTransaccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoTransaccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload>
          }
          findMany: {
            args: Prisma.TipoTransaccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload>[]
          }
          create: {
            args: Prisma.TipoTransaccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload>
          }
          createMany: {
            args: Prisma.TipoTransaccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoTransaccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload>
          }
          update: {
            args: Prisma.TipoTransaccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload>
          }
          deleteMany: {
            args: Prisma.TipoTransaccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoTransaccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoTransaccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransaccionPayload>
          }
          aggregate: {
            args: Prisma.TipoTransaccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoTransaccion>
          }
          groupBy: {
            args: Prisma.TipoTransaccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoTransaccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoTransaccionCountArgs<ExtArgs>
            result: $Utils.Optional<TipoTransaccionCountAggregateOutputType> | number
          }
        }
      }
      Transaccion: {
        payload: Prisma.$TransaccionPayload<ExtArgs>
        fields: Prisma.TransaccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload>
          }
          findFirst: {
            args: Prisma.TransaccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload>
          }
          findMany: {
            args: Prisma.TransaccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload>[]
          }
          create: {
            args: Prisma.TransaccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload>
          }
          createMany: {
            args: Prisma.TransaccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransaccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload>
          }
          update: {
            args: Prisma.TransaccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload>
          }
          deleteMany: {
            args: Prisma.TransaccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransaccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaccionPayload>
          }
          aggregate: {
            args: Prisma.TransaccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaccion>
          }
          groupBy: {
            args: Prisma.TransaccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaccionCountArgs<ExtArgs>
            result: $Utils.Optional<TransaccionCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      ProductoUsuario: {
        payload: Prisma.$ProductoUsuarioPayload<ExtArgs>
        fields: Prisma.ProductoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.ProductoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload>
          }
          findMany: {
            args: Prisma.ProductoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload>[]
          }
          create: {
            args: Prisma.ProductoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload>
          }
          createMany: {
            args: Prisma.ProductoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload>
          }
          update: {
            args: Prisma.ProductoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.ProductoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.ProductoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductoUsuario>
          }
          groupBy: {
            args: Prisma.ProductoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoUsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    Cuenta: number
    ProductoUsuario: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cuenta?: boolean | PersonaCountOutputTypeCountCuentaArgs
    ProductoUsuario?: boolean | PersonaCountOutputTypeCountProductoUsuarioArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountCuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuentaWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountProductoUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoUsuarioWhereInput
  }


  /**
   * Count Type TipoCuentaCountOutputType
   */

  export type TipoCuentaCountOutputType = {
    cuentas: number
  }

  export type TipoCuentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas?: boolean | TipoCuentaCountOutputTypeCountCuentasArgs
  }

  // Custom InputTypes
  /**
   * TipoCuentaCountOutputType without action
   */
  export type TipoCuentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuentaCountOutputType
     */
    select?: TipoCuentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCuentaCountOutputType without action
   */
  export type TipoCuentaCountOutputTypeCountCuentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuentaWhereInput
  }


  /**
   * Count Type CuentaCountOutputType
   */

  export type CuentaCountOutputType = {
    TransaccionesOrigen: number
    TransaccionesDestino: number
  }

  export type CuentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TransaccionesOrigen?: boolean | CuentaCountOutputTypeCountTransaccionesOrigenArgs
    TransaccionesDestino?: boolean | CuentaCountOutputTypeCountTransaccionesDestinoArgs
  }

  // Custom InputTypes
  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuentaCountOutputType
     */
    select?: CuentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountTransaccionesOrigenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaccionWhereInput
  }

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountTransaccionesDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaccionWhereInput
  }


  /**
   * Count Type TipoTransaccionCountOutputType
   */

  export type TipoTransaccionCountOutputType = {
    transacciones: number
  }

  export type TipoTransaccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacciones?: boolean | TipoTransaccionCountOutputTypeCountTransaccionesArgs
  }

  // Custom InputTypes
  /**
   * TipoTransaccionCountOutputType without action
   */
  export type TipoTransaccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccionCountOutputType
     */
    select?: TipoTransaccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoTransaccionCountOutputType without action
   */
  export type TipoTransaccionCountOutputTypeCountTransaccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaccionWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    productosUsuario: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productosUsuario?: boolean | ProductoCountOutputTypeCountProductosUsuarioArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountProductosUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoUsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    secuencial: number | null
  }

  export type PersonaSumAggregateOutputType = {
    secuencial: number | null
  }

  export type PersonaMinAggregateOutputType = {
    secuencial: number | null
    tipoIdentificacion: string | null
    identificacion: string | null
    nombreUnido: string | null
    email: string | null
    localidad: string | null
    callePrincipal: string | null
    calleSecundaria: string | null
    ciudadela: string | null
    paisOrigen: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    secuencial: number | null
    tipoIdentificacion: string | null
    identificacion: string | null
    nombreUnido: string | null
    email: string | null
    localidad: string | null
    callePrincipal: string | null
    calleSecundaria: string | null
    ciudadela: string | null
    paisOrigen: string | null
  }

  export type PersonaCountAggregateOutputType = {
    secuencial: number
    tipoIdentificacion: number
    identificacion: number
    nombreUnido: number
    email: number
    localidad: number
    callePrincipal: number
    calleSecundaria: number
    ciudadela: number
    paisOrigen: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    secuencial?: true
  }

  export type PersonaSumAggregateInputType = {
    secuencial?: true
  }

  export type PersonaMinAggregateInputType = {
    secuencial?: true
    tipoIdentificacion?: true
    identificacion?: true
    nombreUnido?: true
    email?: true
    localidad?: true
    callePrincipal?: true
    calleSecundaria?: true
    ciudadela?: true
    paisOrigen?: true
  }

  export type PersonaMaxAggregateInputType = {
    secuencial?: true
    tipoIdentificacion?: true
    identificacion?: true
    nombreUnido?: true
    email?: true
    localidad?: true
    callePrincipal?: true
    calleSecundaria?: true
    ciudadela?: true
    paisOrigen?: true
  }

  export type PersonaCountAggregateInputType = {
    secuencial?: true
    tipoIdentificacion?: true
    identificacion?: true
    nombreUnido?: true
    email?: true
    localidad?: true
    callePrincipal?: true
    calleSecundaria?: true
    ciudadela?: true
    paisOrigen?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Persona to aggregate.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type PersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaWhereInput
    orderBy?: PersonaOrderByWithAggregationInput | PersonaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: PersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    secuencial: number
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends PersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type PersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    secuencial?: boolean
    tipoIdentificacion?: boolean
    identificacion?: boolean
    nombreUnido?: boolean
    email?: boolean
    localidad?: boolean
    callePrincipal?: boolean
    calleSecundaria?: boolean
    ciudadela?: boolean
    paisOrigen?: boolean
    Cuenta?: boolean | Persona$CuentaArgs<ExtArgs>
    ProductoUsuario?: boolean | Persona$ProductoUsuarioArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>


  export type PersonaSelectScalar = {
    secuencial?: boolean
    tipoIdentificacion?: boolean
    identificacion?: boolean
    nombreUnido?: boolean
    email?: boolean
    localidad?: boolean
    callePrincipal?: boolean
    calleSecundaria?: boolean
    ciudadela?: boolean
    paisOrigen?: boolean
  }

  export type PersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cuenta?: boolean | Persona$CuentaArgs<ExtArgs>
    ProductoUsuario?: boolean | Persona$ProductoUsuarioArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Persona"
    objects: {
      Cuenta: Prisma.$CuentaPayload<ExtArgs>[]
      ProductoUsuario: Prisma.$ProductoUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      secuencial: number
      tipoIdentificacion: string
      identificacion: string
      nombreUnido: string
      email: string
      localidad: string
      callePrincipal: string
      calleSecundaria: string
      ciudadela: string
      paisOrigen: string
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type PersonaGetPayload<S extends boolean | null | undefined | PersonaDefaultArgs> = $Result.GetResult<Prisma.$PersonaPayload, S>

  type PersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface PersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Persona'], meta: { name: 'Persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {PersonaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaFindUniqueArgs>(args: SelectSubset<T, PersonaFindUniqueArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PersonaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaFindFirstArgs>(args?: SelectSubset<T, PersonaFindFirstArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `secuencial`
     * const personaWithSecuencialOnly = await prisma.persona.findMany({ select: { secuencial: true } })
     * 
     */
    findMany<T extends PersonaFindManyArgs>(args?: SelectSubset<T, PersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Persona.
     * @param {PersonaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends PersonaCreateArgs>(args: SelectSubset<T, PersonaCreateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Personas.
     * @param {PersonaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaCreateManyArgs>(args?: SelectSubset<T, PersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Persona.
     * @param {PersonaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends PersonaDeleteArgs>(args: SelectSubset<T, PersonaDeleteArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Persona.
     * @param {PersonaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaUpdateArgs>(args: SelectSubset<T, PersonaUpdateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Personas.
     * @param {PersonaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaDeleteManyArgs>(args?: SelectSubset<T, PersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaUpdateManyArgs>(args: SelectSubset<T, PersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Persona.
     * @param {PersonaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends PersonaUpsertArgs>(args: SelectSubset<T, PersonaUpsertArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends PersonaCountArgs>(
      args?: Subset<T, PersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaGroupByArgs['orderBy'] }
        : { orderBy?: PersonaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Persona model
   */
  readonly fields: PersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cuenta<T extends Persona$CuentaArgs<ExtArgs> = {}>(args?: Subset<T, Persona$CuentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findMany"> | Null>
    ProductoUsuario<T extends Persona$ProductoUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Persona$ProductoUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Persona model
   */ 
  interface PersonaFieldRefs {
    readonly secuencial: FieldRef<"Persona", 'Int'>
    readonly tipoIdentificacion: FieldRef<"Persona", 'String'>
    readonly identificacion: FieldRef<"Persona", 'String'>
    readonly nombreUnido: FieldRef<"Persona", 'String'>
    readonly email: FieldRef<"Persona", 'String'>
    readonly localidad: FieldRef<"Persona", 'String'>
    readonly callePrincipal: FieldRef<"Persona", 'String'>
    readonly calleSecundaria: FieldRef<"Persona", 'String'>
    readonly ciudadela: FieldRef<"Persona", 'String'>
    readonly paisOrigen: FieldRef<"Persona", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Persona findUnique
   */
  export type PersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findUniqueOrThrow
   */
  export type PersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findFirst
   */
  export type PersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findFirstOrThrow
   */
  export type PersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findMany
   */
  export type PersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Personas to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona create
   */
  export type PersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Persona.
     */
    data: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
  }

  /**
   * Persona createMany
   */
  export type PersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Persona update
   */
  export type PersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Persona.
     */
    data: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
    /**
     * Choose, which Persona to update.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona updateMany
   */
  export type PersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
  }

  /**
   * Persona upsert
   */
  export type PersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Persona to update in case it exists.
     */
    where: PersonaWhereUniqueInput
    /**
     * In case the Persona found by the `where` argument doesn't exist, create a new Persona with this data.
     */
    create: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
    /**
     * In case the Persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
  }

  /**
   * Persona delete
   */
  export type PersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter which Persona to delete.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona deleteMany
   */
  export type PersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personas to delete
     */
    where?: PersonaWhereInput
  }

  /**
   * Persona.Cuenta
   */
  export type Persona$CuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    where?: CuentaWhereInput
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    cursor?: CuentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Persona.ProductoUsuario
   */
  export type Persona$ProductoUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    where?: ProductoUsuarioWhereInput
    orderBy?: ProductoUsuarioOrderByWithRelationInput | ProductoUsuarioOrderByWithRelationInput[]
    cursor?: ProductoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoUsuarioScalarFieldEnum | ProductoUsuarioScalarFieldEnum[]
  }

  /**
   * Persona without action
   */
  export type PersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
  }


  /**
   * Model TipoCuenta
   */

  export type AggregateTipoCuenta = {
    _count: TipoCuentaCountAggregateOutputType | null
    _avg: TipoCuentaAvgAggregateOutputType | null
    _sum: TipoCuentaSumAggregateOutputType | null
    _min: TipoCuentaMinAggregateOutputType | null
    _max: TipoCuentaMaxAggregateOutputType | null
  }

  export type TipoCuentaAvgAggregateOutputType = {
    secuencial: number | null
  }

  export type TipoCuentaSumAggregateOutputType = {
    secuencial: number | null
  }

  export type TipoCuentaMinAggregateOutputType = {
    secuencial: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoCuentaMaxAggregateOutputType = {
    secuencial: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoCuentaCountAggregateOutputType = {
    secuencial: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type TipoCuentaAvgAggregateInputType = {
    secuencial?: true
  }

  export type TipoCuentaSumAggregateInputType = {
    secuencial?: true
  }

  export type TipoCuentaMinAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoCuentaMaxAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoCuentaCountAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type TipoCuentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCuenta to aggregate.
     */
    where?: TipoCuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCuentas to fetch.
     */
    orderBy?: TipoCuentaOrderByWithRelationInput | TipoCuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoCuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoCuentas
    **/
    _count?: true | TipoCuentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoCuentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoCuentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoCuentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoCuentaMaxAggregateInputType
  }

  export type GetTipoCuentaAggregateType<T extends TipoCuentaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoCuenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoCuenta[P]>
      : GetScalarType<T[P], AggregateTipoCuenta[P]>
  }




  export type TipoCuentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoCuentaWhereInput
    orderBy?: TipoCuentaOrderByWithAggregationInput | TipoCuentaOrderByWithAggregationInput[]
    by: TipoCuentaScalarFieldEnum[] | TipoCuentaScalarFieldEnum
    having?: TipoCuentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCuentaCountAggregateInputType | true
    _avg?: TipoCuentaAvgAggregateInputType
    _sum?: TipoCuentaSumAggregateInputType
    _min?: TipoCuentaMinAggregateInputType
    _max?: TipoCuentaMaxAggregateInputType
  }

  export type TipoCuentaGroupByOutputType = {
    secuencial: number
    nombre: string
    descripcion: string
    _count: TipoCuentaCountAggregateOutputType | null
    _avg: TipoCuentaAvgAggregateOutputType | null
    _sum: TipoCuentaSumAggregateOutputType | null
    _min: TipoCuentaMinAggregateOutputType | null
    _max: TipoCuentaMaxAggregateOutputType | null
  }

  type GetTipoCuentaGroupByPayload<T extends TipoCuentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoCuentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoCuentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoCuentaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoCuentaGroupByOutputType[P]>
        }
      >
    >


  export type TipoCuentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    secuencial?: boolean
    nombre?: boolean
    descripcion?: boolean
    cuentas?: boolean | TipoCuenta$cuentasArgs<ExtArgs>
    _count?: boolean | TipoCuentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoCuenta"]>


  export type TipoCuentaSelectScalar = {
    secuencial?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type TipoCuentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas?: boolean | TipoCuenta$cuentasArgs<ExtArgs>
    _count?: boolean | TipoCuentaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoCuentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoCuenta"
    objects: {
      cuentas: Prisma.$CuentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      secuencial: number
      nombre: string
      descripcion: string
    }, ExtArgs["result"]["tipoCuenta"]>
    composites: {}
  }

  type TipoCuentaGetPayload<S extends boolean | null | undefined | TipoCuentaDefaultArgs> = $Result.GetResult<Prisma.$TipoCuentaPayload, S>

  type TipoCuentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TipoCuentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TipoCuentaCountAggregateInputType | true
    }

  export interface TipoCuentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoCuenta'], meta: { name: 'TipoCuenta' } }
    /**
     * Find zero or one TipoCuenta that matches the filter.
     * @param {TipoCuentaFindUniqueArgs} args - Arguments to find a TipoCuenta
     * @example
     * // Get one TipoCuenta
     * const tipoCuenta = await prisma.tipoCuenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoCuentaFindUniqueArgs>(args: SelectSubset<T, TipoCuentaFindUniqueArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TipoCuenta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TipoCuentaFindUniqueOrThrowArgs} args - Arguments to find a TipoCuenta
     * @example
     * // Get one TipoCuenta
     * const tipoCuenta = await prisma.tipoCuenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoCuentaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoCuentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TipoCuenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCuentaFindFirstArgs} args - Arguments to find a TipoCuenta
     * @example
     * // Get one TipoCuenta
     * const tipoCuenta = await prisma.tipoCuenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoCuentaFindFirstArgs>(args?: SelectSubset<T, TipoCuentaFindFirstArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TipoCuenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCuentaFindFirstOrThrowArgs} args - Arguments to find a TipoCuenta
     * @example
     * // Get one TipoCuenta
     * const tipoCuenta = await prisma.tipoCuenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoCuentaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoCuentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TipoCuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCuentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoCuentas
     * const tipoCuentas = await prisma.tipoCuenta.findMany()
     * 
     * // Get first 10 TipoCuentas
     * const tipoCuentas = await prisma.tipoCuenta.findMany({ take: 10 })
     * 
     * // Only select the `secuencial`
     * const tipoCuentaWithSecuencialOnly = await prisma.tipoCuenta.findMany({ select: { secuencial: true } })
     * 
     */
    findMany<T extends TipoCuentaFindManyArgs>(args?: SelectSubset<T, TipoCuentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TipoCuenta.
     * @param {TipoCuentaCreateArgs} args - Arguments to create a TipoCuenta.
     * @example
     * // Create one TipoCuenta
     * const TipoCuenta = await prisma.tipoCuenta.create({
     *   data: {
     *     // ... data to create a TipoCuenta
     *   }
     * })
     * 
     */
    create<T extends TipoCuentaCreateArgs>(args: SelectSubset<T, TipoCuentaCreateArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TipoCuentas.
     * @param {TipoCuentaCreateManyArgs} args - Arguments to create many TipoCuentas.
     * @example
     * // Create many TipoCuentas
     * const tipoCuenta = await prisma.tipoCuenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCuentaCreateManyArgs>(args?: SelectSubset<T, TipoCuentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoCuenta.
     * @param {TipoCuentaDeleteArgs} args - Arguments to delete one TipoCuenta.
     * @example
     * // Delete one TipoCuenta
     * const TipoCuenta = await prisma.tipoCuenta.delete({
     *   where: {
     *     // ... filter to delete one TipoCuenta
     *   }
     * })
     * 
     */
    delete<T extends TipoCuentaDeleteArgs>(args: SelectSubset<T, TipoCuentaDeleteArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TipoCuenta.
     * @param {TipoCuentaUpdateArgs} args - Arguments to update one TipoCuenta.
     * @example
     * // Update one TipoCuenta
     * const tipoCuenta = await prisma.tipoCuenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoCuentaUpdateArgs>(args: SelectSubset<T, TipoCuentaUpdateArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TipoCuentas.
     * @param {TipoCuentaDeleteManyArgs} args - Arguments to filter TipoCuentas to delete.
     * @example
     * // Delete a few TipoCuentas
     * const { count } = await prisma.tipoCuenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoCuentaDeleteManyArgs>(args?: SelectSubset<T, TipoCuentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoCuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCuentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoCuentas
     * const tipoCuenta = await prisma.tipoCuenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoCuentaUpdateManyArgs>(args: SelectSubset<T, TipoCuentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoCuenta.
     * @param {TipoCuentaUpsertArgs} args - Arguments to update or create a TipoCuenta.
     * @example
     * // Update or create a TipoCuenta
     * const tipoCuenta = await prisma.tipoCuenta.upsert({
     *   create: {
     *     // ... data to create a TipoCuenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoCuenta we want to update
     *   }
     * })
     */
    upsert<T extends TipoCuentaUpsertArgs>(args: SelectSubset<T, TipoCuentaUpsertArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TipoCuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCuentaCountArgs} args - Arguments to filter TipoCuentas to count.
     * @example
     * // Count the number of TipoCuentas
     * const count = await prisma.tipoCuenta.count({
     *   where: {
     *     // ... the filter for the TipoCuentas we want to count
     *   }
     * })
    **/
    count<T extends TipoCuentaCountArgs>(
      args?: Subset<T, TipoCuentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCuentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoCuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCuentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoCuentaAggregateArgs>(args: Subset<T, TipoCuentaAggregateArgs>): Prisma.PrismaPromise<GetTipoCuentaAggregateType<T>>

    /**
     * Group by TipoCuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCuentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoCuentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoCuentaGroupByArgs['orderBy'] }
        : { orderBy?: TipoCuentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoCuentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoCuentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoCuenta model
   */
  readonly fields: TipoCuentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoCuenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoCuentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuentas<T extends TipoCuenta$cuentasArgs<ExtArgs> = {}>(args?: Subset<T, TipoCuenta$cuentasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoCuenta model
   */ 
  interface TipoCuentaFieldRefs {
    readonly secuencial: FieldRef<"TipoCuenta", 'Int'>
    readonly nombre: FieldRef<"TipoCuenta", 'String'>
    readonly descripcion: FieldRef<"TipoCuenta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoCuenta findUnique
   */
  export type TipoCuentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * Filter, which TipoCuenta to fetch.
     */
    where: TipoCuentaWhereUniqueInput
  }

  /**
   * TipoCuenta findUniqueOrThrow
   */
  export type TipoCuentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * Filter, which TipoCuenta to fetch.
     */
    where: TipoCuentaWhereUniqueInput
  }

  /**
   * TipoCuenta findFirst
   */
  export type TipoCuentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * Filter, which TipoCuenta to fetch.
     */
    where?: TipoCuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCuentas to fetch.
     */
    orderBy?: TipoCuentaOrderByWithRelationInput | TipoCuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoCuentas.
     */
    cursor?: TipoCuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoCuentas.
     */
    distinct?: TipoCuentaScalarFieldEnum | TipoCuentaScalarFieldEnum[]
  }

  /**
   * TipoCuenta findFirstOrThrow
   */
  export type TipoCuentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * Filter, which TipoCuenta to fetch.
     */
    where?: TipoCuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCuentas to fetch.
     */
    orderBy?: TipoCuentaOrderByWithRelationInput | TipoCuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoCuentas.
     */
    cursor?: TipoCuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoCuentas.
     */
    distinct?: TipoCuentaScalarFieldEnum | TipoCuentaScalarFieldEnum[]
  }

  /**
   * TipoCuenta findMany
   */
  export type TipoCuentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * Filter, which TipoCuentas to fetch.
     */
    where?: TipoCuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCuentas to fetch.
     */
    orderBy?: TipoCuentaOrderByWithRelationInput | TipoCuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoCuentas.
     */
    cursor?: TipoCuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCuentas.
     */
    skip?: number
    distinct?: TipoCuentaScalarFieldEnum | TipoCuentaScalarFieldEnum[]
  }

  /**
   * TipoCuenta create
   */
  export type TipoCuentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoCuenta.
     */
    data: XOR<TipoCuentaCreateInput, TipoCuentaUncheckedCreateInput>
  }

  /**
   * TipoCuenta createMany
   */
  export type TipoCuentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoCuentas.
     */
    data: TipoCuentaCreateManyInput | TipoCuentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoCuenta update
   */
  export type TipoCuentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoCuenta.
     */
    data: XOR<TipoCuentaUpdateInput, TipoCuentaUncheckedUpdateInput>
    /**
     * Choose, which TipoCuenta to update.
     */
    where: TipoCuentaWhereUniqueInput
  }

  /**
   * TipoCuenta updateMany
   */
  export type TipoCuentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoCuentas.
     */
    data: XOR<TipoCuentaUpdateManyMutationInput, TipoCuentaUncheckedUpdateManyInput>
    /**
     * Filter which TipoCuentas to update
     */
    where?: TipoCuentaWhereInput
  }

  /**
   * TipoCuenta upsert
   */
  export type TipoCuentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoCuenta to update in case it exists.
     */
    where: TipoCuentaWhereUniqueInput
    /**
     * In case the TipoCuenta found by the `where` argument doesn't exist, create a new TipoCuenta with this data.
     */
    create: XOR<TipoCuentaCreateInput, TipoCuentaUncheckedCreateInput>
    /**
     * In case the TipoCuenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoCuentaUpdateInput, TipoCuentaUncheckedUpdateInput>
  }

  /**
   * TipoCuenta delete
   */
  export type TipoCuentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    /**
     * Filter which TipoCuenta to delete.
     */
    where: TipoCuentaWhereUniqueInput
  }

  /**
   * TipoCuenta deleteMany
   */
  export type TipoCuentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCuentas to delete
     */
    where?: TipoCuentaWhereInput
  }

  /**
   * TipoCuenta.cuentas
   */
  export type TipoCuenta$cuentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    where?: CuentaWhereInput
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    cursor?: CuentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * TipoCuenta without action
   */
  export type TipoCuentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
  }


  /**
   * Model Cuenta
   */

  export type AggregateCuenta = {
    _count: CuentaCountAggregateOutputType | null
    _avg: CuentaAvgAggregateOutputType | null
    _sum: CuentaSumAggregateOutputType | null
    _min: CuentaMinAggregateOutputType | null
    _max: CuentaMaxAggregateOutputType | null
  }

  export type CuentaAvgAggregateOutputType = {
    secuencial: number | null
    saldo: number | null
    personaSecuencial: number | null
    tipoCuentaSecuencial: number | null
  }

  export type CuentaSumAggregateOutputType = {
    secuencial: number | null
    saldo: number | null
    personaSecuencial: number | null
    tipoCuentaSecuencial: number | null
  }

  export type CuentaMinAggregateOutputType = {
    secuencial: number | null
    numeroCuenta: string | null
    saldo: number | null
    estado: $Enums.EstadoCuenta | null
    fechaApertura: Date | null
    personaSecuencial: number | null
    tipoCuentaSecuencial: number | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type CuentaMaxAggregateOutputType = {
    secuencial: number | null
    numeroCuenta: string | null
    saldo: number | null
    estado: $Enums.EstadoCuenta | null
    fechaApertura: Date | null
    personaSecuencial: number | null
    tipoCuentaSecuencial: number | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type CuentaCountAggregateOutputType = {
    secuencial: number
    numeroCuenta: number
    saldo: number
    estado: number
    fechaApertura: number
    personaSecuencial: number
    tipoCuentaSecuencial: number
    fechaCreacion: number
    fechaActualizacion: number
    _all: number
  }


  export type CuentaAvgAggregateInputType = {
    secuencial?: true
    saldo?: true
    personaSecuencial?: true
    tipoCuentaSecuencial?: true
  }

  export type CuentaSumAggregateInputType = {
    secuencial?: true
    saldo?: true
    personaSecuencial?: true
    tipoCuentaSecuencial?: true
  }

  export type CuentaMinAggregateInputType = {
    secuencial?: true
    numeroCuenta?: true
    saldo?: true
    estado?: true
    fechaApertura?: true
    personaSecuencial?: true
    tipoCuentaSecuencial?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type CuentaMaxAggregateInputType = {
    secuencial?: true
    numeroCuenta?: true
    saldo?: true
    estado?: true
    fechaApertura?: true
    personaSecuencial?: true
    tipoCuentaSecuencial?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type CuentaCountAggregateInputType = {
    secuencial?: true
    numeroCuenta?: true
    saldo?: true
    estado?: true
    fechaApertura?: true
    personaSecuencial?: true
    tipoCuentaSecuencial?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    _all?: true
  }

  export type CuentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuenta to aggregate.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuentas
    **/
    _count?: true | CuentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuentaMaxAggregateInputType
  }

  export type GetCuentaAggregateType<T extends CuentaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuenta[P]>
      : GetScalarType<T[P], AggregateCuenta[P]>
  }




  export type CuentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuentaWhereInput
    orderBy?: CuentaOrderByWithAggregationInput | CuentaOrderByWithAggregationInput[]
    by: CuentaScalarFieldEnum[] | CuentaScalarFieldEnum
    having?: CuentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuentaCountAggregateInputType | true
    _avg?: CuentaAvgAggregateInputType
    _sum?: CuentaSumAggregateInputType
    _min?: CuentaMinAggregateInputType
    _max?: CuentaMaxAggregateInputType
  }

  export type CuentaGroupByOutputType = {
    secuencial: number
    numeroCuenta: string
    saldo: number
    estado: $Enums.EstadoCuenta
    fechaApertura: Date
    personaSecuencial: number
    tipoCuentaSecuencial: number | null
    fechaCreacion: Date
    fechaActualizacion: Date
    _count: CuentaCountAggregateOutputType | null
    _avg: CuentaAvgAggregateOutputType | null
    _sum: CuentaSumAggregateOutputType | null
    _min: CuentaMinAggregateOutputType | null
    _max: CuentaMaxAggregateOutputType | null
  }

  type GetCuentaGroupByPayload<T extends CuentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuentaGroupByOutputType[P]>
            : GetScalarType<T[P], CuentaGroupByOutputType[P]>
        }
      >
    >


  export type CuentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    secuencial?: boolean
    numeroCuenta?: boolean
    saldo?: boolean
    estado?: boolean
    fechaApertura?: boolean
    personaSecuencial?: boolean
    tipoCuentaSecuencial?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    TipoCuenta?: boolean | Cuenta$TipoCuentaArgs<ExtArgs>
    TransaccionesOrigen?: boolean | Cuenta$TransaccionesOrigenArgs<ExtArgs>
    TransaccionesDestino?: boolean | Cuenta$TransaccionesDestinoArgs<ExtArgs>
    _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuenta"]>


  export type CuentaSelectScalar = {
    secuencial?: boolean
    numeroCuenta?: boolean
    saldo?: boolean
    estado?: boolean
    fechaApertura?: boolean
    personaSecuencial?: boolean
    tipoCuentaSecuencial?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }

  export type CuentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    TipoCuenta?: boolean | Cuenta$TipoCuentaArgs<ExtArgs>
    TransaccionesOrigen?: boolean | Cuenta$TransaccionesOrigenArgs<ExtArgs>
    TransaccionesDestino?: boolean | Cuenta$TransaccionesDestinoArgs<ExtArgs>
    _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CuentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuenta"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs>
      TipoCuenta: Prisma.$TipoCuentaPayload<ExtArgs> | null
      TransaccionesOrigen: Prisma.$TransaccionPayload<ExtArgs>[]
      TransaccionesDestino: Prisma.$TransaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      secuencial: number
      numeroCuenta: string
      saldo: number
      estado: $Enums.EstadoCuenta
      fechaApertura: Date
      personaSecuencial: number
      tipoCuentaSecuencial: number | null
      fechaCreacion: Date
      fechaActualizacion: Date
    }, ExtArgs["result"]["cuenta"]>
    composites: {}
  }

  type CuentaGetPayload<S extends boolean | null | undefined | CuentaDefaultArgs> = $Result.GetResult<Prisma.$CuentaPayload, S>

  type CuentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CuentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CuentaCountAggregateInputType | true
    }

  export interface CuentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuenta'], meta: { name: 'Cuenta' } }
    /**
     * Find zero or one Cuenta that matches the filter.
     * @param {CuentaFindUniqueArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuentaFindUniqueArgs>(args: SelectSubset<T, CuentaFindUniqueArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cuenta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CuentaFindUniqueOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuentaFindUniqueOrThrowArgs>(args: SelectSubset<T, CuentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cuenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindFirstArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuentaFindFirstArgs>(args?: SelectSubset<T, CuentaFindFirstArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cuenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindFirstOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuentaFindFirstOrThrowArgs>(args?: SelectSubset<T, CuentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuentas
     * const cuentas = await prisma.cuenta.findMany()
     * 
     * // Get first 10 Cuentas
     * const cuentas = await prisma.cuenta.findMany({ take: 10 })
     * 
     * // Only select the `secuencial`
     * const cuentaWithSecuencialOnly = await prisma.cuenta.findMany({ select: { secuencial: true } })
     * 
     */
    findMany<T extends CuentaFindManyArgs>(args?: SelectSubset<T, CuentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cuenta.
     * @param {CuentaCreateArgs} args - Arguments to create a Cuenta.
     * @example
     * // Create one Cuenta
     * const Cuenta = await prisma.cuenta.create({
     *   data: {
     *     // ... data to create a Cuenta
     *   }
     * })
     * 
     */
    create<T extends CuentaCreateArgs>(args: SelectSubset<T, CuentaCreateArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cuentas.
     * @param {CuentaCreateManyArgs} args - Arguments to create many Cuentas.
     * @example
     * // Create many Cuentas
     * const cuenta = await prisma.cuenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuentaCreateManyArgs>(args?: SelectSubset<T, CuentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cuenta.
     * @param {CuentaDeleteArgs} args - Arguments to delete one Cuenta.
     * @example
     * // Delete one Cuenta
     * const Cuenta = await prisma.cuenta.delete({
     *   where: {
     *     // ... filter to delete one Cuenta
     *   }
     * })
     * 
     */
    delete<T extends CuentaDeleteArgs>(args: SelectSubset<T, CuentaDeleteArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cuenta.
     * @param {CuentaUpdateArgs} args - Arguments to update one Cuenta.
     * @example
     * // Update one Cuenta
     * const cuenta = await prisma.cuenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuentaUpdateArgs>(args: SelectSubset<T, CuentaUpdateArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cuentas.
     * @param {CuentaDeleteManyArgs} args - Arguments to filter Cuentas to delete.
     * @example
     * // Delete a few Cuentas
     * const { count } = await prisma.cuenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuentaDeleteManyArgs>(args?: SelectSubset<T, CuentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuentas
     * const cuenta = await prisma.cuenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuentaUpdateManyArgs>(args: SelectSubset<T, CuentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuenta.
     * @param {CuentaUpsertArgs} args - Arguments to update or create a Cuenta.
     * @example
     * // Update or create a Cuenta
     * const cuenta = await prisma.cuenta.upsert({
     *   create: {
     *     // ... data to create a Cuenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuenta we want to update
     *   }
     * })
     */
    upsert<T extends CuentaUpsertArgs>(args: SelectSubset<T, CuentaUpsertArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaCountArgs} args - Arguments to filter Cuentas to count.
     * @example
     * // Count the number of Cuentas
     * const count = await prisma.cuenta.count({
     *   where: {
     *     // ... the filter for the Cuentas we want to count
     *   }
     * })
    **/
    count<T extends CuentaCountArgs>(
      args?: Subset<T, CuentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuentaAggregateArgs>(args: Subset<T, CuentaAggregateArgs>): Prisma.PrismaPromise<GetCuentaAggregateType<T>>

    /**
     * Group by Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CuentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuentaGroupByArgs['orderBy'] }
        : { orderBy?: CuentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CuentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuenta model
   */
  readonly fields: CuentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    TipoCuenta<T extends Cuenta$TipoCuentaArgs<ExtArgs> = {}>(args?: Subset<T, Cuenta$TipoCuentaArgs<ExtArgs>>): Prisma__TipoCuentaClient<$Result.GetResult<Prisma.$TipoCuentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    TransaccionesOrigen<T extends Cuenta$TransaccionesOrigenArgs<ExtArgs> = {}>(args?: Subset<T, Cuenta$TransaccionesOrigenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findMany"> | Null>
    TransaccionesDestino<T extends Cuenta$TransaccionesDestinoArgs<ExtArgs> = {}>(args?: Subset<T, Cuenta$TransaccionesDestinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cuenta model
   */ 
  interface CuentaFieldRefs {
    readonly secuencial: FieldRef<"Cuenta", 'Int'>
    readonly numeroCuenta: FieldRef<"Cuenta", 'String'>
    readonly saldo: FieldRef<"Cuenta", 'Float'>
    readonly estado: FieldRef<"Cuenta", 'EstadoCuenta'>
    readonly fechaApertura: FieldRef<"Cuenta", 'DateTime'>
    readonly personaSecuencial: FieldRef<"Cuenta", 'Int'>
    readonly tipoCuentaSecuencial: FieldRef<"Cuenta", 'Int'>
    readonly fechaCreacion: FieldRef<"Cuenta", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Cuenta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cuenta findUnique
   */
  export type CuentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta findUniqueOrThrow
   */
  export type CuentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta findFirst
   */
  export type CuentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuentas.
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Cuenta findFirstOrThrow
   */
  export type CuentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuentas.
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Cuenta findMany
   */
  export type CuentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuentas to fetch.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuentas.
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Cuenta create
   */
  export type CuentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cuenta.
     */
    data: XOR<CuentaCreateInput, CuentaUncheckedCreateInput>
  }

  /**
   * Cuenta createMany
   */
  export type CuentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cuentas.
     */
    data: CuentaCreateManyInput | CuentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cuenta update
   */
  export type CuentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cuenta.
     */
    data: XOR<CuentaUpdateInput, CuentaUncheckedUpdateInput>
    /**
     * Choose, which Cuenta to update.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta updateMany
   */
  export type CuentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuentas.
     */
    data: XOR<CuentaUpdateManyMutationInput, CuentaUncheckedUpdateManyInput>
    /**
     * Filter which Cuentas to update
     */
    where?: CuentaWhereInput
  }

  /**
   * Cuenta upsert
   */
  export type CuentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cuenta to update in case it exists.
     */
    where: CuentaWhereUniqueInput
    /**
     * In case the Cuenta found by the `where` argument doesn't exist, create a new Cuenta with this data.
     */
    create: XOR<CuentaCreateInput, CuentaUncheckedCreateInput>
    /**
     * In case the Cuenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuentaUpdateInput, CuentaUncheckedUpdateInput>
  }

  /**
   * Cuenta delete
   */
  export type CuentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter which Cuenta to delete.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta deleteMany
   */
  export type CuentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuentas to delete
     */
    where?: CuentaWhereInput
  }

  /**
   * Cuenta.TipoCuenta
   */
  export type Cuenta$TipoCuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCuenta
     */
    select?: TipoCuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCuentaInclude<ExtArgs> | null
    where?: TipoCuentaWhereInput
  }

  /**
   * Cuenta.TransaccionesOrigen
   */
  export type Cuenta$TransaccionesOrigenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    where?: TransaccionWhereInput
    orderBy?: TransaccionOrderByWithRelationInput | TransaccionOrderByWithRelationInput[]
    cursor?: TransaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * Cuenta.TransaccionesDestino
   */
  export type Cuenta$TransaccionesDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    where?: TransaccionWhereInput
    orderBy?: TransaccionOrderByWithRelationInput | TransaccionOrderByWithRelationInput[]
    cursor?: TransaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * Cuenta without action
   */
  export type CuentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
  }


  /**
   * Model TipoTransaccion
   */

  export type AggregateTipoTransaccion = {
    _count: TipoTransaccionCountAggregateOutputType | null
    _avg: TipoTransaccionAvgAggregateOutputType | null
    _sum: TipoTransaccionSumAggregateOutputType | null
    _min: TipoTransaccionMinAggregateOutputType | null
    _max: TipoTransaccionMaxAggregateOutputType | null
  }

  export type TipoTransaccionAvgAggregateOutputType = {
    secuencial: number | null
  }

  export type TipoTransaccionSumAggregateOutputType = {
    secuencial: number | null
  }

  export type TipoTransaccionMinAggregateOutputType = {
    secuencial: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoTransaccionMaxAggregateOutputType = {
    secuencial: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoTransaccionCountAggregateOutputType = {
    secuencial: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type TipoTransaccionAvgAggregateInputType = {
    secuencial?: true
  }

  export type TipoTransaccionSumAggregateInputType = {
    secuencial?: true
  }

  export type TipoTransaccionMinAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoTransaccionMaxAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoTransaccionCountAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type TipoTransaccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoTransaccion to aggregate.
     */
    where?: TipoTransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransaccions to fetch.
     */
    orderBy?: TipoTransaccionOrderByWithRelationInput | TipoTransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoTransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoTransaccions
    **/
    _count?: true | TipoTransaccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoTransaccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoTransaccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoTransaccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoTransaccionMaxAggregateInputType
  }

  export type GetTipoTransaccionAggregateType<T extends TipoTransaccionAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoTransaccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoTransaccion[P]>
      : GetScalarType<T[P], AggregateTipoTransaccion[P]>
  }




  export type TipoTransaccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoTransaccionWhereInput
    orderBy?: TipoTransaccionOrderByWithAggregationInput | TipoTransaccionOrderByWithAggregationInput[]
    by: TipoTransaccionScalarFieldEnum[] | TipoTransaccionScalarFieldEnum
    having?: TipoTransaccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoTransaccionCountAggregateInputType | true
    _avg?: TipoTransaccionAvgAggregateInputType
    _sum?: TipoTransaccionSumAggregateInputType
    _min?: TipoTransaccionMinAggregateInputType
    _max?: TipoTransaccionMaxAggregateInputType
  }

  export type TipoTransaccionGroupByOutputType = {
    secuencial: number
    nombre: string
    descripcion: string | null
    _count: TipoTransaccionCountAggregateOutputType | null
    _avg: TipoTransaccionAvgAggregateOutputType | null
    _sum: TipoTransaccionSumAggregateOutputType | null
    _min: TipoTransaccionMinAggregateOutputType | null
    _max: TipoTransaccionMaxAggregateOutputType | null
  }

  type GetTipoTransaccionGroupByPayload<T extends TipoTransaccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoTransaccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoTransaccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoTransaccionGroupByOutputType[P]>
            : GetScalarType<T[P], TipoTransaccionGroupByOutputType[P]>
        }
      >
    >


  export type TipoTransaccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    secuencial?: boolean
    nombre?: boolean
    descripcion?: boolean
    transacciones?: boolean | TipoTransaccion$transaccionesArgs<ExtArgs>
    _count?: boolean | TipoTransaccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoTransaccion"]>


  export type TipoTransaccionSelectScalar = {
    secuencial?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type TipoTransaccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacciones?: boolean | TipoTransaccion$transaccionesArgs<ExtArgs>
    _count?: boolean | TipoTransaccionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoTransaccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoTransaccion"
    objects: {
      transacciones: Prisma.$TransaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      secuencial: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["tipoTransaccion"]>
    composites: {}
  }

  type TipoTransaccionGetPayload<S extends boolean | null | undefined | TipoTransaccionDefaultArgs> = $Result.GetResult<Prisma.$TipoTransaccionPayload, S>

  type TipoTransaccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TipoTransaccionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TipoTransaccionCountAggregateInputType | true
    }

  export interface TipoTransaccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoTransaccion'], meta: { name: 'TipoTransaccion' } }
    /**
     * Find zero or one TipoTransaccion that matches the filter.
     * @param {TipoTransaccionFindUniqueArgs} args - Arguments to find a TipoTransaccion
     * @example
     * // Get one TipoTransaccion
     * const tipoTransaccion = await prisma.tipoTransaccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoTransaccionFindUniqueArgs>(args: SelectSubset<T, TipoTransaccionFindUniqueArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TipoTransaccion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TipoTransaccionFindUniqueOrThrowArgs} args - Arguments to find a TipoTransaccion
     * @example
     * // Get one TipoTransaccion
     * const tipoTransaccion = await prisma.tipoTransaccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoTransaccionFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoTransaccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TipoTransaccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransaccionFindFirstArgs} args - Arguments to find a TipoTransaccion
     * @example
     * // Get one TipoTransaccion
     * const tipoTransaccion = await prisma.tipoTransaccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoTransaccionFindFirstArgs>(args?: SelectSubset<T, TipoTransaccionFindFirstArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TipoTransaccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransaccionFindFirstOrThrowArgs} args - Arguments to find a TipoTransaccion
     * @example
     * // Get one TipoTransaccion
     * const tipoTransaccion = await prisma.tipoTransaccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoTransaccionFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoTransaccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TipoTransaccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransaccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoTransaccions
     * const tipoTransaccions = await prisma.tipoTransaccion.findMany()
     * 
     * // Get first 10 TipoTransaccions
     * const tipoTransaccions = await prisma.tipoTransaccion.findMany({ take: 10 })
     * 
     * // Only select the `secuencial`
     * const tipoTransaccionWithSecuencialOnly = await prisma.tipoTransaccion.findMany({ select: { secuencial: true } })
     * 
     */
    findMany<T extends TipoTransaccionFindManyArgs>(args?: SelectSubset<T, TipoTransaccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TipoTransaccion.
     * @param {TipoTransaccionCreateArgs} args - Arguments to create a TipoTransaccion.
     * @example
     * // Create one TipoTransaccion
     * const TipoTransaccion = await prisma.tipoTransaccion.create({
     *   data: {
     *     // ... data to create a TipoTransaccion
     *   }
     * })
     * 
     */
    create<T extends TipoTransaccionCreateArgs>(args: SelectSubset<T, TipoTransaccionCreateArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TipoTransaccions.
     * @param {TipoTransaccionCreateManyArgs} args - Arguments to create many TipoTransaccions.
     * @example
     * // Create many TipoTransaccions
     * const tipoTransaccion = await prisma.tipoTransaccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoTransaccionCreateManyArgs>(args?: SelectSubset<T, TipoTransaccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoTransaccion.
     * @param {TipoTransaccionDeleteArgs} args - Arguments to delete one TipoTransaccion.
     * @example
     * // Delete one TipoTransaccion
     * const TipoTransaccion = await prisma.tipoTransaccion.delete({
     *   where: {
     *     // ... filter to delete one TipoTransaccion
     *   }
     * })
     * 
     */
    delete<T extends TipoTransaccionDeleteArgs>(args: SelectSubset<T, TipoTransaccionDeleteArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TipoTransaccion.
     * @param {TipoTransaccionUpdateArgs} args - Arguments to update one TipoTransaccion.
     * @example
     * // Update one TipoTransaccion
     * const tipoTransaccion = await prisma.tipoTransaccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoTransaccionUpdateArgs>(args: SelectSubset<T, TipoTransaccionUpdateArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TipoTransaccions.
     * @param {TipoTransaccionDeleteManyArgs} args - Arguments to filter TipoTransaccions to delete.
     * @example
     * // Delete a few TipoTransaccions
     * const { count } = await prisma.tipoTransaccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoTransaccionDeleteManyArgs>(args?: SelectSubset<T, TipoTransaccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoTransaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransaccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoTransaccions
     * const tipoTransaccion = await prisma.tipoTransaccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoTransaccionUpdateManyArgs>(args: SelectSubset<T, TipoTransaccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoTransaccion.
     * @param {TipoTransaccionUpsertArgs} args - Arguments to update or create a TipoTransaccion.
     * @example
     * // Update or create a TipoTransaccion
     * const tipoTransaccion = await prisma.tipoTransaccion.upsert({
     *   create: {
     *     // ... data to create a TipoTransaccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoTransaccion we want to update
     *   }
     * })
     */
    upsert<T extends TipoTransaccionUpsertArgs>(args: SelectSubset<T, TipoTransaccionUpsertArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TipoTransaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransaccionCountArgs} args - Arguments to filter TipoTransaccions to count.
     * @example
     * // Count the number of TipoTransaccions
     * const count = await prisma.tipoTransaccion.count({
     *   where: {
     *     // ... the filter for the TipoTransaccions we want to count
     *   }
     * })
    **/
    count<T extends TipoTransaccionCountArgs>(
      args?: Subset<T, TipoTransaccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoTransaccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoTransaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransaccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoTransaccionAggregateArgs>(args: Subset<T, TipoTransaccionAggregateArgs>): Prisma.PrismaPromise<GetTipoTransaccionAggregateType<T>>

    /**
     * Group by TipoTransaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransaccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoTransaccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoTransaccionGroupByArgs['orderBy'] }
        : { orderBy?: TipoTransaccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoTransaccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoTransaccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoTransaccion model
   */
  readonly fields: TipoTransaccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoTransaccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoTransaccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transacciones<T extends TipoTransaccion$transaccionesArgs<ExtArgs> = {}>(args?: Subset<T, TipoTransaccion$transaccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoTransaccion model
   */ 
  interface TipoTransaccionFieldRefs {
    readonly secuencial: FieldRef<"TipoTransaccion", 'Int'>
    readonly nombre: FieldRef<"TipoTransaccion", 'String'>
    readonly descripcion: FieldRef<"TipoTransaccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoTransaccion findUnique
   */
  export type TipoTransaccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransaccion to fetch.
     */
    where: TipoTransaccionWhereUniqueInput
  }

  /**
   * TipoTransaccion findUniqueOrThrow
   */
  export type TipoTransaccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransaccion to fetch.
     */
    where: TipoTransaccionWhereUniqueInput
  }

  /**
   * TipoTransaccion findFirst
   */
  export type TipoTransaccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransaccion to fetch.
     */
    where?: TipoTransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransaccions to fetch.
     */
    orderBy?: TipoTransaccionOrderByWithRelationInput | TipoTransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoTransaccions.
     */
    cursor?: TipoTransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoTransaccions.
     */
    distinct?: TipoTransaccionScalarFieldEnum | TipoTransaccionScalarFieldEnum[]
  }

  /**
   * TipoTransaccion findFirstOrThrow
   */
  export type TipoTransaccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransaccion to fetch.
     */
    where?: TipoTransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransaccions to fetch.
     */
    orderBy?: TipoTransaccionOrderByWithRelationInput | TipoTransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoTransaccions.
     */
    cursor?: TipoTransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoTransaccions.
     */
    distinct?: TipoTransaccionScalarFieldEnum | TipoTransaccionScalarFieldEnum[]
  }

  /**
   * TipoTransaccion findMany
   */
  export type TipoTransaccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransaccions to fetch.
     */
    where?: TipoTransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransaccions to fetch.
     */
    orderBy?: TipoTransaccionOrderByWithRelationInput | TipoTransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoTransaccions.
     */
    cursor?: TipoTransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransaccions.
     */
    skip?: number
    distinct?: TipoTransaccionScalarFieldEnum | TipoTransaccionScalarFieldEnum[]
  }

  /**
   * TipoTransaccion create
   */
  export type TipoTransaccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoTransaccion.
     */
    data: XOR<TipoTransaccionCreateInput, TipoTransaccionUncheckedCreateInput>
  }

  /**
   * TipoTransaccion createMany
   */
  export type TipoTransaccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoTransaccions.
     */
    data: TipoTransaccionCreateManyInput | TipoTransaccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoTransaccion update
   */
  export type TipoTransaccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoTransaccion.
     */
    data: XOR<TipoTransaccionUpdateInput, TipoTransaccionUncheckedUpdateInput>
    /**
     * Choose, which TipoTransaccion to update.
     */
    where: TipoTransaccionWhereUniqueInput
  }

  /**
   * TipoTransaccion updateMany
   */
  export type TipoTransaccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoTransaccions.
     */
    data: XOR<TipoTransaccionUpdateManyMutationInput, TipoTransaccionUncheckedUpdateManyInput>
    /**
     * Filter which TipoTransaccions to update
     */
    where?: TipoTransaccionWhereInput
  }

  /**
   * TipoTransaccion upsert
   */
  export type TipoTransaccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoTransaccion to update in case it exists.
     */
    where: TipoTransaccionWhereUniqueInput
    /**
     * In case the TipoTransaccion found by the `where` argument doesn't exist, create a new TipoTransaccion with this data.
     */
    create: XOR<TipoTransaccionCreateInput, TipoTransaccionUncheckedCreateInput>
    /**
     * In case the TipoTransaccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoTransaccionUpdateInput, TipoTransaccionUncheckedUpdateInput>
  }

  /**
   * TipoTransaccion delete
   */
  export type TipoTransaccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    /**
     * Filter which TipoTransaccion to delete.
     */
    where: TipoTransaccionWhereUniqueInput
  }

  /**
   * TipoTransaccion deleteMany
   */
  export type TipoTransaccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoTransaccions to delete
     */
    where?: TipoTransaccionWhereInput
  }

  /**
   * TipoTransaccion.transacciones
   */
  export type TipoTransaccion$transaccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    where?: TransaccionWhereInput
    orderBy?: TransaccionOrderByWithRelationInput | TransaccionOrderByWithRelationInput[]
    cursor?: TransaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * TipoTransaccion without action
   */
  export type TipoTransaccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
  }


  /**
   * Model Transaccion
   */

  export type AggregateTransaccion = {
    _count: TransaccionCountAggregateOutputType | null
    _avg: TransaccionAvgAggregateOutputType | null
    _sum: TransaccionSumAggregateOutputType | null
    _min: TransaccionMinAggregateOutputType | null
    _max: TransaccionMaxAggregateOutputType | null
  }

  export type TransaccionAvgAggregateOutputType = {
    secuencial: number | null
    monto: number | null
    tipoTransaccionSecuencial: number | null
    cuentaOrigenId: number | null
    cuentaDestinoId: number | null
  }

  export type TransaccionSumAggregateOutputType = {
    secuencial: number | null
    monto: number | null
    tipoTransaccionSecuencial: number | null
    cuentaOrigenId: number | null
    cuentaDestinoId: number | null
  }

  export type TransaccionMinAggregateOutputType = {
    secuencial: number | null
    monto: number | null
    fechaTransaccion: Date | null
    estado: $Enums.EstadoTransaccion | null
    descripcion: string | null
    tipoTransaccionSecuencial: number | null
    cuentaOrigenId: number | null
    cuentaDestinoId: number | null
  }

  export type TransaccionMaxAggregateOutputType = {
    secuencial: number | null
    monto: number | null
    fechaTransaccion: Date | null
    estado: $Enums.EstadoTransaccion | null
    descripcion: string | null
    tipoTransaccionSecuencial: number | null
    cuentaOrigenId: number | null
    cuentaDestinoId: number | null
  }

  export type TransaccionCountAggregateOutputType = {
    secuencial: number
    monto: number
    fechaTransaccion: number
    estado: number
    descripcion: number
    tipoTransaccionSecuencial: number
    cuentaOrigenId: number
    cuentaDestinoId: number
    _all: number
  }


  export type TransaccionAvgAggregateInputType = {
    secuencial?: true
    monto?: true
    tipoTransaccionSecuencial?: true
    cuentaOrigenId?: true
    cuentaDestinoId?: true
  }

  export type TransaccionSumAggregateInputType = {
    secuencial?: true
    monto?: true
    tipoTransaccionSecuencial?: true
    cuentaOrigenId?: true
    cuentaDestinoId?: true
  }

  export type TransaccionMinAggregateInputType = {
    secuencial?: true
    monto?: true
    fechaTransaccion?: true
    estado?: true
    descripcion?: true
    tipoTransaccionSecuencial?: true
    cuentaOrigenId?: true
    cuentaDestinoId?: true
  }

  export type TransaccionMaxAggregateInputType = {
    secuencial?: true
    monto?: true
    fechaTransaccion?: true
    estado?: true
    descripcion?: true
    tipoTransaccionSecuencial?: true
    cuentaOrigenId?: true
    cuentaDestinoId?: true
  }

  export type TransaccionCountAggregateInputType = {
    secuencial?: true
    monto?: true
    fechaTransaccion?: true
    estado?: true
    descripcion?: true
    tipoTransaccionSecuencial?: true
    cuentaOrigenId?: true
    cuentaDestinoId?: true
    _all?: true
  }

  export type TransaccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaccion to aggregate.
     */
    where?: TransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaccions to fetch.
     */
    orderBy?: TransaccionOrderByWithRelationInput | TransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaccions
    **/
    _count?: true | TransaccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaccionMaxAggregateInputType
  }

  export type GetTransaccionAggregateType<T extends TransaccionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaccion[P]>
      : GetScalarType<T[P], AggregateTransaccion[P]>
  }




  export type TransaccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaccionWhereInput
    orderBy?: TransaccionOrderByWithAggregationInput | TransaccionOrderByWithAggregationInput[]
    by: TransaccionScalarFieldEnum[] | TransaccionScalarFieldEnum
    having?: TransaccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaccionCountAggregateInputType | true
    _avg?: TransaccionAvgAggregateInputType
    _sum?: TransaccionSumAggregateInputType
    _min?: TransaccionMinAggregateInputType
    _max?: TransaccionMaxAggregateInputType
  }

  export type TransaccionGroupByOutputType = {
    secuencial: number
    monto: number
    fechaTransaccion: Date
    estado: $Enums.EstadoTransaccion
    descripcion: string | null
    tipoTransaccionSecuencial: number | null
    cuentaOrigenId: number | null
    cuentaDestinoId: number | null
    _count: TransaccionCountAggregateOutputType | null
    _avg: TransaccionAvgAggregateOutputType | null
    _sum: TransaccionSumAggregateOutputType | null
    _min: TransaccionMinAggregateOutputType | null
    _max: TransaccionMaxAggregateOutputType | null
  }

  type GetTransaccionGroupByPayload<T extends TransaccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaccionGroupByOutputType[P]>
            : GetScalarType<T[P], TransaccionGroupByOutputType[P]>
        }
      >
    >


  export type TransaccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    secuencial?: boolean
    monto?: boolean
    fechaTransaccion?: boolean
    estado?: boolean
    descripcion?: boolean
    tipoTransaccionSecuencial?: boolean
    cuentaOrigenId?: boolean
    cuentaDestinoId?: boolean
    TipoTransaccion?: boolean | Transaccion$TipoTransaccionArgs<ExtArgs>
    CuentaOrigen?: boolean | Transaccion$CuentaOrigenArgs<ExtArgs>
    CuentaDestino?: boolean | Transaccion$CuentaDestinoArgs<ExtArgs>
  }, ExtArgs["result"]["transaccion"]>


  export type TransaccionSelectScalar = {
    secuencial?: boolean
    monto?: boolean
    fechaTransaccion?: boolean
    estado?: boolean
    descripcion?: boolean
    tipoTransaccionSecuencial?: boolean
    cuentaOrigenId?: boolean
    cuentaDestinoId?: boolean
  }

  export type TransaccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TipoTransaccion?: boolean | Transaccion$TipoTransaccionArgs<ExtArgs>
    CuentaOrigen?: boolean | Transaccion$CuentaOrigenArgs<ExtArgs>
    CuentaDestino?: boolean | Transaccion$CuentaDestinoArgs<ExtArgs>
  }

  export type $TransaccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaccion"
    objects: {
      TipoTransaccion: Prisma.$TipoTransaccionPayload<ExtArgs> | null
      CuentaOrigen: Prisma.$CuentaPayload<ExtArgs> | null
      CuentaDestino: Prisma.$CuentaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      secuencial: number
      monto: number
      fechaTransaccion: Date
      estado: $Enums.EstadoTransaccion
      descripcion: string | null
      tipoTransaccionSecuencial: number | null
      cuentaOrigenId: number | null
      cuentaDestinoId: number | null
    }, ExtArgs["result"]["transaccion"]>
    composites: {}
  }

  type TransaccionGetPayload<S extends boolean | null | undefined | TransaccionDefaultArgs> = $Result.GetResult<Prisma.$TransaccionPayload, S>

  type TransaccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransaccionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransaccionCountAggregateInputType | true
    }

  export interface TransaccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaccion'], meta: { name: 'Transaccion' } }
    /**
     * Find zero or one Transaccion that matches the filter.
     * @param {TransaccionFindUniqueArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaccionFindUniqueArgs>(args: SelectSubset<T, TransaccionFindUniqueArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaccion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransaccionFindUniqueOrThrowArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaccionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionFindFirstArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaccionFindFirstArgs>(args?: SelectSubset<T, TransaccionFindFirstArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionFindFirstOrThrowArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaccionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transaccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaccions
     * const transaccions = await prisma.transaccion.findMany()
     * 
     * // Get first 10 Transaccions
     * const transaccions = await prisma.transaccion.findMany({ take: 10 })
     * 
     * // Only select the `secuencial`
     * const transaccionWithSecuencialOnly = await prisma.transaccion.findMany({ select: { secuencial: true } })
     * 
     */
    findMany<T extends TransaccionFindManyArgs>(args?: SelectSubset<T, TransaccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaccion.
     * @param {TransaccionCreateArgs} args - Arguments to create a Transaccion.
     * @example
     * // Create one Transaccion
     * const Transaccion = await prisma.transaccion.create({
     *   data: {
     *     // ... data to create a Transaccion
     *   }
     * })
     * 
     */
    create<T extends TransaccionCreateArgs>(args: SelectSubset<T, TransaccionCreateArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transaccions.
     * @param {TransaccionCreateManyArgs} args - Arguments to create many Transaccions.
     * @example
     * // Create many Transaccions
     * const transaccion = await prisma.transaccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaccionCreateManyArgs>(args?: SelectSubset<T, TransaccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaccion.
     * @param {TransaccionDeleteArgs} args - Arguments to delete one Transaccion.
     * @example
     * // Delete one Transaccion
     * const Transaccion = await prisma.transaccion.delete({
     *   where: {
     *     // ... filter to delete one Transaccion
     *   }
     * })
     * 
     */
    delete<T extends TransaccionDeleteArgs>(args: SelectSubset<T, TransaccionDeleteArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaccion.
     * @param {TransaccionUpdateArgs} args - Arguments to update one Transaccion.
     * @example
     * // Update one Transaccion
     * const transaccion = await prisma.transaccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaccionUpdateArgs>(args: SelectSubset<T, TransaccionUpdateArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transaccions.
     * @param {TransaccionDeleteManyArgs} args - Arguments to filter Transaccions to delete.
     * @example
     * // Delete a few Transaccions
     * const { count } = await prisma.transaccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaccionDeleteManyArgs>(args?: SelectSubset<T, TransaccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaccions
     * const transaccion = await prisma.transaccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaccionUpdateManyArgs>(args: SelectSubset<T, TransaccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaccion.
     * @param {TransaccionUpsertArgs} args - Arguments to update or create a Transaccion.
     * @example
     * // Update or create a Transaccion
     * const transaccion = await prisma.transaccion.upsert({
     *   create: {
     *     // ... data to create a Transaccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaccion we want to update
     *   }
     * })
     */
    upsert<T extends TransaccionUpsertArgs>(args: SelectSubset<T, TransaccionUpsertArgs<ExtArgs>>): Prisma__TransaccionClient<$Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionCountArgs} args - Arguments to filter Transaccions to count.
     * @example
     * // Count the number of Transaccions
     * const count = await prisma.transaccion.count({
     *   where: {
     *     // ... the filter for the Transaccions we want to count
     *   }
     * })
    **/
    count<T extends TransaccionCountArgs>(
      args?: Subset<T, TransaccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaccionAggregateArgs>(args: Subset<T, TransaccionAggregateArgs>): Prisma.PrismaPromise<GetTransaccionAggregateType<T>>

    /**
     * Group by Transaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransaccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaccionGroupByArgs['orderBy'] }
        : { orderBy?: TransaccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransaccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaccion model
   */
  readonly fields: TransaccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TipoTransaccion<T extends Transaccion$TipoTransaccionArgs<ExtArgs> = {}>(args?: Subset<T, Transaccion$TipoTransaccionArgs<ExtArgs>>): Prisma__TipoTransaccionClient<$Result.GetResult<Prisma.$TipoTransaccionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    CuentaOrigen<T extends Transaccion$CuentaOrigenArgs<ExtArgs> = {}>(args?: Subset<T, Transaccion$CuentaOrigenArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    CuentaDestino<T extends Transaccion$CuentaDestinoArgs<ExtArgs> = {}>(args?: Subset<T, Transaccion$CuentaDestinoArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaccion model
   */ 
  interface TransaccionFieldRefs {
    readonly secuencial: FieldRef<"Transaccion", 'Int'>
    readonly monto: FieldRef<"Transaccion", 'Float'>
    readonly fechaTransaccion: FieldRef<"Transaccion", 'DateTime'>
    readonly estado: FieldRef<"Transaccion", 'EstadoTransaccion'>
    readonly descripcion: FieldRef<"Transaccion", 'String'>
    readonly tipoTransaccionSecuencial: FieldRef<"Transaccion", 'Int'>
    readonly cuentaOrigenId: FieldRef<"Transaccion", 'Int'>
    readonly cuentaDestinoId: FieldRef<"Transaccion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaccion findUnique
   */
  export type TransaccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * Filter, which Transaccion to fetch.
     */
    where: TransaccionWhereUniqueInput
  }

  /**
   * Transaccion findUniqueOrThrow
   */
  export type TransaccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * Filter, which Transaccion to fetch.
     */
    where: TransaccionWhereUniqueInput
  }

  /**
   * Transaccion findFirst
   */
  export type TransaccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * Filter, which Transaccion to fetch.
     */
    where?: TransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaccions to fetch.
     */
    orderBy?: TransaccionOrderByWithRelationInput | TransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaccions.
     */
    cursor?: TransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaccions.
     */
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * Transaccion findFirstOrThrow
   */
  export type TransaccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * Filter, which Transaccion to fetch.
     */
    where?: TransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaccions to fetch.
     */
    orderBy?: TransaccionOrderByWithRelationInput | TransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaccions.
     */
    cursor?: TransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaccions.
     */
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * Transaccion findMany
   */
  export type TransaccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * Filter, which Transaccions to fetch.
     */
    where?: TransaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaccions to fetch.
     */
    orderBy?: TransaccionOrderByWithRelationInput | TransaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaccions.
     */
    cursor?: TransaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaccions.
     */
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * Transaccion create
   */
  export type TransaccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaccion.
     */
    data: XOR<TransaccionCreateInput, TransaccionUncheckedCreateInput>
  }

  /**
   * Transaccion createMany
   */
  export type TransaccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaccions.
     */
    data: TransaccionCreateManyInput | TransaccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaccion update
   */
  export type TransaccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaccion.
     */
    data: XOR<TransaccionUpdateInput, TransaccionUncheckedUpdateInput>
    /**
     * Choose, which Transaccion to update.
     */
    where: TransaccionWhereUniqueInput
  }

  /**
   * Transaccion updateMany
   */
  export type TransaccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaccions.
     */
    data: XOR<TransaccionUpdateManyMutationInput, TransaccionUncheckedUpdateManyInput>
    /**
     * Filter which Transaccions to update
     */
    where?: TransaccionWhereInput
  }

  /**
   * Transaccion upsert
   */
  export type TransaccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaccion to update in case it exists.
     */
    where: TransaccionWhereUniqueInput
    /**
     * In case the Transaccion found by the `where` argument doesn't exist, create a new Transaccion with this data.
     */
    create: XOR<TransaccionCreateInput, TransaccionUncheckedCreateInput>
    /**
     * In case the Transaccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaccionUpdateInput, TransaccionUncheckedUpdateInput>
  }

  /**
   * Transaccion delete
   */
  export type TransaccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
    /**
     * Filter which Transaccion to delete.
     */
    where: TransaccionWhereUniqueInput
  }

  /**
   * Transaccion deleteMany
   */
  export type TransaccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaccions to delete
     */
    where?: TransaccionWhereInput
  }

  /**
   * Transaccion.TipoTransaccion
   */
  export type Transaccion$TipoTransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransaccion
     */
    select?: TipoTransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransaccionInclude<ExtArgs> | null
    where?: TipoTransaccionWhereInput
  }

  /**
   * Transaccion.CuentaOrigen
   */
  export type Transaccion$CuentaOrigenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    where?: CuentaWhereInput
  }

  /**
   * Transaccion.CuentaDestino
   */
  export type Transaccion$CuentaDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    where?: CuentaWhereInput
  }

  /**
   * Transaccion without action
   */
  export type TransaccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaccion
     */
    select?: TransaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaccionInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    secuencial: number | null
  }

  export type ProductoSumAggregateOutputType = {
    secuencial: number | null
  }

  export type ProductoMinAggregateOutputType = {
    secuencial: number | null
    nombre: string | null
    descripcion: string | null
    tipoProducto: $Enums.TipoProducto | null
  }

  export type ProductoMaxAggregateOutputType = {
    secuencial: number | null
    nombre: string | null
    descripcion: string | null
    tipoProducto: $Enums.TipoProducto | null
  }

  export type ProductoCountAggregateOutputType = {
    secuencial: number
    nombre: number
    descripcion: number
    tipoProducto: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    secuencial?: true
  }

  export type ProductoSumAggregateInputType = {
    secuencial?: true
  }

  export type ProductoMinAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
    tipoProducto?: true
  }

  export type ProductoMaxAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
    tipoProducto?: true
  }

  export type ProductoCountAggregateInputType = {
    secuencial?: true
    nombre?: true
    descripcion?: true
    tipoProducto?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    secuencial: number
    nombre: string
    descripcion: string | null
    tipoProducto: $Enums.TipoProducto
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    secuencial?: boolean
    nombre?: boolean
    descripcion?: boolean
    tipoProducto?: boolean
    productosUsuario?: boolean | Producto$productosUsuarioArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>


  export type ProductoSelectScalar = {
    secuencial?: boolean
    nombre?: boolean
    descripcion?: boolean
    tipoProducto?: boolean
  }

  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productosUsuario?: boolean | Producto$productosUsuarioArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      productosUsuario: Prisma.$ProductoUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      secuencial: number
      nombre: string
      descripcion: string | null
      tipoProducto: $Enums.TipoProducto
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `secuencial`
     * const productoWithSecuencialOnly = await prisma.producto.findMany({ select: { secuencial: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productosUsuario<T extends Producto$productosUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Producto$productosUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */ 
  interface ProductoFieldRefs {
    readonly secuencial: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly tipoProducto: FieldRef<"Producto", 'TipoProducto'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
  }

  /**
   * Producto.productosUsuario
   */
  export type Producto$productosUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    where?: ProductoUsuarioWhereInput
    orderBy?: ProductoUsuarioOrderByWithRelationInput | ProductoUsuarioOrderByWithRelationInput[]
    cursor?: ProductoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoUsuarioScalarFieldEnum | ProductoUsuarioScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model ProductoUsuario
   */

  export type AggregateProductoUsuario = {
    _count: ProductoUsuarioCountAggregateOutputType | null
    _avg: ProductoUsuarioAvgAggregateOutputType | null
    _sum: ProductoUsuarioSumAggregateOutputType | null
    _min: ProductoUsuarioMinAggregateOutputType | null
    _max: ProductoUsuarioMaxAggregateOutputType | null
  }

  export type ProductoUsuarioAvgAggregateOutputType = {
    secuencial: number | null
    usuarioId: number | null
    productoId: number | null
  }

  export type ProductoUsuarioSumAggregateOutputType = {
    secuencial: number | null
    usuarioId: number | null
    productoId: number | null
  }

  export type ProductoUsuarioMinAggregateOutputType = {
    secuencial: number | null
    usuarioId: number | null
    productoId: number | null
    fechaAdquisicion: Date | null
    estado: $Enums.EstadoProducto | null
  }

  export type ProductoUsuarioMaxAggregateOutputType = {
    secuencial: number | null
    usuarioId: number | null
    productoId: number | null
    fechaAdquisicion: Date | null
    estado: $Enums.EstadoProducto | null
  }

  export type ProductoUsuarioCountAggregateOutputType = {
    secuencial: number
    usuarioId: number
    productoId: number
    fechaAdquisicion: number
    estado: number
    detalles: number
    _all: number
  }


  export type ProductoUsuarioAvgAggregateInputType = {
    secuencial?: true
    usuarioId?: true
    productoId?: true
  }

  export type ProductoUsuarioSumAggregateInputType = {
    secuencial?: true
    usuarioId?: true
    productoId?: true
  }

  export type ProductoUsuarioMinAggregateInputType = {
    secuencial?: true
    usuarioId?: true
    productoId?: true
    fechaAdquisicion?: true
    estado?: true
  }

  export type ProductoUsuarioMaxAggregateInputType = {
    secuencial?: true
    usuarioId?: true
    productoId?: true
    fechaAdquisicion?: true
    estado?: true
  }

  export type ProductoUsuarioCountAggregateInputType = {
    secuencial?: true
    usuarioId?: true
    productoId?: true
    fechaAdquisicion?: true
    estado?: true
    detalles?: true
    _all?: true
  }

  export type ProductoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoUsuario to aggregate.
     */
    where?: ProductoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoUsuarios to fetch.
     */
    orderBy?: ProductoUsuarioOrderByWithRelationInput | ProductoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductoUsuarios
    **/
    _count?: true | ProductoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoUsuarioMaxAggregateInputType
  }

  export type GetProductoUsuarioAggregateType<T extends ProductoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateProductoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductoUsuario[P]>
      : GetScalarType<T[P], AggregateProductoUsuario[P]>
  }




  export type ProductoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoUsuarioWhereInput
    orderBy?: ProductoUsuarioOrderByWithAggregationInput | ProductoUsuarioOrderByWithAggregationInput[]
    by: ProductoUsuarioScalarFieldEnum[] | ProductoUsuarioScalarFieldEnum
    having?: ProductoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoUsuarioCountAggregateInputType | true
    _avg?: ProductoUsuarioAvgAggregateInputType
    _sum?: ProductoUsuarioSumAggregateInputType
    _min?: ProductoUsuarioMinAggregateInputType
    _max?: ProductoUsuarioMaxAggregateInputType
  }

  export type ProductoUsuarioGroupByOutputType = {
    secuencial: number
    usuarioId: number
    productoId: number
    fechaAdquisicion: Date
    estado: $Enums.EstadoProducto
    detalles: JsonValue | null
    _count: ProductoUsuarioCountAggregateOutputType | null
    _avg: ProductoUsuarioAvgAggregateOutputType | null
    _sum: ProductoUsuarioSumAggregateOutputType | null
    _min: ProductoUsuarioMinAggregateOutputType | null
    _max: ProductoUsuarioMaxAggregateOutputType | null
  }

  type GetProductoUsuarioGroupByPayload<T extends ProductoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type ProductoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    secuencial?: boolean
    usuarioId?: boolean
    productoId?: boolean
    fechaAdquisicion?: boolean
    estado?: boolean
    detalles?: boolean
    usuario?: boolean | PersonaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productoUsuario"]>


  export type ProductoUsuarioSelectScalar = {
    secuencial?: boolean
    usuarioId?: boolean
    productoId?: boolean
    fechaAdquisicion?: boolean
    estado?: boolean
    detalles?: boolean
  }

  export type ProductoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PersonaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ProductoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductoUsuario"
    objects: {
      usuario: Prisma.$PersonaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      secuencial: number
      usuarioId: number
      productoId: number
      fechaAdquisicion: Date
      estado: $Enums.EstadoProducto
      detalles: Prisma.JsonValue | null
    }, ExtArgs["result"]["productoUsuario"]>
    composites: {}
  }

  type ProductoUsuarioGetPayload<S extends boolean | null | undefined | ProductoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$ProductoUsuarioPayload, S>

  type ProductoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductoUsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductoUsuarioCountAggregateInputType | true
    }

  export interface ProductoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductoUsuario'], meta: { name: 'ProductoUsuario' } }
    /**
     * Find zero or one ProductoUsuario that matches the filter.
     * @param {ProductoUsuarioFindUniqueArgs} args - Arguments to find a ProductoUsuario
     * @example
     * // Get one ProductoUsuario
     * const productoUsuario = await prisma.productoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoUsuarioFindUniqueArgs>(args: SelectSubset<T, ProductoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductoUsuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a ProductoUsuario
     * @example
     * // Get one ProductoUsuario
     * const productoUsuario = await prisma.productoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUsuarioFindFirstArgs} args - Arguments to find a ProductoUsuario
     * @example
     * // Get one ProductoUsuario
     * const productoUsuario = await prisma.productoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoUsuarioFindFirstArgs>(args?: SelectSubset<T, ProductoUsuarioFindFirstArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUsuarioFindFirstOrThrowArgs} args - Arguments to find a ProductoUsuario
     * @example
     * // Get one ProductoUsuario
     * const productoUsuario = await prisma.productoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoUsuarios
     * const productoUsuarios = await prisma.productoUsuario.findMany()
     * 
     * // Get first 10 ProductoUsuarios
     * const productoUsuarios = await prisma.productoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `secuencial`
     * const productoUsuarioWithSecuencialOnly = await prisma.productoUsuario.findMany({ select: { secuencial: true } })
     * 
     */
    findMany<T extends ProductoUsuarioFindManyArgs>(args?: SelectSubset<T, ProductoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductoUsuario.
     * @param {ProductoUsuarioCreateArgs} args - Arguments to create a ProductoUsuario.
     * @example
     * // Create one ProductoUsuario
     * const ProductoUsuario = await prisma.productoUsuario.create({
     *   data: {
     *     // ... data to create a ProductoUsuario
     *   }
     * })
     * 
     */
    create<T extends ProductoUsuarioCreateArgs>(args: SelectSubset<T, ProductoUsuarioCreateArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductoUsuarios.
     * @param {ProductoUsuarioCreateManyArgs} args - Arguments to create many ProductoUsuarios.
     * @example
     * // Create many ProductoUsuarios
     * const productoUsuario = await prisma.productoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoUsuarioCreateManyArgs>(args?: SelectSubset<T, ProductoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductoUsuario.
     * @param {ProductoUsuarioDeleteArgs} args - Arguments to delete one ProductoUsuario.
     * @example
     * // Delete one ProductoUsuario
     * const ProductoUsuario = await prisma.productoUsuario.delete({
     *   where: {
     *     // ... filter to delete one ProductoUsuario
     *   }
     * })
     * 
     */
    delete<T extends ProductoUsuarioDeleteArgs>(args: SelectSubset<T, ProductoUsuarioDeleteArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductoUsuario.
     * @param {ProductoUsuarioUpdateArgs} args - Arguments to update one ProductoUsuario.
     * @example
     * // Update one ProductoUsuario
     * const productoUsuario = await prisma.productoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUsuarioUpdateArgs>(args: SelectSubset<T, ProductoUsuarioUpdateArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductoUsuarios.
     * @param {ProductoUsuarioDeleteManyArgs} args - Arguments to filter ProductoUsuarios to delete.
     * @example
     * // Delete a few ProductoUsuarios
     * const { count } = await prisma.productoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoUsuarioDeleteManyArgs>(args?: SelectSubset<T, ProductoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoUsuarios
     * const productoUsuario = await prisma.productoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUsuarioUpdateManyArgs>(args: SelectSubset<T, ProductoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductoUsuario.
     * @param {ProductoUsuarioUpsertArgs} args - Arguments to update or create a ProductoUsuario.
     * @example
     * // Update or create a ProductoUsuario
     * const productoUsuario = await prisma.productoUsuario.upsert({
     *   create: {
     *     // ... data to create a ProductoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUsuarioUpsertArgs>(args: SelectSubset<T, ProductoUsuarioUpsertArgs<ExtArgs>>): Prisma__ProductoUsuarioClient<$Result.GetResult<Prisma.$ProductoUsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUsuarioCountArgs} args - Arguments to filter ProductoUsuarios to count.
     * @example
     * // Count the number of ProductoUsuarios
     * const count = await prisma.productoUsuario.count({
     *   where: {
     *     // ... the filter for the ProductoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends ProductoUsuarioCountArgs>(
      args?: Subset<T, ProductoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoUsuarioAggregateArgs>(args: Subset<T, ProductoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetProductoUsuarioAggregateType<T>>

    /**
     * Group by ProductoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: ProductoUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductoUsuario model
   */
  readonly fields: ProductoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductoUsuario model
   */ 
  interface ProductoUsuarioFieldRefs {
    readonly secuencial: FieldRef<"ProductoUsuario", 'Int'>
    readonly usuarioId: FieldRef<"ProductoUsuario", 'Int'>
    readonly productoId: FieldRef<"ProductoUsuario", 'Int'>
    readonly fechaAdquisicion: FieldRef<"ProductoUsuario", 'DateTime'>
    readonly estado: FieldRef<"ProductoUsuario", 'EstadoProducto'>
    readonly detalles: FieldRef<"ProductoUsuario", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProductoUsuario findUnique
   */
  export type ProductoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProductoUsuario to fetch.
     */
    where: ProductoUsuarioWhereUniqueInput
  }

  /**
   * ProductoUsuario findUniqueOrThrow
   */
  export type ProductoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProductoUsuario to fetch.
     */
    where: ProductoUsuarioWhereUniqueInput
  }

  /**
   * ProductoUsuario findFirst
   */
  export type ProductoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProductoUsuario to fetch.
     */
    where?: ProductoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoUsuarios to fetch.
     */
    orderBy?: ProductoUsuarioOrderByWithRelationInput | ProductoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoUsuarios.
     */
    cursor?: ProductoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoUsuarios.
     */
    distinct?: ProductoUsuarioScalarFieldEnum | ProductoUsuarioScalarFieldEnum[]
  }

  /**
   * ProductoUsuario findFirstOrThrow
   */
  export type ProductoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProductoUsuario to fetch.
     */
    where?: ProductoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoUsuarios to fetch.
     */
    orderBy?: ProductoUsuarioOrderByWithRelationInput | ProductoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoUsuarios.
     */
    cursor?: ProductoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoUsuarios.
     */
    distinct?: ProductoUsuarioScalarFieldEnum | ProductoUsuarioScalarFieldEnum[]
  }

  /**
   * ProductoUsuario findMany
   */
  export type ProductoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProductoUsuarios to fetch.
     */
    where?: ProductoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoUsuarios to fetch.
     */
    orderBy?: ProductoUsuarioOrderByWithRelationInput | ProductoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductoUsuarios.
     */
    cursor?: ProductoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoUsuarios.
     */
    skip?: number
    distinct?: ProductoUsuarioScalarFieldEnum | ProductoUsuarioScalarFieldEnum[]
  }

  /**
   * ProductoUsuario create
   */
  export type ProductoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductoUsuario.
     */
    data: XOR<ProductoUsuarioCreateInput, ProductoUsuarioUncheckedCreateInput>
  }

  /**
   * ProductoUsuario createMany
   */
  export type ProductoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoUsuarios.
     */
    data: ProductoUsuarioCreateManyInput | ProductoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductoUsuario update
   */
  export type ProductoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductoUsuario.
     */
    data: XOR<ProductoUsuarioUpdateInput, ProductoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which ProductoUsuario to update.
     */
    where: ProductoUsuarioWhereUniqueInput
  }

  /**
   * ProductoUsuario updateMany
   */
  export type ProductoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoUsuarios.
     */
    data: XOR<ProductoUsuarioUpdateManyMutationInput, ProductoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ProductoUsuarios to update
     */
    where?: ProductoUsuarioWhereInput
  }

  /**
   * ProductoUsuario upsert
   */
  export type ProductoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductoUsuario to update in case it exists.
     */
    where: ProductoUsuarioWhereUniqueInput
    /**
     * In case the ProductoUsuario found by the `where` argument doesn't exist, create a new ProductoUsuario with this data.
     */
    create: XOR<ProductoUsuarioCreateInput, ProductoUsuarioUncheckedCreateInput>
    /**
     * In case the ProductoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUsuarioUpdateInput, ProductoUsuarioUncheckedUpdateInput>
  }

  /**
   * ProductoUsuario delete
   */
  export type ProductoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which ProductoUsuario to delete.
     */
    where: ProductoUsuarioWhereUniqueInput
  }

  /**
   * ProductoUsuario deleteMany
   */
  export type ProductoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoUsuarios to delete
     */
    where?: ProductoUsuarioWhereInput
  }

  /**
   * ProductoUsuario without action
   */
  export type ProductoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoUsuario
     */
    select?: ProductoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoUsuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonaScalarFieldEnum: {
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

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const TipoCuentaScalarFieldEnum: {
    secuencial: 'secuencial',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type TipoCuentaScalarFieldEnum = (typeof TipoCuentaScalarFieldEnum)[keyof typeof TipoCuentaScalarFieldEnum]


  export const CuentaScalarFieldEnum: {
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

  export type CuentaScalarFieldEnum = (typeof CuentaScalarFieldEnum)[keyof typeof CuentaScalarFieldEnum]


  export const TipoTransaccionScalarFieldEnum: {
    secuencial: 'secuencial',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type TipoTransaccionScalarFieldEnum = (typeof TipoTransaccionScalarFieldEnum)[keyof typeof TipoTransaccionScalarFieldEnum]


  export const TransaccionScalarFieldEnum: {
    secuencial: 'secuencial',
    monto: 'monto',
    fechaTransaccion: 'fechaTransaccion',
    estado: 'estado',
    descripcion: 'descripcion',
    tipoTransaccionSecuencial: 'tipoTransaccionSecuencial',
    cuentaOrigenId: 'cuentaOrigenId',
    cuentaDestinoId: 'cuentaDestinoId'
  };

  export type TransaccionScalarFieldEnum = (typeof TransaccionScalarFieldEnum)[keyof typeof TransaccionScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    secuencial: 'secuencial',
    nombre: 'nombre',
    descripcion: 'descripcion',
    tipoProducto: 'tipoProducto'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const ProductoUsuarioScalarFieldEnum: {
    secuencial: 'secuencial',
    usuarioId: 'usuarioId',
    productoId: 'productoId',
    fechaAdquisicion: 'fechaAdquisicion',
    estado: 'estado',
    detalles: 'detalles'
  };

  export type ProductoUsuarioScalarFieldEnum = (typeof ProductoUsuarioScalarFieldEnum)[keyof typeof ProductoUsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'EstadoCuenta'
   */
  export type EnumEstadoCuentaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCuenta'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'EstadoTransaccion'
   */
  export type EnumEstadoTransaccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTransaccion'>
    


  /**
   * Reference to a field of type 'TipoProducto'
   */
  export type EnumTipoProductoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoProducto'>
    


  /**
   * Reference to a field of type 'EstadoProducto'
   */
  export type EnumEstadoProductoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoProducto'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type PersonaWhereInput = {
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    secuencial?: IntFilter<"Persona"> | number
    tipoIdentificacion?: StringFilter<"Persona"> | string
    identificacion?: StringFilter<"Persona"> | string
    nombreUnido?: StringFilter<"Persona"> | string
    email?: StringFilter<"Persona"> | string
    localidad?: StringFilter<"Persona"> | string
    callePrincipal?: StringFilter<"Persona"> | string
    calleSecundaria?: StringFilter<"Persona"> | string
    ciudadela?: StringFilter<"Persona"> | string
    paisOrigen?: StringFilter<"Persona"> | string
    Cuenta?: CuentaListRelationFilter
    ProductoUsuario?: ProductoUsuarioListRelationFilter
  }

  export type PersonaOrderByWithRelationInput = {
    secuencial?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    callePrincipal?: SortOrder
    calleSecundaria?: SortOrder
    ciudadela?: SortOrder
    paisOrigen?: SortOrder
    Cuenta?: CuentaOrderByRelationAggregateInput
    ProductoUsuario?: ProductoUsuarioOrderByRelationAggregateInput
  }

  export type PersonaWhereUniqueInput = Prisma.AtLeast<{
    secuencial?: number
    identificacion?: string
    Index_principal?: PersonaIndex_principalCompoundUniqueInput
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    tipoIdentificacion?: StringFilter<"Persona"> | string
    nombreUnido?: StringFilter<"Persona"> | string
    email?: StringFilter<"Persona"> | string
    localidad?: StringFilter<"Persona"> | string
    callePrincipal?: StringFilter<"Persona"> | string
    calleSecundaria?: StringFilter<"Persona"> | string
    ciudadela?: StringFilter<"Persona"> | string
    paisOrigen?: StringFilter<"Persona"> | string
    Cuenta?: CuentaListRelationFilter
    ProductoUsuario?: ProductoUsuarioListRelationFilter
  }, "secuencial" | "identificacion" | "Index_principal">

  export type PersonaOrderByWithAggregationInput = {
    secuencial?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    callePrincipal?: SortOrder
    calleSecundaria?: SortOrder
    ciudadela?: SortOrder
    paisOrigen?: SortOrder
    _count?: PersonaCountOrderByAggregateInput
    _avg?: PersonaAvgOrderByAggregateInput
    _max?: PersonaMaxOrderByAggregateInput
    _min?: PersonaMinOrderByAggregateInput
    _sum?: PersonaSumOrderByAggregateInput
  }

  export type PersonaScalarWhereWithAggregatesInput = {
    AND?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    OR?: PersonaScalarWhereWithAggregatesInput[]
    NOT?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    secuencial?: IntWithAggregatesFilter<"Persona"> | number
    tipoIdentificacion?: StringWithAggregatesFilter<"Persona"> | string
    identificacion?: StringWithAggregatesFilter<"Persona"> | string
    nombreUnido?: StringWithAggregatesFilter<"Persona"> | string
    email?: StringWithAggregatesFilter<"Persona"> | string
    localidad?: StringWithAggregatesFilter<"Persona"> | string
    callePrincipal?: StringWithAggregatesFilter<"Persona"> | string
    calleSecundaria?: StringWithAggregatesFilter<"Persona"> | string
    ciudadela?: StringWithAggregatesFilter<"Persona"> | string
    paisOrigen?: StringWithAggregatesFilter<"Persona"> | string
  }

  export type TipoCuentaWhereInput = {
    AND?: TipoCuentaWhereInput | TipoCuentaWhereInput[]
    OR?: TipoCuentaWhereInput[]
    NOT?: TipoCuentaWhereInput | TipoCuentaWhereInput[]
    secuencial?: IntFilter<"TipoCuenta"> | number
    nombre?: StringFilter<"TipoCuenta"> | string
    descripcion?: StringFilter<"TipoCuenta"> | string
    cuentas?: CuentaListRelationFilter
  }

  export type TipoCuentaOrderByWithRelationInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cuentas?: CuentaOrderByRelationAggregateInput
  }

  export type TipoCuentaWhereUniqueInput = Prisma.AtLeast<{
    secuencial?: number
    AND?: TipoCuentaWhereInput | TipoCuentaWhereInput[]
    OR?: TipoCuentaWhereInput[]
    NOT?: TipoCuentaWhereInput | TipoCuentaWhereInput[]
    nombre?: StringFilter<"TipoCuenta"> | string
    descripcion?: StringFilter<"TipoCuenta"> | string
    cuentas?: CuentaListRelationFilter
  }, "secuencial">

  export type TipoCuentaOrderByWithAggregationInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    _count?: TipoCuentaCountOrderByAggregateInput
    _avg?: TipoCuentaAvgOrderByAggregateInput
    _max?: TipoCuentaMaxOrderByAggregateInput
    _min?: TipoCuentaMinOrderByAggregateInput
    _sum?: TipoCuentaSumOrderByAggregateInput
  }

  export type TipoCuentaScalarWhereWithAggregatesInput = {
    AND?: TipoCuentaScalarWhereWithAggregatesInput | TipoCuentaScalarWhereWithAggregatesInput[]
    OR?: TipoCuentaScalarWhereWithAggregatesInput[]
    NOT?: TipoCuentaScalarWhereWithAggregatesInput | TipoCuentaScalarWhereWithAggregatesInput[]
    secuencial?: IntWithAggregatesFilter<"TipoCuenta"> | number
    nombre?: StringWithAggregatesFilter<"TipoCuenta"> | string
    descripcion?: StringWithAggregatesFilter<"TipoCuenta"> | string
  }

  export type CuentaWhereInput = {
    AND?: CuentaWhereInput | CuentaWhereInput[]
    OR?: CuentaWhereInput[]
    NOT?: CuentaWhereInput | CuentaWhereInput[]
    secuencial?: IntFilter<"Cuenta"> | number
    numeroCuenta?: StringFilter<"Cuenta"> | string
    saldo?: FloatFilter<"Cuenta"> | number
    estado?: EnumEstadoCuentaFilter<"Cuenta"> | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFilter<"Cuenta"> | Date | string
    personaSecuencial?: IntFilter<"Cuenta"> | number
    tipoCuentaSecuencial?: IntNullableFilter<"Cuenta"> | number | null
    fechaCreacion?: DateTimeFilter<"Cuenta"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Cuenta"> | Date | string
    persona?: XOR<PersonaRelationFilter, PersonaWhereInput>
    TipoCuenta?: XOR<TipoCuentaNullableRelationFilter, TipoCuentaWhereInput> | null
    TransaccionesOrigen?: TransaccionListRelationFilter
    TransaccionesDestino?: TransaccionListRelationFilter
  }

  export type CuentaOrderByWithRelationInput = {
    secuencial?: SortOrder
    numeroCuenta?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    fechaApertura?: SortOrder
    personaSecuencial?: SortOrder
    tipoCuentaSecuencial?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    persona?: PersonaOrderByWithRelationInput
    TipoCuenta?: TipoCuentaOrderByWithRelationInput
    TransaccionesOrigen?: TransaccionOrderByRelationAggregateInput
    TransaccionesDestino?: TransaccionOrderByRelationAggregateInput
  }

  export type CuentaWhereUniqueInput = Prisma.AtLeast<{
    secuencial?: number
    numeroCuenta?: string
    AND?: CuentaWhereInput | CuentaWhereInput[]
    OR?: CuentaWhereInput[]
    NOT?: CuentaWhereInput | CuentaWhereInput[]
    saldo?: FloatFilter<"Cuenta"> | number
    estado?: EnumEstadoCuentaFilter<"Cuenta"> | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFilter<"Cuenta"> | Date | string
    personaSecuencial?: IntFilter<"Cuenta"> | number
    tipoCuentaSecuencial?: IntNullableFilter<"Cuenta"> | number | null
    fechaCreacion?: DateTimeFilter<"Cuenta"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Cuenta"> | Date | string
    persona?: XOR<PersonaRelationFilter, PersonaWhereInput>
    TipoCuenta?: XOR<TipoCuentaNullableRelationFilter, TipoCuentaWhereInput> | null
    TransaccionesOrigen?: TransaccionListRelationFilter
    TransaccionesDestino?: TransaccionListRelationFilter
  }, "secuencial" | "numeroCuenta">

  export type CuentaOrderByWithAggregationInput = {
    secuencial?: SortOrder
    numeroCuenta?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    fechaApertura?: SortOrder
    personaSecuencial?: SortOrder
    tipoCuentaSecuencial?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: CuentaCountOrderByAggregateInput
    _avg?: CuentaAvgOrderByAggregateInput
    _max?: CuentaMaxOrderByAggregateInput
    _min?: CuentaMinOrderByAggregateInput
    _sum?: CuentaSumOrderByAggregateInput
  }

  export type CuentaScalarWhereWithAggregatesInput = {
    AND?: CuentaScalarWhereWithAggregatesInput | CuentaScalarWhereWithAggregatesInput[]
    OR?: CuentaScalarWhereWithAggregatesInput[]
    NOT?: CuentaScalarWhereWithAggregatesInput | CuentaScalarWhereWithAggregatesInput[]
    secuencial?: IntWithAggregatesFilter<"Cuenta"> | number
    numeroCuenta?: StringWithAggregatesFilter<"Cuenta"> | string
    saldo?: FloatWithAggregatesFilter<"Cuenta"> | number
    estado?: EnumEstadoCuentaWithAggregatesFilter<"Cuenta"> | $Enums.EstadoCuenta
    fechaApertura?: DateTimeWithAggregatesFilter<"Cuenta"> | Date | string
    personaSecuencial?: IntWithAggregatesFilter<"Cuenta"> | number
    tipoCuentaSecuencial?: IntNullableWithAggregatesFilter<"Cuenta"> | number | null
    fechaCreacion?: DateTimeWithAggregatesFilter<"Cuenta"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"Cuenta"> | Date | string
  }

  export type TipoTransaccionWhereInput = {
    AND?: TipoTransaccionWhereInput | TipoTransaccionWhereInput[]
    OR?: TipoTransaccionWhereInput[]
    NOT?: TipoTransaccionWhereInput | TipoTransaccionWhereInput[]
    secuencial?: IntFilter<"TipoTransaccion"> | number
    nombre?: StringFilter<"TipoTransaccion"> | string
    descripcion?: StringNullableFilter<"TipoTransaccion"> | string | null
    transacciones?: TransaccionListRelationFilter
  }

  export type TipoTransaccionOrderByWithRelationInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    transacciones?: TransaccionOrderByRelationAggregateInput
  }

  export type TipoTransaccionWhereUniqueInput = Prisma.AtLeast<{
    secuencial?: number
    AND?: TipoTransaccionWhereInput | TipoTransaccionWhereInput[]
    OR?: TipoTransaccionWhereInput[]
    NOT?: TipoTransaccionWhereInput | TipoTransaccionWhereInput[]
    nombre?: StringFilter<"TipoTransaccion"> | string
    descripcion?: StringNullableFilter<"TipoTransaccion"> | string | null
    transacciones?: TransaccionListRelationFilter
  }, "secuencial">

  export type TipoTransaccionOrderByWithAggregationInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: TipoTransaccionCountOrderByAggregateInput
    _avg?: TipoTransaccionAvgOrderByAggregateInput
    _max?: TipoTransaccionMaxOrderByAggregateInput
    _min?: TipoTransaccionMinOrderByAggregateInput
    _sum?: TipoTransaccionSumOrderByAggregateInput
  }

  export type TipoTransaccionScalarWhereWithAggregatesInput = {
    AND?: TipoTransaccionScalarWhereWithAggregatesInput | TipoTransaccionScalarWhereWithAggregatesInput[]
    OR?: TipoTransaccionScalarWhereWithAggregatesInput[]
    NOT?: TipoTransaccionScalarWhereWithAggregatesInput | TipoTransaccionScalarWhereWithAggregatesInput[]
    secuencial?: IntWithAggregatesFilter<"TipoTransaccion"> | number
    nombre?: StringWithAggregatesFilter<"TipoTransaccion"> | string
    descripcion?: StringNullableWithAggregatesFilter<"TipoTransaccion"> | string | null
  }

  export type TransaccionWhereInput = {
    AND?: TransaccionWhereInput | TransaccionWhereInput[]
    OR?: TransaccionWhereInput[]
    NOT?: TransaccionWhereInput | TransaccionWhereInput[]
    secuencial?: IntFilter<"Transaccion"> | number
    monto?: FloatFilter<"Transaccion"> | number
    fechaTransaccion?: DateTimeFilter<"Transaccion"> | Date | string
    estado?: EnumEstadoTransaccionFilter<"Transaccion"> | $Enums.EstadoTransaccion
    descripcion?: StringNullableFilter<"Transaccion"> | string | null
    tipoTransaccionSecuencial?: IntNullableFilter<"Transaccion"> | number | null
    cuentaOrigenId?: IntNullableFilter<"Transaccion"> | number | null
    cuentaDestinoId?: IntNullableFilter<"Transaccion"> | number | null
    TipoTransaccion?: XOR<TipoTransaccionNullableRelationFilter, TipoTransaccionWhereInput> | null
    CuentaOrigen?: XOR<CuentaNullableRelationFilter, CuentaWhereInput> | null
    CuentaDestino?: XOR<CuentaNullableRelationFilter, CuentaWhereInput> | null
  }

  export type TransaccionOrderByWithRelationInput = {
    secuencial?: SortOrder
    monto?: SortOrder
    fechaTransaccion?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipoTransaccionSecuencial?: SortOrderInput | SortOrder
    cuentaOrigenId?: SortOrderInput | SortOrder
    cuentaDestinoId?: SortOrderInput | SortOrder
    TipoTransaccion?: TipoTransaccionOrderByWithRelationInput
    CuentaOrigen?: CuentaOrderByWithRelationInput
    CuentaDestino?: CuentaOrderByWithRelationInput
  }

  export type TransaccionWhereUniqueInput = Prisma.AtLeast<{
    secuencial?: number
    AND?: TransaccionWhereInput | TransaccionWhereInput[]
    OR?: TransaccionWhereInput[]
    NOT?: TransaccionWhereInput | TransaccionWhereInput[]
    monto?: FloatFilter<"Transaccion"> | number
    fechaTransaccion?: DateTimeFilter<"Transaccion"> | Date | string
    estado?: EnumEstadoTransaccionFilter<"Transaccion"> | $Enums.EstadoTransaccion
    descripcion?: StringNullableFilter<"Transaccion"> | string | null
    tipoTransaccionSecuencial?: IntNullableFilter<"Transaccion"> | number | null
    cuentaOrigenId?: IntNullableFilter<"Transaccion"> | number | null
    cuentaDestinoId?: IntNullableFilter<"Transaccion"> | number | null
    TipoTransaccion?: XOR<TipoTransaccionNullableRelationFilter, TipoTransaccionWhereInput> | null
    CuentaOrigen?: XOR<CuentaNullableRelationFilter, CuentaWhereInput> | null
    CuentaDestino?: XOR<CuentaNullableRelationFilter, CuentaWhereInput> | null
  }, "secuencial">

  export type TransaccionOrderByWithAggregationInput = {
    secuencial?: SortOrder
    monto?: SortOrder
    fechaTransaccion?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipoTransaccionSecuencial?: SortOrderInput | SortOrder
    cuentaOrigenId?: SortOrderInput | SortOrder
    cuentaDestinoId?: SortOrderInput | SortOrder
    _count?: TransaccionCountOrderByAggregateInput
    _avg?: TransaccionAvgOrderByAggregateInput
    _max?: TransaccionMaxOrderByAggregateInput
    _min?: TransaccionMinOrderByAggregateInput
    _sum?: TransaccionSumOrderByAggregateInput
  }

  export type TransaccionScalarWhereWithAggregatesInput = {
    AND?: TransaccionScalarWhereWithAggregatesInput | TransaccionScalarWhereWithAggregatesInput[]
    OR?: TransaccionScalarWhereWithAggregatesInput[]
    NOT?: TransaccionScalarWhereWithAggregatesInput | TransaccionScalarWhereWithAggregatesInput[]
    secuencial?: IntWithAggregatesFilter<"Transaccion"> | number
    monto?: FloatWithAggregatesFilter<"Transaccion"> | number
    fechaTransaccion?: DateTimeWithAggregatesFilter<"Transaccion"> | Date | string
    estado?: EnumEstadoTransaccionWithAggregatesFilter<"Transaccion"> | $Enums.EstadoTransaccion
    descripcion?: StringNullableWithAggregatesFilter<"Transaccion"> | string | null
    tipoTransaccionSecuencial?: IntNullableWithAggregatesFilter<"Transaccion"> | number | null
    cuentaOrigenId?: IntNullableWithAggregatesFilter<"Transaccion"> | number | null
    cuentaDestinoId?: IntNullableWithAggregatesFilter<"Transaccion"> | number | null
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    secuencial?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    tipoProducto?: EnumTipoProductoFilter<"Producto"> | $Enums.TipoProducto
    productosUsuario?: ProductoUsuarioListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipoProducto?: SortOrder
    productosUsuario?: ProductoUsuarioOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    secuencial?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    tipoProducto?: EnumTipoProductoFilter<"Producto"> | $Enums.TipoProducto
    productosUsuario?: ProductoUsuarioListRelationFilter
  }, "secuencial">

  export type ProductoOrderByWithAggregationInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipoProducto?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    secuencial?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    tipoProducto?: EnumTipoProductoWithAggregatesFilter<"Producto"> | $Enums.TipoProducto
  }

  export type ProductoUsuarioWhereInput = {
    AND?: ProductoUsuarioWhereInput | ProductoUsuarioWhereInput[]
    OR?: ProductoUsuarioWhereInput[]
    NOT?: ProductoUsuarioWhereInput | ProductoUsuarioWhereInput[]
    secuencial?: IntFilter<"ProductoUsuario"> | number
    usuarioId?: IntFilter<"ProductoUsuario"> | number
    productoId?: IntFilter<"ProductoUsuario"> | number
    fechaAdquisicion?: DateTimeFilter<"ProductoUsuario"> | Date | string
    estado?: EnumEstadoProductoFilter<"ProductoUsuario"> | $Enums.EstadoProducto
    detalles?: JsonNullableFilter<"ProductoUsuario">
    usuario?: XOR<PersonaRelationFilter, PersonaWhereInput>
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }

  export type ProductoUsuarioOrderByWithRelationInput = {
    secuencial?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    fechaAdquisicion?: SortOrder
    estado?: SortOrder
    detalles?: SortOrderInput | SortOrder
    usuario?: PersonaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type ProductoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    secuencial?: number
    AND?: ProductoUsuarioWhereInput | ProductoUsuarioWhereInput[]
    OR?: ProductoUsuarioWhereInput[]
    NOT?: ProductoUsuarioWhereInput | ProductoUsuarioWhereInput[]
    usuarioId?: IntFilter<"ProductoUsuario"> | number
    productoId?: IntFilter<"ProductoUsuario"> | number
    fechaAdquisicion?: DateTimeFilter<"ProductoUsuario"> | Date | string
    estado?: EnumEstadoProductoFilter<"ProductoUsuario"> | $Enums.EstadoProducto
    detalles?: JsonNullableFilter<"ProductoUsuario">
    usuario?: XOR<PersonaRelationFilter, PersonaWhereInput>
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }, "secuencial">

  export type ProductoUsuarioOrderByWithAggregationInput = {
    secuencial?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    fechaAdquisicion?: SortOrder
    estado?: SortOrder
    detalles?: SortOrderInput | SortOrder
    _count?: ProductoUsuarioCountOrderByAggregateInput
    _avg?: ProductoUsuarioAvgOrderByAggregateInput
    _max?: ProductoUsuarioMaxOrderByAggregateInput
    _min?: ProductoUsuarioMinOrderByAggregateInput
    _sum?: ProductoUsuarioSumOrderByAggregateInput
  }

  export type ProductoUsuarioScalarWhereWithAggregatesInput = {
    AND?: ProductoUsuarioScalarWhereWithAggregatesInput | ProductoUsuarioScalarWhereWithAggregatesInput[]
    OR?: ProductoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: ProductoUsuarioScalarWhereWithAggregatesInput | ProductoUsuarioScalarWhereWithAggregatesInput[]
    secuencial?: IntWithAggregatesFilter<"ProductoUsuario"> | number
    usuarioId?: IntWithAggregatesFilter<"ProductoUsuario"> | number
    productoId?: IntWithAggregatesFilter<"ProductoUsuario"> | number
    fechaAdquisicion?: DateTimeWithAggregatesFilter<"ProductoUsuario"> | Date | string
    estado?: EnumEstadoProductoWithAggregatesFilter<"ProductoUsuario"> | $Enums.EstadoProducto
    detalles?: JsonNullableWithAggregatesFilter<"ProductoUsuario">
  }

  export type PersonaCreateInput = {
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
    Cuenta?: CuentaCreateNestedManyWithoutPersonaInput
    ProductoUsuario?: ProductoUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type PersonaUncheckedCreateInput = {
    secuencial?: number
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
    Cuenta?: CuentaUncheckedCreateNestedManyWithoutPersonaInput
    ProductoUsuario?: ProductoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PersonaUpdateInput = {
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
    Cuenta?: CuentaUpdateManyWithoutPersonaNestedInput
    ProductoUsuario?: ProductoUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type PersonaUncheckedUpdateInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
    Cuenta?: CuentaUncheckedUpdateManyWithoutPersonaNestedInput
    ProductoUsuario?: ProductoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PersonaCreateManyInput = {
    secuencial?: number
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
  }

  export type PersonaUpdateManyMutationInput = {
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
  }

  export type PersonaUncheckedUpdateManyInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCuentaCreateInput = {
    nombre: string
    descripcion: string
    cuentas?: CuentaCreateNestedManyWithoutTipoCuentaInput
  }

  export type TipoCuentaUncheckedCreateInput = {
    secuencial?: number
    nombre: string
    descripcion: string
    cuentas?: CuentaUncheckedCreateNestedManyWithoutTipoCuentaInput
  }

  export type TipoCuentaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cuentas?: CuentaUpdateManyWithoutTipoCuentaNestedInput
  }

  export type TipoCuentaUncheckedUpdateInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cuentas?: CuentaUncheckedUpdateManyWithoutTipoCuentaNestedInput
  }

  export type TipoCuentaCreateManyInput = {
    secuencial?: number
    nombre: string
    descripcion: string
  }

  export type TipoCuentaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCuentaUncheckedUpdateManyInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CuentaCreateInput = {
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    persona: PersonaCreateNestedOneWithoutCuentaInput
    TipoCuenta?: TipoCuentaCreateNestedOneWithoutCuentasInput
    TransaccionesOrigen?: TransaccionCreateNestedManyWithoutCuentaOrigenInput
    TransaccionesDestino?: TransaccionCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaUncheckedCreateInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    personaSecuencial: number
    tipoCuentaSecuencial?: number | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    TransaccionesOrigen?: TransaccionUncheckedCreateNestedManyWithoutCuentaOrigenInput
    TransaccionesDestino?: TransaccionUncheckedCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaUpdateInput = {
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneRequiredWithoutCuentaNestedInput
    TipoCuenta?: TipoCuentaUpdateOneWithoutCuentasNestedInput
    TransaccionesOrigen?: TransaccionUpdateManyWithoutCuentaOrigenNestedInput
    TransaccionesDestino?: TransaccionUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaUncheckedUpdateInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    personaSecuencial?: IntFieldUpdateOperationsInput | number
    tipoCuentaSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    TransaccionesOrigen?: TransaccionUncheckedUpdateManyWithoutCuentaOrigenNestedInput
    TransaccionesDestino?: TransaccionUncheckedUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaCreateManyInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    personaSecuencial: number
    tipoCuentaSecuencial?: number | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CuentaUpdateManyMutationInput = {
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuentaUncheckedUpdateManyInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    personaSecuencial?: IntFieldUpdateOperationsInput | number
    tipoCuentaSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoTransaccionCreateInput = {
    nombre: string
    descripcion?: string | null
    transacciones?: TransaccionCreateNestedManyWithoutTipoTransaccionInput
  }

  export type TipoTransaccionUncheckedCreateInput = {
    secuencial?: number
    nombre: string
    descripcion?: string | null
    transacciones?: TransaccionUncheckedCreateNestedManyWithoutTipoTransaccionInput
  }

  export type TipoTransaccionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    transacciones?: TransaccionUpdateManyWithoutTipoTransaccionNestedInput
  }

  export type TipoTransaccionUncheckedUpdateInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    transacciones?: TransaccionUncheckedUpdateManyWithoutTipoTransaccionNestedInput
  }

  export type TipoTransaccionCreateManyInput = {
    secuencial?: number
    nombre: string
    descripcion?: string | null
  }

  export type TipoTransaccionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoTransaccionUncheckedUpdateManyInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaccionCreateInput = {
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    TipoTransaccion?: TipoTransaccionCreateNestedOneWithoutTransaccionesInput
    CuentaOrigen?: CuentaCreateNestedOneWithoutTransaccionesOrigenInput
    CuentaDestino?: CuentaCreateNestedOneWithoutTransaccionesDestinoInput
  }

  export type TransaccionUncheckedCreateInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    tipoTransaccionSecuencial?: number | null
    cuentaOrigenId?: number | null
    cuentaDestinoId?: number | null
  }

  export type TransaccionUpdateInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    TipoTransaccion?: TipoTransaccionUpdateOneWithoutTransaccionesNestedInput
    CuentaOrigen?: CuentaUpdateOneWithoutTransaccionesOrigenNestedInput
    CuentaDestino?: CuentaUpdateOneWithoutTransaccionesDestinoNestedInput
  }

  export type TransaccionUncheckedUpdateInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTransaccionSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaOrigenId?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaDestinoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransaccionCreateManyInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    tipoTransaccionSecuencial?: number | null
    cuentaOrigenId?: number | null
    cuentaDestinoId?: number | null
  }

  export type TransaccionUpdateManyMutationInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaccionUncheckedUpdateManyInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTransaccionSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaOrigenId?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaDestinoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion?: string | null
    tipoProducto: $Enums.TipoProducto
    productosUsuario?: ProductoUsuarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    secuencial?: number
    nombre: string
    descripcion?: string | null
    tipoProducto: $Enums.TipoProducto
    productosUsuario?: ProductoUsuarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    productosUsuario?: ProductoUsuarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    productosUsuario?: ProductoUsuarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    secuencial?: number
    nombre: string
    descripcion?: string | null
    tipoProducto: $Enums.TipoProducto
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
  }

  export type ProductoUncheckedUpdateManyInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
  }

  export type ProductoUsuarioCreateInput = {
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
    usuario: PersonaCreateNestedOneWithoutProductoUsuarioInput
    producto: ProductoCreateNestedOneWithoutProductosUsuarioInput
  }

  export type ProductoUsuarioUncheckedCreateInput = {
    secuencial?: number
    usuarioId: number
    productoId: number
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioUpdateInput = {
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
    usuario?: PersonaUpdateOneRequiredWithoutProductoUsuarioNestedInput
    producto?: ProductoUpdateOneRequiredWithoutProductosUsuarioNestedInput
  }

  export type ProductoUsuarioUncheckedUpdateInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioCreateManyInput = {
    secuencial?: number
    usuarioId: number
    productoId: number
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioUpdateManyMutationInput = {
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioUncheckedUpdateManyInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CuentaListRelationFilter = {
    every?: CuentaWhereInput
    some?: CuentaWhereInput
    none?: CuentaWhereInput
  }

  export type ProductoUsuarioListRelationFilter = {
    every?: ProductoUsuarioWhereInput
    some?: ProductoUsuarioWhereInput
    none?: ProductoUsuarioWhereInput
  }

  export type CuentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonaIndex_principalCompoundUniqueInput = {
    tipoIdentificacion: string
    identificacion: string
  }

  export type PersonaCountOrderByAggregateInput = {
    secuencial?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    callePrincipal?: SortOrder
    calleSecundaria?: SortOrder
    ciudadela?: SortOrder
    paisOrigen?: SortOrder
  }

  export type PersonaAvgOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type PersonaMaxOrderByAggregateInput = {
    secuencial?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    callePrincipal?: SortOrder
    calleSecundaria?: SortOrder
    ciudadela?: SortOrder
    paisOrigen?: SortOrder
  }

  export type PersonaMinOrderByAggregateInput = {
    secuencial?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    callePrincipal?: SortOrder
    calleSecundaria?: SortOrder
    ciudadela?: SortOrder
    paisOrigen?: SortOrder
  }

  export type PersonaSumOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TipoCuentaCountOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoCuentaAvgOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type TipoCuentaMaxOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoCuentaMinOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoCuentaSumOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumEstadoCuentaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCuenta | EnumEstadoCuentaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCuenta[]
    notIn?: $Enums.EstadoCuenta[]
    not?: NestedEnumEstadoCuentaFilter<$PrismaModel> | $Enums.EstadoCuenta
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PersonaRelationFilter = {
    is?: PersonaWhereInput
    isNot?: PersonaWhereInput
  }

  export type TipoCuentaNullableRelationFilter = {
    is?: TipoCuentaWhereInput | null
    isNot?: TipoCuentaWhereInput | null
  }

  export type TransaccionListRelationFilter = {
    every?: TransaccionWhereInput
    some?: TransaccionWhereInput
    none?: TransaccionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransaccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuentaCountOrderByAggregateInput = {
    secuencial?: SortOrder
    numeroCuenta?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    fechaApertura?: SortOrder
    personaSecuencial?: SortOrder
    tipoCuentaSecuencial?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CuentaAvgOrderByAggregateInput = {
    secuencial?: SortOrder
    saldo?: SortOrder
    personaSecuencial?: SortOrder
    tipoCuentaSecuencial?: SortOrder
  }

  export type CuentaMaxOrderByAggregateInput = {
    secuencial?: SortOrder
    numeroCuenta?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    fechaApertura?: SortOrder
    personaSecuencial?: SortOrder
    tipoCuentaSecuencial?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CuentaMinOrderByAggregateInput = {
    secuencial?: SortOrder
    numeroCuenta?: SortOrder
    saldo?: SortOrder
    estado?: SortOrder
    fechaApertura?: SortOrder
    personaSecuencial?: SortOrder
    tipoCuentaSecuencial?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CuentaSumOrderByAggregateInput = {
    secuencial?: SortOrder
    saldo?: SortOrder
    personaSecuencial?: SortOrder
    tipoCuentaSecuencial?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumEstadoCuentaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCuenta | EnumEstadoCuentaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCuenta[]
    notIn?: $Enums.EstadoCuenta[]
    not?: NestedEnumEstadoCuentaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCuenta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCuentaFilter<$PrismaModel>
    _max?: NestedEnumEstadoCuentaFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TipoTransaccionCountOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoTransaccionAvgOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type TipoTransaccionMaxOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoTransaccionMinOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoTransaccionSumOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEstadoTransaccionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransaccion | EnumEstadoTransaccionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransaccion[]
    notIn?: $Enums.EstadoTransaccion[]
    not?: NestedEnumEstadoTransaccionFilter<$PrismaModel> | $Enums.EstadoTransaccion
  }

  export type TipoTransaccionNullableRelationFilter = {
    is?: TipoTransaccionWhereInput | null
    isNot?: TipoTransaccionWhereInput | null
  }

  export type CuentaNullableRelationFilter = {
    is?: CuentaWhereInput | null
    isNot?: CuentaWhereInput | null
  }

  export type TransaccionCountOrderByAggregateInput = {
    secuencial?: SortOrder
    monto?: SortOrder
    fechaTransaccion?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrder
    tipoTransaccionSecuencial?: SortOrder
    cuentaOrigenId?: SortOrder
    cuentaDestinoId?: SortOrder
  }

  export type TransaccionAvgOrderByAggregateInput = {
    secuencial?: SortOrder
    monto?: SortOrder
    tipoTransaccionSecuencial?: SortOrder
    cuentaOrigenId?: SortOrder
    cuentaDestinoId?: SortOrder
  }

  export type TransaccionMaxOrderByAggregateInput = {
    secuencial?: SortOrder
    monto?: SortOrder
    fechaTransaccion?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrder
    tipoTransaccionSecuencial?: SortOrder
    cuentaOrigenId?: SortOrder
    cuentaDestinoId?: SortOrder
  }

  export type TransaccionMinOrderByAggregateInput = {
    secuencial?: SortOrder
    monto?: SortOrder
    fechaTransaccion?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrder
    tipoTransaccionSecuencial?: SortOrder
    cuentaOrigenId?: SortOrder
    cuentaDestinoId?: SortOrder
  }

  export type TransaccionSumOrderByAggregateInput = {
    secuencial?: SortOrder
    monto?: SortOrder
    tipoTransaccionSecuencial?: SortOrder
    cuentaOrigenId?: SortOrder
    cuentaDestinoId?: SortOrder
  }

  export type EnumEstadoTransaccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransaccion | EnumEstadoTransaccionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransaccion[]
    notIn?: $Enums.EstadoTransaccion[]
    not?: NestedEnumEstadoTransaccionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTransaccion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTransaccionFilter<$PrismaModel>
    _max?: NestedEnumEstadoTransaccionFilter<$PrismaModel>
  }

  export type EnumTipoProductoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[]
    notIn?: $Enums.TipoProducto[]
    not?: NestedEnumTipoProductoFilter<$PrismaModel> | $Enums.TipoProducto
  }

  export type ProductoCountOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipoProducto?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipoProducto?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    secuencial?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipoProducto?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    secuencial?: SortOrder
  }

  export type EnumTipoProductoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[]
    notIn?: $Enums.TipoProducto[]
    not?: NestedEnumTipoProductoWithAggregatesFilter<$PrismaModel> | $Enums.TipoProducto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProductoFilter<$PrismaModel>
    _max?: NestedEnumTipoProductoFilter<$PrismaModel>
  }

  export type EnumEstadoProductoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProducto | EnumEstadoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProducto[]
    notIn?: $Enums.EstadoProducto[]
    not?: NestedEnumEstadoProductoFilter<$PrismaModel> | $Enums.EstadoProducto
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProductoRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type ProductoUsuarioCountOrderByAggregateInput = {
    secuencial?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    fechaAdquisicion?: SortOrder
    estado?: SortOrder
    detalles?: SortOrder
  }

  export type ProductoUsuarioAvgOrderByAggregateInput = {
    secuencial?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type ProductoUsuarioMaxOrderByAggregateInput = {
    secuencial?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    fechaAdquisicion?: SortOrder
    estado?: SortOrder
  }

  export type ProductoUsuarioMinOrderByAggregateInput = {
    secuencial?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    fechaAdquisicion?: SortOrder
    estado?: SortOrder
  }

  export type ProductoUsuarioSumOrderByAggregateInput = {
    secuencial?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type EnumEstadoProductoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProducto | EnumEstadoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProducto[]
    notIn?: $Enums.EstadoProducto[]
    not?: NestedEnumEstadoProductoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoProducto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoProductoFilter<$PrismaModel>
    _max?: NestedEnumEstadoProductoFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CuentaCreateNestedManyWithoutPersonaInput = {
    create?: XOR<CuentaCreateWithoutPersonaInput, CuentaUncheckedCreateWithoutPersonaInput> | CuentaCreateWithoutPersonaInput[] | CuentaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutPersonaInput | CuentaCreateOrConnectWithoutPersonaInput[]
    createMany?: CuentaCreateManyPersonaInputEnvelope
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
  }

  export type ProductoUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProductoUsuarioCreateWithoutUsuarioInput, ProductoUsuarioUncheckedCreateWithoutUsuarioInput> | ProductoUsuarioCreateWithoutUsuarioInput[] | ProductoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutUsuarioInput | ProductoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProductoUsuarioCreateManyUsuarioInputEnvelope
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
  }

  export type CuentaUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<CuentaCreateWithoutPersonaInput, CuentaUncheckedCreateWithoutPersonaInput> | CuentaCreateWithoutPersonaInput[] | CuentaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutPersonaInput | CuentaCreateOrConnectWithoutPersonaInput[]
    createMany?: CuentaCreateManyPersonaInputEnvelope
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
  }

  export type ProductoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProductoUsuarioCreateWithoutUsuarioInput, ProductoUsuarioUncheckedCreateWithoutUsuarioInput> | ProductoUsuarioCreateWithoutUsuarioInput[] | ProductoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutUsuarioInput | ProductoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProductoUsuarioCreateManyUsuarioInputEnvelope
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CuentaUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<CuentaCreateWithoutPersonaInput, CuentaUncheckedCreateWithoutPersonaInput> | CuentaCreateWithoutPersonaInput[] | CuentaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutPersonaInput | CuentaCreateOrConnectWithoutPersonaInput[]
    upsert?: CuentaUpsertWithWhereUniqueWithoutPersonaInput | CuentaUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: CuentaCreateManyPersonaInputEnvelope
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    update?: CuentaUpdateWithWhereUniqueWithoutPersonaInput | CuentaUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: CuentaUpdateManyWithWhereWithoutPersonaInput | CuentaUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
  }

  export type ProductoUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProductoUsuarioCreateWithoutUsuarioInput, ProductoUsuarioUncheckedCreateWithoutUsuarioInput> | ProductoUsuarioCreateWithoutUsuarioInput[] | ProductoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutUsuarioInput | ProductoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProductoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | ProductoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProductoUsuarioCreateManyUsuarioInputEnvelope
    set?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    disconnect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    delete?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    update?: ProductoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | ProductoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProductoUsuarioUpdateManyWithWhereWithoutUsuarioInput | ProductoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProductoUsuarioScalarWhereInput | ProductoUsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CuentaUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<CuentaCreateWithoutPersonaInput, CuentaUncheckedCreateWithoutPersonaInput> | CuentaCreateWithoutPersonaInput[] | CuentaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutPersonaInput | CuentaCreateOrConnectWithoutPersonaInput[]
    upsert?: CuentaUpsertWithWhereUniqueWithoutPersonaInput | CuentaUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: CuentaCreateManyPersonaInputEnvelope
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    update?: CuentaUpdateWithWhereUniqueWithoutPersonaInput | CuentaUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: CuentaUpdateManyWithWhereWithoutPersonaInput | CuentaUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
  }

  export type ProductoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProductoUsuarioCreateWithoutUsuarioInput, ProductoUsuarioUncheckedCreateWithoutUsuarioInput> | ProductoUsuarioCreateWithoutUsuarioInput[] | ProductoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutUsuarioInput | ProductoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProductoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | ProductoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProductoUsuarioCreateManyUsuarioInputEnvelope
    set?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    disconnect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    delete?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    update?: ProductoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | ProductoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProductoUsuarioUpdateManyWithWhereWithoutUsuarioInput | ProductoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProductoUsuarioScalarWhereInput | ProductoUsuarioScalarWhereInput[]
  }

  export type CuentaCreateNestedManyWithoutTipoCuentaInput = {
    create?: XOR<CuentaCreateWithoutTipoCuentaInput, CuentaUncheckedCreateWithoutTipoCuentaInput> | CuentaCreateWithoutTipoCuentaInput[] | CuentaUncheckedCreateWithoutTipoCuentaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutTipoCuentaInput | CuentaCreateOrConnectWithoutTipoCuentaInput[]
    createMany?: CuentaCreateManyTipoCuentaInputEnvelope
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
  }

  export type CuentaUncheckedCreateNestedManyWithoutTipoCuentaInput = {
    create?: XOR<CuentaCreateWithoutTipoCuentaInput, CuentaUncheckedCreateWithoutTipoCuentaInput> | CuentaCreateWithoutTipoCuentaInput[] | CuentaUncheckedCreateWithoutTipoCuentaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutTipoCuentaInput | CuentaCreateOrConnectWithoutTipoCuentaInput[]
    createMany?: CuentaCreateManyTipoCuentaInputEnvelope
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
  }

  export type CuentaUpdateManyWithoutTipoCuentaNestedInput = {
    create?: XOR<CuentaCreateWithoutTipoCuentaInput, CuentaUncheckedCreateWithoutTipoCuentaInput> | CuentaCreateWithoutTipoCuentaInput[] | CuentaUncheckedCreateWithoutTipoCuentaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutTipoCuentaInput | CuentaCreateOrConnectWithoutTipoCuentaInput[]
    upsert?: CuentaUpsertWithWhereUniqueWithoutTipoCuentaInput | CuentaUpsertWithWhereUniqueWithoutTipoCuentaInput[]
    createMany?: CuentaCreateManyTipoCuentaInputEnvelope
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    update?: CuentaUpdateWithWhereUniqueWithoutTipoCuentaInput | CuentaUpdateWithWhereUniqueWithoutTipoCuentaInput[]
    updateMany?: CuentaUpdateManyWithWhereWithoutTipoCuentaInput | CuentaUpdateManyWithWhereWithoutTipoCuentaInput[]
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
  }

  export type CuentaUncheckedUpdateManyWithoutTipoCuentaNestedInput = {
    create?: XOR<CuentaCreateWithoutTipoCuentaInput, CuentaUncheckedCreateWithoutTipoCuentaInput> | CuentaCreateWithoutTipoCuentaInput[] | CuentaUncheckedCreateWithoutTipoCuentaInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutTipoCuentaInput | CuentaCreateOrConnectWithoutTipoCuentaInput[]
    upsert?: CuentaUpsertWithWhereUniqueWithoutTipoCuentaInput | CuentaUpsertWithWhereUniqueWithoutTipoCuentaInput[]
    createMany?: CuentaCreateManyTipoCuentaInputEnvelope
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    update?: CuentaUpdateWithWhereUniqueWithoutTipoCuentaInput | CuentaUpdateWithWhereUniqueWithoutTipoCuentaInput[]
    updateMany?: CuentaUpdateManyWithWhereWithoutTipoCuentaInput | CuentaUpdateManyWithWhereWithoutTipoCuentaInput[]
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
  }

  export type PersonaCreateNestedOneWithoutCuentaInput = {
    create?: XOR<PersonaCreateWithoutCuentaInput, PersonaUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutCuentaInput
    connect?: PersonaWhereUniqueInput
  }

  export type TipoCuentaCreateNestedOneWithoutCuentasInput = {
    create?: XOR<TipoCuentaCreateWithoutCuentasInput, TipoCuentaUncheckedCreateWithoutCuentasInput>
    connectOrCreate?: TipoCuentaCreateOrConnectWithoutCuentasInput
    connect?: TipoCuentaWhereUniqueInput
  }

  export type TransaccionCreateNestedManyWithoutCuentaOrigenInput = {
    create?: XOR<TransaccionCreateWithoutCuentaOrigenInput, TransaccionUncheckedCreateWithoutCuentaOrigenInput> | TransaccionCreateWithoutCuentaOrigenInput[] | TransaccionUncheckedCreateWithoutCuentaOrigenInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaOrigenInput | TransaccionCreateOrConnectWithoutCuentaOrigenInput[]
    createMany?: TransaccionCreateManyCuentaOrigenInputEnvelope
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
  }

  export type TransaccionCreateNestedManyWithoutCuentaDestinoInput = {
    create?: XOR<TransaccionCreateWithoutCuentaDestinoInput, TransaccionUncheckedCreateWithoutCuentaDestinoInput> | TransaccionCreateWithoutCuentaDestinoInput[] | TransaccionUncheckedCreateWithoutCuentaDestinoInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaDestinoInput | TransaccionCreateOrConnectWithoutCuentaDestinoInput[]
    createMany?: TransaccionCreateManyCuentaDestinoInputEnvelope
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
  }

  export type TransaccionUncheckedCreateNestedManyWithoutCuentaOrigenInput = {
    create?: XOR<TransaccionCreateWithoutCuentaOrigenInput, TransaccionUncheckedCreateWithoutCuentaOrigenInput> | TransaccionCreateWithoutCuentaOrigenInput[] | TransaccionUncheckedCreateWithoutCuentaOrigenInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaOrigenInput | TransaccionCreateOrConnectWithoutCuentaOrigenInput[]
    createMany?: TransaccionCreateManyCuentaOrigenInputEnvelope
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
  }

  export type TransaccionUncheckedCreateNestedManyWithoutCuentaDestinoInput = {
    create?: XOR<TransaccionCreateWithoutCuentaDestinoInput, TransaccionUncheckedCreateWithoutCuentaDestinoInput> | TransaccionCreateWithoutCuentaDestinoInput[] | TransaccionUncheckedCreateWithoutCuentaDestinoInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaDestinoInput | TransaccionCreateOrConnectWithoutCuentaDestinoInput[]
    createMany?: TransaccionCreateManyCuentaDestinoInputEnvelope
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEstadoCuentaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCuenta
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonaUpdateOneRequiredWithoutCuentaNestedInput = {
    create?: XOR<PersonaCreateWithoutCuentaInput, PersonaUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutCuentaInput
    upsert?: PersonaUpsertWithoutCuentaInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutCuentaInput, PersonaUpdateWithoutCuentaInput>, PersonaUncheckedUpdateWithoutCuentaInput>
  }

  export type TipoCuentaUpdateOneWithoutCuentasNestedInput = {
    create?: XOR<TipoCuentaCreateWithoutCuentasInput, TipoCuentaUncheckedCreateWithoutCuentasInput>
    connectOrCreate?: TipoCuentaCreateOrConnectWithoutCuentasInput
    upsert?: TipoCuentaUpsertWithoutCuentasInput
    disconnect?: TipoCuentaWhereInput | boolean
    delete?: TipoCuentaWhereInput | boolean
    connect?: TipoCuentaWhereUniqueInput
    update?: XOR<XOR<TipoCuentaUpdateToOneWithWhereWithoutCuentasInput, TipoCuentaUpdateWithoutCuentasInput>, TipoCuentaUncheckedUpdateWithoutCuentasInput>
  }

  export type TransaccionUpdateManyWithoutCuentaOrigenNestedInput = {
    create?: XOR<TransaccionCreateWithoutCuentaOrigenInput, TransaccionUncheckedCreateWithoutCuentaOrigenInput> | TransaccionCreateWithoutCuentaOrigenInput[] | TransaccionUncheckedCreateWithoutCuentaOrigenInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaOrigenInput | TransaccionCreateOrConnectWithoutCuentaOrigenInput[]
    upsert?: TransaccionUpsertWithWhereUniqueWithoutCuentaOrigenInput | TransaccionUpsertWithWhereUniqueWithoutCuentaOrigenInput[]
    createMany?: TransaccionCreateManyCuentaOrigenInputEnvelope
    set?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    disconnect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    delete?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    update?: TransaccionUpdateWithWhereUniqueWithoutCuentaOrigenInput | TransaccionUpdateWithWhereUniqueWithoutCuentaOrigenInput[]
    updateMany?: TransaccionUpdateManyWithWhereWithoutCuentaOrigenInput | TransaccionUpdateManyWithWhereWithoutCuentaOrigenInput[]
    deleteMany?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
  }

  export type TransaccionUpdateManyWithoutCuentaDestinoNestedInput = {
    create?: XOR<TransaccionCreateWithoutCuentaDestinoInput, TransaccionUncheckedCreateWithoutCuentaDestinoInput> | TransaccionCreateWithoutCuentaDestinoInput[] | TransaccionUncheckedCreateWithoutCuentaDestinoInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaDestinoInput | TransaccionCreateOrConnectWithoutCuentaDestinoInput[]
    upsert?: TransaccionUpsertWithWhereUniqueWithoutCuentaDestinoInput | TransaccionUpsertWithWhereUniqueWithoutCuentaDestinoInput[]
    createMany?: TransaccionCreateManyCuentaDestinoInputEnvelope
    set?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    disconnect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    delete?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    update?: TransaccionUpdateWithWhereUniqueWithoutCuentaDestinoInput | TransaccionUpdateWithWhereUniqueWithoutCuentaDestinoInput[]
    updateMany?: TransaccionUpdateManyWithWhereWithoutCuentaDestinoInput | TransaccionUpdateManyWithWhereWithoutCuentaDestinoInput[]
    deleteMany?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransaccionUncheckedUpdateManyWithoutCuentaOrigenNestedInput = {
    create?: XOR<TransaccionCreateWithoutCuentaOrigenInput, TransaccionUncheckedCreateWithoutCuentaOrigenInput> | TransaccionCreateWithoutCuentaOrigenInput[] | TransaccionUncheckedCreateWithoutCuentaOrigenInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaOrigenInput | TransaccionCreateOrConnectWithoutCuentaOrigenInput[]
    upsert?: TransaccionUpsertWithWhereUniqueWithoutCuentaOrigenInput | TransaccionUpsertWithWhereUniqueWithoutCuentaOrigenInput[]
    createMany?: TransaccionCreateManyCuentaOrigenInputEnvelope
    set?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    disconnect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    delete?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    update?: TransaccionUpdateWithWhereUniqueWithoutCuentaOrigenInput | TransaccionUpdateWithWhereUniqueWithoutCuentaOrigenInput[]
    updateMany?: TransaccionUpdateManyWithWhereWithoutCuentaOrigenInput | TransaccionUpdateManyWithWhereWithoutCuentaOrigenInput[]
    deleteMany?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
  }

  export type TransaccionUncheckedUpdateManyWithoutCuentaDestinoNestedInput = {
    create?: XOR<TransaccionCreateWithoutCuentaDestinoInput, TransaccionUncheckedCreateWithoutCuentaDestinoInput> | TransaccionCreateWithoutCuentaDestinoInput[] | TransaccionUncheckedCreateWithoutCuentaDestinoInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutCuentaDestinoInput | TransaccionCreateOrConnectWithoutCuentaDestinoInput[]
    upsert?: TransaccionUpsertWithWhereUniqueWithoutCuentaDestinoInput | TransaccionUpsertWithWhereUniqueWithoutCuentaDestinoInput[]
    createMany?: TransaccionCreateManyCuentaDestinoInputEnvelope
    set?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    disconnect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    delete?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    update?: TransaccionUpdateWithWhereUniqueWithoutCuentaDestinoInput | TransaccionUpdateWithWhereUniqueWithoutCuentaDestinoInput[]
    updateMany?: TransaccionUpdateManyWithWhereWithoutCuentaDestinoInput | TransaccionUpdateManyWithWhereWithoutCuentaDestinoInput[]
    deleteMany?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
  }

  export type TransaccionCreateNestedManyWithoutTipoTransaccionInput = {
    create?: XOR<TransaccionCreateWithoutTipoTransaccionInput, TransaccionUncheckedCreateWithoutTipoTransaccionInput> | TransaccionCreateWithoutTipoTransaccionInput[] | TransaccionUncheckedCreateWithoutTipoTransaccionInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutTipoTransaccionInput | TransaccionCreateOrConnectWithoutTipoTransaccionInput[]
    createMany?: TransaccionCreateManyTipoTransaccionInputEnvelope
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
  }

  export type TransaccionUncheckedCreateNestedManyWithoutTipoTransaccionInput = {
    create?: XOR<TransaccionCreateWithoutTipoTransaccionInput, TransaccionUncheckedCreateWithoutTipoTransaccionInput> | TransaccionCreateWithoutTipoTransaccionInput[] | TransaccionUncheckedCreateWithoutTipoTransaccionInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutTipoTransaccionInput | TransaccionCreateOrConnectWithoutTipoTransaccionInput[]
    createMany?: TransaccionCreateManyTipoTransaccionInputEnvelope
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TransaccionUpdateManyWithoutTipoTransaccionNestedInput = {
    create?: XOR<TransaccionCreateWithoutTipoTransaccionInput, TransaccionUncheckedCreateWithoutTipoTransaccionInput> | TransaccionCreateWithoutTipoTransaccionInput[] | TransaccionUncheckedCreateWithoutTipoTransaccionInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutTipoTransaccionInput | TransaccionCreateOrConnectWithoutTipoTransaccionInput[]
    upsert?: TransaccionUpsertWithWhereUniqueWithoutTipoTransaccionInput | TransaccionUpsertWithWhereUniqueWithoutTipoTransaccionInput[]
    createMany?: TransaccionCreateManyTipoTransaccionInputEnvelope
    set?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    disconnect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    delete?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    update?: TransaccionUpdateWithWhereUniqueWithoutTipoTransaccionInput | TransaccionUpdateWithWhereUniqueWithoutTipoTransaccionInput[]
    updateMany?: TransaccionUpdateManyWithWhereWithoutTipoTransaccionInput | TransaccionUpdateManyWithWhereWithoutTipoTransaccionInput[]
    deleteMany?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
  }

  export type TransaccionUncheckedUpdateManyWithoutTipoTransaccionNestedInput = {
    create?: XOR<TransaccionCreateWithoutTipoTransaccionInput, TransaccionUncheckedCreateWithoutTipoTransaccionInput> | TransaccionCreateWithoutTipoTransaccionInput[] | TransaccionUncheckedCreateWithoutTipoTransaccionInput[]
    connectOrCreate?: TransaccionCreateOrConnectWithoutTipoTransaccionInput | TransaccionCreateOrConnectWithoutTipoTransaccionInput[]
    upsert?: TransaccionUpsertWithWhereUniqueWithoutTipoTransaccionInput | TransaccionUpsertWithWhereUniqueWithoutTipoTransaccionInput[]
    createMany?: TransaccionCreateManyTipoTransaccionInputEnvelope
    set?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    disconnect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    delete?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    connect?: TransaccionWhereUniqueInput | TransaccionWhereUniqueInput[]
    update?: TransaccionUpdateWithWhereUniqueWithoutTipoTransaccionInput | TransaccionUpdateWithWhereUniqueWithoutTipoTransaccionInput[]
    updateMany?: TransaccionUpdateManyWithWhereWithoutTipoTransaccionInput | TransaccionUpdateManyWithWhereWithoutTipoTransaccionInput[]
    deleteMany?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
  }

  export type TipoTransaccionCreateNestedOneWithoutTransaccionesInput = {
    create?: XOR<TipoTransaccionCreateWithoutTransaccionesInput, TipoTransaccionUncheckedCreateWithoutTransaccionesInput>
    connectOrCreate?: TipoTransaccionCreateOrConnectWithoutTransaccionesInput
    connect?: TipoTransaccionWhereUniqueInput
  }

  export type CuentaCreateNestedOneWithoutTransaccionesOrigenInput = {
    create?: XOR<CuentaCreateWithoutTransaccionesOrigenInput, CuentaUncheckedCreateWithoutTransaccionesOrigenInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutTransaccionesOrigenInput
    connect?: CuentaWhereUniqueInput
  }

  export type CuentaCreateNestedOneWithoutTransaccionesDestinoInput = {
    create?: XOR<CuentaCreateWithoutTransaccionesDestinoInput, CuentaUncheckedCreateWithoutTransaccionesDestinoInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutTransaccionesDestinoInput
    connect?: CuentaWhereUniqueInput
  }

  export type EnumEstadoTransaccionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTransaccion
  }

  export type TipoTransaccionUpdateOneWithoutTransaccionesNestedInput = {
    create?: XOR<TipoTransaccionCreateWithoutTransaccionesInput, TipoTransaccionUncheckedCreateWithoutTransaccionesInput>
    connectOrCreate?: TipoTransaccionCreateOrConnectWithoutTransaccionesInput
    upsert?: TipoTransaccionUpsertWithoutTransaccionesInput
    disconnect?: TipoTransaccionWhereInput | boolean
    delete?: TipoTransaccionWhereInput | boolean
    connect?: TipoTransaccionWhereUniqueInput
    update?: XOR<XOR<TipoTransaccionUpdateToOneWithWhereWithoutTransaccionesInput, TipoTransaccionUpdateWithoutTransaccionesInput>, TipoTransaccionUncheckedUpdateWithoutTransaccionesInput>
  }

  export type CuentaUpdateOneWithoutTransaccionesOrigenNestedInput = {
    create?: XOR<CuentaCreateWithoutTransaccionesOrigenInput, CuentaUncheckedCreateWithoutTransaccionesOrigenInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutTransaccionesOrigenInput
    upsert?: CuentaUpsertWithoutTransaccionesOrigenInput
    disconnect?: CuentaWhereInput | boolean
    delete?: CuentaWhereInput | boolean
    connect?: CuentaWhereUniqueInput
    update?: XOR<XOR<CuentaUpdateToOneWithWhereWithoutTransaccionesOrigenInput, CuentaUpdateWithoutTransaccionesOrigenInput>, CuentaUncheckedUpdateWithoutTransaccionesOrigenInput>
  }

  export type CuentaUpdateOneWithoutTransaccionesDestinoNestedInput = {
    create?: XOR<CuentaCreateWithoutTransaccionesDestinoInput, CuentaUncheckedCreateWithoutTransaccionesDestinoInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutTransaccionesDestinoInput
    upsert?: CuentaUpsertWithoutTransaccionesDestinoInput
    disconnect?: CuentaWhereInput | boolean
    delete?: CuentaWhereInput | boolean
    connect?: CuentaWhereUniqueInput
    update?: XOR<XOR<CuentaUpdateToOneWithWhereWithoutTransaccionesDestinoInput, CuentaUpdateWithoutTransaccionesDestinoInput>, CuentaUncheckedUpdateWithoutTransaccionesDestinoInput>
  }

  export type ProductoUsuarioCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoUsuarioCreateWithoutProductoInput, ProductoUsuarioUncheckedCreateWithoutProductoInput> | ProductoUsuarioCreateWithoutProductoInput[] | ProductoUsuarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutProductoInput | ProductoUsuarioCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoUsuarioCreateManyProductoInputEnvelope
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
  }

  export type ProductoUsuarioUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoUsuarioCreateWithoutProductoInput, ProductoUsuarioUncheckedCreateWithoutProductoInput> | ProductoUsuarioCreateWithoutProductoInput[] | ProductoUsuarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutProductoInput | ProductoUsuarioCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoUsuarioCreateManyProductoInputEnvelope
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
  }

  export type EnumTipoProductoFieldUpdateOperationsInput = {
    set?: $Enums.TipoProducto
  }

  export type ProductoUsuarioUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoUsuarioCreateWithoutProductoInput, ProductoUsuarioUncheckedCreateWithoutProductoInput> | ProductoUsuarioCreateWithoutProductoInput[] | ProductoUsuarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutProductoInput | ProductoUsuarioCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoUsuarioUpsertWithWhereUniqueWithoutProductoInput | ProductoUsuarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoUsuarioCreateManyProductoInputEnvelope
    set?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    disconnect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    delete?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    update?: ProductoUsuarioUpdateWithWhereUniqueWithoutProductoInput | ProductoUsuarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoUsuarioUpdateManyWithWhereWithoutProductoInput | ProductoUsuarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoUsuarioScalarWhereInput | ProductoUsuarioScalarWhereInput[]
  }

  export type ProductoUsuarioUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoUsuarioCreateWithoutProductoInput, ProductoUsuarioUncheckedCreateWithoutProductoInput> | ProductoUsuarioCreateWithoutProductoInput[] | ProductoUsuarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoUsuarioCreateOrConnectWithoutProductoInput | ProductoUsuarioCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoUsuarioUpsertWithWhereUniqueWithoutProductoInput | ProductoUsuarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoUsuarioCreateManyProductoInputEnvelope
    set?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    disconnect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    delete?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    connect?: ProductoUsuarioWhereUniqueInput | ProductoUsuarioWhereUniqueInput[]
    update?: ProductoUsuarioUpdateWithWhereUniqueWithoutProductoInput | ProductoUsuarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoUsuarioUpdateManyWithWhereWithoutProductoInput | ProductoUsuarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoUsuarioScalarWhereInput | ProductoUsuarioScalarWhereInput[]
  }

  export type PersonaCreateNestedOneWithoutProductoUsuarioInput = {
    create?: XOR<PersonaCreateWithoutProductoUsuarioInput, PersonaUncheckedCreateWithoutProductoUsuarioInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutProductoUsuarioInput
    connect?: PersonaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutProductosUsuarioInput = {
    create?: XOR<ProductoCreateWithoutProductosUsuarioInput, ProductoUncheckedCreateWithoutProductosUsuarioInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutProductosUsuarioInput
    connect?: ProductoWhereUniqueInput
  }

  export type EnumEstadoProductoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoProducto
  }

  export type PersonaUpdateOneRequiredWithoutProductoUsuarioNestedInput = {
    create?: XOR<PersonaCreateWithoutProductoUsuarioInput, PersonaUncheckedCreateWithoutProductoUsuarioInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutProductoUsuarioInput
    upsert?: PersonaUpsertWithoutProductoUsuarioInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutProductoUsuarioInput, PersonaUpdateWithoutProductoUsuarioInput>, PersonaUncheckedUpdateWithoutProductoUsuarioInput>
  }

  export type ProductoUpdateOneRequiredWithoutProductosUsuarioNestedInput = {
    create?: XOR<ProductoCreateWithoutProductosUsuarioInput, ProductoUncheckedCreateWithoutProductosUsuarioInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutProductosUsuarioInput
    upsert?: ProductoUpsertWithoutProductosUsuarioInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutProductosUsuarioInput, ProductoUpdateWithoutProductosUsuarioInput>, ProductoUncheckedUpdateWithoutProductosUsuarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumEstadoCuentaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCuenta | EnumEstadoCuentaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCuenta[]
    notIn?: $Enums.EstadoCuenta[]
    not?: NestedEnumEstadoCuentaFilter<$PrismaModel> | $Enums.EstadoCuenta
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEstadoCuentaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCuenta | EnumEstadoCuentaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCuenta[]
    notIn?: $Enums.EstadoCuenta[]
    not?: NestedEnumEstadoCuentaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCuenta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCuentaFilter<$PrismaModel>
    _max?: NestedEnumEstadoCuentaFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoTransaccionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransaccion | EnumEstadoTransaccionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransaccion[]
    notIn?: $Enums.EstadoTransaccion[]
    not?: NestedEnumEstadoTransaccionFilter<$PrismaModel> | $Enums.EstadoTransaccion
  }

  export type NestedEnumEstadoTransaccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransaccion | EnumEstadoTransaccionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransaccion[]
    notIn?: $Enums.EstadoTransaccion[]
    not?: NestedEnumEstadoTransaccionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTransaccion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTransaccionFilter<$PrismaModel>
    _max?: NestedEnumEstadoTransaccionFilter<$PrismaModel>
  }

  export type NestedEnumTipoProductoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[]
    notIn?: $Enums.TipoProducto[]
    not?: NestedEnumTipoProductoFilter<$PrismaModel> | $Enums.TipoProducto
  }

  export type NestedEnumTipoProductoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[]
    notIn?: $Enums.TipoProducto[]
    not?: NestedEnumTipoProductoWithAggregatesFilter<$PrismaModel> | $Enums.TipoProducto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProductoFilter<$PrismaModel>
    _max?: NestedEnumTipoProductoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoProductoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProducto | EnumEstadoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProducto[]
    notIn?: $Enums.EstadoProducto[]
    not?: NestedEnumEstadoProductoFilter<$PrismaModel> | $Enums.EstadoProducto
  }

  export type NestedEnumEstadoProductoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProducto | EnumEstadoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProducto[]
    notIn?: $Enums.EstadoProducto[]
    not?: NestedEnumEstadoProductoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoProducto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoProductoFilter<$PrismaModel>
    _max?: NestedEnumEstadoProductoFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CuentaCreateWithoutPersonaInput = {
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    TipoCuenta?: TipoCuentaCreateNestedOneWithoutCuentasInput
    TransaccionesOrigen?: TransaccionCreateNestedManyWithoutCuentaOrigenInput
    TransaccionesDestino?: TransaccionCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaUncheckedCreateWithoutPersonaInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    tipoCuentaSecuencial?: number | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    TransaccionesOrigen?: TransaccionUncheckedCreateNestedManyWithoutCuentaOrigenInput
    TransaccionesDestino?: TransaccionUncheckedCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaCreateOrConnectWithoutPersonaInput = {
    where: CuentaWhereUniqueInput
    create: XOR<CuentaCreateWithoutPersonaInput, CuentaUncheckedCreateWithoutPersonaInput>
  }

  export type CuentaCreateManyPersonaInputEnvelope = {
    data: CuentaCreateManyPersonaInput | CuentaCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUsuarioCreateWithoutUsuarioInput = {
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
    producto: ProductoCreateNestedOneWithoutProductosUsuarioInput
  }

  export type ProductoUsuarioUncheckedCreateWithoutUsuarioInput = {
    secuencial?: number
    productoId: number
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: ProductoUsuarioWhereUniqueInput
    create: XOR<ProductoUsuarioCreateWithoutUsuarioInput, ProductoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ProductoUsuarioCreateManyUsuarioInputEnvelope = {
    data: ProductoUsuarioCreateManyUsuarioInput | ProductoUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CuentaUpsertWithWhereUniqueWithoutPersonaInput = {
    where: CuentaWhereUniqueInput
    update: XOR<CuentaUpdateWithoutPersonaInput, CuentaUncheckedUpdateWithoutPersonaInput>
    create: XOR<CuentaCreateWithoutPersonaInput, CuentaUncheckedCreateWithoutPersonaInput>
  }

  export type CuentaUpdateWithWhereUniqueWithoutPersonaInput = {
    where: CuentaWhereUniqueInput
    data: XOR<CuentaUpdateWithoutPersonaInput, CuentaUncheckedUpdateWithoutPersonaInput>
  }

  export type CuentaUpdateManyWithWhereWithoutPersonaInput = {
    where: CuentaScalarWhereInput
    data: XOR<CuentaUpdateManyMutationInput, CuentaUncheckedUpdateManyWithoutPersonaInput>
  }

  export type CuentaScalarWhereInput = {
    AND?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
    OR?: CuentaScalarWhereInput[]
    NOT?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
    secuencial?: IntFilter<"Cuenta"> | number
    numeroCuenta?: StringFilter<"Cuenta"> | string
    saldo?: FloatFilter<"Cuenta"> | number
    estado?: EnumEstadoCuentaFilter<"Cuenta"> | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFilter<"Cuenta"> | Date | string
    personaSecuencial?: IntFilter<"Cuenta"> | number
    tipoCuentaSecuencial?: IntNullableFilter<"Cuenta"> | number | null
    fechaCreacion?: DateTimeFilter<"Cuenta"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Cuenta"> | Date | string
  }

  export type ProductoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProductoUsuarioWhereUniqueInput
    update: XOR<ProductoUsuarioUpdateWithoutUsuarioInput, ProductoUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProductoUsuarioCreateWithoutUsuarioInput, ProductoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ProductoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProductoUsuarioWhereUniqueInput
    data: XOR<ProductoUsuarioUpdateWithoutUsuarioInput, ProductoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProductoUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProductoUsuarioScalarWhereInput
    data: XOR<ProductoUsuarioUpdateManyMutationInput, ProductoUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProductoUsuarioScalarWhereInput = {
    AND?: ProductoUsuarioScalarWhereInput | ProductoUsuarioScalarWhereInput[]
    OR?: ProductoUsuarioScalarWhereInput[]
    NOT?: ProductoUsuarioScalarWhereInput | ProductoUsuarioScalarWhereInput[]
    secuencial?: IntFilter<"ProductoUsuario"> | number
    usuarioId?: IntFilter<"ProductoUsuario"> | number
    productoId?: IntFilter<"ProductoUsuario"> | number
    fechaAdquisicion?: DateTimeFilter<"ProductoUsuario"> | Date | string
    estado?: EnumEstadoProductoFilter<"ProductoUsuario"> | $Enums.EstadoProducto
    detalles?: JsonNullableFilter<"ProductoUsuario">
  }

  export type CuentaCreateWithoutTipoCuentaInput = {
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    persona: PersonaCreateNestedOneWithoutCuentaInput
    TransaccionesOrigen?: TransaccionCreateNestedManyWithoutCuentaOrigenInput
    TransaccionesDestino?: TransaccionCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaUncheckedCreateWithoutTipoCuentaInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    personaSecuencial: number
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    TransaccionesOrigen?: TransaccionUncheckedCreateNestedManyWithoutCuentaOrigenInput
    TransaccionesDestino?: TransaccionUncheckedCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaCreateOrConnectWithoutTipoCuentaInput = {
    where: CuentaWhereUniqueInput
    create: XOR<CuentaCreateWithoutTipoCuentaInput, CuentaUncheckedCreateWithoutTipoCuentaInput>
  }

  export type CuentaCreateManyTipoCuentaInputEnvelope = {
    data: CuentaCreateManyTipoCuentaInput | CuentaCreateManyTipoCuentaInput[]
    skipDuplicates?: boolean
  }

  export type CuentaUpsertWithWhereUniqueWithoutTipoCuentaInput = {
    where: CuentaWhereUniqueInput
    update: XOR<CuentaUpdateWithoutTipoCuentaInput, CuentaUncheckedUpdateWithoutTipoCuentaInput>
    create: XOR<CuentaCreateWithoutTipoCuentaInput, CuentaUncheckedCreateWithoutTipoCuentaInput>
  }

  export type CuentaUpdateWithWhereUniqueWithoutTipoCuentaInput = {
    where: CuentaWhereUniqueInput
    data: XOR<CuentaUpdateWithoutTipoCuentaInput, CuentaUncheckedUpdateWithoutTipoCuentaInput>
  }

  export type CuentaUpdateManyWithWhereWithoutTipoCuentaInput = {
    where: CuentaScalarWhereInput
    data: XOR<CuentaUpdateManyMutationInput, CuentaUncheckedUpdateManyWithoutTipoCuentaInput>
  }

  export type PersonaCreateWithoutCuentaInput = {
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
    ProductoUsuario?: ProductoUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type PersonaUncheckedCreateWithoutCuentaInput = {
    secuencial?: number
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
    ProductoUsuario?: ProductoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PersonaCreateOrConnectWithoutCuentaInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutCuentaInput, PersonaUncheckedCreateWithoutCuentaInput>
  }

  export type TipoCuentaCreateWithoutCuentasInput = {
    nombre: string
    descripcion: string
  }

  export type TipoCuentaUncheckedCreateWithoutCuentasInput = {
    secuencial?: number
    nombre: string
    descripcion: string
  }

  export type TipoCuentaCreateOrConnectWithoutCuentasInput = {
    where: TipoCuentaWhereUniqueInput
    create: XOR<TipoCuentaCreateWithoutCuentasInput, TipoCuentaUncheckedCreateWithoutCuentasInput>
  }

  export type TransaccionCreateWithoutCuentaOrigenInput = {
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    TipoTransaccion?: TipoTransaccionCreateNestedOneWithoutTransaccionesInput
    CuentaDestino?: CuentaCreateNestedOneWithoutTransaccionesDestinoInput
  }

  export type TransaccionUncheckedCreateWithoutCuentaOrigenInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    tipoTransaccionSecuencial?: number | null
    cuentaDestinoId?: number | null
  }

  export type TransaccionCreateOrConnectWithoutCuentaOrigenInput = {
    where: TransaccionWhereUniqueInput
    create: XOR<TransaccionCreateWithoutCuentaOrigenInput, TransaccionUncheckedCreateWithoutCuentaOrigenInput>
  }

  export type TransaccionCreateManyCuentaOrigenInputEnvelope = {
    data: TransaccionCreateManyCuentaOrigenInput | TransaccionCreateManyCuentaOrigenInput[]
    skipDuplicates?: boolean
  }

  export type TransaccionCreateWithoutCuentaDestinoInput = {
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    TipoTransaccion?: TipoTransaccionCreateNestedOneWithoutTransaccionesInput
    CuentaOrigen?: CuentaCreateNestedOneWithoutTransaccionesOrigenInput
  }

  export type TransaccionUncheckedCreateWithoutCuentaDestinoInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    tipoTransaccionSecuencial?: number | null
    cuentaOrigenId?: number | null
  }

  export type TransaccionCreateOrConnectWithoutCuentaDestinoInput = {
    where: TransaccionWhereUniqueInput
    create: XOR<TransaccionCreateWithoutCuentaDestinoInput, TransaccionUncheckedCreateWithoutCuentaDestinoInput>
  }

  export type TransaccionCreateManyCuentaDestinoInputEnvelope = {
    data: TransaccionCreateManyCuentaDestinoInput | TransaccionCreateManyCuentaDestinoInput[]
    skipDuplicates?: boolean
  }

  export type PersonaUpsertWithoutCuentaInput = {
    update: XOR<PersonaUpdateWithoutCuentaInput, PersonaUncheckedUpdateWithoutCuentaInput>
    create: XOR<PersonaCreateWithoutCuentaInput, PersonaUncheckedCreateWithoutCuentaInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutCuentaInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutCuentaInput, PersonaUncheckedUpdateWithoutCuentaInput>
  }

  export type PersonaUpdateWithoutCuentaInput = {
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
    ProductoUsuario?: ProductoUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type PersonaUncheckedUpdateWithoutCuentaInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
    ProductoUsuario?: ProductoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type TipoCuentaUpsertWithoutCuentasInput = {
    update: XOR<TipoCuentaUpdateWithoutCuentasInput, TipoCuentaUncheckedUpdateWithoutCuentasInput>
    create: XOR<TipoCuentaCreateWithoutCuentasInput, TipoCuentaUncheckedCreateWithoutCuentasInput>
    where?: TipoCuentaWhereInput
  }

  export type TipoCuentaUpdateToOneWithWhereWithoutCuentasInput = {
    where?: TipoCuentaWhereInput
    data: XOR<TipoCuentaUpdateWithoutCuentasInput, TipoCuentaUncheckedUpdateWithoutCuentasInput>
  }

  export type TipoCuentaUpdateWithoutCuentasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCuentaUncheckedUpdateWithoutCuentasInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type TransaccionUpsertWithWhereUniqueWithoutCuentaOrigenInput = {
    where: TransaccionWhereUniqueInput
    update: XOR<TransaccionUpdateWithoutCuentaOrigenInput, TransaccionUncheckedUpdateWithoutCuentaOrigenInput>
    create: XOR<TransaccionCreateWithoutCuentaOrigenInput, TransaccionUncheckedCreateWithoutCuentaOrigenInput>
  }

  export type TransaccionUpdateWithWhereUniqueWithoutCuentaOrigenInput = {
    where: TransaccionWhereUniqueInput
    data: XOR<TransaccionUpdateWithoutCuentaOrigenInput, TransaccionUncheckedUpdateWithoutCuentaOrigenInput>
  }

  export type TransaccionUpdateManyWithWhereWithoutCuentaOrigenInput = {
    where: TransaccionScalarWhereInput
    data: XOR<TransaccionUpdateManyMutationInput, TransaccionUncheckedUpdateManyWithoutCuentaOrigenInput>
  }

  export type TransaccionScalarWhereInput = {
    AND?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
    OR?: TransaccionScalarWhereInput[]
    NOT?: TransaccionScalarWhereInput | TransaccionScalarWhereInput[]
    secuencial?: IntFilter<"Transaccion"> | number
    monto?: FloatFilter<"Transaccion"> | number
    fechaTransaccion?: DateTimeFilter<"Transaccion"> | Date | string
    estado?: EnumEstadoTransaccionFilter<"Transaccion"> | $Enums.EstadoTransaccion
    descripcion?: StringNullableFilter<"Transaccion"> | string | null
    tipoTransaccionSecuencial?: IntNullableFilter<"Transaccion"> | number | null
    cuentaOrigenId?: IntNullableFilter<"Transaccion"> | number | null
    cuentaDestinoId?: IntNullableFilter<"Transaccion"> | number | null
  }

  export type TransaccionUpsertWithWhereUniqueWithoutCuentaDestinoInput = {
    where: TransaccionWhereUniqueInput
    update: XOR<TransaccionUpdateWithoutCuentaDestinoInput, TransaccionUncheckedUpdateWithoutCuentaDestinoInput>
    create: XOR<TransaccionCreateWithoutCuentaDestinoInput, TransaccionUncheckedCreateWithoutCuentaDestinoInput>
  }

  export type TransaccionUpdateWithWhereUniqueWithoutCuentaDestinoInput = {
    where: TransaccionWhereUniqueInput
    data: XOR<TransaccionUpdateWithoutCuentaDestinoInput, TransaccionUncheckedUpdateWithoutCuentaDestinoInput>
  }

  export type TransaccionUpdateManyWithWhereWithoutCuentaDestinoInput = {
    where: TransaccionScalarWhereInput
    data: XOR<TransaccionUpdateManyMutationInput, TransaccionUncheckedUpdateManyWithoutCuentaDestinoInput>
  }

  export type TransaccionCreateWithoutTipoTransaccionInput = {
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    CuentaOrigen?: CuentaCreateNestedOneWithoutTransaccionesOrigenInput
    CuentaDestino?: CuentaCreateNestedOneWithoutTransaccionesDestinoInput
  }

  export type TransaccionUncheckedCreateWithoutTipoTransaccionInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    cuentaOrigenId?: number | null
    cuentaDestinoId?: number | null
  }

  export type TransaccionCreateOrConnectWithoutTipoTransaccionInput = {
    where: TransaccionWhereUniqueInput
    create: XOR<TransaccionCreateWithoutTipoTransaccionInput, TransaccionUncheckedCreateWithoutTipoTransaccionInput>
  }

  export type TransaccionCreateManyTipoTransaccionInputEnvelope = {
    data: TransaccionCreateManyTipoTransaccionInput | TransaccionCreateManyTipoTransaccionInput[]
    skipDuplicates?: boolean
  }

  export type TransaccionUpsertWithWhereUniqueWithoutTipoTransaccionInput = {
    where: TransaccionWhereUniqueInput
    update: XOR<TransaccionUpdateWithoutTipoTransaccionInput, TransaccionUncheckedUpdateWithoutTipoTransaccionInput>
    create: XOR<TransaccionCreateWithoutTipoTransaccionInput, TransaccionUncheckedCreateWithoutTipoTransaccionInput>
  }

  export type TransaccionUpdateWithWhereUniqueWithoutTipoTransaccionInput = {
    where: TransaccionWhereUniqueInput
    data: XOR<TransaccionUpdateWithoutTipoTransaccionInput, TransaccionUncheckedUpdateWithoutTipoTransaccionInput>
  }

  export type TransaccionUpdateManyWithWhereWithoutTipoTransaccionInput = {
    where: TransaccionScalarWhereInput
    data: XOR<TransaccionUpdateManyMutationInput, TransaccionUncheckedUpdateManyWithoutTipoTransaccionInput>
  }

  export type TipoTransaccionCreateWithoutTransaccionesInput = {
    nombre: string
    descripcion?: string | null
  }

  export type TipoTransaccionUncheckedCreateWithoutTransaccionesInput = {
    secuencial?: number
    nombre: string
    descripcion?: string | null
  }

  export type TipoTransaccionCreateOrConnectWithoutTransaccionesInput = {
    where: TipoTransaccionWhereUniqueInput
    create: XOR<TipoTransaccionCreateWithoutTransaccionesInput, TipoTransaccionUncheckedCreateWithoutTransaccionesInput>
  }

  export type CuentaCreateWithoutTransaccionesOrigenInput = {
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    persona: PersonaCreateNestedOneWithoutCuentaInput
    TipoCuenta?: TipoCuentaCreateNestedOneWithoutCuentasInput
    TransaccionesDestino?: TransaccionCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaUncheckedCreateWithoutTransaccionesOrigenInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    personaSecuencial: number
    tipoCuentaSecuencial?: number | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    TransaccionesDestino?: TransaccionUncheckedCreateNestedManyWithoutCuentaDestinoInput
  }

  export type CuentaCreateOrConnectWithoutTransaccionesOrigenInput = {
    where: CuentaWhereUniqueInput
    create: XOR<CuentaCreateWithoutTransaccionesOrigenInput, CuentaUncheckedCreateWithoutTransaccionesOrigenInput>
  }

  export type CuentaCreateWithoutTransaccionesDestinoInput = {
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    persona: PersonaCreateNestedOneWithoutCuentaInput
    TipoCuenta?: TipoCuentaCreateNestedOneWithoutCuentasInput
    TransaccionesOrigen?: TransaccionCreateNestedManyWithoutCuentaOrigenInput
  }

  export type CuentaUncheckedCreateWithoutTransaccionesDestinoInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    personaSecuencial: number
    tipoCuentaSecuencial?: number | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    TransaccionesOrigen?: TransaccionUncheckedCreateNestedManyWithoutCuentaOrigenInput
  }

  export type CuentaCreateOrConnectWithoutTransaccionesDestinoInput = {
    where: CuentaWhereUniqueInput
    create: XOR<CuentaCreateWithoutTransaccionesDestinoInput, CuentaUncheckedCreateWithoutTransaccionesDestinoInput>
  }

  export type TipoTransaccionUpsertWithoutTransaccionesInput = {
    update: XOR<TipoTransaccionUpdateWithoutTransaccionesInput, TipoTransaccionUncheckedUpdateWithoutTransaccionesInput>
    create: XOR<TipoTransaccionCreateWithoutTransaccionesInput, TipoTransaccionUncheckedCreateWithoutTransaccionesInput>
    where?: TipoTransaccionWhereInput
  }

  export type TipoTransaccionUpdateToOneWithWhereWithoutTransaccionesInput = {
    where?: TipoTransaccionWhereInput
    data: XOR<TipoTransaccionUpdateWithoutTransaccionesInput, TipoTransaccionUncheckedUpdateWithoutTransaccionesInput>
  }

  export type TipoTransaccionUpdateWithoutTransaccionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoTransaccionUncheckedUpdateWithoutTransaccionesInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CuentaUpsertWithoutTransaccionesOrigenInput = {
    update: XOR<CuentaUpdateWithoutTransaccionesOrigenInput, CuentaUncheckedUpdateWithoutTransaccionesOrigenInput>
    create: XOR<CuentaCreateWithoutTransaccionesOrigenInput, CuentaUncheckedCreateWithoutTransaccionesOrigenInput>
    where?: CuentaWhereInput
  }

  export type CuentaUpdateToOneWithWhereWithoutTransaccionesOrigenInput = {
    where?: CuentaWhereInput
    data: XOR<CuentaUpdateWithoutTransaccionesOrigenInput, CuentaUncheckedUpdateWithoutTransaccionesOrigenInput>
  }

  export type CuentaUpdateWithoutTransaccionesOrigenInput = {
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneRequiredWithoutCuentaNestedInput
    TipoCuenta?: TipoCuentaUpdateOneWithoutCuentasNestedInput
    TransaccionesDestino?: TransaccionUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaUncheckedUpdateWithoutTransaccionesOrigenInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    personaSecuencial?: IntFieldUpdateOperationsInput | number
    tipoCuentaSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    TransaccionesDestino?: TransaccionUncheckedUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaUpsertWithoutTransaccionesDestinoInput = {
    update: XOR<CuentaUpdateWithoutTransaccionesDestinoInput, CuentaUncheckedUpdateWithoutTransaccionesDestinoInput>
    create: XOR<CuentaCreateWithoutTransaccionesDestinoInput, CuentaUncheckedCreateWithoutTransaccionesDestinoInput>
    where?: CuentaWhereInput
  }

  export type CuentaUpdateToOneWithWhereWithoutTransaccionesDestinoInput = {
    where?: CuentaWhereInput
    data: XOR<CuentaUpdateWithoutTransaccionesDestinoInput, CuentaUncheckedUpdateWithoutTransaccionesDestinoInput>
  }

  export type CuentaUpdateWithoutTransaccionesDestinoInput = {
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneRequiredWithoutCuentaNestedInput
    TipoCuenta?: TipoCuentaUpdateOneWithoutCuentasNestedInput
    TransaccionesOrigen?: TransaccionUpdateManyWithoutCuentaOrigenNestedInput
  }

  export type CuentaUncheckedUpdateWithoutTransaccionesDestinoInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    personaSecuencial?: IntFieldUpdateOperationsInput | number
    tipoCuentaSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    TransaccionesOrigen?: TransaccionUncheckedUpdateManyWithoutCuentaOrigenNestedInput
  }

  export type ProductoUsuarioCreateWithoutProductoInput = {
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
    usuario: PersonaCreateNestedOneWithoutProductoUsuarioInput
  }

  export type ProductoUsuarioUncheckedCreateWithoutProductoInput = {
    secuencial?: number
    usuarioId: number
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioCreateOrConnectWithoutProductoInput = {
    where: ProductoUsuarioWhereUniqueInput
    create: XOR<ProductoUsuarioCreateWithoutProductoInput, ProductoUsuarioUncheckedCreateWithoutProductoInput>
  }

  export type ProductoUsuarioCreateManyProductoInputEnvelope = {
    data: ProductoUsuarioCreateManyProductoInput | ProductoUsuarioCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUsuarioUpsertWithWhereUniqueWithoutProductoInput = {
    where: ProductoUsuarioWhereUniqueInput
    update: XOR<ProductoUsuarioUpdateWithoutProductoInput, ProductoUsuarioUncheckedUpdateWithoutProductoInput>
    create: XOR<ProductoUsuarioCreateWithoutProductoInput, ProductoUsuarioUncheckedCreateWithoutProductoInput>
  }

  export type ProductoUsuarioUpdateWithWhereUniqueWithoutProductoInput = {
    where: ProductoUsuarioWhereUniqueInput
    data: XOR<ProductoUsuarioUpdateWithoutProductoInput, ProductoUsuarioUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoUsuarioUpdateManyWithWhereWithoutProductoInput = {
    where: ProductoUsuarioScalarWhereInput
    data: XOR<ProductoUsuarioUpdateManyMutationInput, ProductoUsuarioUncheckedUpdateManyWithoutProductoInput>
  }

  export type PersonaCreateWithoutProductoUsuarioInput = {
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
    Cuenta?: CuentaCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutProductoUsuarioInput = {
    secuencial?: number
    tipoIdentificacion: string
    identificacion: string
    nombreUnido: string
    email: string
    localidad: string
    callePrincipal: string
    calleSecundaria: string
    ciudadela: string
    paisOrigen: string
    Cuenta?: CuentaUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutProductoUsuarioInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutProductoUsuarioInput, PersonaUncheckedCreateWithoutProductoUsuarioInput>
  }

  export type ProductoCreateWithoutProductosUsuarioInput = {
    nombre: string
    descripcion?: string | null
    tipoProducto: $Enums.TipoProducto
  }

  export type ProductoUncheckedCreateWithoutProductosUsuarioInput = {
    secuencial?: number
    nombre: string
    descripcion?: string | null
    tipoProducto: $Enums.TipoProducto
  }

  export type ProductoCreateOrConnectWithoutProductosUsuarioInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutProductosUsuarioInput, ProductoUncheckedCreateWithoutProductosUsuarioInput>
  }

  export type PersonaUpsertWithoutProductoUsuarioInput = {
    update: XOR<PersonaUpdateWithoutProductoUsuarioInput, PersonaUncheckedUpdateWithoutProductoUsuarioInput>
    create: XOR<PersonaCreateWithoutProductoUsuarioInput, PersonaUncheckedCreateWithoutProductoUsuarioInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutProductoUsuarioInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutProductoUsuarioInput, PersonaUncheckedUpdateWithoutProductoUsuarioInput>
  }

  export type PersonaUpdateWithoutProductoUsuarioInput = {
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
    Cuenta?: CuentaUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutProductoUsuarioInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    tipoIdentificacion?: StringFieldUpdateOperationsInput | string
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    callePrincipal?: StringFieldUpdateOperationsInput | string
    calleSecundaria?: StringFieldUpdateOperationsInput | string
    ciudadela?: StringFieldUpdateOperationsInput | string
    paisOrigen?: StringFieldUpdateOperationsInput | string
    Cuenta?: CuentaUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type ProductoUpsertWithoutProductosUsuarioInput = {
    update: XOR<ProductoUpdateWithoutProductosUsuarioInput, ProductoUncheckedUpdateWithoutProductosUsuarioInput>
    create: XOR<ProductoCreateWithoutProductosUsuarioInput, ProductoUncheckedCreateWithoutProductosUsuarioInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutProductosUsuarioInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutProductosUsuarioInput, ProductoUncheckedUpdateWithoutProductosUsuarioInput>
  }

  export type ProductoUpdateWithoutProductosUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
  }

  export type ProductoUncheckedUpdateWithoutProductosUsuarioInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
  }

  export type CuentaCreateManyPersonaInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    tipoCuentaSecuencial?: number | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type ProductoUsuarioCreateManyUsuarioInput = {
    secuencial?: number
    productoId: number
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CuentaUpdateWithoutPersonaInput = {
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoCuenta?: TipoCuentaUpdateOneWithoutCuentasNestedInput
    TransaccionesOrigen?: TransaccionUpdateManyWithoutCuentaOrigenNestedInput
    TransaccionesDestino?: TransaccionUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaUncheckedUpdateWithoutPersonaInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoCuentaSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    TransaccionesOrigen?: TransaccionUncheckedUpdateManyWithoutCuentaOrigenNestedInput
    TransaccionesDestino?: TransaccionUncheckedUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaUncheckedUpdateManyWithoutPersonaInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoCuentaSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUsuarioUpdateWithoutUsuarioInput = {
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
    producto?: ProductoUpdateOneRequiredWithoutProductosUsuarioNestedInput
  }

  export type ProductoUsuarioUncheckedUpdateWithoutUsuarioInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CuentaCreateManyTipoCuentaInput = {
    secuencial?: number
    numeroCuenta: string
    saldo?: number
    estado?: $Enums.EstadoCuenta
    fechaApertura?: Date | string
    personaSecuencial: number
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CuentaUpdateWithoutTipoCuentaInput = {
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneRequiredWithoutCuentaNestedInput
    TransaccionesOrigen?: TransaccionUpdateManyWithoutCuentaOrigenNestedInput
    TransaccionesDestino?: TransaccionUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaUncheckedUpdateWithoutTipoCuentaInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    personaSecuencial?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    TransaccionesOrigen?: TransaccionUncheckedUpdateManyWithoutCuentaOrigenNestedInput
    TransaccionesDestino?: TransaccionUncheckedUpdateManyWithoutCuentaDestinoNestedInput
  }

  export type CuentaUncheckedUpdateManyWithoutTipoCuentaInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    numeroCuenta?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoCuentaFieldUpdateOperationsInput | $Enums.EstadoCuenta
    fechaApertura?: DateTimeFieldUpdateOperationsInput | Date | string
    personaSecuencial?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaccionCreateManyCuentaOrigenInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    tipoTransaccionSecuencial?: number | null
    cuentaDestinoId?: number | null
  }

  export type TransaccionCreateManyCuentaDestinoInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    tipoTransaccionSecuencial?: number | null
    cuentaOrigenId?: number | null
  }

  export type TransaccionUpdateWithoutCuentaOrigenInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    TipoTransaccion?: TipoTransaccionUpdateOneWithoutTransaccionesNestedInput
    CuentaDestino?: CuentaUpdateOneWithoutTransaccionesDestinoNestedInput
  }

  export type TransaccionUncheckedUpdateWithoutCuentaOrigenInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTransaccionSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaDestinoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransaccionUncheckedUpdateManyWithoutCuentaOrigenInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTransaccionSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaDestinoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransaccionUpdateWithoutCuentaDestinoInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    TipoTransaccion?: TipoTransaccionUpdateOneWithoutTransaccionesNestedInput
    CuentaOrigen?: CuentaUpdateOneWithoutTransaccionesOrigenNestedInput
  }

  export type TransaccionUncheckedUpdateWithoutCuentaDestinoInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTransaccionSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaOrigenId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransaccionUncheckedUpdateManyWithoutCuentaDestinoInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTransaccionSecuencial?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaOrigenId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransaccionCreateManyTipoTransaccionInput = {
    secuencial?: number
    monto: number
    fechaTransaccion?: Date | string
    estado?: $Enums.EstadoTransaccion
    descripcion?: string | null
    cuentaOrigenId?: number | null
    cuentaDestinoId?: number | null
  }

  export type TransaccionUpdateWithoutTipoTransaccionInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CuentaOrigen?: CuentaUpdateOneWithoutTransaccionesOrigenNestedInput
    CuentaDestino?: CuentaUpdateOneWithoutTransaccionesDestinoNestedInput
  }

  export type TransaccionUncheckedUpdateWithoutTipoTransaccionInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaOrigenId?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaDestinoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransaccionUncheckedUpdateManyWithoutTipoTransaccionInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    fechaTransaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoTransaccionFieldUpdateOperationsInput | $Enums.EstadoTransaccion
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaOrigenId?: NullableIntFieldUpdateOperationsInput | number | null
    cuentaDestinoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductoUsuarioCreateManyProductoInput = {
    secuencial?: number
    usuarioId: number
    fechaAdquisicion?: Date | string
    estado?: $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioUpdateWithoutProductoInput = {
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
    usuario?: PersonaUpdateOneRequiredWithoutProductoUsuarioNestedInput
  }

  export type ProductoUsuarioUncheckedUpdateWithoutProductoInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductoUsuarioUncheckedUpdateManyWithoutProductoInput = {
    secuencial?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaAdquisicion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoProductoFieldUpdateOperationsInput | $Enums.EstadoProducto
    detalles?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PersonaCountOutputTypeDefaultArgs instead
     */
    export type PersonaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoCuentaCountOutputTypeDefaultArgs instead
     */
    export type TipoCuentaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoCuentaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuentaCountOutputTypeDefaultArgs instead
     */
    export type CuentaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuentaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoTransaccionCountOutputTypeDefaultArgs instead
     */
    export type TipoTransaccionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoTransaccionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductoCountOutputTypeDefaultArgs instead
     */
    export type ProductoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonaDefaultArgs instead
     */
    export type PersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoCuentaDefaultArgs instead
     */
    export type TipoCuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoCuentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuentaDefaultArgs instead
     */
    export type CuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoTransaccionDefaultArgs instead
     */
    export type TipoTransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoTransaccionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransaccionDefaultArgs instead
     */
    export type TransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransaccionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductoDefaultArgs instead
     */
    export type ProductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductoUsuarioDefaultArgs instead
     */
    export type ProductoUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductoUsuarioDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}