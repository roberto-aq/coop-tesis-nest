
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
 * Model Clave
 * 
 */
export type Clave = $Result.DefaultSelection<Prisma.$ClavePayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model MenuRol
 * 
 */
export type MenuRol = $Result.DefaultSelection<Prisma.$MenuRolPayload>
/**
 * Model PersonaRol
 * 
 */
export type PersonaRol = $Result.DefaultSelection<Prisma.$PersonaRolPayload>

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
   * `prisma.clave`: Exposes CRUD operations for the **Clave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claves
    * const claves = await prisma.clave.findMany()
    * ```
    */
  get clave(): Prisma.ClaveDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs>;

  /**
   * `prisma.menuRol`: Exposes CRUD operations for the **MenuRol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuRols
    * const menuRols = await prisma.menuRol.findMany()
    * ```
    */
  get menuRol(): Prisma.MenuRolDelegate<ExtArgs>;

  /**
   * `prisma.personaRol`: Exposes CRUD operations for the **PersonaRol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonaRols
    * const personaRols = await prisma.personaRol.findMany()
    * ```
    */
  get personaRol(): Prisma.PersonaRolDelegate<ExtArgs>;
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
    Clave: 'Clave',
    Menu: 'Menu',
    Rol: 'Rol',
    MenuRol: 'MenuRol',
    PersonaRol: 'PersonaRol'
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
      modelProps: "persona" | "clave" | "menu" | "rol" | "menuRol" | "personaRol"
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
          createManyAndReturn: {
            args: Prisma.PersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
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
      Clave: {
        payload: Prisma.$ClavePayload<ExtArgs>
        fields: Prisma.ClaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>
          }
          findFirst: {
            args: Prisma.ClaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>
          }
          findMany: {
            args: Prisma.ClaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>[]
          }
          create: {
            args: Prisma.ClaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>
          }
          createMany: {
            args: Prisma.ClaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>[]
          }
          delete: {
            args: Prisma.ClaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>
          }
          update: {
            args: Prisma.ClaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>
          }
          deleteMany: {
            args: Prisma.ClaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavePayload>
          }
          aggregate: {
            args: Prisma.ClaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClave>
          }
          groupBy: {
            args: Prisma.ClaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaveCountArgs<ExtArgs>
            result: $Utils.Optional<ClaveCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      MenuRol: {
        payload: Prisma.$MenuRolPayload<ExtArgs>
        fields: Prisma.MenuRolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuRolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuRolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>
          }
          findFirst: {
            args: Prisma.MenuRolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuRolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>
          }
          findMany: {
            args: Prisma.MenuRolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>[]
          }
          create: {
            args: Prisma.MenuRolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>
          }
          createMany: {
            args: Prisma.MenuRolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuRolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>[]
          }
          delete: {
            args: Prisma.MenuRolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>
          }
          update: {
            args: Prisma.MenuRolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>
          }
          deleteMany: {
            args: Prisma.MenuRolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuRolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuRolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuRolPayload>
          }
          aggregate: {
            args: Prisma.MenuRolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuRol>
          }
          groupBy: {
            args: Prisma.MenuRolGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuRolGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuRolCountArgs<ExtArgs>
            result: $Utils.Optional<MenuRolCountAggregateOutputType> | number
          }
        }
      }
      PersonaRol: {
        payload: Prisma.$PersonaRolPayload<ExtArgs>
        fields: Prisma.PersonaRolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaRolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaRolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>
          }
          findFirst: {
            args: Prisma.PersonaRolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaRolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>
          }
          findMany: {
            args: Prisma.PersonaRolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>[]
          }
          create: {
            args: Prisma.PersonaRolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>
          }
          createMany: {
            args: Prisma.PersonaRolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonaRolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>[]
          }
          delete: {
            args: Prisma.PersonaRolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>
          }
          update: {
            args: Prisma.PersonaRolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>
          }
          deleteMany: {
            args: Prisma.PersonaRolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaRolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonaRolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaRolPayload>
          }
          aggregate: {
            args: Prisma.PersonaRolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonaRol>
          }
          groupBy: {
            args: Prisma.PersonaRolGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaRolGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaRolCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaRolCountAggregateOutputType> | number
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
    clave: number
    personaRol: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clave?: boolean | PersonaCountOutputTypeCountClaveArgs
    personaRol?: boolean | PersonaCountOutputTypeCountPersonaRolArgs
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
  export type PersonaCountOutputTypeCountClaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaveWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountPersonaRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaRolWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    menuRol: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuRol?: boolean | MenuCountOutputTypeCountMenuRolArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMenuRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuRolWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    menuRol: number
    personaRol: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuRol?: boolean | RolCountOutputTypeCountMenuRolArgs
    personaRol?: boolean | RolCountOutputTypeCountPersonaRolArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountMenuRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuRolWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPersonaRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaRolWhereInput
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
    idPersona: number | null
    tipoIdentificacion: number | null
    sueldo: Decimal | null
  }

  export type PersonaSumAggregateOutputType = {
    idPersona: bigint | null
    tipoIdentificacion: number | null
    sueldo: Decimal | null
  }

  export type PersonaMinAggregateOutputType = {
    idPersona: bigint | null
    tipoIdentificacion: number | null
    identificacion: string | null
    nombreUnido: string | null
    apellido1: string | null
    apellido2: string | null
    nombres: string | null
    fechaNacimiento: Date | null
    direccion: string | null
    direccionTrabajo: string | null
    telefono: string | null
    sueldo: Decimal | null
    correo: string | null
    usuario: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    idPersona: bigint | null
    tipoIdentificacion: number | null
    identificacion: string | null
    nombreUnido: string | null
    apellido1: string | null
    apellido2: string | null
    nombres: string | null
    fechaNacimiento: Date | null
    direccion: string | null
    direccionTrabajo: string | null
    telefono: string | null
    sueldo: Decimal | null
    correo: string | null
    usuario: string | null
  }

  export type PersonaCountAggregateOutputType = {
    idPersona: number
    tipoIdentificacion: number
    identificacion: number
    nombreUnido: number
    apellido1: number
    apellido2: number
    nombres: number
    fechaNacimiento: number
    direccion: number
    direccionTrabajo: number
    telefono: number
    sueldo: number
    correo: number
    usuario: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    idPersona?: true
    tipoIdentificacion?: true
    sueldo?: true
  }

  export type PersonaSumAggregateInputType = {
    idPersona?: true
    tipoIdentificacion?: true
    sueldo?: true
  }

  export type PersonaMinAggregateInputType = {
    idPersona?: true
    tipoIdentificacion?: true
    identificacion?: true
    nombreUnido?: true
    apellido1?: true
    apellido2?: true
    nombres?: true
    fechaNacimiento?: true
    direccion?: true
    direccionTrabajo?: true
    telefono?: true
    sueldo?: true
    correo?: true
    usuario?: true
  }

  export type PersonaMaxAggregateInputType = {
    idPersona?: true
    tipoIdentificacion?: true
    identificacion?: true
    nombreUnido?: true
    apellido1?: true
    apellido2?: true
    nombres?: true
    fechaNacimiento?: true
    direccion?: true
    direccionTrabajo?: true
    telefono?: true
    sueldo?: true
    correo?: true
    usuario?: true
  }

  export type PersonaCountAggregateInputType = {
    idPersona?: true
    tipoIdentificacion?: true
    identificacion?: true
    nombreUnido?: true
    apellido1?: true
    apellido2?: true
    nombres?: true
    fechaNacimiento?: true
    direccion?: true
    direccionTrabajo?: true
    telefono?: true
    sueldo?: true
    correo?: true
    usuario?: true
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
    idPersona: bigint
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1: string | null
    apellido2: string | null
    nombres: string | null
    fechaNacimiento: Date | null
    direccion: string | null
    direccionTrabajo: string | null
    telefono: string | null
    sueldo: Decimal | null
    correo: string
    usuario: string | null
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
    idPersona?: boolean
    tipoIdentificacion?: boolean
    identificacion?: boolean
    nombreUnido?: boolean
    apellido1?: boolean
    apellido2?: boolean
    nombres?: boolean
    fechaNacimiento?: boolean
    direccion?: boolean
    direccionTrabajo?: boolean
    telefono?: boolean
    sueldo?: boolean
    correo?: boolean
    usuario?: boolean
    clave?: boolean | Persona$claveArgs<ExtArgs>
    personaRol?: boolean | Persona$personaRolArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPersona?: boolean
    tipoIdentificacion?: boolean
    identificacion?: boolean
    nombreUnido?: boolean
    apellido1?: boolean
    apellido2?: boolean
    nombres?: boolean
    fechaNacimiento?: boolean
    direccion?: boolean
    direccionTrabajo?: boolean
    telefono?: boolean
    sueldo?: boolean
    correo?: boolean
    usuario?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectScalar = {
    idPersona?: boolean
    tipoIdentificacion?: boolean
    identificacion?: boolean
    nombreUnido?: boolean
    apellido1?: boolean
    apellido2?: boolean
    nombres?: boolean
    fechaNacimiento?: boolean
    direccion?: boolean
    direccionTrabajo?: boolean
    telefono?: boolean
    sueldo?: boolean
    correo?: boolean
    usuario?: boolean
  }

  export type PersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clave?: boolean | Persona$claveArgs<ExtArgs>
    personaRol?: boolean | Persona$personaRolArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Persona"
    objects: {
      clave: Prisma.$ClavePayload<ExtArgs>[]
      personaRol: Prisma.$PersonaRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idPersona: bigint
      tipoIdentificacion: number
      identificacion: string
      nombreUnido: string
      apellido1: string | null
      apellido2: string | null
      nombres: string | null
      fechaNacimiento: Date | null
      direccion: string | null
      direccionTrabajo: string | null
      telefono: string | null
      sueldo: Prisma.Decimal | null
      correo: string
      usuario: string | null
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
     * // Only select the `idPersona`
     * const personaWithIdPersonaOnly = await prisma.persona.findMany({ select: { idPersona: true } })
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
     * Create many Personas and returns the data saved in the database.
     * @param {PersonaCreateManyAndReturnArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personas and only return the `idPersona`
     * const personaWithIdPersonaOnly = await prisma.persona.createManyAndReturn({ 
     *   select: { idPersona: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "createManyAndReturn">>

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
    clave<T extends Persona$claveArgs<ExtArgs> = {}>(args?: Subset<T, Persona$claveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "findMany"> | Null>
    personaRol<T extends Persona$personaRolArgs<ExtArgs> = {}>(args?: Subset<T, Persona$personaRolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly idPersona: FieldRef<"Persona", 'BigInt'>
    readonly tipoIdentificacion: FieldRef<"Persona", 'Int'>
    readonly identificacion: FieldRef<"Persona", 'String'>
    readonly nombreUnido: FieldRef<"Persona", 'String'>
    readonly apellido1: FieldRef<"Persona", 'String'>
    readonly apellido2: FieldRef<"Persona", 'String'>
    readonly nombres: FieldRef<"Persona", 'String'>
    readonly fechaNacimiento: FieldRef<"Persona", 'DateTime'>
    readonly direccion: FieldRef<"Persona", 'String'>
    readonly direccionTrabajo: FieldRef<"Persona", 'String'>
    readonly telefono: FieldRef<"Persona", 'String'>
    readonly sueldo: FieldRef<"Persona", 'Decimal'>
    readonly correo: FieldRef<"Persona", 'String'>
    readonly usuario: FieldRef<"Persona", 'String'>
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
   * Persona createManyAndReturn
   */
  export type PersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectCreateManyAndReturn<ExtArgs> | null
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
   * Persona.clave
   */
  export type Persona$claveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    where?: ClaveWhereInput
    orderBy?: ClaveOrderByWithRelationInput | ClaveOrderByWithRelationInput[]
    cursor?: ClaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaveScalarFieldEnum | ClaveScalarFieldEnum[]
  }

  /**
   * Persona.personaRol
   */
  export type Persona$personaRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    where?: PersonaRolWhereInput
    orderBy?: PersonaRolOrderByWithRelationInput | PersonaRolOrderByWithRelationInput[]
    cursor?: PersonaRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonaRolScalarFieldEnum | PersonaRolScalarFieldEnum[]
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
   * Model Clave
   */

  export type AggregateClave = {
    _count: ClaveCountAggregateOutputType | null
    _avg: ClaveAvgAggregateOutputType | null
    _sum: ClaveSumAggregateOutputType | null
    _min: ClaveMinAggregateOutputType | null
    _max: ClaveMaxAggregateOutputType | null
  }

  export type ClaveAvgAggregateOutputType = {
    idClave: number | null
    idPersona: number | null
  }

  export type ClaveSumAggregateOutputType = {
    idClave: bigint | null
    idPersona: bigint | null
  }

  export type ClaveMinAggregateOutputType = {
    idClave: bigint | null
    idPersona: bigint | null
    clave: string | null
    fecha: Date | null
    estado: boolean | null
  }

  export type ClaveMaxAggregateOutputType = {
    idClave: bigint | null
    idPersona: bigint | null
    clave: string | null
    fecha: Date | null
    estado: boolean | null
  }

  export type ClaveCountAggregateOutputType = {
    idClave: number
    idPersona: number
    clave: number
    fecha: number
    estado: number
    _all: number
  }


  export type ClaveAvgAggregateInputType = {
    idClave?: true
    idPersona?: true
  }

  export type ClaveSumAggregateInputType = {
    idClave?: true
    idPersona?: true
  }

  export type ClaveMinAggregateInputType = {
    idClave?: true
    idPersona?: true
    clave?: true
    fecha?: true
    estado?: true
  }

  export type ClaveMaxAggregateInputType = {
    idClave?: true
    idPersona?: true
    clave?: true
    fecha?: true
    estado?: true
  }

  export type ClaveCountAggregateInputType = {
    idClave?: true
    idPersona?: true
    clave?: true
    fecha?: true
    estado?: true
    _all?: true
  }

  export type ClaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clave to aggregate.
     */
    where?: ClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claves to fetch.
     */
    orderBy?: ClaveOrderByWithRelationInput | ClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claves
    **/
    _count?: true | ClaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaveMaxAggregateInputType
  }

  export type GetClaveAggregateType<T extends ClaveAggregateArgs> = {
        [P in keyof T & keyof AggregateClave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClave[P]>
      : GetScalarType<T[P], AggregateClave[P]>
  }




  export type ClaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaveWhereInput
    orderBy?: ClaveOrderByWithAggregationInput | ClaveOrderByWithAggregationInput[]
    by: ClaveScalarFieldEnum[] | ClaveScalarFieldEnum
    having?: ClaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaveCountAggregateInputType | true
    _avg?: ClaveAvgAggregateInputType
    _sum?: ClaveSumAggregateInputType
    _min?: ClaveMinAggregateInputType
    _max?: ClaveMaxAggregateInputType
  }

  export type ClaveGroupByOutputType = {
    idClave: bigint
    idPersona: bigint
    clave: string
    fecha: Date
    estado: boolean
    _count: ClaveCountAggregateOutputType | null
    _avg: ClaveAvgAggregateOutputType | null
    _sum: ClaveSumAggregateOutputType | null
    _min: ClaveMinAggregateOutputType | null
    _max: ClaveMaxAggregateOutputType | null
  }

  type GetClaveGroupByPayload<T extends ClaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaveGroupByOutputType[P]>
            : GetScalarType<T[P], ClaveGroupByOutputType[P]>
        }
      >
    >


  export type ClaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idClave?: boolean
    idPersona?: boolean
    clave?: boolean
    fecha?: boolean
    estado?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clave"]>

  export type ClaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idClave?: boolean
    idPersona?: boolean
    clave?: boolean
    fecha?: boolean
    estado?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clave"]>

  export type ClaveSelectScalar = {
    idClave?: boolean
    idPersona?: boolean
    clave?: boolean
    fecha?: boolean
    estado?: boolean
  }

  export type ClaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }
  export type ClaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }

  export type $ClavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clave"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idClave: bigint
      idPersona: bigint
      clave: string
      fecha: Date
      estado: boolean
    }, ExtArgs["result"]["clave"]>
    composites: {}
  }

  type ClaveGetPayload<S extends boolean | null | undefined | ClaveDefaultArgs> = $Result.GetResult<Prisma.$ClavePayload, S>

  type ClaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaveCountAggregateInputType | true
    }

  export interface ClaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clave'], meta: { name: 'Clave' } }
    /**
     * Find zero or one Clave that matches the filter.
     * @param {ClaveFindUniqueArgs} args - Arguments to find a Clave
     * @example
     * // Get one Clave
     * const clave = await prisma.clave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaveFindUniqueArgs>(args: SelectSubset<T, ClaveFindUniqueArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clave that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClaveFindUniqueOrThrowArgs} args - Arguments to find a Clave
     * @example
     * // Get one Clave
     * const clave = await prisma.clave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaveFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaveFindFirstArgs} args - Arguments to find a Clave
     * @example
     * // Get one Clave
     * const clave = await prisma.clave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaveFindFirstArgs>(args?: SelectSubset<T, ClaveFindFirstArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaveFindFirstOrThrowArgs} args - Arguments to find a Clave
     * @example
     * // Get one Clave
     * const clave = await prisma.clave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaveFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Claves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claves
     * const claves = await prisma.clave.findMany()
     * 
     * // Get first 10 Claves
     * const claves = await prisma.clave.findMany({ take: 10 })
     * 
     * // Only select the `idClave`
     * const claveWithIdClaveOnly = await prisma.clave.findMany({ select: { idClave: true } })
     * 
     */
    findMany<T extends ClaveFindManyArgs>(args?: SelectSubset<T, ClaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clave.
     * @param {ClaveCreateArgs} args - Arguments to create a Clave.
     * @example
     * // Create one Clave
     * const Clave = await prisma.clave.create({
     *   data: {
     *     // ... data to create a Clave
     *   }
     * })
     * 
     */
    create<T extends ClaveCreateArgs>(args: SelectSubset<T, ClaveCreateArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Claves.
     * @param {ClaveCreateManyArgs} args - Arguments to create many Claves.
     * @example
     * // Create many Claves
     * const clave = await prisma.clave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaveCreateManyArgs>(args?: SelectSubset<T, ClaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claves and returns the data saved in the database.
     * @param {ClaveCreateManyAndReturnArgs} args - Arguments to create many Claves.
     * @example
     * // Create many Claves
     * const clave = await prisma.clave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claves and only return the `idClave`
     * const claveWithIdClaveOnly = await prisma.clave.createManyAndReturn({ 
     *   select: { idClave: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaveCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clave.
     * @param {ClaveDeleteArgs} args - Arguments to delete one Clave.
     * @example
     * // Delete one Clave
     * const Clave = await prisma.clave.delete({
     *   where: {
     *     // ... filter to delete one Clave
     *   }
     * })
     * 
     */
    delete<T extends ClaveDeleteArgs>(args: SelectSubset<T, ClaveDeleteArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clave.
     * @param {ClaveUpdateArgs} args - Arguments to update one Clave.
     * @example
     * // Update one Clave
     * const clave = await prisma.clave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaveUpdateArgs>(args: SelectSubset<T, ClaveUpdateArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Claves.
     * @param {ClaveDeleteManyArgs} args - Arguments to filter Claves to delete.
     * @example
     * // Delete a few Claves
     * const { count } = await prisma.clave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaveDeleteManyArgs>(args?: SelectSubset<T, ClaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claves
     * const clave = await prisma.clave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaveUpdateManyArgs>(args: SelectSubset<T, ClaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clave.
     * @param {ClaveUpsertArgs} args - Arguments to update or create a Clave.
     * @example
     * // Update or create a Clave
     * const clave = await prisma.clave.upsert({
     *   create: {
     *     // ... data to create a Clave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clave we want to update
     *   }
     * })
     */
    upsert<T extends ClaveUpsertArgs>(args: SelectSubset<T, ClaveUpsertArgs<ExtArgs>>): Prisma__ClaveClient<$Result.GetResult<Prisma.$ClavePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Claves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaveCountArgs} args - Arguments to filter Claves to count.
     * @example
     * // Count the number of Claves
     * const count = await prisma.clave.count({
     *   where: {
     *     // ... the filter for the Claves we want to count
     *   }
     * })
    **/
    count<T extends ClaveCountArgs>(
      args?: Subset<T, ClaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaveAggregateArgs>(args: Subset<T, ClaveAggregateArgs>): Prisma.PrismaPromise<GetClaveAggregateType<T>>

    /**
     * Group by Clave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaveGroupByArgs} args - Group by arguments.
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
      T extends ClaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaveGroupByArgs['orderBy'] }
        : { orderBy?: ClaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clave model
   */
  readonly fields: ClaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Clave model
   */ 
  interface ClaveFieldRefs {
    readonly idClave: FieldRef<"Clave", 'BigInt'>
    readonly idPersona: FieldRef<"Clave", 'BigInt'>
    readonly clave: FieldRef<"Clave", 'String'>
    readonly fecha: FieldRef<"Clave", 'DateTime'>
    readonly estado: FieldRef<"Clave", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Clave findUnique
   */
  export type ClaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * Filter, which Clave to fetch.
     */
    where: ClaveWhereUniqueInput
  }

  /**
   * Clave findUniqueOrThrow
   */
  export type ClaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * Filter, which Clave to fetch.
     */
    where: ClaveWhereUniqueInput
  }

  /**
   * Clave findFirst
   */
  export type ClaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * Filter, which Clave to fetch.
     */
    where?: ClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claves to fetch.
     */
    orderBy?: ClaveOrderByWithRelationInput | ClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claves.
     */
    cursor?: ClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claves.
     */
    distinct?: ClaveScalarFieldEnum | ClaveScalarFieldEnum[]
  }

  /**
   * Clave findFirstOrThrow
   */
  export type ClaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * Filter, which Clave to fetch.
     */
    where?: ClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claves to fetch.
     */
    orderBy?: ClaveOrderByWithRelationInput | ClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claves.
     */
    cursor?: ClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claves.
     */
    distinct?: ClaveScalarFieldEnum | ClaveScalarFieldEnum[]
  }

  /**
   * Clave findMany
   */
  export type ClaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * Filter, which Claves to fetch.
     */
    where?: ClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claves to fetch.
     */
    orderBy?: ClaveOrderByWithRelationInput | ClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claves.
     */
    cursor?: ClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claves.
     */
    skip?: number
    distinct?: ClaveScalarFieldEnum | ClaveScalarFieldEnum[]
  }

  /**
   * Clave create
   */
  export type ClaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Clave.
     */
    data: XOR<ClaveCreateInput, ClaveUncheckedCreateInput>
  }

  /**
   * Clave createMany
   */
  export type ClaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claves.
     */
    data: ClaveCreateManyInput | ClaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clave createManyAndReturn
   */
  export type ClaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Claves.
     */
    data: ClaveCreateManyInput | ClaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clave update
   */
  export type ClaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Clave.
     */
    data: XOR<ClaveUpdateInput, ClaveUncheckedUpdateInput>
    /**
     * Choose, which Clave to update.
     */
    where: ClaveWhereUniqueInput
  }

  /**
   * Clave updateMany
   */
  export type ClaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claves.
     */
    data: XOR<ClaveUpdateManyMutationInput, ClaveUncheckedUpdateManyInput>
    /**
     * Filter which Claves to update
     */
    where?: ClaveWhereInput
  }

  /**
   * Clave upsert
   */
  export type ClaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Clave to update in case it exists.
     */
    where: ClaveWhereUniqueInput
    /**
     * In case the Clave found by the `where` argument doesn't exist, create a new Clave with this data.
     */
    create: XOR<ClaveCreateInput, ClaveUncheckedCreateInput>
    /**
     * In case the Clave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaveUpdateInput, ClaveUncheckedUpdateInput>
  }

  /**
   * Clave delete
   */
  export type ClaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
    /**
     * Filter which Clave to delete.
     */
    where: ClaveWhereUniqueInput
  }

  /**
   * Clave deleteMany
   */
  export type ClaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claves to delete
     */
    where?: ClaveWhereInput
  }

  /**
   * Clave without action
   */
  export type ClaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clave
     */
    select?: ClaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaveInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    idMenu: number | null
    codigo: number | null
    idPadre: number | null
    orden: number | null
  }

  export type MenuSumAggregateOutputType = {
    idMenu: bigint | null
    codigo: bigint | null
    idPadre: number | null
    orden: number | null
  }

  export type MenuMinAggregateOutputType = {
    idMenu: bigint | null
    codigo: bigint | null
    descripcion: string | null
    idPadre: number | null
    ruta: string | null
    orden: number | null
    abrevia: string | null
    estado: boolean | null
  }

  export type MenuMaxAggregateOutputType = {
    idMenu: bigint | null
    codigo: bigint | null
    descripcion: string | null
    idPadre: number | null
    ruta: string | null
    orden: number | null
    abrevia: string | null
    estado: boolean | null
  }

  export type MenuCountAggregateOutputType = {
    idMenu: number
    codigo: number
    descripcion: number
    idPadre: number
    ruta: number
    orden: number
    abrevia: number
    estado: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    idMenu?: true
    codigo?: true
    idPadre?: true
    orden?: true
  }

  export type MenuSumAggregateInputType = {
    idMenu?: true
    codigo?: true
    idPadre?: true
    orden?: true
  }

  export type MenuMinAggregateInputType = {
    idMenu?: true
    codigo?: true
    descripcion?: true
    idPadre?: true
    ruta?: true
    orden?: true
    abrevia?: true
    estado?: true
  }

  export type MenuMaxAggregateInputType = {
    idMenu?: true
    codigo?: true
    descripcion?: true
    idPadre?: true
    ruta?: true
    orden?: true
    abrevia?: true
    estado?: true
  }

  export type MenuCountAggregateInputType = {
    idMenu?: true
    codigo?: true
    descripcion?: true
    idPadre?: true
    ruta?: true
    orden?: true
    abrevia?: true
    estado?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    idMenu: bigint
    codigo: bigint | null
    descripcion: string
    idPadre: number | null
    ruta: string | null
    orden: number | null
    abrevia: string | null
    estado: boolean
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMenu?: boolean
    codigo?: boolean
    descripcion?: boolean
    idPadre?: boolean
    ruta?: boolean
    orden?: boolean
    abrevia?: boolean
    estado?: boolean
    menuRol?: boolean | Menu$menuRolArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMenu?: boolean
    codigo?: boolean
    descripcion?: boolean
    idPadre?: boolean
    ruta?: boolean
    orden?: boolean
    abrevia?: boolean
    estado?: boolean
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    idMenu?: boolean
    codigo?: boolean
    descripcion?: boolean
    idPadre?: boolean
    ruta?: boolean
    orden?: boolean
    abrevia?: boolean
    estado?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuRol?: boolean | Menu$menuRolArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      menuRol: Prisma.$MenuRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idMenu: bigint
      codigo: bigint | null
      descripcion: string
      idPadre: number | null
      ruta: string | null
      orden: number | null
      abrevia: string | null
      estado: boolean
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `idMenu`
     * const menuWithIdMenuOnly = await prisma.menu.findMany({ select: { idMenu: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `idMenu`
     * const menuWithIdMenuOnly = await prisma.menu.createManyAndReturn({ 
     *   select: { idMenu: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuRol<T extends Menu$menuRolArgs<ExtArgs> = {}>(args?: Subset<T, Menu$menuRolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Menu model
   */ 
  interface MenuFieldRefs {
    readonly idMenu: FieldRef<"Menu", 'BigInt'>
    readonly codigo: FieldRef<"Menu", 'BigInt'>
    readonly descripcion: FieldRef<"Menu", 'String'>
    readonly idPadre: FieldRef<"Menu", 'Int'>
    readonly ruta: FieldRef<"Menu", 'String'>
    readonly orden: FieldRef<"Menu", 'Int'>
    readonly abrevia: FieldRef<"Menu", 'String'>
    readonly estado: FieldRef<"Menu", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }

  /**
   * Menu.menuRol
   */
  export type Menu$menuRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    where?: MenuRolWhereInput
    orderBy?: MenuRolOrderByWithRelationInput | MenuRolOrderByWithRelationInput[]
    cursor?: MenuRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuRolScalarFieldEnum | MenuRolScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    idRol: number | null
    orden: number | null
  }

  export type RolSumAggregateOutputType = {
    idRol: bigint | null
    orden: bigint | null
  }

  export type RolMinAggregateOutputType = {
    idRol: bigint | null
    descripcion: string | null
    abrevia: string | null
    orden: bigint | null
    estado: boolean | null
  }

  export type RolMaxAggregateOutputType = {
    idRol: bigint | null
    descripcion: string | null
    abrevia: string | null
    orden: bigint | null
    estado: boolean | null
  }

  export type RolCountAggregateOutputType = {
    idRol: number
    descripcion: number
    abrevia: number
    orden: number
    estado: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    idRol?: true
    orden?: true
  }

  export type RolSumAggregateInputType = {
    idRol?: true
    orden?: true
  }

  export type RolMinAggregateInputType = {
    idRol?: true
    descripcion?: true
    abrevia?: true
    orden?: true
    estado?: true
  }

  export type RolMaxAggregateInputType = {
    idRol?: true
    descripcion?: true
    abrevia?: true
    orden?: true
    estado?: true
  }

  export type RolCountAggregateInputType = {
    idRol?: true
    descripcion?: true
    abrevia?: true
    orden?: true
    estado?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    idRol: bigint
    descripcion: string
    abrevia: string | null
    orden: bigint | null
    estado: boolean
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idRol?: boolean
    descripcion?: boolean
    abrevia?: boolean
    orden?: boolean
    estado?: boolean
    menuRol?: boolean | Rol$menuRolArgs<ExtArgs>
    personaRol?: boolean | Rol$personaRolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idRol?: boolean
    descripcion?: boolean
    abrevia?: boolean
    orden?: boolean
    estado?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    idRol?: boolean
    descripcion?: boolean
    abrevia?: boolean
    orden?: boolean
    estado?: boolean
  }

  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuRol?: boolean | Rol$menuRolArgs<ExtArgs>
    personaRol?: boolean | Rol$personaRolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      menuRol: Prisma.$MenuRolPayload<ExtArgs>[]
      personaRol: Prisma.$PersonaRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idRol: bigint
      descripcion: string
      abrevia: string | null
      orden: bigint | null
      estado: boolean
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `idRol`
     * const rolWithIdRolOnly = await prisma.rol.findMany({ select: { idRol: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `idRol`
     * const rolWithIdRolOnly = await prisma.rol.createManyAndReturn({ 
     *   select: { idRol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuRol<T extends Rol$menuRolArgs<ExtArgs> = {}>(args?: Subset<T, Rol$menuRolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "findMany"> | Null>
    personaRol<T extends Rol$personaRolArgs<ExtArgs> = {}>(args?: Subset<T, Rol$personaRolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Rol model
   */ 
  interface RolFieldRefs {
    readonly idRol: FieldRef<"Rol", 'BigInt'>
    readonly descripcion: FieldRef<"Rol", 'String'>
    readonly abrevia: FieldRef<"Rol", 'String'>
    readonly orden: FieldRef<"Rol", 'BigInt'>
    readonly estado: FieldRef<"Rol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
  }

  /**
   * Rol.menuRol
   */
  export type Rol$menuRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    where?: MenuRolWhereInput
    orderBy?: MenuRolOrderByWithRelationInput | MenuRolOrderByWithRelationInput[]
    cursor?: MenuRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuRolScalarFieldEnum | MenuRolScalarFieldEnum[]
  }

  /**
   * Rol.personaRol
   */
  export type Rol$personaRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    where?: PersonaRolWhereInput
    orderBy?: PersonaRolOrderByWithRelationInput | PersonaRolOrderByWithRelationInput[]
    cursor?: PersonaRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonaRolScalarFieldEnum | PersonaRolScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model MenuRol
   */

  export type AggregateMenuRol = {
    _count: MenuRolCountAggregateOutputType | null
    _avg: MenuRolAvgAggregateOutputType | null
    _sum: MenuRolSumAggregateOutputType | null
    _min: MenuRolMinAggregateOutputType | null
    _max: MenuRolMaxAggregateOutputType | null
  }

  export type MenuRolAvgAggregateOutputType = {
    idMenuRol: number | null
    idRol: number | null
    idMenu: number | null
  }

  export type MenuRolSumAggregateOutputType = {
    idMenuRol: bigint | null
    idRol: bigint | null
    idMenu: bigint | null
  }

  export type MenuRolMinAggregateOutputType = {
    idMenuRol: bigint | null
    idRol: bigint | null
    idMenu: bigint | null
    fecha: Date | null
    estado: boolean | null
  }

  export type MenuRolMaxAggregateOutputType = {
    idMenuRol: bigint | null
    idRol: bigint | null
    idMenu: bigint | null
    fecha: Date | null
    estado: boolean | null
  }

  export type MenuRolCountAggregateOutputType = {
    idMenuRol: number
    idRol: number
    idMenu: number
    fecha: number
    estado: number
    _all: number
  }


  export type MenuRolAvgAggregateInputType = {
    idMenuRol?: true
    idRol?: true
    idMenu?: true
  }

  export type MenuRolSumAggregateInputType = {
    idMenuRol?: true
    idRol?: true
    idMenu?: true
  }

  export type MenuRolMinAggregateInputType = {
    idMenuRol?: true
    idRol?: true
    idMenu?: true
    fecha?: true
    estado?: true
  }

  export type MenuRolMaxAggregateInputType = {
    idMenuRol?: true
    idRol?: true
    idMenu?: true
    fecha?: true
    estado?: true
  }

  export type MenuRolCountAggregateInputType = {
    idMenuRol?: true
    idRol?: true
    idMenu?: true
    fecha?: true
    estado?: true
    _all?: true
  }

  export type MenuRolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuRol to aggregate.
     */
    where?: MenuRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuRols to fetch.
     */
    orderBy?: MenuRolOrderByWithRelationInput | MenuRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuRols
    **/
    _count?: true | MenuRolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuRolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuRolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuRolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuRolMaxAggregateInputType
  }

  export type GetMenuRolAggregateType<T extends MenuRolAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuRol[P]>
      : GetScalarType<T[P], AggregateMenuRol[P]>
  }




  export type MenuRolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuRolWhereInput
    orderBy?: MenuRolOrderByWithAggregationInput | MenuRolOrderByWithAggregationInput[]
    by: MenuRolScalarFieldEnum[] | MenuRolScalarFieldEnum
    having?: MenuRolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuRolCountAggregateInputType | true
    _avg?: MenuRolAvgAggregateInputType
    _sum?: MenuRolSumAggregateInputType
    _min?: MenuRolMinAggregateInputType
    _max?: MenuRolMaxAggregateInputType
  }

  export type MenuRolGroupByOutputType = {
    idMenuRol: bigint
    idRol: bigint
    idMenu: bigint
    fecha: Date
    estado: boolean
    _count: MenuRolCountAggregateOutputType | null
    _avg: MenuRolAvgAggregateOutputType | null
    _sum: MenuRolSumAggregateOutputType | null
    _min: MenuRolMinAggregateOutputType | null
    _max: MenuRolMaxAggregateOutputType | null
  }

  type GetMenuRolGroupByPayload<T extends MenuRolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuRolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuRolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuRolGroupByOutputType[P]>
            : GetScalarType<T[P], MenuRolGroupByOutputType[P]>
        }
      >
    >


  export type MenuRolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMenuRol?: boolean
    idRol?: boolean
    idMenu?: boolean
    fecha?: boolean
    estado?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuRol"]>

  export type MenuRolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMenuRol?: boolean
    idRol?: boolean
    idMenu?: boolean
    fecha?: boolean
    estado?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuRol"]>

  export type MenuRolSelectScalar = {
    idMenuRol?: boolean
    idRol?: boolean
    idMenu?: boolean
    fecha?: boolean
    estado?: boolean
  }

  export type MenuRolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuRolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $MenuRolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuRol"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idMenuRol: bigint
      idRol: bigint
      idMenu: bigint
      fecha: Date
      estado: boolean
    }, ExtArgs["result"]["menuRol"]>
    composites: {}
  }

  type MenuRolGetPayload<S extends boolean | null | undefined | MenuRolDefaultArgs> = $Result.GetResult<Prisma.$MenuRolPayload, S>

  type MenuRolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuRolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuRolCountAggregateInputType | true
    }

  export interface MenuRolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuRol'], meta: { name: 'MenuRol' } }
    /**
     * Find zero or one MenuRol that matches the filter.
     * @param {MenuRolFindUniqueArgs} args - Arguments to find a MenuRol
     * @example
     * // Get one MenuRol
     * const menuRol = await prisma.menuRol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuRolFindUniqueArgs>(args: SelectSubset<T, MenuRolFindUniqueArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuRol that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuRolFindUniqueOrThrowArgs} args - Arguments to find a MenuRol
     * @example
     * // Get one MenuRol
     * const menuRol = await prisma.menuRol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuRolFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuRolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuRol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuRolFindFirstArgs} args - Arguments to find a MenuRol
     * @example
     * // Get one MenuRol
     * const menuRol = await prisma.menuRol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuRolFindFirstArgs>(args?: SelectSubset<T, MenuRolFindFirstArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuRol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuRolFindFirstOrThrowArgs} args - Arguments to find a MenuRol
     * @example
     * // Get one MenuRol
     * const menuRol = await prisma.menuRol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuRolFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuRolFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuRols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuRolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuRols
     * const menuRols = await prisma.menuRol.findMany()
     * 
     * // Get first 10 MenuRols
     * const menuRols = await prisma.menuRol.findMany({ take: 10 })
     * 
     * // Only select the `idMenuRol`
     * const menuRolWithIdMenuRolOnly = await prisma.menuRol.findMany({ select: { idMenuRol: true } })
     * 
     */
    findMany<T extends MenuRolFindManyArgs>(args?: SelectSubset<T, MenuRolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuRol.
     * @param {MenuRolCreateArgs} args - Arguments to create a MenuRol.
     * @example
     * // Create one MenuRol
     * const MenuRol = await prisma.menuRol.create({
     *   data: {
     *     // ... data to create a MenuRol
     *   }
     * })
     * 
     */
    create<T extends MenuRolCreateArgs>(args: SelectSubset<T, MenuRolCreateArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuRols.
     * @param {MenuRolCreateManyArgs} args - Arguments to create many MenuRols.
     * @example
     * // Create many MenuRols
     * const menuRol = await prisma.menuRol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuRolCreateManyArgs>(args?: SelectSubset<T, MenuRolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuRols and returns the data saved in the database.
     * @param {MenuRolCreateManyAndReturnArgs} args - Arguments to create many MenuRols.
     * @example
     * // Create many MenuRols
     * const menuRol = await prisma.menuRol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuRols and only return the `idMenuRol`
     * const menuRolWithIdMenuRolOnly = await prisma.menuRol.createManyAndReturn({ 
     *   select: { idMenuRol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuRolCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuRolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MenuRol.
     * @param {MenuRolDeleteArgs} args - Arguments to delete one MenuRol.
     * @example
     * // Delete one MenuRol
     * const MenuRol = await prisma.menuRol.delete({
     *   where: {
     *     // ... filter to delete one MenuRol
     *   }
     * })
     * 
     */
    delete<T extends MenuRolDeleteArgs>(args: SelectSubset<T, MenuRolDeleteArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuRol.
     * @param {MenuRolUpdateArgs} args - Arguments to update one MenuRol.
     * @example
     * // Update one MenuRol
     * const menuRol = await prisma.menuRol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuRolUpdateArgs>(args: SelectSubset<T, MenuRolUpdateArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuRols.
     * @param {MenuRolDeleteManyArgs} args - Arguments to filter MenuRols to delete.
     * @example
     * // Delete a few MenuRols
     * const { count } = await prisma.menuRol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuRolDeleteManyArgs>(args?: SelectSubset<T, MenuRolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuRolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuRols
     * const menuRol = await prisma.menuRol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuRolUpdateManyArgs>(args: SelectSubset<T, MenuRolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuRol.
     * @param {MenuRolUpsertArgs} args - Arguments to update or create a MenuRol.
     * @example
     * // Update or create a MenuRol
     * const menuRol = await prisma.menuRol.upsert({
     *   create: {
     *     // ... data to create a MenuRol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuRol we want to update
     *   }
     * })
     */
    upsert<T extends MenuRolUpsertArgs>(args: SelectSubset<T, MenuRolUpsertArgs<ExtArgs>>): Prisma__MenuRolClient<$Result.GetResult<Prisma.$MenuRolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuRolCountArgs} args - Arguments to filter MenuRols to count.
     * @example
     * // Count the number of MenuRols
     * const count = await prisma.menuRol.count({
     *   where: {
     *     // ... the filter for the MenuRols we want to count
     *   }
     * })
    **/
    count<T extends MenuRolCountArgs>(
      args?: Subset<T, MenuRolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuRolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuRolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuRolAggregateArgs>(args: Subset<T, MenuRolAggregateArgs>): Prisma.PrismaPromise<GetMenuRolAggregateType<T>>

    /**
     * Group by MenuRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuRolGroupByArgs} args - Group by arguments.
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
      T extends MenuRolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuRolGroupByArgs['orderBy'] }
        : { orderBy?: MenuRolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuRolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuRol model
   */
  readonly fields: MenuRolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuRol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuRolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MenuRol model
   */ 
  interface MenuRolFieldRefs {
    readonly idMenuRol: FieldRef<"MenuRol", 'BigInt'>
    readonly idRol: FieldRef<"MenuRol", 'BigInt'>
    readonly idMenu: FieldRef<"MenuRol", 'BigInt'>
    readonly fecha: FieldRef<"MenuRol", 'DateTime'>
    readonly estado: FieldRef<"MenuRol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MenuRol findUnique
   */
  export type MenuRolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * Filter, which MenuRol to fetch.
     */
    where: MenuRolWhereUniqueInput
  }

  /**
   * MenuRol findUniqueOrThrow
   */
  export type MenuRolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * Filter, which MenuRol to fetch.
     */
    where: MenuRolWhereUniqueInput
  }

  /**
   * MenuRol findFirst
   */
  export type MenuRolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * Filter, which MenuRol to fetch.
     */
    where?: MenuRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuRols to fetch.
     */
    orderBy?: MenuRolOrderByWithRelationInput | MenuRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuRols.
     */
    cursor?: MenuRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuRols.
     */
    distinct?: MenuRolScalarFieldEnum | MenuRolScalarFieldEnum[]
  }

  /**
   * MenuRol findFirstOrThrow
   */
  export type MenuRolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * Filter, which MenuRol to fetch.
     */
    where?: MenuRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuRols to fetch.
     */
    orderBy?: MenuRolOrderByWithRelationInput | MenuRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuRols.
     */
    cursor?: MenuRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuRols.
     */
    distinct?: MenuRolScalarFieldEnum | MenuRolScalarFieldEnum[]
  }

  /**
   * MenuRol findMany
   */
  export type MenuRolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * Filter, which MenuRols to fetch.
     */
    where?: MenuRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuRols to fetch.
     */
    orderBy?: MenuRolOrderByWithRelationInput | MenuRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuRols.
     */
    cursor?: MenuRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuRols.
     */
    skip?: number
    distinct?: MenuRolScalarFieldEnum | MenuRolScalarFieldEnum[]
  }

  /**
   * MenuRol create
   */
  export type MenuRolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuRol.
     */
    data: XOR<MenuRolCreateInput, MenuRolUncheckedCreateInput>
  }

  /**
   * MenuRol createMany
   */
  export type MenuRolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuRols.
     */
    data: MenuRolCreateManyInput | MenuRolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuRol createManyAndReturn
   */
  export type MenuRolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MenuRols.
     */
    data: MenuRolCreateManyInput | MenuRolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuRol update
   */
  export type MenuRolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuRol.
     */
    data: XOR<MenuRolUpdateInput, MenuRolUncheckedUpdateInput>
    /**
     * Choose, which MenuRol to update.
     */
    where: MenuRolWhereUniqueInput
  }

  /**
   * MenuRol updateMany
   */
  export type MenuRolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuRols.
     */
    data: XOR<MenuRolUpdateManyMutationInput, MenuRolUncheckedUpdateManyInput>
    /**
     * Filter which MenuRols to update
     */
    where?: MenuRolWhereInput
  }

  /**
   * MenuRol upsert
   */
  export type MenuRolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuRol to update in case it exists.
     */
    where: MenuRolWhereUniqueInput
    /**
     * In case the MenuRol found by the `where` argument doesn't exist, create a new MenuRol with this data.
     */
    create: XOR<MenuRolCreateInput, MenuRolUncheckedCreateInput>
    /**
     * In case the MenuRol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuRolUpdateInput, MenuRolUncheckedUpdateInput>
  }

  /**
   * MenuRol delete
   */
  export type MenuRolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
    /**
     * Filter which MenuRol to delete.
     */
    where: MenuRolWhereUniqueInput
  }

  /**
   * MenuRol deleteMany
   */
  export type MenuRolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuRols to delete
     */
    where?: MenuRolWhereInput
  }

  /**
   * MenuRol without action
   */
  export type MenuRolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuRol
     */
    select?: MenuRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuRolInclude<ExtArgs> | null
  }


  /**
   * Model PersonaRol
   */

  export type AggregatePersonaRol = {
    _count: PersonaRolCountAggregateOutputType | null
    _avg: PersonaRolAvgAggregateOutputType | null
    _sum: PersonaRolSumAggregateOutputType | null
    _min: PersonaRolMinAggregateOutputType | null
    _max: PersonaRolMaxAggregateOutputType | null
  }

  export type PersonaRolAvgAggregateOutputType = {
    idPersonaRol: number | null
    idPersona: number | null
    idRol: number | null
  }

  export type PersonaRolSumAggregateOutputType = {
    idPersonaRol: bigint | null
    idPersona: bigint | null
    idRol: bigint | null
  }

  export type PersonaRolMinAggregateOutputType = {
    idPersonaRol: bigint | null
    idPersona: bigint | null
    idRol: bigint | null
    fecha: Date | null
    estado: boolean | null
  }

  export type PersonaRolMaxAggregateOutputType = {
    idPersonaRol: bigint | null
    idPersona: bigint | null
    idRol: bigint | null
    fecha: Date | null
    estado: boolean | null
  }

  export type PersonaRolCountAggregateOutputType = {
    idPersonaRol: number
    idPersona: number
    idRol: number
    fecha: number
    estado: number
    _all: number
  }


  export type PersonaRolAvgAggregateInputType = {
    idPersonaRol?: true
    idPersona?: true
    idRol?: true
  }

  export type PersonaRolSumAggregateInputType = {
    idPersonaRol?: true
    idPersona?: true
    idRol?: true
  }

  export type PersonaRolMinAggregateInputType = {
    idPersonaRol?: true
    idPersona?: true
    idRol?: true
    fecha?: true
    estado?: true
  }

  export type PersonaRolMaxAggregateInputType = {
    idPersonaRol?: true
    idPersona?: true
    idRol?: true
    fecha?: true
    estado?: true
  }

  export type PersonaRolCountAggregateInputType = {
    idPersonaRol?: true
    idPersona?: true
    idRol?: true
    fecha?: true
    estado?: true
    _all?: true
  }

  export type PersonaRolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonaRol to aggregate.
     */
    where?: PersonaRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaRols to fetch.
     */
    orderBy?: PersonaRolOrderByWithRelationInput | PersonaRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonaRols
    **/
    _count?: true | PersonaRolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaRolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaRolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaRolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaRolMaxAggregateInputType
  }

  export type GetPersonaRolAggregateType<T extends PersonaRolAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonaRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonaRol[P]>
      : GetScalarType<T[P], AggregatePersonaRol[P]>
  }




  export type PersonaRolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaRolWhereInput
    orderBy?: PersonaRolOrderByWithAggregationInput | PersonaRolOrderByWithAggregationInput[]
    by: PersonaRolScalarFieldEnum[] | PersonaRolScalarFieldEnum
    having?: PersonaRolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaRolCountAggregateInputType | true
    _avg?: PersonaRolAvgAggregateInputType
    _sum?: PersonaRolSumAggregateInputType
    _min?: PersonaRolMinAggregateInputType
    _max?: PersonaRolMaxAggregateInputType
  }

  export type PersonaRolGroupByOutputType = {
    idPersonaRol: bigint
    idPersona: bigint | null
    idRol: bigint | null
    fecha: Date | null
    estado: boolean
    _count: PersonaRolCountAggregateOutputType | null
    _avg: PersonaRolAvgAggregateOutputType | null
    _sum: PersonaRolSumAggregateOutputType | null
    _min: PersonaRolMinAggregateOutputType | null
    _max: PersonaRolMaxAggregateOutputType | null
  }

  type GetPersonaRolGroupByPayload<T extends PersonaRolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaRolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaRolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaRolGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaRolGroupByOutputType[P]>
        }
      >
    >


  export type PersonaRolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPersonaRol?: boolean
    idPersona?: boolean
    idRol?: boolean
    fecha?: boolean
    estado?: boolean
    persona?: boolean | PersonaRol$personaArgs<ExtArgs>
    rol?: boolean | PersonaRol$rolArgs<ExtArgs>
  }, ExtArgs["result"]["personaRol"]>

  export type PersonaRolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPersonaRol?: boolean
    idPersona?: boolean
    idRol?: boolean
    fecha?: boolean
    estado?: boolean
    persona?: boolean | PersonaRol$personaArgs<ExtArgs>
    rol?: boolean | PersonaRol$rolArgs<ExtArgs>
  }, ExtArgs["result"]["personaRol"]>

  export type PersonaRolSelectScalar = {
    idPersonaRol?: boolean
    idPersona?: boolean
    idRol?: boolean
    fecha?: boolean
    estado?: boolean
  }

  export type PersonaRolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaRol$personaArgs<ExtArgs>
    rol?: boolean | PersonaRol$rolArgs<ExtArgs>
  }
  export type PersonaRolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaRol$personaArgs<ExtArgs>
    rol?: boolean | PersonaRol$rolArgs<ExtArgs>
  }

  export type $PersonaRolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonaRol"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs> | null
      rol: Prisma.$RolPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idPersonaRol: bigint
      idPersona: bigint | null
      idRol: bigint | null
      fecha: Date | null
      estado: boolean
    }, ExtArgs["result"]["personaRol"]>
    composites: {}
  }

  type PersonaRolGetPayload<S extends boolean | null | undefined | PersonaRolDefaultArgs> = $Result.GetResult<Prisma.$PersonaRolPayload, S>

  type PersonaRolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonaRolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonaRolCountAggregateInputType | true
    }

  export interface PersonaRolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonaRol'], meta: { name: 'PersonaRol' } }
    /**
     * Find zero or one PersonaRol that matches the filter.
     * @param {PersonaRolFindUniqueArgs} args - Arguments to find a PersonaRol
     * @example
     * // Get one PersonaRol
     * const personaRol = await prisma.personaRol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaRolFindUniqueArgs>(args: SelectSubset<T, PersonaRolFindUniqueArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PersonaRol that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PersonaRolFindUniqueOrThrowArgs} args - Arguments to find a PersonaRol
     * @example
     * // Get one PersonaRol
     * const personaRol = await prisma.personaRol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaRolFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaRolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PersonaRol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaRolFindFirstArgs} args - Arguments to find a PersonaRol
     * @example
     * // Get one PersonaRol
     * const personaRol = await prisma.personaRol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaRolFindFirstArgs>(args?: SelectSubset<T, PersonaRolFindFirstArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PersonaRol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaRolFindFirstOrThrowArgs} args - Arguments to find a PersonaRol
     * @example
     * // Get one PersonaRol
     * const personaRol = await prisma.personaRol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaRolFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaRolFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PersonaRols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaRolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonaRols
     * const personaRols = await prisma.personaRol.findMany()
     * 
     * // Get first 10 PersonaRols
     * const personaRols = await prisma.personaRol.findMany({ take: 10 })
     * 
     * // Only select the `idPersonaRol`
     * const personaRolWithIdPersonaRolOnly = await prisma.personaRol.findMany({ select: { idPersonaRol: true } })
     * 
     */
    findMany<T extends PersonaRolFindManyArgs>(args?: SelectSubset<T, PersonaRolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PersonaRol.
     * @param {PersonaRolCreateArgs} args - Arguments to create a PersonaRol.
     * @example
     * // Create one PersonaRol
     * const PersonaRol = await prisma.personaRol.create({
     *   data: {
     *     // ... data to create a PersonaRol
     *   }
     * })
     * 
     */
    create<T extends PersonaRolCreateArgs>(args: SelectSubset<T, PersonaRolCreateArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PersonaRols.
     * @param {PersonaRolCreateManyArgs} args - Arguments to create many PersonaRols.
     * @example
     * // Create many PersonaRols
     * const personaRol = await prisma.personaRol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaRolCreateManyArgs>(args?: SelectSubset<T, PersonaRolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonaRols and returns the data saved in the database.
     * @param {PersonaRolCreateManyAndReturnArgs} args - Arguments to create many PersonaRols.
     * @example
     * // Create many PersonaRols
     * const personaRol = await prisma.personaRol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonaRols and only return the `idPersonaRol`
     * const personaRolWithIdPersonaRolOnly = await prisma.personaRol.createManyAndReturn({ 
     *   select: { idPersonaRol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonaRolCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonaRolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PersonaRol.
     * @param {PersonaRolDeleteArgs} args - Arguments to delete one PersonaRol.
     * @example
     * // Delete one PersonaRol
     * const PersonaRol = await prisma.personaRol.delete({
     *   where: {
     *     // ... filter to delete one PersonaRol
     *   }
     * })
     * 
     */
    delete<T extends PersonaRolDeleteArgs>(args: SelectSubset<T, PersonaRolDeleteArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PersonaRol.
     * @param {PersonaRolUpdateArgs} args - Arguments to update one PersonaRol.
     * @example
     * // Update one PersonaRol
     * const personaRol = await prisma.personaRol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaRolUpdateArgs>(args: SelectSubset<T, PersonaRolUpdateArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PersonaRols.
     * @param {PersonaRolDeleteManyArgs} args - Arguments to filter PersonaRols to delete.
     * @example
     * // Delete a few PersonaRols
     * const { count } = await prisma.personaRol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaRolDeleteManyArgs>(args?: SelectSubset<T, PersonaRolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonaRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaRolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonaRols
     * const personaRol = await prisma.personaRol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaRolUpdateManyArgs>(args: SelectSubset<T, PersonaRolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonaRol.
     * @param {PersonaRolUpsertArgs} args - Arguments to update or create a PersonaRol.
     * @example
     * // Update or create a PersonaRol
     * const personaRol = await prisma.personaRol.upsert({
     *   create: {
     *     // ... data to create a PersonaRol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonaRol we want to update
     *   }
     * })
     */
    upsert<T extends PersonaRolUpsertArgs>(args: SelectSubset<T, PersonaRolUpsertArgs<ExtArgs>>): Prisma__PersonaRolClient<$Result.GetResult<Prisma.$PersonaRolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PersonaRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaRolCountArgs} args - Arguments to filter PersonaRols to count.
     * @example
     * // Count the number of PersonaRols
     * const count = await prisma.personaRol.count({
     *   where: {
     *     // ... the filter for the PersonaRols we want to count
     *   }
     * })
    **/
    count<T extends PersonaRolCountArgs>(
      args?: Subset<T, PersonaRolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaRolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonaRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaRolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonaRolAggregateArgs>(args: Subset<T, PersonaRolAggregateArgs>): Prisma.PrismaPromise<GetPersonaRolAggregateType<T>>

    /**
     * Group by PersonaRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaRolGroupByArgs} args - Group by arguments.
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
      T extends PersonaRolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaRolGroupByArgs['orderBy'] }
        : { orderBy?: PersonaRolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonaRolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonaRol model
   */
  readonly fields: PersonaRolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonaRol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaRolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends PersonaRol$personaArgs<ExtArgs> = {}>(args?: Subset<T, PersonaRol$personaArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    rol<T extends PersonaRol$rolArgs<ExtArgs> = {}>(args?: Subset<T, PersonaRol$rolArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the PersonaRol model
   */ 
  interface PersonaRolFieldRefs {
    readonly idPersonaRol: FieldRef<"PersonaRol", 'BigInt'>
    readonly idPersona: FieldRef<"PersonaRol", 'BigInt'>
    readonly idRol: FieldRef<"PersonaRol", 'BigInt'>
    readonly fecha: FieldRef<"PersonaRol", 'DateTime'>
    readonly estado: FieldRef<"PersonaRol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PersonaRol findUnique
   */
  export type PersonaRolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * Filter, which PersonaRol to fetch.
     */
    where: PersonaRolWhereUniqueInput
  }

  /**
   * PersonaRol findUniqueOrThrow
   */
  export type PersonaRolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * Filter, which PersonaRol to fetch.
     */
    where: PersonaRolWhereUniqueInput
  }

  /**
   * PersonaRol findFirst
   */
  export type PersonaRolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * Filter, which PersonaRol to fetch.
     */
    where?: PersonaRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaRols to fetch.
     */
    orderBy?: PersonaRolOrderByWithRelationInput | PersonaRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonaRols.
     */
    cursor?: PersonaRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonaRols.
     */
    distinct?: PersonaRolScalarFieldEnum | PersonaRolScalarFieldEnum[]
  }

  /**
   * PersonaRol findFirstOrThrow
   */
  export type PersonaRolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * Filter, which PersonaRol to fetch.
     */
    where?: PersonaRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaRols to fetch.
     */
    orderBy?: PersonaRolOrderByWithRelationInput | PersonaRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonaRols.
     */
    cursor?: PersonaRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonaRols.
     */
    distinct?: PersonaRolScalarFieldEnum | PersonaRolScalarFieldEnum[]
  }

  /**
   * PersonaRol findMany
   */
  export type PersonaRolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * Filter, which PersonaRols to fetch.
     */
    where?: PersonaRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonaRols to fetch.
     */
    orderBy?: PersonaRolOrderByWithRelationInput | PersonaRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonaRols.
     */
    cursor?: PersonaRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonaRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonaRols.
     */
    skip?: number
    distinct?: PersonaRolScalarFieldEnum | PersonaRolScalarFieldEnum[]
  }

  /**
   * PersonaRol create
   */
  export type PersonaRolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonaRol.
     */
    data?: XOR<PersonaRolCreateInput, PersonaRolUncheckedCreateInput>
  }

  /**
   * PersonaRol createMany
   */
  export type PersonaRolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonaRols.
     */
    data: PersonaRolCreateManyInput | PersonaRolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonaRol createManyAndReturn
   */
  export type PersonaRolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PersonaRols.
     */
    data: PersonaRolCreateManyInput | PersonaRolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonaRol update
   */
  export type PersonaRolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonaRol.
     */
    data: XOR<PersonaRolUpdateInput, PersonaRolUncheckedUpdateInput>
    /**
     * Choose, which PersonaRol to update.
     */
    where: PersonaRolWhereUniqueInput
  }

  /**
   * PersonaRol updateMany
   */
  export type PersonaRolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonaRols.
     */
    data: XOR<PersonaRolUpdateManyMutationInput, PersonaRolUncheckedUpdateManyInput>
    /**
     * Filter which PersonaRols to update
     */
    where?: PersonaRolWhereInput
  }

  /**
   * PersonaRol upsert
   */
  export type PersonaRolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonaRol to update in case it exists.
     */
    where: PersonaRolWhereUniqueInput
    /**
     * In case the PersonaRol found by the `where` argument doesn't exist, create a new PersonaRol with this data.
     */
    create: XOR<PersonaRolCreateInput, PersonaRolUncheckedCreateInput>
    /**
     * In case the PersonaRol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaRolUpdateInput, PersonaRolUncheckedUpdateInput>
  }

  /**
   * PersonaRol delete
   */
  export type PersonaRolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
    /**
     * Filter which PersonaRol to delete.
     */
    where: PersonaRolWhereUniqueInput
  }

  /**
   * PersonaRol deleteMany
   */
  export type PersonaRolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonaRols to delete
     */
    where?: PersonaRolWhereInput
  }

  /**
   * PersonaRol.persona
   */
  export type PersonaRol$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    where?: PersonaWhereInput
  }

  /**
   * PersonaRol.rol
   */
  export type PersonaRol$rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    where?: RolWhereInput
  }

  /**
   * PersonaRol without action
   */
  export type PersonaRolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaRol
     */
    select?: PersonaRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaRolInclude<ExtArgs> | null
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
    idPersona: 'idPersona',
    tipoIdentificacion: 'tipoIdentificacion',
    identificacion: 'identificacion',
    nombreUnido: 'nombreUnido',
    apellido1: 'apellido1',
    apellido2: 'apellido2',
    nombres: 'nombres',
    fechaNacimiento: 'fechaNacimiento',
    direccion: 'direccion',
    direccionTrabajo: 'direccionTrabajo',
    telefono: 'telefono',
    sueldo: 'sueldo',
    correo: 'correo',
    usuario: 'usuario'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const ClaveScalarFieldEnum: {
    idClave: 'idClave',
    idPersona: 'idPersona',
    clave: 'clave',
    fecha: 'fecha',
    estado: 'estado'
  };

  export type ClaveScalarFieldEnum = (typeof ClaveScalarFieldEnum)[keyof typeof ClaveScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    idMenu: 'idMenu',
    codigo: 'codigo',
    descripcion: 'descripcion',
    idPadre: 'idPadre',
    ruta: 'ruta',
    orden: 'orden',
    abrevia: 'abrevia',
    estado: 'estado'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const RolScalarFieldEnum: {
    idRol: 'idRol',
    descripcion: 'descripcion',
    abrevia: 'abrevia',
    orden: 'orden',
    estado: 'estado'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const MenuRolScalarFieldEnum: {
    idMenuRol: 'idMenuRol',
    idRol: 'idRol',
    idMenu: 'idMenu',
    fecha: 'fecha',
    estado: 'estado'
  };

  export type MenuRolScalarFieldEnum = (typeof MenuRolScalarFieldEnum)[keyof typeof MenuRolScalarFieldEnum]


  export const PersonaRolScalarFieldEnum: {
    idPersonaRol: 'idPersonaRol',
    idPersona: 'idPersona',
    idRol: 'idRol',
    fecha: 'fecha',
    estado: 'estado'
  };

  export type PersonaRolScalarFieldEnum = (typeof PersonaRolScalarFieldEnum)[keyof typeof PersonaRolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonaWhereInput = {
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    idPersona?: BigIntFilter<"Persona"> | bigint | number
    tipoIdentificacion?: IntFilter<"Persona"> | number
    identificacion?: StringFilter<"Persona"> | string
    nombreUnido?: StringFilter<"Persona"> | string
    apellido1?: StringNullableFilter<"Persona"> | string | null
    apellido2?: StringNullableFilter<"Persona"> | string | null
    nombres?: StringNullableFilter<"Persona"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Persona"> | Date | string | null
    direccion?: StringNullableFilter<"Persona"> | string | null
    direccionTrabajo?: StringNullableFilter<"Persona"> | string | null
    telefono?: StringNullableFilter<"Persona"> | string | null
    sueldo?: DecimalNullableFilter<"Persona"> | Decimal | DecimalJsLike | number | string | null
    correo?: StringFilter<"Persona"> | string
    usuario?: StringNullableFilter<"Persona"> | string | null
    clave?: ClaveListRelationFilter
    personaRol?: PersonaRolListRelationFilter
  }

  export type PersonaOrderByWithRelationInput = {
    idPersona?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    apellido1?: SortOrderInput | SortOrder
    apellido2?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    direccionTrabajo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    sueldo?: SortOrderInput | SortOrder
    correo?: SortOrder
    usuario?: SortOrderInput | SortOrder
    clave?: ClaveOrderByRelationAggregateInput
    personaRol?: PersonaRolOrderByRelationAggregateInput
  }

  export type PersonaWhereUniqueInput = Prisma.AtLeast<{
    idPersona?: bigint | number
    identificacion?: string
    correo?: string
    tipoIdentificacion_identificacion?: PersonaTipoIdentificacionIdentificacionCompoundUniqueInput
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    tipoIdentificacion?: IntFilter<"Persona"> | number
    nombreUnido?: StringFilter<"Persona"> | string
    apellido1?: StringNullableFilter<"Persona"> | string | null
    apellido2?: StringNullableFilter<"Persona"> | string | null
    nombres?: StringNullableFilter<"Persona"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Persona"> | Date | string | null
    direccion?: StringNullableFilter<"Persona"> | string | null
    direccionTrabajo?: StringNullableFilter<"Persona"> | string | null
    telefono?: StringNullableFilter<"Persona"> | string | null
    sueldo?: DecimalNullableFilter<"Persona"> | Decimal | DecimalJsLike | number | string | null
    usuario?: StringNullableFilter<"Persona"> | string | null
    clave?: ClaveListRelationFilter
    personaRol?: PersonaRolListRelationFilter
  }, "idPersona" | "identificacion" | "correo" | "tipoIdentificacion_identificacion">

  export type PersonaOrderByWithAggregationInput = {
    idPersona?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    apellido1?: SortOrderInput | SortOrder
    apellido2?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    direccionTrabajo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    sueldo?: SortOrderInput | SortOrder
    correo?: SortOrder
    usuario?: SortOrderInput | SortOrder
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
    idPersona?: BigIntWithAggregatesFilter<"Persona"> | bigint | number
    tipoIdentificacion?: IntWithAggregatesFilter<"Persona"> | number
    identificacion?: StringWithAggregatesFilter<"Persona"> | string
    nombreUnido?: StringWithAggregatesFilter<"Persona"> | string
    apellido1?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    apellido2?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    nombres?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    fechaNacimiento?: DateTimeNullableWithAggregatesFilter<"Persona"> | Date | string | null
    direccion?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    direccionTrabajo?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    sueldo?: DecimalNullableWithAggregatesFilter<"Persona"> | Decimal | DecimalJsLike | number | string | null
    correo?: StringWithAggregatesFilter<"Persona"> | string
    usuario?: StringNullableWithAggregatesFilter<"Persona"> | string | null
  }

  export type ClaveWhereInput = {
    AND?: ClaveWhereInput | ClaveWhereInput[]
    OR?: ClaveWhereInput[]
    NOT?: ClaveWhereInput | ClaveWhereInput[]
    idClave?: BigIntFilter<"Clave"> | bigint | number
    idPersona?: BigIntFilter<"Clave"> | bigint | number
    clave?: StringFilter<"Clave"> | string
    fecha?: DateTimeFilter<"Clave"> | Date | string
    estado?: BoolFilter<"Clave"> | boolean
    persona?: XOR<PersonaRelationFilter, PersonaWhereInput>
  }

  export type ClaveOrderByWithRelationInput = {
    idClave?: SortOrder
    idPersona?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    persona?: PersonaOrderByWithRelationInput
  }

  export type ClaveWhereUniqueInput = Prisma.AtLeast<{
    idClave?: bigint | number
    AND?: ClaveWhereInput | ClaveWhereInput[]
    OR?: ClaveWhereInput[]
    NOT?: ClaveWhereInput | ClaveWhereInput[]
    idPersona?: BigIntFilter<"Clave"> | bigint | number
    clave?: StringFilter<"Clave"> | string
    fecha?: DateTimeFilter<"Clave"> | Date | string
    estado?: BoolFilter<"Clave"> | boolean
    persona?: XOR<PersonaRelationFilter, PersonaWhereInput>
  }, "idClave">

  export type ClaveOrderByWithAggregationInput = {
    idClave?: SortOrder
    idPersona?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    _count?: ClaveCountOrderByAggregateInput
    _avg?: ClaveAvgOrderByAggregateInput
    _max?: ClaveMaxOrderByAggregateInput
    _min?: ClaveMinOrderByAggregateInput
    _sum?: ClaveSumOrderByAggregateInput
  }

  export type ClaveScalarWhereWithAggregatesInput = {
    AND?: ClaveScalarWhereWithAggregatesInput | ClaveScalarWhereWithAggregatesInput[]
    OR?: ClaveScalarWhereWithAggregatesInput[]
    NOT?: ClaveScalarWhereWithAggregatesInput | ClaveScalarWhereWithAggregatesInput[]
    idClave?: BigIntWithAggregatesFilter<"Clave"> | bigint | number
    idPersona?: BigIntWithAggregatesFilter<"Clave"> | bigint | number
    clave?: StringWithAggregatesFilter<"Clave"> | string
    fecha?: DateTimeWithAggregatesFilter<"Clave"> | Date | string
    estado?: BoolWithAggregatesFilter<"Clave"> | boolean
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    idMenu?: BigIntFilter<"Menu"> | bigint | number
    codigo?: BigIntNullableFilter<"Menu"> | bigint | number | null
    descripcion?: StringFilter<"Menu"> | string
    idPadre?: IntNullableFilter<"Menu"> | number | null
    ruta?: StringNullableFilter<"Menu"> | string | null
    orden?: IntNullableFilter<"Menu"> | number | null
    abrevia?: StringNullableFilter<"Menu"> | string | null
    estado?: BoolFilter<"Menu"> | boolean
    menuRol?: MenuRolListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    idMenu?: SortOrder
    codigo?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    idPadre?: SortOrderInput | SortOrder
    ruta?: SortOrderInput | SortOrder
    orden?: SortOrderInput | SortOrder
    abrevia?: SortOrderInput | SortOrder
    estado?: SortOrder
    menuRol?: MenuRolOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    idMenu?: bigint | number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    codigo?: BigIntNullableFilter<"Menu"> | bigint | number | null
    descripcion?: StringFilter<"Menu"> | string
    idPadre?: IntNullableFilter<"Menu"> | number | null
    ruta?: StringNullableFilter<"Menu"> | string | null
    orden?: IntNullableFilter<"Menu"> | number | null
    abrevia?: StringNullableFilter<"Menu"> | string | null
    estado?: BoolFilter<"Menu"> | boolean
    menuRol?: MenuRolListRelationFilter
  }, "idMenu">

  export type MenuOrderByWithAggregationInput = {
    idMenu?: SortOrder
    codigo?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    idPadre?: SortOrderInput | SortOrder
    ruta?: SortOrderInput | SortOrder
    orden?: SortOrderInput | SortOrder
    abrevia?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    idMenu?: BigIntWithAggregatesFilter<"Menu"> | bigint | number
    codigo?: BigIntNullableWithAggregatesFilter<"Menu"> | bigint | number | null
    descripcion?: StringWithAggregatesFilter<"Menu"> | string
    idPadre?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    ruta?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    orden?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    abrevia?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    estado?: BoolWithAggregatesFilter<"Menu"> | boolean
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    idRol?: BigIntFilter<"Rol"> | bigint | number
    descripcion?: StringFilter<"Rol"> | string
    abrevia?: StringNullableFilter<"Rol"> | string | null
    orden?: BigIntNullableFilter<"Rol"> | bigint | number | null
    estado?: BoolFilter<"Rol"> | boolean
    menuRol?: MenuRolListRelationFilter
    personaRol?: PersonaRolListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    idRol?: SortOrder
    descripcion?: SortOrder
    abrevia?: SortOrderInput | SortOrder
    orden?: SortOrderInput | SortOrder
    estado?: SortOrder
    menuRol?: MenuRolOrderByRelationAggregateInput
    personaRol?: PersonaRolOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    idRol?: bigint | number
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    descripcion?: StringFilter<"Rol"> | string
    abrevia?: StringNullableFilter<"Rol"> | string | null
    orden?: BigIntNullableFilter<"Rol"> | bigint | number | null
    estado?: BoolFilter<"Rol"> | boolean
    menuRol?: MenuRolListRelationFilter
    personaRol?: PersonaRolListRelationFilter
  }, "idRol">

  export type RolOrderByWithAggregationInput = {
    idRol?: SortOrder
    descripcion?: SortOrder
    abrevia?: SortOrderInput | SortOrder
    orden?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    idRol?: BigIntWithAggregatesFilter<"Rol"> | bigint | number
    descripcion?: StringWithAggregatesFilter<"Rol"> | string
    abrevia?: StringNullableWithAggregatesFilter<"Rol"> | string | null
    orden?: BigIntNullableWithAggregatesFilter<"Rol"> | bigint | number | null
    estado?: BoolWithAggregatesFilter<"Rol"> | boolean
  }

  export type MenuRolWhereInput = {
    AND?: MenuRolWhereInput | MenuRolWhereInput[]
    OR?: MenuRolWhereInput[]
    NOT?: MenuRolWhereInput | MenuRolWhereInput[]
    idMenuRol?: BigIntFilter<"MenuRol"> | bigint | number
    idRol?: BigIntFilter<"MenuRol"> | bigint | number
    idMenu?: BigIntFilter<"MenuRol"> | bigint | number
    fecha?: DateTimeFilter<"MenuRol"> | Date | string
    estado?: BoolFilter<"MenuRol"> | boolean
    rol?: XOR<RolRelationFilter, RolWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type MenuRolOrderByWithRelationInput = {
    idMenuRol?: SortOrder
    idRol?: SortOrder
    idMenu?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    rol?: RolOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
  }

  export type MenuRolWhereUniqueInput = Prisma.AtLeast<{
    idMenuRol?: bigint | number
    AND?: MenuRolWhereInput | MenuRolWhereInput[]
    OR?: MenuRolWhereInput[]
    NOT?: MenuRolWhereInput | MenuRolWhereInput[]
    idRol?: BigIntFilter<"MenuRol"> | bigint | number
    idMenu?: BigIntFilter<"MenuRol"> | bigint | number
    fecha?: DateTimeFilter<"MenuRol"> | Date | string
    estado?: BoolFilter<"MenuRol"> | boolean
    rol?: XOR<RolRelationFilter, RolWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "idMenuRol">

  export type MenuRolOrderByWithAggregationInput = {
    idMenuRol?: SortOrder
    idRol?: SortOrder
    idMenu?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    _count?: MenuRolCountOrderByAggregateInput
    _avg?: MenuRolAvgOrderByAggregateInput
    _max?: MenuRolMaxOrderByAggregateInput
    _min?: MenuRolMinOrderByAggregateInput
    _sum?: MenuRolSumOrderByAggregateInput
  }

  export type MenuRolScalarWhereWithAggregatesInput = {
    AND?: MenuRolScalarWhereWithAggregatesInput | MenuRolScalarWhereWithAggregatesInput[]
    OR?: MenuRolScalarWhereWithAggregatesInput[]
    NOT?: MenuRolScalarWhereWithAggregatesInput | MenuRolScalarWhereWithAggregatesInput[]
    idMenuRol?: BigIntWithAggregatesFilter<"MenuRol"> | bigint | number
    idRol?: BigIntWithAggregatesFilter<"MenuRol"> | bigint | number
    idMenu?: BigIntWithAggregatesFilter<"MenuRol"> | bigint | number
    fecha?: DateTimeWithAggregatesFilter<"MenuRol"> | Date | string
    estado?: BoolWithAggregatesFilter<"MenuRol"> | boolean
  }

  export type PersonaRolWhereInput = {
    AND?: PersonaRolWhereInput | PersonaRolWhereInput[]
    OR?: PersonaRolWhereInput[]
    NOT?: PersonaRolWhereInput | PersonaRolWhereInput[]
    idPersonaRol?: BigIntFilter<"PersonaRol"> | bigint | number
    idPersona?: BigIntNullableFilter<"PersonaRol"> | bigint | number | null
    idRol?: BigIntNullableFilter<"PersonaRol"> | bigint | number | null
    fecha?: DateTimeNullableFilter<"PersonaRol"> | Date | string | null
    estado?: BoolFilter<"PersonaRol"> | boolean
    persona?: XOR<PersonaNullableRelationFilter, PersonaWhereInput> | null
    rol?: XOR<RolNullableRelationFilter, RolWhereInput> | null
  }

  export type PersonaRolOrderByWithRelationInput = {
    idPersonaRol?: SortOrder
    idPersona?: SortOrderInput | SortOrder
    idRol?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    estado?: SortOrder
    persona?: PersonaOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
  }

  export type PersonaRolWhereUniqueInput = Prisma.AtLeast<{
    idPersonaRol?: bigint | number
    AND?: PersonaRolWhereInput | PersonaRolWhereInput[]
    OR?: PersonaRolWhereInput[]
    NOT?: PersonaRolWhereInput | PersonaRolWhereInput[]
    idPersona?: BigIntNullableFilter<"PersonaRol"> | bigint | number | null
    idRol?: BigIntNullableFilter<"PersonaRol"> | bigint | number | null
    fecha?: DateTimeNullableFilter<"PersonaRol"> | Date | string | null
    estado?: BoolFilter<"PersonaRol"> | boolean
    persona?: XOR<PersonaNullableRelationFilter, PersonaWhereInput> | null
    rol?: XOR<RolNullableRelationFilter, RolWhereInput> | null
  }, "idPersonaRol">

  export type PersonaRolOrderByWithAggregationInput = {
    idPersonaRol?: SortOrder
    idPersona?: SortOrderInput | SortOrder
    idRol?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: PersonaRolCountOrderByAggregateInput
    _avg?: PersonaRolAvgOrderByAggregateInput
    _max?: PersonaRolMaxOrderByAggregateInput
    _min?: PersonaRolMinOrderByAggregateInput
    _sum?: PersonaRolSumOrderByAggregateInput
  }

  export type PersonaRolScalarWhereWithAggregatesInput = {
    AND?: PersonaRolScalarWhereWithAggregatesInput | PersonaRolScalarWhereWithAggregatesInput[]
    OR?: PersonaRolScalarWhereWithAggregatesInput[]
    NOT?: PersonaRolScalarWhereWithAggregatesInput | PersonaRolScalarWhereWithAggregatesInput[]
    idPersonaRol?: BigIntWithAggregatesFilter<"PersonaRol"> | bigint | number
    idPersona?: BigIntNullableWithAggregatesFilter<"PersonaRol"> | bigint | number | null
    idRol?: BigIntNullableWithAggregatesFilter<"PersonaRol"> | bigint | number | null
    fecha?: DateTimeNullableWithAggregatesFilter<"PersonaRol"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"PersonaRol"> | boolean
  }

  export type PersonaCreateInput = {
    idPersona?: bigint | number
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1?: string | null
    apellido2?: string | null
    nombres?: string | null
    fechaNacimiento?: Date | string | null
    direccion?: string | null
    direccionTrabajo?: string | null
    telefono?: string | null
    sueldo?: Decimal | DecimalJsLike | number | string | null
    correo: string
    usuario?: string | null
    clave?: ClaveCreateNestedManyWithoutPersonaInput
    personaRol?: PersonaRolCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateInput = {
    idPersona?: bigint | number
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1?: string | null
    apellido2?: string | null
    nombres?: string | null
    fechaNacimiento?: Date | string | null
    direccion?: string | null
    direccionTrabajo?: string | null
    telefono?: string | null
    sueldo?: Decimal | DecimalJsLike | number | string | null
    correo: string
    usuario?: string | null
    clave?: ClaveUncheckedCreateNestedManyWithoutPersonaInput
    personaRol?: PersonaRolUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUpdateInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: ClaveUpdateManyWithoutPersonaNestedInput
    personaRol?: PersonaRolUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: ClaveUncheckedUpdateManyWithoutPersonaNestedInput
    personaRol?: PersonaRolUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaCreateManyInput = {
    idPersona?: bigint | number
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1?: string | null
    apellido2?: string | null
    nombres?: string | null
    fechaNacimiento?: Date | string | null
    direccion?: string | null
    direccionTrabajo?: string | null
    telefono?: string | null
    sueldo?: Decimal | DecimalJsLike | number | string | null
    correo: string
    usuario?: string | null
  }

  export type PersonaUpdateManyMutationInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonaUncheckedUpdateManyInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaveCreateInput = {
    idClave?: bigint | number
    clave: string
    fecha: Date | string
    estado?: boolean
    persona: PersonaCreateNestedOneWithoutClaveInput
  }

  export type ClaveUncheckedCreateInput = {
    idClave?: bigint | number
    idPersona: bigint | number
    clave: string
    fecha: Date | string
    estado?: boolean
  }

  export type ClaveUpdateInput = {
    idClave?: BigIntFieldUpdateOperationsInput | bigint | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    persona?: PersonaUpdateOneRequiredWithoutClaveNestedInput
  }

  export type ClaveUncheckedUpdateInput = {
    idClave?: BigIntFieldUpdateOperationsInput | bigint | number
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaveCreateManyInput = {
    idClave?: bigint | number
    idPersona: bigint | number
    clave: string
    fecha: Date | string
    estado?: boolean
  }

  export type ClaveUpdateManyMutationInput = {
    idClave?: BigIntFieldUpdateOperationsInput | bigint | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaveUncheckedUpdateManyInput = {
    idClave?: BigIntFieldUpdateOperationsInput | bigint | number
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuCreateInput = {
    idMenu?: bigint | number
    codigo?: bigint | number | null
    descripcion: string
    idPadre?: number | null
    ruta?: string | null
    orden?: number | null
    abrevia?: string | null
    estado?: boolean
    menuRol?: MenuRolCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    idMenu?: bigint | number
    codigo?: bigint | number | null
    descripcion: string
    idPadre?: number | null
    ruta?: string | null
    orden?: number | null
    abrevia?: string | null
    estado?: boolean
    menuRol?: MenuRolUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    idPadre?: NullableIntFieldUpdateOperationsInput | number | null
    ruta?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    menuRol?: MenuRolUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    idPadre?: NullableIntFieldUpdateOperationsInput | number | null
    ruta?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    menuRol?: MenuRolUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    idMenu?: bigint | number
    codigo?: bigint | number | null
    descripcion: string
    idPadre?: number | null
    ruta?: string | null
    orden?: number | null
    abrevia?: string | null
    estado?: boolean
  }

  export type MenuUpdateManyMutationInput = {
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    idPadre?: NullableIntFieldUpdateOperationsInput | number | null
    ruta?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuUncheckedUpdateManyInput = {
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    idPadre?: NullableIntFieldUpdateOperationsInput | number | null
    ruta?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolCreateInput = {
    idRol?: bigint | number
    descripcion: string
    abrevia?: string | null
    orden?: bigint | number | null
    estado?: boolean
    menuRol?: MenuRolCreateNestedManyWithoutRolInput
    personaRol?: PersonaRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    idRol?: bigint | number
    descripcion: string
    abrevia?: string | null
    orden?: bigint | number | null
    estado?: boolean
    menuRol?: MenuRolUncheckedCreateNestedManyWithoutRolInput
    personaRol?: PersonaRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    menuRol?: MenuRolUpdateManyWithoutRolNestedInput
    personaRol?: PersonaRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    menuRol?: MenuRolUncheckedUpdateManyWithoutRolNestedInput
    personaRol?: PersonaRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    idRol?: bigint | number
    descripcion: string
    abrevia?: string | null
    orden?: bigint | number | null
    estado?: boolean
  }

  export type RolUpdateManyMutationInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolUncheckedUpdateManyInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuRolCreateInput = {
    idMenuRol?: bigint | number
    fecha: Date | string
    estado?: boolean
    rol: RolCreateNestedOneWithoutMenuRolInput
    menu: MenuCreateNestedOneWithoutMenuRolInput
  }

  export type MenuRolUncheckedCreateInput = {
    idMenuRol?: bigint | number
    idRol: bigint | number
    idMenu: bigint | number
    fecha: Date | string
    estado?: boolean
  }

  export type MenuRolUpdateInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutMenuRolNestedInput
    menu?: MenuUpdateOneRequiredWithoutMenuRolNestedInput
  }

  export type MenuRolUncheckedUpdateInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuRolCreateManyInput = {
    idMenuRol?: bigint | number
    idRol: bigint | number
    idMenu: bigint | number
    fecha: Date | string
    estado?: boolean
  }

  export type MenuRolUpdateManyMutationInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuRolUncheckedUpdateManyInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaRolCreateInput = {
    idPersonaRol?: bigint | number
    fecha?: Date | string | null
    estado?: boolean
    persona?: PersonaCreateNestedOneWithoutPersonaRolInput
    rol?: RolCreateNestedOneWithoutPersonaRolInput
  }

  export type PersonaRolUncheckedCreateInput = {
    idPersonaRol?: bigint | number
    idPersona?: bigint | number | null
    idRol?: bigint | number | null
    fecha?: Date | string | null
    estado?: boolean
  }

  export type PersonaRolUpdateInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    persona?: PersonaUpdateOneWithoutPersonaRolNestedInput
    rol?: RolUpdateOneWithoutPersonaRolNestedInput
  }

  export type PersonaRolUncheckedUpdateInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idPersona?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idRol?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaRolCreateManyInput = {
    idPersonaRol?: bigint | number
    idPersona?: bigint | number | null
    idRol?: bigint | number | null
    fecha?: Date | string | null
    estado?: boolean
  }

  export type PersonaRolUpdateManyMutationInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaRolUncheckedUpdateManyInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idPersona?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idRol?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClaveListRelationFilter = {
    every?: ClaveWhereInput
    some?: ClaveWhereInput
    none?: ClaveWhereInput
  }

  export type PersonaRolListRelationFilter = {
    every?: PersonaRolWhereInput
    some?: PersonaRolWhereInput
    none?: PersonaRolWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonaRolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonaTipoIdentificacionIdentificacionCompoundUniqueInput = {
    tipoIdentificacion: number
    identificacion: string
  }

  export type PersonaCountOrderByAggregateInput = {
    idPersona?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    apellido1?: SortOrder
    apellido2?: SortOrder
    nombres?: SortOrder
    fechaNacimiento?: SortOrder
    direccion?: SortOrder
    direccionTrabajo?: SortOrder
    telefono?: SortOrder
    sueldo?: SortOrder
    correo?: SortOrder
    usuario?: SortOrder
  }

  export type PersonaAvgOrderByAggregateInput = {
    idPersona?: SortOrder
    tipoIdentificacion?: SortOrder
    sueldo?: SortOrder
  }

  export type PersonaMaxOrderByAggregateInput = {
    idPersona?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    apellido1?: SortOrder
    apellido2?: SortOrder
    nombres?: SortOrder
    fechaNacimiento?: SortOrder
    direccion?: SortOrder
    direccionTrabajo?: SortOrder
    telefono?: SortOrder
    sueldo?: SortOrder
    correo?: SortOrder
    usuario?: SortOrder
  }

  export type PersonaMinOrderByAggregateInput = {
    idPersona?: SortOrder
    tipoIdentificacion?: SortOrder
    identificacion?: SortOrder
    nombreUnido?: SortOrder
    apellido1?: SortOrder
    apellido2?: SortOrder
    nombres?: SortOrder
    fechaNacimiento?: SortOrder
    direccion?: SortOrder
    direccionTrabajo?: SortOrder
    telefono?: SortOrder
    sueldo?: SortOrder
    correo?: SortOrder
    usuario?: SortOrder
  }

  export type PersonaSumOrderByAggregateInput = {
    idPersona?: SortOrder
    tipoIdentificacion?: SortOrder
    sueldo?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonaRelationFilter = {
    is?: PersonaWhereInput
    isNot?: PersonaWhereInput
  }

  export type ClaveCountOrderByAggregateInput = {
    idClave?: SortOrder
    idPersona?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type ClaveAvgOrderByAggregateInput = {
    idClave?: SortOrder
    idPersona?: SortOrder
  }

  export type ClaveMaxOrderByAggregateInput = {
    idClave?: SortOrder
    idPersona?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type ClaveMinOrderByAggregateInput = {
    idClave?: SortOrder
    idPersona?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type ClaveSumOrderByAggregateInput = {
    idClave?: SortOrder
    idPersona?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MenuRolListRelationFilter = {
    every?: MenuRolWhereInput
    some?: MenuRolWhereInput
    none?: MenuRolWhereInput
  }

  export type MenuRolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    idMenu?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    idPadre?: SortOrder
    ruta?: SortOrder
    orden?: SortOrder
    abrevia?: SortOrder
    estado?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    idMenu?: SortOrder
    codigo?: SortOrder
    idPadre?: SortOrder
    orden?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    idMenu?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    idPadre?: SortOrder
    ruta?: SortOrder
    orden?: SortOrder
    abrevia?: SortOrder
    estado?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    idMenu?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    idPadre?: SortOrder
    ruta?: SortOrder
    orden?: SortOrder
    abrevia?: SortOrder
    estado?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    idMenu?: SortOrder
    codigo?: SortOrder
    idPadre?: SortOrder
    orden?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type RolCountOrderByAggregateInput = {
    idRol?: SortOrder
    descripcion?: SortOrder
    abrevia?: SortOrder
    orden?: SortOrder
    estado?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    idRol?: SortOrder
    orden?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    idRol?: SortOrder
    descripcion?: SortOrder
    abrevia?: SortOrder
    orden?: SortOrder
    estado?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    idRol?: SortOrder
    descripcion?: SortOrder
    abrevia?: SortOrder
    orden?: SortOrder
    estado?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    idRol?: SortOrder
    orden?: SortOrder
  }

  export type RolRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type MenuRolCountOrderByAggregateInput = {
    idMenuRol?: SortOrder
    idRol?: SortOrder
    idMenu?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type MenuRolAvgOrderByAggregateInput = {
    idMenuRol?: SortOrder
    idRol?: SortOrder
    idMenu?: SortOrder
  }

  export type MenuRolMaxOrderByAggregateInput = {
    idMenuRol?: SortOrder
    idRol?: SortOrder
    idMenu?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type MenuRolMinOrderByAggregateInput = {
    idMenuRol?: SortOrder
    idRol?: SortOrder
    idMenu?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type MenuRolSumOrderByAggregateInput = {
    idMenuRol?: SortOrder
    idRol?: SortOrder
    idMenu?: SortOrder
  }

  export type PersonaNullableRelationFilter = {
    is?: PersonaWhereInput | null
    isNot?: PersonaWhereInput | null
  }

  export type RolNullableRelationFilter = {
    is?: RolWhereInput | null
    isNot?: RolWhereInput | null
  }

  export type PersonaRolCountOrderByAggregateInput = {
    idPersonaRol?: SortOrder
    idPersona?: SortOrder
    idRol?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type PersonaRolAvgOrderByAggregateInput = {
    idPersonaRol?: SortOrder
    idPersona?: SortOrder
    idRol?: SortOrder
  }

  export type PersonaRolMaxOrderByAggregateInput = {
    idPersonaRol?: SortOrder
    idPersona?: SortOrder
    idRol?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type PersonaRolMinOrderByAggregateInput = {
    idPersonaRol?: SortOrder
    idPersona?: SortOrder
    idRol?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type PersonaRolSumOrderByAggregateInput = {
    idPersonaRol?: SortOrder
    idPersona?: SortOrder
    idRol?: SortOrder
  }

  export type ClaveCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ClaveCreateWithoutPersonaInput, ClaveUncheckedCreateWithoutPersonaInput> | ClaveCreateWithoutPersonaInput[] | ClaveUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ClaveCreateOrConnectWithoutPersonaInput | ClaveCreateOrConnectWithoutPersonaInput[]
    createMany?: ClaveCreateManyPersonaInputEnvelope
    connect?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
  }

  export type PersonaRolCreateNestedManyWithoutPersonaInput = {
    create?: XOR<PersonaRolCreateWithoutPersonaInput, PersonaRolUncheckedCreateWithoutPersonaInput> | PersonaRolCreateWithoutPersonaInput[] | PersonaRolUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutPersonaInput | PersonaRolCreateOrConnectWithoutPersonaInput[]
    createMany?: PersonaRolCreateManyPersonaInputEnvelope
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
  }

  export type ClaveUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ClaveCreateWithoutPersonaInput, ClaveUncheckedCreateWithoutPersonaInput> | ClaveCreateWithoutPersonaInput[] | ClaveUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ClaveCreateOrConnectWithoutPersonaInput | ClaveCreateOrConnectWithoutPersonaInput[]
    createMany?: ClaveCreateManyPersonaInputEnvelope
    connect?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
  }

  export type PersonaRolUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<PersonaRolCreateWithoutPersonaInput, PersonaRolUncheckedCreateWithoutPersonaInput> | PersonaRolCreateWithoutPersonaInput[] | PersonaRolUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutPersonaInput | PersonaRolCreateOrConnectWithoutPersonaInput[]
    createMany?: PersonaRolCreateManyPersonaInputEnvelope
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClaveUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ClaveCreateWithoutPersonaInput, ClaveUncheckedCreateWithoutPersonaInput> | ClaveCreateWithoutPersonaInput[] | ClaveUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ClaveCreateOrConnectWithoutPersonaInput | ClaveCreateOrConnectWithoutPersonaInput[]
    upsert?: ClaveUpsertWithWhereUniqueWithoutPersonaInput | ClaveUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ClaveCreateManyPersonaInputEnvelope
    set?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    disconnect?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    delete?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    connect?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    update?: ClaveUpdateWithWhereUniqueWithoutPersonaInput | ClaveUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ClaveUpdateManyWithWhereWithoutPersonaInput | ClaveUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ClaveScalarWhereInput | ClaveScalarWhereInput[]
  }

  export type PersonaRolUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<PersonaRolCreateWithoutPersonaInput, PersonaRolUncheckedCreateWithoutPersonaInput> | PersonaRolCreateWithoutPersonaInput[] | PersonaRolUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutPersonaInput | PersonaRolCreateOrConnectWithoutPersonaInput[]
    upsert?: PersonaRolUpsertWithWhereUniqueWithoutPersonaInput | PersonaRolUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: PersonaRolCreateManyPersonaInputEnvelope
    set?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    disconnect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    delete?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    update?: PersonaRolUpdateWithWhereUniqueWithoutPersonaInput | PersonaRolUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: PersonaRolUpdateManyWithWhereWithoutPersonaInput | PersonaRolUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: PersonaRolScalarWhereInput | PersonaRolScalarWhereInput[]
  }

  export type ClaveUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ClaveCreateWithoutPersonaInput, ClaveUncheckedCreateWithoutPersonaInput> | ClaveCreateWithoutPersonaInput[] | ClaveUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ClaveCreateOrConnectWithoutPersonaInput | ClaveCreateOrConnectWithoutPersonaInput[]
    upsert?: ClaveUpsertWithWhereUniqueWithoutPersonaInput | ClaveUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ClaveCreateManyPersonaInputEnvelope
    set?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    disconnect?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    delete?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    connect?: ClaveWhereUniqueInput | ClaveWhereUniqueInput[]
    update?: ClaveUpdateWithWhereUniqueWithoutPersonaInput | ClaveUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ClaveUpdateManyWithWhereWithoutPersonaInput | ClaveUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ClaveScalarWhereInput | ClaveScalarWhereInput[]
  }

  export type PersonaRolUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<PersonaRolCreateWithoutPersonaInput, PersonaRolUncheckedCreateWithoutPersonaInput> | PersonaRolCreateWithoutPersonaInput[] | PersonaRolUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutPersonaInput | PersonaRolCreateOrConnectWithoutPersonaInput[]
    upsert?: PersonaRolUpsertWithWhereUniqueWithoutPersonaInput | PersonaRolUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: PersonaRolCreateManyPersonaInputEnvelope
    set?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    disconnect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    delete?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    update?: PersonaRolUpdateWithWhereUniqueWithoutPersonaInput | PersonaRolUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: PersonaRolUpdateManyWithWhereWithoutPersonaInput | PersonaRolUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: PersonaRolScalarWhereInput | PersonaRolScalarWhereInput[]
  }

  export type PersonaCreateNestedOneWithoutClaveInput = {
    create?: XOR<PersonaCreateWithoutClaveInput, PersonaUncheckedCreateWithoutClaveInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutClaveInput
    connect?: PersonaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonaUpdateOneRequiredWithoutClaveNestedInput = {
    create?: XOR<PersonaCreateWithoutClaveInput, PersonaUncheckedCreateWithoutClaveInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutClaveInput
    upsert?: PersonaUpsertWithoutClaveInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutClaveInput, PersonaUpdateWithoutClaveInput>, PersonaUncheckedUpdateWithoutClaveInput>
  }

  export type MenuRolCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuRolCreateWithoutMenuInput, MenuRolUncheckedCreateWithoutMenuInput> | MenuRolCreateWithoutMenuInput[] | MenuRolUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutMenuInput | MenuRolCreateOrConnectWithoutMenuInput[]
    createMany?: MenuRolCreateManyMenuInputEnvelope
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
  }

  export type MenuRolUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuRolCreateWithoutMenuInput, MenuRolUncheckedCreateWithoutMenuInput> | MenuRolCreateWithoutMenuInput[] | MenuRolUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutMenuInput | MenuRolCreateOrConnectWithoutMenuInput[]
    createMany?: MenuRolCreateManyMenuInputEnvelope
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuRolUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuRolCreateWithoutMenuInput, MenuRolUncheckedCreateWithoutMenuInput> | MenuRolCreateWithoutMenuInput[] | MenuRolUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutMenuInput | MenuRolCreateOrConnectWithoutMenuInput[]
    upsert?: MenuRolUpsertWithWhereUniqueWithoutMenuInput | MenuRolUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuRolCreateManyMenuInputEnvelope
    set?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    disconnect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    delete?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    update?: MenuRolUpdateWithWhereUniqueWithoutMenuInput | MenuRolUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuRolUpdateManyWithWhereWithoutMenuInput | MenuRolUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuRolScalarWhereInput | MenuRolScalarWhereInput[]
  }

  export type MenuRolUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuRolCreateWithoutMenuInput, MenuRolUncheckedCreateWithoutMenuInput> | MenuRolCreateWithoutMenuInput[] | MenuRolUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutMenuInput | MenuRolCreateOrConnectWithoutMenuInput[]
    upsert?: MenuRolUpsertWithWhereUniqueWithoutMenuInput | MenuRolUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuRolCreateManyMenuInputEnvelope
    set?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    disconnect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    delete?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    update?: MenuRolUpdateWithWhereUniqueWithoutMenuInput | MenuRolUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuRolUpdateManyWithWhereWithoutMenuInput | MenuRolUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuRolScalarWhereInput | MenuRolScalarWhereInput[]
  }

  export type MenuRolCreateNestedManyWithoutRolInput = {
    create?: XOR<MenuRolCreateWithoutRolInput, MenuRolUncheckedCreateWithoutRolInput> | MenuRolCreateWithoutRolInput[] | MenuRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutRolInput | MenuRolCreateOrConnectWithoutRolInput[]
    createMany?: MenuRolCreateManyRolInputEnvelope
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
  }

  export type PersonaRolCreateNestedManyWithoutRolInput = {
    create?: XOR<PersonaRolCreateWithoutRolInput, PersonaRolUncheckedCreateWithoutRolInput> | PersonaRolCreateWithoutRolInput[] | PersonaRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutRolInput | PersonaRolCreateOrConnectWithoutRolInput[]
    createMany?: PersonaRolCreateManyRolInputEnvelope
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
  }

  export type MenuRolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<MenuRolCreateWithoutRolInput, MenuRolUncheckedCreateWithoutRolInput> | MenuRolCreateWithoutRolInput[] | MenuRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutRolInput | MenuRolCreateOrConnectWithoutRolInput[]
    createMany?: MenuRolCreateManyRolInputEnvelope
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
  }

  export type PersonaRolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<PersonaRolCreateWithoutRolInput, PersonaRolUncheckedCreateWithoutRolInput> | PersonaRolCreateWithoutRolInput[] | PersonaRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutRolInput | PersonaRolCreateOrConnectWithoutRolInput[]
    createMany?: PersonaRolCreateManyRolInputEnvelope
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
  }

  export type MenuRolUpdateManyWithoutRolNestedInput = {
    create?: XOR<MenuRolCreateWithoutRolInput, MenuRolUncheckedCreateWithoutRolInput> | MenuRolCreateWithoutRolInput[] | MenuRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutRolInput | MenuRolCreateOrConnectWithoutRolInput[]
    upsert?: MenuRolUpsertWithWhereUniqueWithoutRolInput | MenuRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: MenuRolCreateManyRolInputEnvelope
    set?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    disconnect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    delete?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    update?: MenuRolUpdateWithWhereUniqueWithoutRolInput | MenuRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: MenuRolUpdateManyWithWhereWithoutRolInput | MenuRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: MenuRolScalarWhereInput | MenuRolScalarWhereInput[]
  }

  export type PersonaRolUpdateManyWithoutRolNestedInput = {
    create?: XOR<PersonaRolCreateWithoutRolInput, PersonaRolUncheckedCreateWithoutRolInput> | PersonaRolCreateWithoutRolInput[] | PersonaRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutRolInput | PersonaRolCreateOrConnectWithoutRolInput[]
    upsert?: PersonaRolUpsertWithWhereUniqueWithoutRolInput | PersonaRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: PersonaRolCreateManyRolInputEnvelope
    set?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    disconnect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    delete?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    update?: PersonaRolUpdateWithWhereUniqueWithoutRolInput | PersonaRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: PersonaRolUpdateManyWithWhereWithoutRolInput | PersonaRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: PersonaRolScalarWhereInput | PersonaRolScalarWhereInput[]
  }

  export type MenuRolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<MenuRolCreateWithoutRolInput, MenuRolUncheckedCreateWithoutRolInput> | MenuRolCreateWithoutRolInput[] | MenuRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: MenuRolCreateOrConnectWithoutRolInput | MenuRolCreateOrConnectWithoutRolInput[]
    upsert?: MenuRolUpsertWithWhereUniqueWithoutRolInput | MenuRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: MenuRolCreateManyRolInputEnvelope
    set?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    disconnect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    delete?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    connect?: MenuRolWhereUniqueInput | MenuRolWhereUniqueInput[]
    update?: MenuRolUpdateWithWhereUniqueWithoutRolInput | MenuRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: MenuRolUpdateManyWithWhereWithoutRolInput | MenuRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: MenuRolScalarWhereInput | MenuRolScalarWhereInput[]
  }

  export type PersonaRolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<PersonaRolCreateWithoutRolInput, PersonaRolUncheckedCreateWithoutRolInput> | PersonaRolCreateWithoutRolInput[] | PersonaRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PersonaRolCreateOrConnectWithoutRolInput | PersonaRolCreateOrConnectWithoutRolInput[]
    upsert?: PersonaRolUpsertWithWhereUniqueWithoutRolInput | PersonaRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: PersonaRolCreateManyRolInputEnvelope
    set?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    disconnect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    delete?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    connect?: PersonaRolWhereUniqueInput | PersonaRolWhereUniqueInput[]
    update?: PersonaRolUpdateWithWhereUniqueWithoutRolInput | PersonaRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: PersonaRolUpdateManyWithWhereWithoutRolInput | PersonaRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: PersonaRolScalarWhereInput | PersonaRolScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutMenuRolInput = {
    create?: XOR<RolCreateWithoutMenuRolInput, RolUncheckedCreateWithoutMenuRolInput>
    connectOrCreate?: RolCreateOrConnectWithoutMenuRolInput
    connect?: RolWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutMenuRolInput = {
    create?: XOR<MenuCreateWithoutMenuRolInput, MenuUncheckedCreateWithoutMenuRolInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMenuRolInput
    connect?: MenuWhereUniqueInput
  }

  export type RolUpdateOneRequiredWithoutMenuRolNestedInput = {
    create?: XOR<RolCreateWithoutMenuRolInput, RolUncheckedCreateWithoutMenuRolInput>
    connectOrCreate?: RolCreateOrConnectWithoutMenuRolInput
    upsert?: RolUpsertWithoutMenuRolInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutMenuRolInput, RolUpdateWithoutMenuRolInput>, RolUncheckedUpdateWithoutMenuRolInput>
  }

  export type MenuUpdateOneRequiredWithoutMenuRolNestedInput = {
    create?: XOR<MenuCreateWithoutMenuRolInput, MenuUncheckedCreateWithoutMenuRolInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMenuRolInput
    upsert?: MenuUpsertWithoutMenuRolInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutMenuRolInput, MenuUpdateWithoutMenuRolInput>, MenuUncheckedUpdateWithoutMenuRolInput>
  }

  export type PersonaCreateNestedOneWithoutPersonaRolInput = {
    create?: XOR<PersonaCreateWithoutPersonaRolInput, PersonaUncheckedCreateWithoutPersonaRolInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutPersonaRolInput
    connect?: PersonaWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutPersonaRolInput = {
    create?: XOR<RolCreateWithoutPersonaRolInput, RolUncheckedCreateWithoutPersonaRolInput>
    connectOrCreate?: RolCreateOrConnectWithoutPersonaRolInput
    connect?: RolWhereUniqueInput
  }

  export type PersonaUpdateOneWithoutPersonaRolNestedInput = {
    create?: XOR<PersonaCreateWithoutPersonaRolInput, PersonaUncheckedCreateWithoutPersonaRolInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutPersonaRolInput
    upsert?: PersonaUpsertWithoutPersonaRolInput
    disconnect?: PersonaWhereInput | boolean
    delete?: PersonaWhereInput | boolean
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutPersonaRolInput, PersonaUpdateWithoutPersonaRolInput>, PersonaUncheckedUpdateWithoutPersonaRolInput>
  }

  export type RolUpdateOneWithoutPersonaRolNestedInput = {
    create?: XOR<RolCreateWithoutPersonaRolInput, RolUncheckedCreateWithoutPersonaRolInput>
    connectOrCreate?: RolCreateOrConnectWithoutPersonaRolInput
    upsert?: RolUpsertWithoutPersonaRolInput
    disconnect?: RolWhereInput | boolean
    delete?: RolWhereInput | boolean
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPersonaRolInput, RolUpdateWithoutPersonaRolInput>, RolUncheckedUpdateWithoutPersonaRolInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ClaveCreateWithoutPersonaInput = {
    idClave?: bigint | number
    clave: string
    fecha: Date | string
    estado?: boolean
  }

  export type ClaveUncheckedCreateWithoutPersonaInput = {
    idClave?: bigint | number
    clave: string
    fecha: Date | string
    estado?: boolean
  }

  export type ClaveCreateOrConnectWithoutPersonaInput = {
    where: ClaveWhereUniqueInput
    create: XOR<ClaveCreateWithoutPersonaInput, ClaveUncheckedCreateWithoutPersonaInput>
  }

  export type ClaveCreateManyPersonaInputEnvelope = {
    data: ClaveCreateManyPersonaInput | ClaveCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type PersonaRolCreateWithoutPersonaInput = {
    idPersonaRol?: bigint | number
    fecha?: Date | string | null
    estado?: boolean
    rol?: RolCreateNestedOneWithoutPersonaRolInput
  }

  export type PersonaRolUncheckedCreateWithoutPersonaInput = {
    idPersonaRol?: bigint | number
    idRol?: bigint | number | null
    fecha?: Date | string | null
    estado?: boolean
  }

  export type PersonaRolCreateOrConnectWithoutPersonaInput = {
    where: PersonaRolWhereUniqueInput
    create: XOR<PersonaRolCreateWithoutPersonaInput, PersonaRolUncheckedCreateWithoutPersonaInput>
  }

  export type PersonaRolCreateManyPersonaInputEnvelope = {
    data: PersonaRolCreateManyPersonaInput | PersonaRolCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type ClaveUpsertWithWhereUniqueWithoutPersonaInput = {
    where: ClaveWhereUniqueInput
    update: XOR<ClaveUpdateWithoutPersonaInput, ClaveUncheckedUpdateWithoutPersonaInput>
    create: XOR<ClaveCreateWithoutPersonaInput, ClaveUncheckedCreateWithoutPersonaInput>
  }

  export type ClaveUpdateWithWhereUniqueWithoutPersonaInput = {
    where: ClaveWhereUniqueInput
    data: XOR<ClaveUpdateWithoutPersonaInput, ClaveUncheckedUpdateWithoutPersonaInput>
  }

  export type ClaveUpdateManyWithWhereWithoutPersonaInput = {
    where: ClaveScalarWhereInput
    data: XOR<ClaveUpdateManyMutationInput, ClaveUncheckedUpdateManyWithoutPersonaInput>
  }

  export type ClaveScalarWhereInput = {
    AND?: ClaveScalarWhereInput | ClaveScalarWhereInput[]
    OR?: ClaveScalarWhereInput[]
    NOT?: ClaveScalarWhereInput | ClaveScalarWhereInput[]
    idClave?: BigIntFilter<"Clave"> | bigint | number
    idPersona?: BigIntFilter<"Clave"> | bigint | number
    clave?: StringFilter<"Clave"> | string
    fecha?: DateTimeFilter<"Clave"> | Date | string
    estado?: BoolFilter<"Clave"> | boolean
  }

  export type PersonaRolUpsertWithWhereUniqueWithoutPersonaInput = {
    where: PersonaRolWhereUniqueInput
    update: XOR<PersonaRolUpdateWithoutPersonaInput, PersonaRolUncheckedUpdateWithoutPersonaInput>
    create: XOR<PersonaRolCreateWithoutPersonaInput, PersonaRolUncheckedCreateWithoutPersonaInput>
  }

  export type PersonaRolUpdateWithWhereUniqueWithoutPersonaInput = {
    where: PersonaRolWhereUniqueInput
    data: XOR<PersonaRolUpdateWithoutPersonaInput, PersonaRolUncheckedUpdateWithoutPersonaInput>
  }

  export type PersonaRolUpdateManyWithWhereWithoutPersonaInput = {
    where: PersonaRolScalarWhereInput
    data: XOR<PersonaRolUpdateManyMutationInput, PersonaRolUncheckedUpdateManyWithoutPersonaInput>
  }

  export type PersonaRolScalarWhereInput = {
    AND?: PersonaRolScalarWhereInput | PersonaRolScalarWhereInput[]
    OR?: PersonaRolScalarWhereInput[]
    NOT?: PersonaRolScalarWhereInput | PersonaRolScalarWhereInput[]
    idPersonaRol?: BigIntFilter<"PersonaRol"> | bigint | number
    idPersona?: BigIntNullableFilter<"PersonaRol"> | bigint | number | null
    idRol?: BigIntNullableFilter<"PersonaRol"> | bigint | number | null
    fecha?: DateTimeNullableFilter<"PersonaRol"> | Date | string | null
    estado?: BoolFilter<"PersonaRol"> | boolean
  }

  export type PersonaCreateWithoutClaveInput = {
    idPersona?: bigint | number
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1?: string | null
    apellido2?: string | null
    nombres?: string | null
    fechaNacimiento?: Date | string | null
    direccion?: string | null
    direccionTrabajo?: string | null
    telefono?: string | null
    sueldo?: Decimal | DecimalJsLike | number | string | null
    correo: string
    usuario?: string | null
    personaRol?: PersonaRolCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutClaveInput = {
    idPersona?: bigint | number
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1?: string | null
    apellido2?: string | null
    nombres?: string | null
    fechaNacimiento?: Date | string | null
    direccion?: string | null
    direccionTrabajo?: string | null
    telefono?: string | null
    sueldo?: Decimal | DecimalJsLike | number | string | null
    correo: string
    usuario?: string | null
    personaRol?: PersonaRolUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutClaveInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutClaveInput, PersonaUncheckedCreateWithoutClaveInput>
  }

  export type PersonaUpsertWithoutClaveInput = {
    update: XOR<PersonaUpdateWithoutClaveInput, PersonaUncheckedUpdateWithoutClaveInput>
    create: XOR<PersonaCreateWithoutClaveInput, PersonaUncheckedCreateWithoutClaveInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutClaveInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutClaveInput, PersonaUncheckedUpdateWithoutClaveInput>
  }

  export type PersonaUpdateWithoutClaveInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    personaRol?: PersonaRolUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutClaveInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    personaRol?: PersonaRolUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type MenuRolCreateWithoutMenuInput = {
    idMenuRol?: bigint | number
    fecha: Date | string
    estado?: boolean
    rol: RolCreateNestedOneWithoutMenuRolInput
  }

  export type MenuRolUncheckedCreateWithoutMenuInput = {
    idMenuRol?: bigint | number
    idRol: bigint | number
    fecha: Date | string
    estado?: boolean
  }

  export type MenuRolCreateOrConnectWithoutMenuInput = {
    where: MenuRolWhereUniqueInput
    create: XOR<MenuRolCreateWithoutMenuInput, MenuRolUncheckedCreateWithoutMenuInput>
  }

  export type MenuRolCreateManyMenuInputEnvelope = {
    data: MenuRolCreateManyMenuInput | MenuRolCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type MenuRolUpsertWithWhereUniqueWithoutMenuInput = {
    where: MenuRolWhereUniqueInput
    update: XOR<MenuRolUpdateWithoutMenuInput, MenuRolUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuRolCreateWithoutMenuInput, MenuRolUncheckedCreateWithoutMenuInput>
  }

  export type MenuRolUpdateWithWhereUniqueWithoutMenuInput = {
    where: MenuRolWhereUniqueInput
    data: XOR<MenuRolUpdateWithoutMenuInput, MenuRolUncheckedUpdateWithoutMenuInput>
  }

  export type MenuRolUpdateManyWithWhereWithoutMenuInput = {
    where: MenuRolScalarWhereInput
    data: XOR<MenuRolUpdateManyMutationInput, MenuRolUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuRolScalarWhereInput = {
    AND?: MenuRolScalarWhereInput | MenuRolScalarWhereInput[]
    OR?: MenuRolScalarWhereInput[]
    NOT?: MenuRolScalarWhereInput | MenuRolScalarWhereInput[]
    idMenuRol?: BigIntFilter<"MenuRol"> | bigint | number
    idRol?: BigIntFilter<"MenuRol"> | bigint | number
    idMenu?: BigIntFilter<"MenuRol"> | bigint | number
    fecha?: DateTimeFilter<"MenuRol"> | Date | string
    estado?: BoolFilter<"MenuRol"> | boolean
  }

  export type MenuRolCreateWithoutRolInput = {
    idMenuRol?: bigint | number
    fecha: Date | string
    estado?: boolean
    menu: MenuCreateNestedOneWithoutMenuRolInput
  }

  export type MenuRolUncheckedCreateWithoutRolInput = {
    idMenuRol?: bigint | number
    idMenu: bigint | number
    fecha: Date | string
    estado?: boolean
  }

  export type MenuRolCreateOrConnectWithoutRolInput = {
    where: MenuRolWhereUniqueInput
    create: XOR<MenuRolCreateWithoutRolInput, MenuRolUncheckedCreateWithoutRolInput>
  }

  export type MenuRolCreateManyRolInputEnvelope = {
    data: MenuRolCreateManyRolInput | MenuRolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type PersonaRolCreateWithoutRolInput = {
    idPersonaRol?: bigint | number
    fecha?: Date | string | null
    estado?: boolean
    persona?: PersonaCreateNestedOneWithoutPersonaRolInput
  }

  export type PersonaRolUncheckedCreateWithoutRolInput = {
    idPersonaRol?: bigint | number
    idPersona?: bigint | number | null
    fecha?: Date | string | null
    estado?: boolean
  }

  export type PersonaRolCreateOrConnectWithoutRolInput = {
    where: PersonaRolWhereUniqueInput
    create: XOR<PersonaRolCreateWithoutRolInput, PersonaRolUncheckedCreateWithoutRolInput>
  }

  export type PersonaRolCreateManyRolInputEnvelope = {
    data: PersonaRolCreateManyRolInput | PersonaRolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type MenuRolUpsertWithWhereUniqueWithoutRolInput = {
    where: MenuRolWhereUniqueInput
    update: XOR<MenuRolUpdateWithoutRolInput, MenuRolUncheckedUpdateWithoutRolInput>
    create: XOR<MenuRolCreateWithoutRolInput, MenuRolUncheckedCreateWithoutRolInput>
  }

  export type MenuRolUpdateWithWhereUniqueWithoutRolInput = {
    where: MenuRolWhereUniqueInput
    data: XOR<MenuRolUpdateWithoutRolInput, MenuRolUncheckedUpdateWithoutRolInput>
  }

  export type MenuRolUpdateManyWithWhereWithoutRolInput = {
    where: MenuRolScalarWhereInput
    data: XOR<MenuRolUpdateManyMutationInput, MenuRolUncheckedUpdateManyWithoutRolInput>
  }

  export type PersonaRolUpsertWithWhereUniqueWithoutRolInput = {
    where: PersonaRolWhereUniqueInput
    update: XOR<PersonaRolUpdateWithoutRolInput, PersonaRolUncheckedUpdateWithoutRolInput>
    create: XOR<PersonaRolCreateWithoutRolInput, PersonaRolUncheckedCreateWithoutRolInput>
  }

  export type PersonaRolUpdateWithWhereUniqueWithoutRolInput = {
    where: PersonaRolWhereUniqueInput
    data: XOR<PersonaRolUpdateWithoutRolInput, PersonaRolUncheckedUpdateWithoutRolInput>
  }

  export type PersonaRolUpdateManyWithWhereWithoutRolInput = {
    where: PersonaRolScalarWhereInput
    data: XOR<PersonaRolUpdateManyMutationInput, PersonaRolUncheckedUpdateManyWithoutRolInput>
  }

  export type RolCreateWithoutMenuRolInput = {
    idRol?: bigint | number
    descripcion: string
    abrevia?: string | null
    orden?: bigint | number | null
    estado?: boolean
    personaRol?: PersonaRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutMenuRolInput = {
    idRol?: bigint | number
    descripcion: string
    abrevia?: string | null
    orden?: bigint | number | null
    estado?: boolean
    personaRol?: PersonaRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutMenuRolInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutMenuRolInput, RolUncheckedCreateWithoutMenuRolInput>
  }

  export type MenuCreateWithoutMenuRolInput = {
    idMenu?: bigint | number
    codigo?: bigint | number | null
    descripcion: string
    idPadre?: number | null
    ruta?: string | null
    orden?: number | null
    abrevia?: string | null
    estado?: boolean
  }

  export type MenuUncheckedCreateWithoutMenuRolInput = {
    idMenu?: bigint | number
    codigo?: bigint | number | null
    descripcion: string
    idPadre?: number | null
    ruta?: string | null
    orden?: number | null
    abrevia?: string | null
    estado?: boolean
  }

  export type MenuCreateOrConnectWithoutMenuRolInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutMenuRolInput, MenuUncheckedCreateWithoutMenuRolInput>
  }

  export type RolUpsertWithoutMenuRolInput = {
    update: XOR<RolUpdateWithoutMenuRolInput, RolUncheckedUpdateWithoutMenuRolInput>
    create: XOR<RolCreateWithoutMenuRolInput, RolUncheckedCreateWithoutMenuRolInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutMenuRolInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutMenuRolInput, RolUncheckedUpdateWithoutMenuRolInput>
  }

  export type RolUpdateWithoutMenuRolInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    personaRol?: PersonaRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutMenuRolInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    personaRol?: PersonaRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type MenuUpsertWithoutMenuRolInput = {
    update: XOR<MenuUpdateWithoutMenuRolInput, MenuUncheckedUpdateWithoutMenuRolInput>
    create: XOR<MenuCreateWithoutMenuRolInput, MenuUncheckedCreateWithoutMenuRolInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutMenuRolInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutMenuRolInput, MenuUncheckedUpdateWithoutMenuRolInput>
  }

  export type MenuUpdateWithoutMenuRolInput = {
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    idPadre?: NullableIntFieldUpdateOperationsInput | number | null
    ruta?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuUncheckedUpdateWithoutMenuRolInput = {
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    codigo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    idPadre?: NullableIntFieldUpdateOperationsInput | number | null
    ruta?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaCreateWithoutPersonaRolInput = {
    idPersona?: bigint | number
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1?: string | null
    apellido2?: string | null
    nombres?: string | null
    fechaNacimiento?: Date | string | null
    direccion?: string | null
    direccionTrabajo?: string | null
    telefono?: string | null
    sueldo?: Decimal | DecimalJsLike | number | string | null
    correo: string
    usuario?: string | null
    clave?: ClaveCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutPersonaRolInput = {
    idPersona?: bigint | number
    tipoIdentificacion: number
    identificacion: string
    nombreUnido: string
    apellido1?: string | null
    apellido2?: string | null
    nombres?: string | null
    fechaNacimiento?: Date | string | null
    direccion?: string | null
    direccionTrabajo?: string | null
    telefono?: string | null
    sueldo?: Decimal | DecimalJsLike | number | string | null
    correo: string
    usuario?: string | null
    clave?: ClaveUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutPersonaRolInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutPersonaRolInput, PersonaUncheckedCreateWithoutPersonaRolInput>
  }

  export type RolCreateWithoutPersonaRolInput = {
    idRol?: bigint | number
    descripcion: string
    abrevia?: string | null
    orden?: bigint | number | null
    estado?: boolean
    menuRol?: MenuRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPersonaRolInput = {
    idRol?: bigint | number
    descripcion: string
    abrevia?: string | null
    orden?: bigint | number | null
    estado?: boolean
    menuRol?: MenuRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPersonaRolInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPersonaRolInput, RolUncheckedCreateWithoutPersonaRolInput>
  }

  export type PersonaUpsertWithoutPersonaRolInput = {
    update: XOR<PersonaUpdateWithoutPersonaRolInput, PersonaUncheckedUpdateWithoutPersonaRolInput>
    create: XOR<PersonaCreateWithoutPersonaRolInput, PersonaUncheckedCreateWithoutPersonaRolInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutPersonaRolInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutPersonaRolInput, PersonaUncheckedUpdateWithoutPersonaRolInput>
  }

  export type PersonaUpdateWithoutPersonaRolInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: ClaveUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutPersonaRolInput = {
    idPersona?: BigIntFieldUpdateOperationsInput | bigint | number
    tipoIdentificacion?: IntFieldUpdateOperationsInput | number
    identificacion?: StringFieldUpdateOperationsInput | string
    nombreUnido?: StringFieldUpdateOperationsInput | string
    apellido1?: NullableStringFieldUpdateOperationsInput | string | null
    apellido2?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    direccionTrabajo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sueldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: ClaveUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type RolUpsertWithoutPersonaRolInput = {
    update: XOR<RolUpdateWithoutPersonaRolInput, RolUncheckedUpdateWithoutPersonaRolInput>
    create: XOR<RolCreateWithoutPersonaRolInput, RolUncheckedCreateWithoutPersonaRolInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPersonaRolInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPersonaRolInput, RolUncheckedUpdateWithoutPersonaRolInput>
  }

  export type RolUpdateWithoutPersonaRolInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    menuRol?: MenuRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPersonaRolInput = {
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    descripcion?: StringFieldUpdateOperationsInput | string
    abrevia?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    menuRol?: MenuRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type ClaveCreateManyPersonaInput = {
    idClave?: bigint | number
    clave: string
    fecha: Date | string
    estado?: boolean
  }

  export type PersonaRolCreateManyPersonaInput = {
    idPersonaRol?: bigint | number
    idRol?: bigint | number | null
    fecha?: Date | string | null
    estado?: boolean
  }

  export type ClaveUpdateWithoutPersonaInput = {
    idClave?: BigIntFieldUpdateOperationsInput | bigint | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaveUncheckedUpdateWithoutPersonaInput = {
    idClave?: BigIntFieldUpdateOperationsInput | bigint | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaveUncheckedUpdateManyWithoutPersonaInput = {
    idClave?: BigIntFieldUpdateOperationsInput | bigint | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaRolUpdateWithoutPersonaInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneWithoutPersonaRolNestedInput
  }

  export type PersonaRolUncheckedUpdateWithoutPersonaInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idRol?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaRolUncheckedUpdateManyWithoutPersonaInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idRol?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuRolCreateManyMenuInput = {
    idMenuRol?: bigint | number
    idRol: bigint | number
    fecha: Date | string
    estado?: boolean
  }

  export type MenuRolUpdateWithoutMenuInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutMenuRolNestedInput
  }

  export type MenuRolUncheckedUpdateWithoutMenuInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuRolUncheckedUpdateManyWithoutMenuInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuRolCreateManyRolInput = {
    idMenuRol?: bigint | number
    idMenu: bigint | number
    fecha: Date | string
    estado?: boolean
  }

  export type PersonaRolCreateManyRolInput = {
    idPersonaRol?: bigint | number
    idPersona?: bigint | number | null
    fecha?: Date | string | null
    estado?: boolean
  }

  export type MenuRolUpdateWithoutRolInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    menu?: MenuUpdateOneRequiredWithoutMenuRolNestedInput
  }

  export type MenuRolUncheckedUpdateWithoutRolInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuRolUncheckedUpdateManyWithoutRolInput = {
    idMenuRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idMenu?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaRolUpdateWithoutRolInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    persona?: PersonaUpdateOneWithoutPersonaRolNestedInput
  }

  export type PersonaRolUncheckedUpdateWithoutRolInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idPersona?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonaRolUncheckedUpdateManyWithoutRolInput = {
    idPersonaRol?: BigIntFieldUpdateOperationsInput | bigint | number
    idPersona?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PersonaCountOutputTypeDefaultArgs instead
     */
    export type PersonaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCountOutputTypeDefaultArgs instead
     */
    export type MenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolCountOutputTypeDefaultArgs instead
     */
    export type RolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonaDefaultArgs instead
     */
    export type PersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaveDefaultArgs instead
     */
    export type ClaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaveDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuDefaultArgs instead
     */
    export type MenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolDefaultArgs instead
     */
    export type RolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuRolDefaultArgs instead
     */
    export type MenuRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuRolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonaRolDefaultArgs instead
     */
    export type PersonaRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonaRolDefaultArgs<ExtArgs>

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