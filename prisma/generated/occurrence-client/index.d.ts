
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Occurrence
 * 
 */
export type Occurrence = $Result.DefaultSelection<Prisma.$OccurrencePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Occurrences
 * const occurrences = await prisma.occurrence.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Occurrences
   * const occurrences = await prisma.occurrence.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.occurrence`: Exposes CRUD operations for the **Occurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Occurrences
    * const occurrences = await prisma.occurrence.findMany()
    * ```
    */
  get occurrence(): Prisma.OccurrenceDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
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
    Occurrence: 'Occurrence'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'occurrence'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Occurrence: {
        payload: Prisma.$OccurrencePayload<ExtArgs>
        fields: Prisma.OccurrenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccurrenceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccurrenceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          findFirst: {
            args: Prisma.OccurrenceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccurrenceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          findMany: {
            args: Prisma.OccurrenceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>[]
          }
          create: {
            args: Prisma.OccurrenceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          createMany: {
            args: Prisma.OccurrenceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OccurrenceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          update: {
            args: Prisma.OccurrenceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          deleteMany: {
            args: Prisma.OccurrenceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OccurrenceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OccurrenceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          aggregate: {
            args: Prisma.OccurrenceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOccurrence>
          }
          groupBy: {
            args: Prisma.OccurrenceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OccurrenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccurrenceCountArgs<ExtArgs>,
            result: $Utils.Optional<OccurrenceCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Models
   */

  /**
   * Model Occurrence
   */

  export type AggregateOccurrence = {
    _count: OccurrenceCountAggregateOutputType | null
    _avg: OccurrenceAvgAggregateOutputType | null
    _sum: OccurrenceSumAggregateOutputType | null
    _min: OccurrenceMinAggregateOutputType | null
    _max: OccurrenceMaxAggregateOutputType | null
  }

  export type OccurrenceAvgAggregateOutputType = {
    nRelig: number | null
    duracao: number | null
    idCausa: number | null
    idEleRede: number | null
  }

  export type OccurrenceSumAggregateOutputType = {
    nRelig: number | null
    duracao: number | null
    idCausa: number | null
    idEleRede: number | null
  }

  export type OccurrenceMinAggregateOutputType = {
    ocoId: string | null
    se: string | null
    al: string | null
    eqp: string | null
    dtHrAlt: Date | null
    dtHrOco: Date | null
    dtHrIni: Date | null
    dtHrFim: Date | null
    nRelig: number | null
    duracao: number | null
    tipoOco: string | null
    protSen: string | null
    protAtu: string | null
    faltas: string | null
    condPre: string | null
    condPos: string | null
    emailSended: string | null
    smsSended: string | null
    idCausa: number | null
    modifyBy: string | null
    causa: string | null
    obs: string | null
    idEleRede: number | null
    dados_CC: string | null
    dados_COD: string | null
    refLocFalt: string | null
    contabData: Date | null
    contaBy: string | null
    modifBy: string | null
  }

  export type OccurrenceMaxAggregateOutputType = {
    ocoId: string | null
    se: string | null
    al: string | null
    eqp: string | null
    dtHrAlt: Date | null
    dtHrOco: Date | null
    dtHrIni: Date | null
    dtHrFim: Date | null
    nRelig: number | null
    duracao: number | null
    tipoOco: string | null
    protSen: string | null
    protAtu: string | null
    faltas: string | null
    condPre: string | null
    condPos: string | null
    emailSended: string | null
    smsSended: string | null
    idCausa: number | null
    modifyBy: string | null
    causa: string | null
    obs: string | null
    idEleRede: number | null
    dados_CC: string | null
    dados_COD: string | null
    refLocFalt: string | null
    contabData: Date | null
    contaBy: string | null
    modifBy: string | null
  }

  export type OccurrenceCountAggregateOutputType = {
    ocoId: number
    se: number
    al: number
    eqp: number
    dtHrAlt: number
    dtHrOco: number
    dtHrIni: number
    dtHrFim: number
    nRelig: number
    duracao: number
    tipoOco: number
    protSen: number
    protAtu: number
    faltas: number
    condPre: number
    condPos: number
    emailSended: number
    smsSended: number
    idCausa: number
    modifyBy: number
    causa: number
    obs: number
    idEleRede: number
    dados_CC: number
    dados_COD: number
    refLocFalt: number
    contabData: number
    contaBy: number
    modifBy: number
    _all: number
  }


  export type OccurrenceAvgAggregateInputType = {
    nRelig?: true
    duracao?: true
    idCausa?: true
    idEleRede?: true
  }

  export type OccurrenceSumAggregateInputType = {
    nRelig?: true
    duracao?: true
    idCausa?: true
    idEleRede?: true
  }

  export type OccurrenceMinAggregateInputType = {
    ocoId?: true
    se?: true
    al?: true
    eqp?: true
    dtHrAlt?: true
    dtHrOco?: true
    dtHrIni?: true
    dtHrFim?: true
    nRelig?: true
    duracao?: true
    tipoOco?: true
    protSen?: true
    protAtu?: true
    faltas?: true
    condPre?: true
    condPos?: true
    emailSended?: true
    smsSended?: true
    idCausa?: true
    modifyBy?: true
    causa?: true
    obs?: true
    idEleRede?: true
    dados_CC?: true
    dados_COD?: true
    refLocFalt?: true
    contabData?: true
    contaBy?: true
    modifBy?: true
  }

  export type OccurrenceMaxAggregateInputType = {
    ocoId?: true
    se?: true
    al?: true
    eqp?: true
    dtHrAlt?: true
    dtHrOco?: true
    dtHrIni?: true
    dtHrFim?: true
    nRelig?: true
    duracao?: true
    tipoOco?: true
    protSen?: true
    protAtu?: true
    faltas?: true
    condPre?: true
    condPos?: true
    emailSended?: true
    smsSended?: true
    idCausa?: true
    modifyBy?: true
    causa?: true
    obs?: true
    idEleRede?: true
    dados_CC?: true
    dados_COD?: true
    refLocFalt?: true
    contabData?: true
    contaBy?: true
    modifBy?: true
  }

  export type OccurrenceCountAggregateInputType = {
    ocoId?: true
    se?: true
    al?: true
    eqp?: true
    dtHrAlt?: true
    dtHrOco?: true
    dtHrIni?: true
    dtHrFim?: true
    nRelig?: true
    duracao?: true
    tipoOco?: true
    protSen?: true
    protAtu?: true
    faltas?: true
    condPre?: true
    condPos?: true
    emailSended?: true
    smsSended?: true
    idCausa?: true
    modifyBy?: true
    causa?: true
    obs?: true
    idEleRede?: true
    dados_CC?: true
    dados_COD?: true
    refLocFalt?: true
    contabData?: true
    contaBy?: true
    modifBy?: true
    _all?: true
  }

  export type OccurrenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occurrence to aggregate.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Occurrences
    **/
    _count?: true | OccurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccurrenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccurrenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccurrenceMaxAggregateInputType
  }

  export type GetOccurrenceAggregateType<T extends OccurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregateOccurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccurrence[P]>
      : GetScalarType<T[P], AggregateOccurrence[P]>
  }




  export type OccurrenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceWhereInput
    orderBy?: OccurrenceOrderByWithAggregationInput | OccurrenceOrderByWithAggregationInput[]
    by: OccurrenceScalarFieldEnum[] | OccurrenceScalarFieldEnum
    having?: OccurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccurrenceCountAggregateInputType | true
    _avg?: OccurrenceAvgAggregateInputType
    _sum?: OccurrenceSumAggregateInputType
    _min?: OccurrenceMinAggregateInputType
    _max?: OccurrenceMaxAggregateInputType
  }

  export type OccurrenceGroupByOutputType = {
    ocoId: string
    se: string
    al: string
    eqp: string
    dtHrAlt: Date
    dtHrOco: Date
    dtHrIni: Date
    dtHrFim: Date
    nRelig: number
    duracao: number
    tipoOco: string
    protSen: string
    protAtu: string
    faltas: string
    condPre: string
    condPos: string
    emailSended: string
    smsSended: string
    idCausa: number
    modifyBy: string
    causa: string
    obs: string
    idEleRede: number
    dados_CC: string
    dados_COD: string
    refLocFalt: string
    contabData: Date
    contaBy: string
    modifBy: string
    _count: OccurrenceCountAggregateOutputType | null
    _avg: OccurrenceAvgAggregateOutputType | null
    _sum: OccurrenceSumAggregateOutputType | null
    _min: OccurrenceMinAggregateOutputType | null
    _max: OccurrenceMaxAggregateOutputType | null
  }

  type GetOccurrenceGroupByPayload<T extends OccurrenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], OccurrenceGroupByOutputType[P]>
        }
      >
    >


  export type OccurrenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ocoId?: boolean
    se?: boolean
    al?: boolean
    eqp?: boolean
    dtHrAlt?: boolean
    dtHrOco?: boolean
    dtHrIni?: boolean
    dtHrFim?: boolean
    nRelig?: boolean
    duracao?: boolean
    tipoOco?: boolean
    protSen?: boolean
    protAtu?: boolean
    faltas?: boolean
    condPre?: boolean
    condPos?: boolean
    emailSended?: boolean
    smsSended?: boolean
    idCausa?: boolean
    modifyBy?: boolean
    causa?: boolean
    obs?: boolean
    idEleRede?: boolean
    dados_CC?: boolean
    dados_COD?: boolean
    refLocFalt?: boolean
    contabData?: boolean
    contaBy?: boolean
    modifBy?: boolean
  }, ExtArgs["result"]["occurrence"]>

  export type OccurrenceSelectScalar = {
    ocoId?: boolean
    se?: boolean
    al?: boolean
    eqp?: boolean
    dtHrAlt?: boolean
    dtHrOco?: boolean
    dtHrIni?: boolean
    dtHrFim?: boolean
    nRelig?: boolean
    duracao?: boolean
    tipoOco?: boolean
    protSen?: boolean
    protAtu?: boolean
    faltas?: boolean
    condPre?: boolean
    condPos?: boolean
    emailSended?: boolean
    smsSended?: boolean
    idCausa?: boolean
    modifyBy?: boolean
    causa?: boolean
    obs?: boolean
    idEleRede?: boolean
    dados_CC?: boolean
    dados_COD?: boolean
    refLocFalt?: boolean
    contabData?: boolean
    contaBy?: boolean
    modifBy?: boolean
  }


  export type $OccurrencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Occurrence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ocoId: string
      se: string
      al: string
      eqp: string
      dtHrAlt: Date
      dtHrOco: Date
      dtHrIni: Date
      dtHrFim: Date
      nRelig: number
      duracao: number
      tipoOco: string
      protSen: string
      protAtu: string
      faltas: string
      condPre: string
      condPos: string
      emailSended: string
      smsSended: string
      idCausa: number
      modifyBy: string
      causa: string
      obs: string
      idEleRede: number
      dados_CC: string
      dados_COD: string
      refLocFalt: string
      contabData: Date
      contaBy: string
      modifBy: string
    }, ExtArgs["result"]["occurrence"]>
    composites: {}
  }


  type OccurrenceGetPayload<S extends boolean | null | undefined | OccurrenceDefaultArgs> = $Result.GetResult<Prisma.$OccurrencePayload, S>

  type OccurrenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OccurrenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OccurrenceCountAggregateInputType | true
    }

  export interface OccurrenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Occurrence'], meta: { name: 'Occurrence' } }
    /**
     * Find zero or one Occurrence that matches the filter.
     * @param {OccurrenceFindUniqueArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OccurrenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OccurrenceFindUniqueArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Occurrence that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OccurrenceFindUniqueOrThrowArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OccurrenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OccurrenceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Occurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindFirstArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OccurrenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OccurrenceFindFirstArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Occurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindFirstOrThrowArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OccurrenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OccurrenceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Occurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Occurrences
     * const occurrences = await prisma.occurrence.findMany()
     * 
     * // Get first 10 Occurrences
     * const occurrences = await prisma.occurrence.findMany({ take: 10 })
     * 
     * // Only select the `ocoId`
     * const occurrenceWithOcoIdOnly = await prisma.occurrence.findMany({ select: { ocoId: true } })
     * 
    **/
    findMany<T extends OccurrenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OccurrenceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Occurrence.
     * @param {OccurrenceCreateArgs} args - Arguments to create a Occurrence.
     * @example
     * // Create one Occurrence
     * const Occurrence = await prisma.occurrence.create({
     *   data: {
     *     // ... data to create a Occurrence
     *   }
     * })
     * 
    **/
    create<T extends OccurrenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OccurrenceCreateArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Occurrences.
     *     @param {OccurrenceCreateManyArgs} args - Arguments to create many Occurrences.
     *     @example
     *     // Create many Occurrences
     *     const occurrence = await prisma.occurrence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OccurrenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OccurrenceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Occurrence.
     * @param {OccurrenceDeleteArgs} args - Arguments to delete one Occurrence.
     * @example
     * // Delete one Occurrence
     * const Occurrence = await prisma.occurrence.delete({
     *   where: {
     *     // ... filter to delete one Occurrence
     *   }
     * })
     * 
    **/
    delete<T extends OccurrenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OccurrenceDeleteArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Occurrence.
     * @param {OccurrenceUpdateArgs} args - Arguments to update one Occurrence.
     * @example
     * // Update one Occurrence
     * const occurrence = await prisma.occurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OccurrenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OccurrenceUpdateArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Occurrences.
     * @param {OccurrenceDeleteManyArgs} args - Arguments to filter Occurrences to delete.
     * @example
     * // Delete a few Occurrences
     * const { count } = await prisma.occurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OccurrenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OccurrenceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Occurrences
     * const occurrence = await prisma.occurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OccurrenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OccurrenceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Occurrence.
     * @param {OccurrenceUpsertArgs} args - Arguments to update or create a Occurrence.
     * @example
     * // Update or create a Occurrence
     * const occurrence = await prisma.occurrence.upsert({
     *   create: {
     *     // ... data to create a Occurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Occurrence we want to update
     *   }
     * })
    **/
    upsert<T extends OccurrenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OccurrenceUpsertArgs<ExtArgs>>
    ): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Occurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceCountArgs} args - Arguments to filter Occurrences to count.
     * @example
     * // Count the number of Occurrences
     * const count = await prisma.occurrence.count({
     *   where: {
     *     // ... the filter for the Occurrences we want to count
     *   }
     * })
    **/
    count<T extends OccurrenceCountArgs>(
      args?: Subset<T, OccurrenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Occurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccurrenceAggregateArgs>(args: Subset<T, OccurrenceAggregateArgs>): Prisma.PrismaPromise<GetOccurrenceAggregateType<T>>

    /**
     * Group by Occurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceGroupByArgs} args - Group by arguments.
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
      T extends OccurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccurrenceGroupByArgs['orderBy'] }
        : { orderBy?: OccurrenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Occurrence model
   */
  readonly fields: OccurrenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Occurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccurrenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Occurrence model
   */ 
  interface OccurrenceFieldRefs {
    readonly ocoId: FieldRef<"Occurrence", 'String'>
    readonly se: FieldRef<"Occurrence", 'String'>
    readonly al: FieldRef<"Occurrence", 'String'>
    readonly eqp: FieldRef<"Occurrence", 'String'>
    readonly dtHrAlt: FieldRef<"Occurrence", 'DateTime'>
    readonly dtHrOco: FieldRef<"Occurrence", 'DateTime'>
    readonly dtHrIni: FieldRef<"Occurrence", 'DateTime'>
    readonly dtHrFim: FieldRef<"Occurrence", 'DateTime'>
    readonly nRelig: FieldRef<"Occurrence", 'Int'>
    readonly duracao: FieldRef<"Occurrence", 'Float'>
    readonly tipoOco: FieldRef<"Occurrence", 'String'>
    readonly protSen: FieldRef<"Occurrence", 'String'>
    readonly protAtu: FieldRef<"Occurrence", 'String'>
    readonly faltas: FieldRef<"Occurrence", 'String'>
    readonly condPre: FieldRef<"Occurrence", 'String'>
    readonly condPos: FieldRef<"Occurrence", 'String'>
    readonly emailSended: FieldRef<"Occurrence", 'String'>
    readonly smsSended: FieldRef<"Occurrence", 'String'>
    readonly idCausa: FieldRef<"Occurrence", 'Int'>
    readonly modifyBy: FieldRef<"Occurrence", 'String'>
    readonly causa: FieldRef<"Occurrence", 'String'>
    readonly obs: FieldRef<"Occurrence", 'String'>
    readonly idEleRede: FieldRef<"Occurrence", 'Int'>
    readonly dados_CC: FieldRef<"Occurrence", 'String'>
    readonly dados_COD: FieldRef<"Occurrence", 'String'>
    readonly refLocFalt: FieldRef<"Occurrence", 'String'>
    readonly contabData: FieldRef<"Occurrence", 'DateTime'>
    readonly contaBy: FieldRef<"Occurrence", 'String'>
    readonly modifBy: FieldRef<"Occurrence", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Occurrence findUnique
   */
  export type OccurrenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where: OccurrenceWhereUniqueInput
  }


  /**
   * Occurrence findUniqueOrThrow
   */
  export type OccurrenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where: OccurrenceWhereUniqueInput
  }


  /**
   * Occurrence findFirst
   */
  export type OccurrenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occurrences.
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occurrences.
     */
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }


  /**
   * Occurrence findFirstOrThrow
   */
  export type OccurrenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occurrences.
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occurrences.
     */
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }


  /**
   * Occurrence findMany
   */
  export type OccurrenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Filter, which Occurrences to fetch.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Occurrences.
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }


  /**
   * Occurrence create
   */
  export type OccurrenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * The data needed to create a Occurrence.
     */
    data: XOR<OccurrenceCreateInput, OccurrenceUncheckedCreateInput>
  }


  /**
   * Occurrence createMany
   */
  export type OccurrenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Occurrences.
     */
    data: OccurrenceCreateManyInput | OccurrenceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Occurrence update
   */
  export type OccurrenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * The data needed to update a Occurrence.
     */
    data: XOR<OccurrenceUpdateInput, OccurrenceUncheckedUpdateInput>
    /**
     * Choose, which Occurrence to update.
     */
    where: OccurrenceWhereUniqueInput
  }


  /**
   * Occurrence updateMany
   */
  export type OccurrenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Occurrences.
     */
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which Occurrences to update
     */
    where?: OccurrenceWhereInput
  }


  /**
   * Occurrence upsert
   */
  export type OccurrenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * The filter to search for the Occurrence to update in case it exists.
     */
    where: OccurrenceWhereUniqueInput
    /**
     * In case the Occurrence found by the `where` argument doesn't exist, create a new Occurrence with this data.
     */
    create: XOR<OccurrenceCreateInput, OccurrenceUncheckedCreateInput>
    /**
     * In case the Occurrence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccurrenceUpdateInput, OccurrenceUncheckedUpdateInput>
  }


  /**
   * Occurrence delete
   */
  export type OccurrenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Filter which Occurrence to delete.
     */
    where: OccurrenceWhereUniqueInput
  }


  /**
   * Occurrence deleteMany
   */
  export type OccurrenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occurrences to delete
     */
    where?: OccurrenceWhereInput
  }


  /**
   * Occurrence without action
   */
  export type OccurrenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
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


  export const OccurrenceScalarFieldEnum: {
    ocoId: 'ocoId',
    se: 'se',
    al: 'al',
    eqp: 'eqp',
    dtHrAlt: 'dtHrAlt',
    dtHrOco: 'dtHrOco',
    dtHrIni: 'dtHrIni',
    dtHrFim: 'dtHrFim',
    nRelig: 'nRelig',
    duracao: 'duracao',
    tipoOco: 'tipoOco',
    protSen: 'protSen',
    protAtu: 'protAtu',
    faltas: 'faltas',
    condPre: 'condPre',
    condPos: 'condPos',
    emailSended: 'emailSended',
    smsSended: 'smsSended',
    idCausa: 'idCausa',
    modifyBy: 'modifyBy',
    causa: 'causa',
    obs: 'obs',
    idEleRede: 'idEleRede',
    dados_CC: 'dados_CC',
    dados_COD: 'dados_COD',
    refLocFalt: 'refLocFalt',
    contabData: 'contabData',
    contaBy: 'contaBy',
    modifBy: 'modifBy'
  };

  export type OccurrenceScalarFieldEnum = (typeof OccurrenceScalarFieldEnum)[keyof typeof OccurrenceScalarFieldEnum]


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


  /**
   * Field references 
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type OccurrenceWhereInput = {
    AND?: OccurrenceWhereInput | OccurrenceWhereInput[]
    OR?: OccurrenceWhereInput[]
    NOT?: OccurrenceWhereInput | OccurrenceWhereInput[]
    ocoId?: StringFilter<"Occurrence"> | string
    se?: StringFilter<"Occurrence"> | string
    al?: StringFilter<"Occurrence"> | string
    eqp?: StringFilter<"Occurrence"> | string
    dtHrAlt?: DateTimeFilter<"Occurrence"> | Date | string
    dtHrOco?: DateTimeFilter<"Occurrence"> | Date | string
    dtHrIni?: DateTimeFilter<"Occurrence"> | Date | string
    dtHrFim?: DateTimeFilter<"Occurrence"> | Date | string
    nRelig?: IntFilter<"Occurrence"> | number
    duracao?: FloatFilter<"Occurrence"> | number
    tipoOco?: StringFilter<"Occurrence"> | string
    protSen?: StringFilter<"Occurrence"> | string
    protAtu?: StringFilter<"Occurrence"> | string
    faltas?: StringFilter<"Occurrence"> | string
    condPre?: StringFilter<"Occurrence"> | string
    condPos?: StringFilter<"Occurrence"> | string
    emailSended?: StringFilter<"Occurrence"> | string
    smsSended?: StringFilter<"Occurrence"> | string
    idCausa?: IntFilter<"Occurrence"> | number
    modifyBy?: StringFilter<"Occurrence"> | string
    causa?: StringFilter<"Occurrence"> | string
    obs?: StringFilter<"Occurrence"> | string
    idEleRede?: IntFilter<"Occurrence"> | number
    dados_CC?: StringFilter<"Occurrence"> | string
    dados_COD?: StringFilter<"Occurrence"> | string
    refLocFalt?: StringFilter<"Occurrence"> | string
    contabData?: DateTimeFilter<"Occurrence"> | Date | string
    contaBy?: StringFilter<"Occurrence"> | string
    modifBy?: StringFilter<"Occurrence"> | string
  }

  export type OccurrenceOrderByWithRelationInput = {
    ocoId?: SortOrder
    se?: SortOrder
    al?: SortOrder
    eqp?: SortOrder
    dtHrAlt?: SortOrder
    dtHrOco?: SortOrder
    dtHrIni?: SortOrder
    dtHrFim?: SortOrder
    nRelig?: SortOrder
    duracao?: SortOrder
    tipoOco?: SortOrder
    protSen?: SortOrder
    protAtu?: SortOrder
    faltas?: SortOrder
    condPre?: SortOrder
    condPos?: SortOrder
    emailSended?: SortOrder
    smsSended?: SortOrder
    idCausa?: SortOrder
    modifyBy?: SortOrder
    causa?: SortOrder
    obs?: SortOrder
    idEleRede?: SortOrder
    dados_CC?: SortOrder
    dados_COD?: SortOrder
    refLocFalt?: SortOrder
    contabData?: SortOrder
    contaBy?: SortOrder
    modifBy?: SortOrder
  }

  export type OccurrenceWhereUniqueInput = Prisma.AtLeast<{
    ocoId?: string
    AND?: OccurrenceWhereInput | OccurrenceWhereInput[]
    OR?: OccurrenceWhereInput[]
    NOT?: OccurrenceWhereInput | OccurrenceWhereInput[]
    se?: StringFilter<"Occurrence"> | string
    al?: StringFilter<"Occurrence"> | string
    eqp?: StringFilter<"Occurrence"> | string
    dtHrAlt?: DateTimeFilter<"Occurrence"> | Date | string
    dtHrOco?: DateTimeFilter<"Occurrence"> | Date | string
    dtHrIni?: DateTimeFilter<"Occurrence"> | Date | string
    dtHrFim?: DateTimeFilter<"Occurrence"> | Date | string
    nRelig?: IntFilter<"Occurrence"> | number
    duracao?: FloatFilter<"Occurrence"> | number
    tipoOco?: StringFilter<"Occurrence"> | string
    protSen?: StringFilter<"Occurrence"> | string
    protAtu?: StringFilter<"Occurrence"> | string
    faltas?: StringFilter<"Occurrence"> | string
    condPre?: StringFilter<"Occurrence"> | string
    condPos?: StringFilter<"Occurrence"> | string
    emailSended?: StringFilter<"Occurrence"> | string
    smsSended?: StringFilter<"Occurrence"> | string
    idCausa?: IntFilter<"Occurrence"> | number
    modifyBy?: StringFilter<"Occurrence"> | string
    causa?: StringFilter<"Occurrence"> | string
    obs?: StringFilter<"Occurrence"> | string
    idEleRede?: IntFilter<"Occurrence"> | number
    dados_CC?: StringFilter<"Occurrence"> | string
    dados_COD?: StringFilter<"Occurrence"> | string
    refLocFalt?: StringFilter<"Occurrence"> | string
    contabData?: DateTimeFilter<"Occurrence"> | Date | string
    contaBy?: StringFilter<"Occurrence"> | string
    modifBy?: StringFilter<"Occurrence"> | string
  }, "ocoId">

  export type OccurrenceOrderByWithAggregationInput = {
    ocoId?: SortOrder
    se?: SortOrder
    al?: SortOrder
    eqp?: SortOrder
    dtHrAlt?: SortOrder
    dtHrOco?: SortOrder
    dtHrIni?: SortOrder
    dtHrFim?: SortOrder
    nRelig?: SortOrder
    duracao?: SortOrder
    tipoOco?: SortOrder
    protSen?: SortOrder
    protAtu?: SortOrder
    faltas?: SortOrder
    condPre?: SortOrder
    condPos?: SortOrder
    emailSended?: SortOrder
    smsSended?: SortOrder
    idCausa?: SortOrder
    modifyBy?: SortOrder
    causa?: SortOrder
    obs?: SortOrder
    idEleRede?: SortOrder
    dados_CC?: SortOrder
    dados_COD?: SortOrder
    refLocFalt?: SortOrder
    contabData?: SortOrder
    contaBy?: SortOrder
    modifBy?: SortOrder
    _count?: OccurrenceCountOrderByAggregateInput
    _avg?: OccurrenceAvgOrderByAggregateInput
    _max?: OccurrenceMaxOrderByAggregateInput
    _min?: OccurrenceMinOrderByAggregateInput
    _sum?: OccurrenceSumOrderByAggregateInput
  }

  export type OccurrenceScalarWhereWithAggregatesInput = {
    AND?: OccurrenceScalarWhereWithAggregatesInput | OccurrenceScalarWhereWithAggregatesInput[]
    OR?: OccurrenceScalarWhereWithAggregatesInput[]
    NOT?: OccurrenceScalarWhereWithAggregatesInput | OccurrenceScalarWhereWithAggregatesInput[]
    ocoId?: StringWithAggregatesFilter<"Occurrence"> | string
    se?: StringWithAggregatesFilter<"Occurrence"> | string
    al?: StringWithAggregatesFilter<"Occurrence"> | string
    eqp?: StringWithAggregatesFilter<"Occurrence"> | string
    dtHrAlt?: DateTimeWithAggregatesFilter<"Occurrence"> | Date | string
    dtHrOco?: DateTimeWithAggregatesFilter<"Occurrence"> | Date | string
    dtHrIni?: DateTimeWithAggregatesFilter<"Occurrence"> | Date | string
    dtHrFim?: DateTimeWithAggregatesFilter<"Occurrence"> | Date | string
    nRelig?: IntWithAggregatesFilter<"Occurrence"> | number
    duracao?: FloatWithAggregatesFilter<"Occurrence"> | number
    tipoOco?: StringWithAggregatesFilter<"Occurrence"> | string
    protSen?: StringWithAggregatesFilter<"Occurrence"> | string
    protAtu?: StringWithAggregatesFilter<"Occurrence"> | string
    faltas?: StringWithAggregatesFilter<"Occurrence"> | string
    condPre?: StringWithAggregatesFilter<"Occurrence"> | string
    condPos?: StringWithAggregatesFilter<"Occurrence"> | string
    emailSended?: StringWithAggregatesFilter<"Occurrence"> | string
    smsSended?: StringWithAggregatesFilter<"Occurrence"> | string
    idCausa?: IntWithAggregatesFilter<"Occurrence"> | number
    modifyBy?: StringWithAggregatesFilter<"Occurrence"> | string
    causa?: StringWithAggregatesFilter<"Occurrence"> | string
    obs?: StringWithAggregatesFilter<"Occurrence"> | string
    idEleRede?: IntWithAggregatesFilter<"Occurrence"> | number
    dados_CC?: StringWithAggregatesFilter<"Occurrence"> | string
    dados_COD?: StringWithAggregatesFilter<"Occurrence"> | string
    refLocFalt?: StringWithAggregatesFilter<"Occurrence"> | string
    contabData?: DateTimeWithAggregatesFilter<"Occurrence"> | Date | string
    contaBy?: StringWithAggregatesFilter<"Occurrence"> | string
    modifBy?: StringWithAggregatesFilter<"Occurrence"> | string
  }

  export type OccurrenceCreateInput = {
    ocoId: string
    se: string
    al: string
    eqp: string
    dtHrAlt: Date | string
    dtHrOco: Date | string
    dtHrIni: Date | string
    dtHrFim: Date | string
    nRelig: number
    duracao: number
    tipoOco: string
    protSen: string
    protAtu: string
    faltas: string
    condPre: string
    condPos: string
    emailSended: string
    smsSended: string
    idCausa: number
    modifyBy: string
    causa: string
    obs: string
    idEleRede: number
    dados_CC: string
    dados_COD: string
    refLocFalt: string
    contabData: Date | string
    contaBy: string
    modifBy: string
  }

  export type OccurrenceUncheckedCreateInput = {
    ocoId: string
    se: string
    al: string
    eqp: string
    dtHrAlt: Date | string
    dtHrOco: Date | string
    dtHrIni: Date | string
    dtHrFim: Date | string
    nRelig: number
    duracao: number
    tipoOco: string
    protSen: string
    protAtu: string
    faltas: string
    condPre: string
    condPos: string
    emailSended: string
    smsSended: string
    idCausa: number
    modifyBy: string
    causa: string
    obs: string
    idEleRede: number
    dados_CC: string
    dados_COD: string
    refLocFalt: string
    contabData: Date | string
    contaBy: string
    modifBy: string
  }

  export type OccurrenceUpdateInput = {
    ocoId?: StringFieldUpdateOperationsInput | string
    se?: StringFieldUpdateOperationsInput | string
    al?: StringFieldUpdateOperationsInput | string
    eqp?: StringFieldUpdateOperationsInput | string
    dtHrAlt?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrOco?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrIni?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrFim?: DateTimeFieldUpdateOperationsInput | Date | string
    nRelig?: IntFieldUpdateOperationsInput | number
    duracao?: FloatFieldUpdateOperationsInput | number
    tipoOco?: StringFieldUpdateOperationsInput | string
    protSen?: StringFieldUpdateOperationsInput | string
    protAtu?: StringFieldUpdateOperationsInput | string
    faltas?: StringFieldUpdateOperationsInput | string
    condPre?: StringFieldUpdateOperationsInput | string
    condPos?: StringFieldUpdateOperationsInput | string
    emailSended?: StringFieldUpdateOperationsInput | string
    smsSended?: StringFieldUpdateOperationsInput | string
    idCausa?: IntFieldUpdateOperationsInput | number
    modifyBy?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    obs?: StringFieldUpdateOperationsInput | string
    idEleRede?: IntFieldUpdateOperationsInput | number
    dados_CC?: StringFieldUpdateOperationsInput | string
    dados_COD?: StringFieldUpdateOperationsInput | string
    refLocFalt?: StringFieldUpdateOperationsInput | string
    contabData?: DateTimeFieldUpdateOperationsInput | Date | string
    contaBy?: StringFieldUpdateOperationsInput | string
    modifBy?: StringFieldUpdateOperationsInput | string
  }

  export type OccurrenceUncheckedUpdateInput = {
    ocoId?: StringFieldUpdateOperationsInput | string
    se?: StringFieldUpdateOperationsInput | string
    al?: StringFieldUpdateOperationsInput | string
    eqp?: StringFieldUpdateOperationsInput | string
    dtHrAlt?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrOco?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrIni?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrFim?: DateTimeFieldUpdateOperationsInput | Date | string
    nRelig?: IntFieldUpdateOperationsInput | number
    duracao?: FloatFieldUpdateOperationsInput | number
    tipoOco?: StringFieldUpdateOperationsInput | string
    protSen?: StringFieldUpdateOperationsInput | string
    protAtu?: StringFieldUpdateOperationsInput | string
    faltas?: StringFieldUpdateOperationsInput | string
    condPre?: StringFieldUpdateOperationsInput | string
    condPos?: StringFieldUpdateOperationsInput | string
    emailSended?: StringFieldUpdateOperationsInput | string
    smsSended?: StringFieldUpdateOperationsInput | string
    idCausa?: IntFieldUpdateOperationsInput | number
    modifyBy?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    obs?: StringFieldUpdateOperationsInput | string
    idEleRede?: IntFieldUpdateOperationsInput | number
    dados_CC?: StringFieldUpdateOperationsInput | string
    dados_COD?: StringFieldUpdateOperationsInput | string
    refLocFalt?: StringFieldUpdateOperationsInput | string
    contabData?: DateTimeFieldUpdateOperationsInput | Date | string
    contaBy?: StringFieldUpdateOperationsInput | string
    modifBy?: StringFieldUpdateOperationsInput | string
  }

  export type OccurrenceCreateManyInput = {
    ocoId: string
    se: string
    al: string
    eqp: string
    dtHrAlt: Date | string
    dtHrOco: Date | string
    dtHrIni: Date | string
    dtHrFim: Date | string
    nRelig: number
    duracao: number
    tipoOco: string
    protSen: string
    protAtu: string
    faltas: string
    condPre: string
    condPos: string
    emailSended: string
    smsSended: string
    idCausa: number
    modifyBy: string
    causa: string
    obs: string
    idEleRede: number
    dados_CC: string
    dados_COD: string
    refLocFalt: string
    contabData: Date | string
    contaBy: string
    modifBy: string
  }

  export type OccurrenceUpdateManyMutationInput = {
    ocoId?: StringFieldUpdateOperationsInput | string
    se?: StringFieldUpdateOperationsInput | string
    al?: StringFieldUpdateOperationsInput | string
    eqp?: StringFieldUpdateOperationsInput | string
    dtHrAlt?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrOco?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrIni?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrFim?: DateTimeFieldUpdateOperationsInput | Date | string
    nRelig?: IntFieldUpdateOperationsInput | number
    duracao?: FloatFieldUpdateOperationsInput | number
    tipoOco?: StringFieldUpdateOperationsInput | string
    protSen?: StringFieldUpdateOperationsInput | string
    protAtu?: StringFieldUpdateOperationsInput | string
    faltas?: StringFieldUpdateOperationsInput | string
    condPre?: StringFieldUpdateOperationsInput | string
    condPos?: StringFieldUpdateOperationsInput | string
    emailSended?: StringFieldUpdateOperationsInput | string
    smsSended?: StringFieldUpdateOperationsInput | string
    idCausa?: IntFieldUpdateOperationsInput | number
    modifyBy?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    obs?: StringFieldUpdateOperationsInput | string
    idEleRede?: IntFieldUpdateOperationsInput | number
    dados_CC?: StringFieldUpdateOperationsInput | string
    dados_COD?: StringFieldUpdateOperationsInput | string
    refLocFalt?: StringFieldUpdateOperationsInput | string
    contabData?: DateTimeFieldUpdateOperationsInput | Date | string
    contaBy?: StringFieldUpdateOperationsInput | string
    modifBy?: StringFieldUpdateOperationsInput | string
  }

  export type OccurrenceUncheckedUpdateManyInput = {
    ocoId?: StringFieldUpdateOperationsInput | string
    se?: StringFieldUpdateOperationsInput | string
    al?: StringFieldUpdateOperationsInput | string
    eqp?: StringFieldUpdateOperationsInput | string
    dtHrAlt?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrOco?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrIni?: DateTimeFieldUpdateOperationsInput | Date | string
    dtHrFim?: DateTimeFieldUpdateOperationsInput | Date | string
    nRelig?: IntFieldUpdateOperationsInput | number
    duracao?: FloatFieldUpdateOperationsInput | number
    tipoOco?: StringFieldUpdateOperationsInput | string
    protSen?: StringFieldUpdateOperationsInput | string
    protAtu?: StringFieldUpdateOperationsInput | string
    faltas?: StringFieldUpdateOperationsInput | string
    condPre?: StringFieldUpdateOperationsInput | string
    condPos?: StringFieldUpdateOperationsInput | string
    emailSended?: StringFieldUpdateOperationsInput | string
    smsSended?: StringFieldUpdateOperationsInput | string
    idCausa?: IntFieldUpdateOperationsInput | number
    modifyBy?: StringFieldUpdateOperationsInput | string
    causa?: StringFieldUpdateOperationsInput | string
    obs?: StringFieldUpdateOperationsInput | string
    idEleRede?: IntFieldUpdateOperationsInput | number
    dados_CC?: StringFieldUpdateOperationsInput | string
    dados_COD?: StringFieldUpdateOperationsInput | string
    refLocFalt?: StringFieldUpdateOperationsInput | string
    contabData?: DateTimeFieldUpdateOperationsInput | Date | string
    contaBy?: StringFieldUpdateOperationsInput | string
    modifBy?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OccurrenceCountOrderByAggregateInput = {
    ocoId?: SortOrder
    se?: SortOrder
    al?: SortOrder
    eqp?: SortOrder
    dtHrAlt?: SortOrder
    dtHrOco?: SortOrder
    dtHrIni?: SortOrder
    dtHrFim?: SortOrder
    nRelig?: SortOrder
    duracao?: SortOrder
    tipoOco?: SortOrder
    protSen?: SortOrder
    protAtu?: SortOrder
    faltas?: SortOrder
    condPre?: SortOrder
    condPos?: SortOrder
    emailSended?: SortOrder
    smsSended?: SortOrder
    idCausa?: SortOrder
    modifyBy?: SortOrder
    causa?: SortOrder
    obs?: SortOrder
    idEleRede?: SortOrder
    dados_CC?: SortOrder
    dados_COD?: SortOrder
    refLocFalt?: SortOrder
    contabData?: SortOrder
    contaBy?: SortOrder
    modifBy?: SortOrder
  }

  export type OccurrenceAvgOrderByAggregateInput = {
    nRelig?: SortOrder
    duracao?: SortOrder
    idCausa?: SortOrder
    idEleRede?: SortOrder
  }

  export type OccurrenceMaxOrderByAggregateInput = {
    ocoId?: SortOrder
    se?: SortOrder
    al?: SortOrder
    eqp?: SortOrder
    dtHrAlt?: SortOrder
    dtHrOco?: SortOrder
    dtHrIni?: SortOrder
    dtHrFim?: SortOrder
    nRelig?: SortOrder
    duracao?: SortOrder
    tipoOco?: SortOrder
    protSen?: SortOrder
    protAtu?: SortOrder
    faltas?: SortOrder
    condPre?: SortOrder
    condPos?: SortOrder
    emailSended?: SortOrder
    smsSended?: SortOrder
    idCausa?: SortOrder
    modifyBy?: SortOrder
    causa?: SortOrder
    obs?: SortOrder
    idEleRede?: SortOrder
    dados_CC?: SortOrder
    dados_COD?: SortOrder
    refLocFalt?: SortOrder
    contabData?: SortOrder
    contaBy?: SortOrder
    modifBy?: SortOrder
  }

  export type OccurrenceMinOrderByAggregateInput = {
    ocoId?: SortOrder
    se?: SortOrder
    al?: SortOrder
    eqp?: SortOrder
    dtHrAlt?: SortOrder
    dtHrOco?: SortOrder
    dtHrIni?: SortOrder
    dtHrFim?: SortOrder
    nRelig?: SortOrder
    duracao?: SortOrder
    tipoOco?: SortOrder
    protSen?: SortOrder
    protAtu?: SortOrder
    faltas?: SortOrder
    condPre?: SortOrder
    condPos?: SortOrder
    emailSended?: SortOrder
    smsSended?: SortOrder
    idCausa?: SortOrder
    modifyBy?: SortOrder
    causa?: SortOrder
    obs?: SortOrder
    idEleRede?: SortOrder
    dados_CC?: SortOrder
    dados_COD?: SortOrder
    refLocFalt?: SortOrder
    contabData?: SortOrder
    contaBy?: SortOrder
    modifBy?: SortOrder
  }

  export type OccurrenceSumOrderByAggregateInput = {
    nRelig?: SortOrder
    duracao?: SortOrder
    idCausa?: SortOrder
    idEleRede?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OccurrenceDefaultArgs instead
     */
    export type OccurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OccurrenceDefaultArgs<ExtArgs>

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