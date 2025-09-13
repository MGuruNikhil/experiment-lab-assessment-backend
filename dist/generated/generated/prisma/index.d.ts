
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Journey
 * 
 */
export type Journey = $Result.DefaultSelection<Prisma.$JourneyPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model MilestoneDependency
 * 
 */
export type MilestoneDependency = $Result.DefaultSelection<Prisma.$MilestoneDependencyPayload>
/**
 * Model Suggestion
 * 
 */
export type Suggestion = $Result.DefaultSelection<Prisma.$SuggestionPayload>
/**
 * Model TutorSession
 * 
 */
export type TutorSession = $Result.DefaultSelection<Prisma.$TutorSessionPayload>
/**
 * Model TutorMessage
 * 
 */
export type TutorMessage = $Result.DefaultSelection<Prisma.$TutorMessagePayload>
/**
 * Model SessionSummary
 * 
 */
export type SessionSummary = $Result.DefaultSelection<Prisma.$SessionSummaryPayload>
/**
 * Model CheckinSchedule
 * 
 */
export type CheckinSchedule = $Result.DefaultSelection<Prisma.$CheckinSchedulePayload>
/**
 * Model CheckinEntry
 * 
 */
export type CheckinEntry = $Result.DefaultSelection<Prisma.$CheckinEntryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journey`: Exposes CRUD operations for the **Journey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journeys
    * const journeys = await prisma.journey.findMany()
    * ```
    */
  get journey(): Prisma.JourneyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestoneDependency`: Exposes CRUD operations for the **MilestoneDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MilestoneDependencies
    * const milestoneDependencies = await prisma.milestoneDependency.findMany()
    * ```
    */
  get milestoneDependency(): Prisma.MilestoneDependencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suggestion`: Exposes CRUD operations for the **Suggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suggestions
    * const suggestions = await prisma.suggestion.findMany()
    * ```
    */
  get suggestion(): Prisma.SuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorSession`: Exposes CRUD operations for the **TutorSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorSessions
    * const tutorSessions = await prisma.tutorSession.findMany()
    * ```
    */
  get tutorSession(): Prisma.TutorSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorMessage`: Exposes CRUD operations for the **TutorMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorMessages
    * const tutorMessages = await prisma.tutorMessage.findMany()
    * ```
    */
  get tutorMessage(): Prisma.TutorMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionSummary`: Exposes CRUD operations for the **SessionSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionSummaries
    * const sessionSummaries = await prisma.sessionSummary.findMany()
    * ```
    */
  get sessionSummary(): Prisma.SessionSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkinSchedule`: Exposes CRUD operations for the **CheckinSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckinSchedules
    * const checkinSchedules = await prisma.checkinSchedule.findMany()
    * ```
    */
  get checkinSchedule(): Prisma.CheckinScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkinEntry`: Exposes CRUD operations for the **CheckinEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckinEntries
    * const checkinEntries = await prisma.checkinEntry.findMany()
    * ```
    */
  get checkinEntry(): Prisma.CheckinEntryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Goal: 'Goal',
    Journey: 'Journey',
    Milestone: 'Milestone',
    MilestoneDependency: 'MilestoneDependency',
    Suggestion: 'Suggestion',
    TutorSession: 'TutorSession',
    TutorMessage: 'TutorMessage',
    SessionSummary: 'SessionSummary',
    CheckinSchedule: 'CheckinSchedule',
    CheckinEntry: 'CheckinEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "goal" | "journey" | "milestone" | "milestoneDependency" | "suggestion" | "tutorSession" | "tutorMessage" | "sessionSummary" | "checkinSchedule" | "checkinEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Journey: {
        payload: Prisma.$JourneyPayload<ExtArgs>
        fields: Prisma.JourneyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JourneyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JourneyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          findFirst: {
            args: Prisma.JourneyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JourneyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          findMany: {
            args: Prisma.JourneyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>[]
          }
          create: {
            args: Prisma.JourneyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          createMany: {
            args: Prisma.JourneyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JourneyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>[]
          }
          delete: {
            args: Prisma.JourneyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          update: {
            args: Prisma.JourneyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          deleteMany: {
            args: Prisma.JourneyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JourneyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JourneyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>[]
          }
          upsert: {
            args: Prisma.JourneyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          aggregate: {
            args: Prisma.JourneyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJourney>
          }
          groupBy: {
            args: Prisma.JourneyGroupByArgs<ExtArgs>
            result: $Utils.Optional<JourneyGroupByOutputType>[]
          }
          count: {
            args: Prisma.JourneyCountArgs<ExtArgs>
            result: $Utils.Optional<JourneyCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      MilestoneDependency: {
        payload: Prisma.$MilestoneDependencyPayload<ExtArgs>
        fields: Prisma.MilestoneDependencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneDependencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneDependencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>
          }
          findFirst: {
            args: Prisma.MilestoneDependencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneDependencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>
          }
          findMany: {
            args: Prisma.MilestoneDependencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>[]
          }
          create: {
            args: Prisma.MilestoneDependencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>
          }
          createMany: {
            args: Prisma.MilestoneDependencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneDependencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>[]
          }
          delete: {
            args: Prisma.MilestoneDependencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>
          }
          update: {
            args: Prisma.MilestoneDependencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDependencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneDependencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneDependencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>[]
          }
          upsert: {
            args: Prisma.MilestoneDependencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneDependencyPayload>
          }
          aggregate: {
            args: Prisma.MilestoneDependencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestoneDependency>
          }
          groupBy: {
            args: Prisma.MilestoneDependencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneDependencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneDependencyCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneDependencyCountAggregateOutputType> | number
          }
        }
      }
      Suggestion: {
        payload: Prisma.$SuggestionPayload<ExtArgs>
        fields: Prisma.SuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findFirst: {
            args: Prisma.SuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findMany: {
            args: Prisma.SuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          create: {
            args: Prisma.SuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          createMany: {
            args: Prisma.SuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          delete: {
            args: Prisma.SuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          update: {
            args: Prisma.SuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          deleteMany: {
            args: Prisma.SuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          upsert: {
            args: Prisma.SuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          aggregate: {
            args: Prisma.SuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuggestion>
          }
          groupBy: {
            args: Prisma.SuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<SuggestionCountAggregateOutputType> | number
          }
        }
      }
      TutorSession: {
        payload: Prisma.$TutorSessionPayload<ExtArgs>
        fields: Prisma.TutorSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>
          }
          findFirst: {
            args: Prisma.TutorSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>
          }
          findMany: {
            args: Prisma.TutorSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>[]
          }
          create: {
            args: Prisma.TutorSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>
          }
          createMany: {
            args: Prisma.TutorSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>[]
          }
          delete: {
            args: Prisma.TutorSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>
          }
          update: {
            args: Prisma.TutorSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>
          }
          deleteMany: {
            args: Prisma.TutorSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>[]
          }
          upsert: {
            args: Prisma.TutorSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionPayload>
          }
          aggregate: {
            args: Prisma.TutorSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorSession>
          }
          groupBy: {
            args: Prisma.TutorSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TutorSessionCountAggregateOutputType> | number
          }
        }
      }
      TutorMessage: {
        payload: Prisma.$TutorMessagePayload<ExtArgs>
        fields: Prisma.TutorMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>
          }
          findFirst: {
            args: Prisma.TutorMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>
          }
          findMany: {
            args: Prisma.TutorMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>[]
          }
          create: {
            args: Prisma.TutorMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>
          }
          createMany: {
            args: Prisma.TutorMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>[]
          }
          delete: {
            args: Prisma.TutorMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>
          }
          update: {
            args: Prisma.TutorMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>
          }
          deleteMany: {
            args: Prisma.TutorMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>[]
          }
          upsert: {
            args: Prisma.TutorMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorMessagePayload>
          }
          aggregate: {
            args: Prisma.TutorMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorMessage>
          }
          groupBy: {
            args: Prisma.TutorMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorMessageCountArgs<ExtArgs>
            result: $Utils.Optional<TutorMessageCountAggregateOutputType> | number
          }
        }
      }
      SessionSummary: {
        payload: Prisma.$SessionSummaryPayload<ExtArgs>
        fields: Prisma.SessionSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>
          }
          findFirst: {
            args: Prisma.SessionSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>
          }
          findMany: {
            args: Prisma.SessionSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>[]
          }
          create: {
            args: Prisma.SessionSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>
          }
          createMany: {
            args: Prisma.SessionSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>[]
          }
          delete: {
            args: Prisma.SessionSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>
          }
          update: {
            args: Prisma.SessionSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>
          }
          deleteMany: {
            args: Prisma.SessionSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>[]
          }
          upsert: {
            args: Prisma.SessionSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionSummaryPayload>
          }
          aggregate: {
            args: Prisma.SessionSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionSummary>
          }
          groupBy: {
            args: Prisma.SessionSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<SessionSummaryCountAggregateOutputType> | number
          }
        }
      }
      CheckinSchedule: {
        payload: Prisma.$CheckinSchedulePayload<ExtArgs>
        fields: Prisma.CheckinScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>
          }
          findFirst: {
            args: Prisma.CheckinScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>
          }
          findMany: {
            args: Prisma.CheckinScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>[]
          }
          create: {
            args: Prisma.CheckinScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>
          }
          createMany: {
            args: Prisma.CheckinScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>[]
          }
          delete: {
            args: Prisma.CheckinScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>
          }
          update: {
            args: Prisma.CheckinScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>
          }
          deleteMany: {
            args: Prisma.CheckinScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckinScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>[]
          }
          upsert: {
            args: Prisma.CheckinScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinSchedulePayload>
          }
          aggregate: {
            args: Prisma.CheckinScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckinSchedule>
          }
          groupBy: {
            args: Prisma.CheckinScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinScheduleCountAggregateOutputType> | number
          }
        }
      }
      CheckinEntry: {
        payload: Prisma.$CheckinEntryPayload<ExtArgs>
        fields: Prisma.CheckinEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>
          }
          findFirst: {
            args: Prisma.CheckinEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>
          }
          findMany: {
            args: Prisma.CheckinEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>[]
          }
          create: {
            args: Prisma.CheckinEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>
          }
          createMany: {
            args: Prisma.CheckinEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>[]
          }
          delete: {
            args: Prisma.CheckinEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>
          }
          update: {
            args: Prisma.CheckinEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>
          }
          deleteMany: {
            args: Prisma.CheckinEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckinEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>[]
          }
          upsert: {
            args: Prisma.CheckinEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinEntryPayload>
          }
          aggregate: {
            args: Prisma.CheckinEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckinEntry>
          }
          groupBy: {
            args: Prisma.CheckinEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    goal?: GoalOmit
    journey?: JourneyOmit
    milestone?: MilestoneOmit
    milestoneDependency?: MilestoneDependencyOmit
    suggestion?: SuggestionOmit
    tutorSession?: TutorSessionOmit
    tutorMessage?: TutorMessageOmit
    sessionSummary?: SessionSummaryOmit
    checkinSchedule?: CheckinScheduleOmit
    checkinEntry?: CheckinEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    goals: number
    suggestions: number
    tutorSessions: number
    sessionSummaries: number
    CheckinSchedule: number
    CheckinEntry: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    suggestions?: boolean | UserCountOutputTypeCountSuggestionsArgs
    tutorSessions?: boolean | UserCountOutputTypeCountTutorSessionsArgs
    sessionSummaries?: boolean | UserCountOutputTypeCountSessionSummariesArgs
    CheckinSchedule?: boolean | UserCountOutputTypeCountCheckinScheduleArgs
    CheckinEntry?: boolean | UserCountOutputTypeCountCheckinEntryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTutorSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionSummaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckinScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckinEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinEntryWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    journeys: number
    suggestions: number
    tutorSessions: number
    CheckinSchedule: number
    CheckinEntry: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journeys?: boolean | GoalCountOutputTypeCountJourneysArgs
    suggestions?: boolean | GoalCountOutputTypeCountSuggestionsArgs
    tutorSessions?: boolean | GoalCountOutputTypeCountTutorSessionsArgs
    CheckinSchedule?: boolean | GoalCountOutputTypeCountCheckinScheduleArgs
    CheckinEntry?: boolean | GoalCountOutputTypeCountCheckinEntryArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountJourneysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JourneyWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTutorSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSessionWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountCheckinScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinScheduleWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountCheckinEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinEntryWhereInput
  }


  /**
   * Count Type JourneyCountOutputType
   */

  export type JourneyCountOutputType = {
    milestones: number
  }

  export type JourneyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | JourneyCountOutputTypeCountMilestonesArgs
  }

  // Custom InputTypes
  /**
   * JourneyCountOutputType without action
   */
  export type JourneyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JourneyCountOutputType
     */
    select?: JourneyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JourneyCountOutputType without action
   */
  export type JourneyCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }


  /**
   * Count Type MilestoneCountOutputType
   */

  export type MilestoneCountOutputType = {
    dependencies: number
    requiredBy: number
    tutorSessions: number
    CheckinSchedule: number
    CheckinEntry: number
  }

  export type MilestoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependencies?: boolean | MilestoneCountOutputTypeCountDependenciesArgs
    requiredBy?: boolean | MilestoneCountOutputTypeCountRequiredByArgs
    tutorSessions?: boolean | MilestoneCountOutputTypeCountTutorSessionsArgs
    CheckinSchedule?: boolean | MilestoneCountOutputTypeCountCheckinScheduleArgs
    CheckinEntry?: boolean | MilestoneCountOutputTypeCountCheckinEntryArgs
  }

  // Custom InputTypes
  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneCountOutputType
     */
    select?: MilestoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneDependencyWhereInput
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountRequiredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneDependencyWhereInput
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountTutorSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSessionWhereInput
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountCheckinScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinScheduleWhereInput
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountCheckinEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinEntryWhereInput
  }


  /**
   * Count Type TutorSessionCountOutputType
   */

  export type TutorSessionCountOutputType = {
    messages: number
  }

  export type TutorSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TutorSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * TutorSessionCountOutputType without action
   */
  export type TutorSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionCountOutputType
     */
    select?: TutorSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorSessionCountOutputType without action
   */
  export type TutorSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorMessageWhereInput
  }


  /**
   * Count Type CheckinScheduleCountOutputType
   */

  export type CheckinScheduleCountOutputType = {
    entries: number
  }

  export type CheckinScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | CheckinScheduleCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * CheckinScheduleCountOutputType without action
   */
  export type CheckinScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinScheduleCountOutputType
     */
    select?: CheckinScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CheckinScheduleCountOutputType without action
   */
  export type CheckinScheduleCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goals?: boolean | User$goalsArgs<ExtArgs>
    suggestions?: boolean | User$suggestionsArgs<ExtArgs>
    tutorSessions?: boolean | User$tutorSessionsArgs<ExtArgs>
    sessionSummaries?: boolean | User$sessionSummariesArgs<ExtArgs>
    CheckinSchedule?: boolean | User$CheckinScheduleArgs<ExtArgs>
    CheckinEntry?: boolean | User$CheckinEntryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | User$goalsArgs<ExtArgs>
    suggestions?: boolean | User$suggestionsArgs<ExtArgs>
    tutorSessions?: boolean | User$tutorSessionsArgs<ExtArgs>
    sessionSummaries?: boolean | User$sessionSummariesArgs<ExtArgs>
    CheckinSchedule?: boolean | User$CheckinScheduleArgs<ExtArgs>
    CheckinEntry?: boolean | User$CheckinEntryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[]
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
      tutorSessions: Prisma.$TutorSessionPayload<ExtArgs>[]
      sessionSummaries: Prisma.$SessionSummaryPayload<ExtArgs>[]
      CheckinSchedule: Prisma.$CheckinSchedulePayload<ExtArgs>[]
      CheckinEntry: Prisma.$CheckinEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suggestions<T extends User$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutorSessions<T extends User$tutorSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$tutorSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionSummaries<T extends User$sessionSummariesArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionSummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CheckinSchedule<T extends User$CheckinScheduleArgs<ExtArgs> = {}>(args?: Subset<T, User$CheckinScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CheckinEntry<T extends User$CheckinEntryArgs<ExtArgs> = {}>(args?: Subset<T, User$CheckinEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.suggestions
   */
  export type User$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * User.tutorSessions
   */
  export type User$tutorSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    where?: TutorSessionWhereInput
    orderBy?: TutorSessionOrderByWithRelationInput | TutorSessionOrderByWithRelationInput[]
    cursor?: TutorSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorSessionScalarFieldEnum | TutorSessionScalarFieldEnum[]
  }

  /**
   * User.sessionSummaries
   */
  export type User$sessionSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    where?: SessionSummaryWhereInput
    orderBy?: SessionSummaryOrderByWithRelationInput | SessionSummaryOrderByWithRelationInput[]
    cursor?: SessionSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionSummaryScalarFieldEnum | SessionSummaryScalarFieldEnum[]
  }

  /**
   * User.CheckinSchedule
   */
  export type User$CheckinScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    where?: CheckinScheduleWhereInput
    orderBy?: CheckinScheduleOrderByWithRelationInput | CheckinScheduleOrderByWithRelationInput[]
    cursor?: CheckinScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScheduleScalarFieldEnum | CheckinScheduleScalarFieldEnum[]
  }

  /**
   * User.CheckinEntry
   */
  export type User$CheckinEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    where?: CheckinEntryWhereInput
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    cursor?: CheckinEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinEntryScalarFieldEnum | CheckinEntryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    complexity: number | null
    suggestedWeeks: number | null
  }

  export type GoalSumAggregateOutputType = {
    complexity: number | null
    suggestedWeeks: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    complexity: number | null
    suggestedWeeks: number | null
    chunking: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    complexity: number | null
    suggestedWeeks: number | null
    chunking: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    complexity: number
    suggestedWeeks: number
    chunking: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    complexity?: true
    suggestedWeeks?: true
  }

  export type GoalSumAggregateInputType = {
    complexity?: true
    suggestedWeeks?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    complexity?: true
    suggestedWeeks?: true
    chunking?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    complexity?: true
    suggestedWeeks?: true
    chunking?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    complexity?: true
    suggestedWeeks?: true
    chunking?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    complexity: number | null
    suggestedWeeks: number | null
    chunking: string | null
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    complexity?: boolean
    suggestedWeeks?: boolean
    chunking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    journeys?: boolean | Goal$journeysArgs<ExtArgs>
    suggestions?: boolean | Goal$suggestionsArgs<ExtArgs>
    tutorSessions?: boolean | Goal$tutorSessionsArgs<ExtArgs>
    CheckinSchedule?: boolean | Goal$CheckinScheduleArgs<ExtArgs>
    CheckinEntry?: boolean | Goal$CheckinEntryArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    complexity?: boolean
    suggestedWeeks?: boolean
    chunking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    complexity?: boolean
    suggestedWeeks?: boolean
    chunking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    complexity?: boolean
    suggestedWeeks?: boolean
    chunking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "complexity" | "suggestedWeeks" | "chunking" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    journeys?: boolean | Goal$journeysArgs<ExtArgs>
    suggestions?: boolean | Goal$suggestionsArgs<ExtArgs>
    tutorSessions?: boolean | Goal$tutorSessionsArgs<ExtArgs>
    CheckinSchedule?: boolean | Goal$CheckinScheduleArgs<ExtArgs>
    CheckinEntry?: boolean | Goal$CheckinEntryArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      journeys: Prisma.$JourneyPayload<ExtArgs>[]
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
      tutorSessions: Prisma.$TutorSessionPayload<ExtArgs>[]
      CheckinSchedule: Prisma.$CheckinSchedulePayload<ExtArgs>[]
      CheckinEntry: Prisma.$CheckinEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      complexity: number | null
      suggestedWeeks: number | null
      chunking: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    journeys<T extends Goal$journeysArgs<ExtArgs> = {}>(args?: Subset<T, Goal$journeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suggestions<T extends Goal$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutorSessions<T extends Goal$tutorSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$tutorSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CheckinSchedule<T extends Goal$CheckinScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Goal$CheckinScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CheckinEntry<T extends Goal$CheckinEntryArgs<ExtArgs> = {}>(args?: Subset<T, Goal$CheckinEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly complexity: FieldRef<"Goal", 'Int'>
    readonly suggestedWeeks: FieldRef<"Goal", 'Int'>
    readonly chunking: FieldRef<"Goal", 'String'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.journeys
   */
  export type Goal$journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    where?: JourneyWhereInput
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    cursor?: JourneyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Goal.suggestions
   */
  export type Goal$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Goal.tutorSessions
   */
  export type Goal$tutorSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    where?: TutorSessionWhereInput
    orderBy?: TutorSessionOrderByWithRelationInput | TutorSessionOrderByWithRelationInput[]
    cursor?: TutorSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorSessionScalarFieldEnum | TutorSessionScalarFieldEnum[]
  }

  /**
   * Goal.CheckinSchedule
   */
  export type Goal$CheckinScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    where?: CheckinScheduleWhereInput
    orderBy?: CheckinScheduleOrderByWithRelationInput | CheckinScheduleOrderByWithRelationInput[]
    cursor?: CheckinScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScheduleScalarFieldEnum | CheckinScheduleScalarFieldEnum[]
  }

  /**
   * Goal.CheckinEntry
   */
  export type Goal$CheckinEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    where?: CheckinEntryWhereInput
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    cursor?: CheckinEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinEntryScalarFieldEnum | CheckinEntryScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Journey
   */

  export type AggregateJourney = {
    _count: JourneyCountAggregateOutputType | null
    _min: JourneyMinAggregateOutputType | null
    _max: JourneyMaxAggregateOutputType | null
  }

  export type JourneyMinAggregateOutputType = {
    id: string | null
    goalId: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type JourneyMaxAggregateOutputType = {
    id: string | null
    goalId: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type JourneyCountAggregateOutputType = {
    id: number
    goalId: number
    title: number
    startDate: number
    endDate: number
    meta: number
    createdAt: number
    _all: number
  }


  export type JourneyMinAggregateInputType = {
    id?: true
    goalId?: true
    title?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type JourneyMaxAggregateInputType = {
    id?: true
    goalId?: true
    title?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type JourneyCountAggregateInputType = {
    id?: true
    goalId?: true
    title?: true
    startDate?: true
    endDate?: true
    meta?: true
    createdAt?: true
    _all?: true
  }

  export type JourneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journey to aggregate.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Journeys
    **/
    _count?: true | JourneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JourneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JourneyMaxAggregateInputType
  }

  export type GetJourneyAggregateType<T extends JourneyAggregateArgs> = {
        [P in keyof T & keyof AggregateJourney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJourney[P]>
      : GetScalarType<T[P], AggregateJourney[P]>
  }




  export type JourneyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JourneyWhereInput
    orderBy?: JourneyOrderByWithAggregationInput | JourneyOrderByWithAggregationInput[]
    by: JourneyScalarFieldEnum[] | JourneyScalarFieldEnum
    having?: JourneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JourneyCountAggregateInputType | true
    _min?: JourneyMinAggregateInputType
    _max?: JourneyMaxAggregateInputType
  }

  export type JourneyGroupByOutputType = {
    id: string
    goalId: string
    title: string | null
    startDate: Date | null
    endDate: Date | null
    meta: JsonValue | null
    createdAt: Date
    _count: JourneyCountAggregateOutputType | null
    _min: JourneyMinAggregateOutputType | null
    _max: JourneyMaxAggregateOutputType | null
  }

  type GetJourneyGroupByPayload<T extends JourneyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JourneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JourneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JourneyGroupByOutputType[P]>
            : GetScalarType<T[P], JourneyGroupByOutputType[P]>
        }
      >
    >


  export type JourneySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    meta?: boolean
    createdAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    milestones?: boolean | Journey$milestonesArgs<ExtArgs>
    _count?: boolean | JourneyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journey"]>

  export type JourneySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    meta?: boolean
    createdAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journey"]>

  export type JourneySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    meta?: boolean
    createdAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journey"]>

  export type JourneySelectScalar = {
    id?: boolean
    goalId?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    meta?: boolean
    createdAt?: boolean
  }

  export type JourneyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "goalId" | "title" | "startDate" | "endDate" | "meta" | "createdAt", ExtArgs["result"]["journey"]>
  export type JourneyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    milestones?: boolean | Journey$milestonesArgs<ExtArgs>
    _count?: boolean | JourneyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JourneyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }
  export type JourneyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }

  export type $JourneyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Journey"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs>
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      goalId: string
      title: string | null
      startDate: Date | null
      endDate: Date | null
      meta: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["journey"]>
    composites: {}
  }

  type JourneyGetPayload<S extends boolean | null | undefined | JourneyDefaultArgs> = $Result.GetResult<Prisma.$JourneyPayload, S>

  type JourneyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JourneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JourneyCountAggregateInputType | true
    }

  export interface JourneyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Journey'], meta: { name: 'Journey' } }
    /**
     * Find zero or one Journey that matches the filter.
     * @param {JourneyFindUniqueArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JourneyFindUniqueArgs>(args: SelectSubset<T, JourneyFindUniqueArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Journey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JourneyFindUniqueOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JourneyFindUniqueOrThrowArgs>(args: SelectSubset<T, JourneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindFirstArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JourneyFindFirstArgs>(args?: SelectSubset<T, JourneyFindFirstArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindFirstOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JourneyFindFirstOrThrowArgs>(args?: SelectSubset<T, JourneyFindFirstOrThrowArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journeys
     * const journeys = await prisma.journey.findMany()
     * 
     * // Get first 10 Journeys
     * const journeys = await prisma.journey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journeyWithIdOnly = await prisma.journey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JourneyFindManyArgs>(args?: SelectSubset<T, JourneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Journey.
     * @param {JourneyCreateArgs} args - Arguments to create a Journey.
     * @example
     * // Create one Journey
     * const Journey = await prisma.journey.create({
     *   data: {
     *     // ... data to create a Journey
     *   }
     * })
     * 
     */
    create<T extends JourneyCreateArgs>(args: SelectSubset<T, JourneyCreateArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Journeys.
     * @param {JourneyCreateManyArgs} args - Arguments to create many Journeys.
     * @example
     * // Create many Journeys
     * const journey = await prisma.journey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JourneyCreateManyArgs>(args?: SelectSubset<T, JourneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Journeys and returns the data saved in the database.
     * @param {JourneyCreateManyAndReturnArgs} args - Arguments to create many Journeys.
     * @example
     * // Create many Journeys
     * const journey = await prisma.journey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Journeys and only return the `id`
     * const journeyWithIdOnly = await prisma.journey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JourneyCreateManyAndReturnArgs>(args?: SelectSubset<T, JourneyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Journey.
     * @param {JourneyDeleteArgs} args - Arguments to delete one Journey.
     * @example
     * // Delete one Journey
     * const Journey = await prisma.journey.delete({
     *   where: {
     *     // ... filter to delete one Journey
     *   }
     * })
     * 
     */
    delete<T extends JourneyDeleteArgs>(args: SelectSubset<T, JourneyDeleteArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Journey.
     * @param {JourneyUpdateArgs} args - Arguments to update one Journey.
     * @example
     * // Update one Journey
     * const journey = await prisma.journey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JourneyUpdateArgs>(args: SelectSubset<T, JourneyUpdateArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Journeys.
     * @param {JourneyDeleteManyArgs} args - Arguments to filter Journeys to delete.
     * @example
     * // Delete a few Journeys
     * const { count } = await prisma.journey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JourneyDeleteManyArgs>(args?: SelectSubset<T, JourneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journeys
     * const journey = await prisma.journey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JourneyUpdateManyArgs>(args: SelectSubset<T, JourneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journeys and returns the data updated in the database.
     * @param {JourneyUpdateManyAndReturnArgs} args - Arguments to update many Journeys.
     * @example
     * // Update many Journeys
     * const journey = await prisma.journey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Journeys and only return the `id`
     * const journeyWithIdOnly = await prisma.journey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JourneyUpdateManyAndReturnArgs>(args: SelectSubset<T, JourneyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Journey.
     * @param {JourneyUpsertArgs} args - Arguments to update or create a Journey.
     * @example
     * // Update or create a Journey
     * const journey = await prisma.journey.upsert({
     *   create: {
     *     // ... data to create a Journey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journey we want to update
     *   }
     * })
     */
    upsert<T extends JourneyUpsertArgs>(args: SelectSubset<T, JourneyUpsertArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyCountArgs} args - Arguments to filter Journeys to count.
     * @example
     * // Count the number of Journeys
     * const count = await prisma.journey.count({
     *   where: {
     *     // ... the filter for the Journeys we want to count
     *   }
     * })
    **/
    count<T extends JourneyCountArgs>(
      args?: Subset<T, JourneyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JourneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JourneyAggregateArgs>(args: Subset<T, JourneyAggregateArgs>): Prisma.PrismaPromise<GetJourneyAggregateType<T>>

    /**
     * Group by Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyGroupByArgs} args - Group by arguments.
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
      T extends JourneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JourneyGroupByArgs['orderBy'] }
        : { orderBy?: JourneyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JourneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJourneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Journey model
   */
  readonly fields: JourneyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Journey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JourneyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    milestones<T extends Journey$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Journey$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Journey model
   */
  interface JourneyFieldRefs {
    readonly id: FieldRef<"Journey", 'String'>
    readonly goalId: FieldRef<"Journey", 'String'>
    readonly title: FieldRef<"Journey", 'String'>
    readonly startDate: FieldRef<"Journey", 'DateTime'>
    readonly endDate: FieldRef<"Journey", 'DateTime'>
    readonly meta: FieldRef<"Journey", 'Json'>
    readonly createdAt: FieldRef<"Journey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Journey findUnique
   */
  export type JourneyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey findUniqueOrThrow
   */
  export type JourneyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey findFirst
   */
  export type JourneyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey findFirstOrThrow
   */
  export type JourneyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey findMany
   */
  export type JourneyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journeys to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey create
   */
  export type JourneyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The data needed to create a Journey.
     */
    data: XOR<JourneyCreateInput, JourneyUncheckedCreateInput>
  }

  /**
   * Journey createMany
   */
  export type JourneyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Journeys.
     */
    data: JourneyCreateManyInput | JourneyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Journey createManyAndReturn
   */
  export type JourneyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * The data used to create many Journeys.
     */
    data: JourneyCreateManyInput | JourneyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journey update
   */
  export type JourneyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The data needed to update a Journey.
     */
    data: XOR<JourneyUpdateInput, JourneyUncheckedUpdateInput>
    /**
     * Choose, which Journey to update.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey updateMany
   */
  export type JourneyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Journeys.
     */
    data: XOR<JourneyUpdateManyMutationInput, JourneyUncheckedUpdateManyInput>
    /**
     * Filter which Journeys to update
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to update.
     */
    limit?: number
  }

  /**
   * Journey updateManyAndReturn
   */
  export type JourneyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * The data used to update Journeys.
     */
    data: XOR<JourneyUpdateManyMutationInput, JourneyUncheckedUpdateManyInput>
    /**
     * Filter which Journeys to update
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journey upsert
   */
  export type JourneyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The filter to search for the Journey to update in case it exists.
     */
    where: JourneyWhereUniqueInput
    /**
     * In case the Journey found by the `where` argument doesn't exist, create a new Journey with this data.
     */
    create: XOR<JourneyCreateInput, JourneyUncheckedCreateInput>
    /**
     * In case the Journey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JourneyUpdateInput, JourneyUncheckedUpdateInput>
  }

  /**
   * Journey delete
   */
  export type JourneyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter which Journey to delete.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey deleteMany
   */
  export type JourneyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journeys to delete
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to delete.
     */
    limit?: number
  }

  /**
   * Journey.milestones
   */
  export type Journey$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Journey without action
   */
  export type JourneyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    orderIndex: number | null
    startWeek: number | null
    endWeek: number | null
    estimatedHours: number | null
    progress: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    orderIndex: number | null
    startWeek: number | null
    endWeek: number | null
    estimatedHours: number | null
    progress: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    journeyId: string | null
    title: string | null
    description: string | null
    orderIndex: number | null
    startWeek: number | null
    endWeek: number | null
    estimatedHours: number | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    journeyId: string | null
    title: string | null
    description: string | null
    orderIndex: number | null
    startWeek: number | null
    endWeek: number | null
    estimatedHours: number | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    journeyId: number
    title: number
    description: number
    orderIndex: number
    startWeek: number
    endWeek: number
    estimatedHours: number
    progress: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    orderIndex?: true
    startWeek?: true
    endWeek?: true
    estimatedHours?: true
    progress?: true
  }

  export type MilestoneSumAggregateInputType = {
    orderIndex?: true
    startWeek?: true
    endWeek?: true
    estimatedHours?: true
    progress?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    journeyId?: true
    title?: true
    description?: true
    orderIndex?: true
    startWeek?: true
    endWeek?: true
    estimatedHours?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    journeyId?: true
    title?: true
    description?: true
    orderIndex?: true
    startWeek?: true
    endWeek?: true
    estimatedHours?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    journeyId?: true
    title?: true
    description?: true
    orderIndex?: true
    startWeek?: true
    endWeek?: true
    estimatedHours?: true
    progress?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    journeyId: string
    title: string
    description: string | null
    orderIndex: number
    startWeek: number | null
    endWeek: number | null
    estimatedHours: number | null
    progress: number
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    title?: boolean
    description?: boolean
    orderIndex?: boolean
    startWeek?: boolean
    endWeek?: boolean
    estimatedHours?: boolean
    progress?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    dependencies?: boolean | Milestone$dependenciesArgs<ExtArgs>
    requiredBy?: boolean | Milestone$requiredByArgs<ExtArgs>
    tutorSessions?: boolean | Milestone$tutorSessionsArgs<ExtArgs>
    CheckinSchedule?: boolean | Milestone$CheckinScheduleArgs<ExtArgs>
    CheckinEntry?: boolean | Milestone$CheckinEntryArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    title?: boolean
    description?: boolean
    orderIndex?: boolean
    startWeek?: boolean
    endWeek?: boolean
    estimatedHours?: boolean
    progress?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    title?: boolean
    description?: boolean
    orderIndex?: boolean
    startWeek?: boolean
    endWeek?: boolean
    estimatedHours?: boolean
    progress?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    journeyId?: boolean
    title?: boolean
    description?: boolean
    orderIndex?: boolean
    startWeek?: boolean
    endWeek?: boolean
    estimatedHours?: boolean
    progress?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "journeyId" | "title" | "description" | "orderIndex" | "startWeek" | "endWeek" | "estimatedHours" | "progress" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    dependencies?: boolean | Milestone$dependenciesArgs<ExtArgs>
    requiredBy?: boolean | Milestone$requiredByArgs<ExtArgs>
    tutorSessions?: boolean | Milestone$tutorSessionsArgs<ExtArgs>
    CheckinSchedule?: boolean | Milestone$CheckinScheduleArgs<ExtArgs>
    CheckinEntry?: boolean | Milestone$CheckinEntryArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      journey: Prisma.$JourneyPayload<ExtArgs>
      dependencies: Prisma.$MilestoneDependencyPayload<ExtArgs>[]
      requiredBy: Prisma.$MilestoneDependencyPayload<ExtArgs>[]
      tutorSessions: Prisma.$TutorSessionPayload<ExtArgs>[]
      CheckinSchedule: Prisma.$CheckinSchedulePayload<ExtArgs>[]
      CheckinEntry: Prisma.$CheckinEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      journeyId: string
      title: string
      description: string | null
      orderIndex: number
      startWeek: number | null
      endWeek: number | null
      estimatedHours: number | null
      progress: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
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
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journey<T extends JourneyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JourneyDefaultArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dependencies<T extends Milestone$dependenciesArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$dependenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requiredBy<T extends Milestone$requiredByArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$requiredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutorSessions<T extends Milestone$tutorSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$tutorSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CheckinSchedule<T extends Milestone$CheckinScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$CheckinScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CheckinEntry<T extends Milestone$CheckinEntryArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$CheckinEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly journeyId: FieldRef<"Milestone", 'String'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly orderIndex: FieldRef<"Milestone", 'Int'>
    readonly startWeek: FieldRef<"Milestone", 'Int'>
    readonly endWeek: FieldRef<"Milestone", 'Int'>
    readonly estimatedHours: FieldRef<"Milestone", 'Int'>
    readonly progress: FieldRef<"Milestone", 'Int'>
    readonly metadata: FieldRef<"Milestone", 'Json'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly updatedAt: FieldRef<"Milestone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone.dependencies
   */
  export type Milestone$dependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    where?: MilestoneDependencyWhereInput
    orderBy?: MilestoneDependencyOrderByWithRelationInput | MilestoneDependencyOrderByWithRelationInput[]
    cursor?: MilestoneDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneDependencyScalarFieldEnum | MilestoneDependencyScalarFieldEnum[]
  }

  /**
   * Milestone.requiredBy
   */
  export type Milestone$requiredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    where?: MilestoneDependencyWhereInput
    orderBy?: MilestoneDependencyOrderByWithRelationInput | MilestoneDependencyOrderByWithRelationInput[]
    cursor?: MilestoneDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneDependencyScalarFieldEnum | MilestoneDependencyScalarFieldEnum[]
  }

  /**
   * Milestone.tutorSessions
   */
  export type Milestone$tutorSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    where?: TutorSessionWhereInput
    orderBy?: TutorSessionOrderByWithRelationInput | TutorSessionOrderByWithRelationInput[]
    cursor?: TutorSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorSessionScalarFieldEnum | TutorSessionScalarFieldEnum[]
  }

  /**
   * Milestone.CheckinSchedule
   */
  export type Milestone$CheckinScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    where?: CheckinScheduleWhereInput
    orderBy?: CheckinScheduleOrderByWithRelationInput | CheckinScheduleOrderByWithRelationInput[]
    cursor?: CheckinScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScheduleScalarFieldEnum | CheckinScheduleScalarFieldEnum[]
  }

  /**
   * Milestone.CheckinEntry
   */
  export type Milestone$CheckinEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    where?: CheckinEntryWhereInput
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    cursor?: CheckinEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinEntryScalarFieldEnum | CheckinEntryScalarFieldEnum[]
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model MilestoneDependency
   */

  export type AggregateMilestoneDependency = {
    _count: MilestoneDependencyCountAggregateOutputType | null
    _min: MilestoneDependencyMinAggregateOutputType | null
    _max: MilestoneDependencyMaxAggregateOutputType | null
  }

  export type MilestoneDependencyMinAggregateOutputType = {
    id: string | null
    milestoneId: string | null
    dependsOnId: string | null
    createdAt: Date | null
  }

  export type MilestoneDependencyMaxAggregateOutputType = {
    id: string | null
    milestoneId: string | null
    dependsOnId: string | null
    createdAt: Date | null
  }

  export type MilestoneDependencyCountAggregateOutputType = {
    id: number
    milestoneId: number
    dependsOnId: number
    createdAt: number
    _all: number
  }


  export type MilestoneDependencyMinAggregateInputType = {
    id?: true
    milestoneId?: true
    dependsOnId?: true
    createdAt?: true
  }

  export type MilestoneDependencyMaxAggregateInputType = {
    id?: true
    milestoneId?: true
    dependsOnId?: true
    createdAt?: true
  }

  export type MilestoneDependencyCountAggregateInputType = {
    id?: true
    milestoneId?: true
    dependsOnId?: true
    createdAt?: true
    _all?: true
  }

  export type MilestoneDependencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MilestoneDependency to aggregate.
     */
    where?: MilestoneDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneDependencies to fetch.
     */
    orderBy?: MilestoneDependencyOrderByWithRelationInput | MilestoneDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MilestoneDependencies
    **/
    _count?: true | MilestoneDependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneDependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneDependencyMaxAggregateInputType
  }

  export type GetMilestoneDependencyAggregateType<T extends MilestoneDependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestoneDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestoneDependency[P]>
      : GetScalarType<T[P], AggregateMilestoneDependency[P]>
  }




  export type MilestoneDependencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneDependencyWhereInput
    orderBy?: MilestoneDependencyOrderByWithAggregationInput | MilestoneDependencyOrderByWithAggregationInput[]
    by: MilestoneDependencyScalarFieldEnum[] | MilestoneDependencyScalarFieldEnum
    having?: MilestoneDependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneDependencyCountAggregateInputType | true
    _min?: MilestoneDependencyMinAggregateInputType
    _max?: MilestoneDependencyMaxAggregateInputType
  }

  export type MilestoneDependencyGroupByOutputType = {
    id: string
    milestoneId: string
    dependsOnId: string
    createdAt: Date
    _count: MilestoneDependencyCountAggregateOutputType | null
    _min: MilestoneDependencyMinAggregateOutputType | null
    _max: MilestoneDependencyMaxAggregateOutputType | null
  }

  type GetMilestoneDependencyGroupByPayload<T extends MilestoneDependencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneDependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneDependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneDependencyGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneDependencyGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneDependencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    milestoneId?: boolean
    dependsOnId?: boolean
    createdAt?: boolean
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    dependsOn?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestoneDependency"]>

  export type MilestoneDependencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    milestoneId?: boolean
    dependsOnId?: boolean
    createdAt?: boolean
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    dependsOn?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestoneDependency"]>

  export type MilestoneDependencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    milestoneId?: boolean
    dependsOnId?: boolean
    createdAt?: boolean
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    dependsOn?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestoneDependency"]>

  export type MilestoneDependencySelectScalar = {
    id?: boolean
    milestoneId?: boolean
    dependsOnId?: boolean
    createdAt?: boolean
  }

  export type MilestoneDependencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "milestoneId" | "dependsOnId" | "createdAt", ExtArgs["result"]["milestoneDependency"]>
  export type MilestoneDependencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    dependsOn?: boolean | MilestoneDefaultArgs<ExtArgs>
  }
  export type MilestoneDependencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    dependsOn?: boolean | MilestoneDefaultArgs<ExtArgs>
  }
  export type MilestoneDependencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    dependsOn?: boolean | MilestoneDefaultArgs<ExtArgs>
  }

  export type $MilestoneDependencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MilestoneDependency"
    objects: {
      milestone: Prisma.$MilestonePayload<ExtArgs>
      dependsOn: Prisma.$MilestonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      milestoneId: string
      dependsOnId: string
      createdAt: Date
    }, ExtArgs["result"]["milestoneDependency"]>
    composites: {}
  }

  type MilestoneDependencyGetPayload<S extends boolean | null | undefined | MilestoneDependencyDefaultArgs> = $Result.GetResult<Prisma.$MilestoneDependencyPayload, S>

  type MilestoneDependencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneDependencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneDependencyCountAggregateInputType | true
    }

  export interface MilestoneDependencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MilestoneDependency'], meta: { name: 'MilestoneDependency' } }
    /**
     * Find zero or one MilestoneDependency that matches the filter.
     * @param {MilestoneDependencyFindUniqueArgs} args - Arguments to find a MilestoneDependency
     * @example
     * // Get one MilestoneDependency
     * const milestoneDependency = await prisma.milestoneDependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneDependencyFindUniqueArgs>(args: SelectSubset<T, MilestoneDependencyFindUniqueArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MilestoneDependency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneDependencyFindUniqueOrThrowArgs} args - Arguments to find a MilestoneDependency
     * @example
     * // Get one MilestoneDependency
     * const milestoneDependency = await prisma.milestoneDependency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneDependencyFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneDependencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MilestoneDependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneDependencyFindFirstArgs} args - Arguments to find a MilestoneDependency
     * @example
     * // Get one MilestoneDependency
     * const milestoneDependency = await prisma.milestoneDependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneDependencyFindFirstArgs>(args?: SelectSubset<T, MilestoneDependencyFindFirstArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MilestoneDependency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneDependencyFindFirstOrThrowArgs} args - Arguments to find a MilestoneDependency
     * @example
     * // Get one MilestoneDependency
     * const milestoneDependency = await prisma.milestoneDependency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneDependencyFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneDependencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MilestoneDependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneDependencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MilestoneDependencies
     * const milestoneDependencies = await prisma.milestoneDependency.findMany()
     * 
     * // Get first 10 MilestoneDependencies
     * const milestoneDependencies = await prisma.milestoneDependency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneDependencyWithIdOnly = await prisma.milestoneDependency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneDependencyFindManyArgs>(args?: SelectSubset<T, MilestoneDependencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MilestoneDependency.
     * @param {MilestoneDependencyCreateArgs} args - Arguments to create a MilestoneDependency.
     * @example
     * // Create one MilestoneDependency
     * const MilestoneDependency = await prisma.milestoneDependency.create({
     *   data: {
     *     // ... data to create a MilestoneDependency
     *   }
     * })
     * 
     */
    create<T extends MilestoneDependencyCreateArgs>(args: SelectSubset<T, MilestoneDependencyCreateArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MilestoneDependencies.
     * @param {MilestoneDependencyCreateManyArgs} args - Arguments to create many MilestoneDependencies.
     * @example
     * // Create many MilestoneDependencies
     * const milestoneDependency = await prisma.milestoneDependency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneDependencyCreateManyArgs>(args?: SelectSubset<T, MilestoneDependencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MilestoneDependencies and returns the data saved in the database.
     * @param {MilestoneDependencyCreateManyAndReturnArgs} args - Arguments to create many MilestoneDependencies.
     * @example
     * // Create many MilestoneDependencies
     * const milestoneDependency = await prisma.milestoneDependency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MilestoneDependencies and only return the `id`
     * const milestoneDependencyWithIdOnly = await prisma.milestoneDependency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneDependencyCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneDependencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MilestoneDependency.
     * @param {MilestoneDependencyDeleteArgs} args - Arguments to delete one MilestoneDependency.
     * @example
     * // Delete one MilestoneDependency
     * const MilestoneDependency = await prisma.milestoneDependency.delete({
     *   where: {
     *     // ... filter to delete one MilestoneDependency
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDependencyDeleteArgs>(args: SelectSubset<T, MilestoneDependencyDeleteArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MilestoneDependency.
     * @param {MilestoneDependencyUpdateArgs} args - Arguments to update one MilestoneDependency.
     * @example
     * // Update one MilestoneDependency
     * const milestoneDependency = await prisma.milestoneDependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneDependencyUpdateArgs>(args: SelectSubset<T, MilestoneDependencyUpdateArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MilestoneDependencies.
     * @param {MilestoneDependencyDeleteManyArgs} args - Arguments to filter MilestoneDependencies to delete.
     * @example
     * // Delete a few MilestoneDependencies
     * const { count } = await prisma.milestoneDependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDependencyDeleteManyArgs>(args?: SelectSubset<T, MilestoneDependencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MilestoneDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneDependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MilestoneDependencies
     * const milestoneDependency = await prisma.milestoneDependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneDependencyUpdateManyArgs>(args: SelectSubset<T, MilestoneDependencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MilestoneDependencies and returns the data updated in the database.
     * @param {MilestoneDependencyUpdateManyAndReturnArgs} args - Arguments to update many MilestoneDependencies.
     * @example
     * // Update many MilestoneDependencies
     * const milestoneDependency = await prisma.milestoneDependency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MilestoneDependencies and only return the `id`
     * const milestoneDependencyWithIdOnly = await prisma.milestoneDependency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneDependencyUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneDependencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MilestoneDependency.
     * @param {MilestoneDependencyUpsertArgs} args - Arguments to update or create a MilestoneDependency.
     * @example
     * // Update or create a MilestoneDependency
     * const milestoneDependency = await prisma.milestoneDependency.upsert({
     *   create: {
     *     // ... data to create a MilestoneDependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MilestoneDependency we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneDependencyUpsertArgs>(args: SelectSubset<T, MilestoneDependencyUpsertArgs<ExtArgs>>): Prisma__MilestoneDependencyClient<$Result.GetResult<Prisma.$MilestoneDependencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MilestoneDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneDependencyCountArgs} args - Arguments to filter MilestoneDependencies to count.
     * @example
     * // Count the number of MilestoneDependencies
     * const count = await prisma.milestoneDependency.count({
     *   where: {
     *     // ... the filter for the MilestoneDependencies we want to count
     *   }
     * })
    **/
    count<T extends MilestoneDependencyCountArgs>(
      args?: Subset<T, MilestoneDependencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneDependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MilestoneDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestoneDependencyAggregateArgs>(args: Subset<T, MilestoneDependencyAggregateArgs>): Prisma.PrismaPromise<GetMilestoneDependencyAggregateType<T>>

    /**
     * Group by MilestoneDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneDependencyGroupByArgs} args - Group by arguments.
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
      T extends MilestoneDependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneDependencyGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneDependencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MilestoneDependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneDependencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MilestoneDependency model
   */
  readonly fields: MilestoneDependencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MilestoneDependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneDependencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    milestone<T extends MilestoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MilestoneDefaultArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dependsOn<T extends MilestoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MilestoneDefaultArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MilestoneDependency model
   */
  interface MilestoneDependencyFieldRefs {
    readonly id: FieldRef<"MilestoneDependency", 'String'>
    readonly milestoneId: FieldRef<"MilestoneDependency", 'String'>
    readonly dependsOnId: FieldRef<"MilestoneDependency", 'String'>
    readonly createdAt: FieldRef<"MilestoneDependency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MilestoneDependency findUnique
   */
  export type MilestoneDependencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneDependency to fetch.
     */
    where: MilestoneDependencyWhereUniqueInput
  }

  /**
   * MilestoneDependency findUniqueOrThrow
   */
  export type MilestoneDependencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneDependency to fetch.
     */
    where: MilestoneDependencyWhereUniqueInput
  }

  /**
   * MilestoneDependency findFirst
   */
  export type MilestoneDependencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneDependency to fetch.
     */
    where?: MilestoneDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneDependencies to fetch.
     */
    orderBy?: MilestoneDependencyOrderByWithRelationInput | MilestoneDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MilestoneDependencies.
     */
    cursor?: MilestoneDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MilestoneDependencies.
     */
    distinct?: MilestoneDependencyScalarFieldEnum | MilestoneDependencyScalarFieldEnum[]
  }

  /**
   * MilestoneDependency findFirstOrThrow
   */
  export type MilestoneDependencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneDependency to fetch.
     */
    where?: MilestoneDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneDependencies to fetch.
     */
    orderBy?: MilestoneDependencyOrderByWithRelationInput | MilestoneDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MilestoneDependencies.
     */
    cursor?: MilestoneDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MilestoneDependencies.
     */
    distinct?: MilestoneDependencyScalarFieldEnum | MilestoneDependencyScalarFieldEnum[]
  }

  /**
   * MilestoneDependency findMany
   */
  export type MilestoneDependencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneDependencies to fetch.
     */
    where?: MilestoneDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneDependencies to fetch.
     */
    orderBy?: MilestoneDependencyOrderByWithRelationInput | MilestoneDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MilestoneDependencies.
     */
    cursor?: MilestoneDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneDependencies.
     */
    skip?: number
    distinct?: MilestoneDependencyScalarFieldEnum | MilestoneDependencyScalarFieldEnum[]
  }

  /**
   * MilestoneDependency create
   */
  export type MilestoneDependencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * The data needed to create a MilestoneDependency.
     */
    data: XOR<MilestoneDependencyCreateInput, MilestoneDependencyUncheckedCreateInput>
  }

  /**
   * MilestoneDependency createMany
   */
  export type MilestoneDependencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MilestoneDependencies.
     */
    data: MilestoneDependencyCreateManyInput | MilestoneDependencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MilestoneDependency createManyAndReturn
   */
  export type MilestoneDependencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * The data used to create many MilestoneDependencies.
     */
    data: MilestoneDependencyCreateManyInput | MilestoneDependencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MilestoneDependency update
   */
  export type MilestoneDependencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * The data needed to update a MilestoneDependency.
     */
    data: XOR<MilestoneDependencyUpdateInput, MilestoneDependencyUncheckedUpdateInput>
    /**
     * Choose, which MilestoneDependency to update.
     */
    where: MilestoneDependencyWhereUniqueInput
  }

  /**
   * MilestoneDependency updateMany
   */
  export type MilestoneDependencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MilestoneDependencies.
     */
    data: XOR<MilestoneDependencyUpdateManyMutationInput, MilestoneDependencyUncheckedUpdateManyInput>
    /**
     * Filter which MilestoneDependencies to update
     */
    where?: MilestoneDependencyWhereInput
    /**
     * Limit how many MilestoneDependencies to update.
     */
    limit?: number
  }

  /**
   * MilestoneDependency updateManyAndReturn
   */
  export type MilestoneDependencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * The data used to update MilestoneDependencies.
     */
    data: XOR<MilestoneDependencyUpdateManyMutationInput, MilestoneDependencyUncheckedUpdateManyInput>
    /**
     * Filter which MilestoneDependencies to update
     */
    where?: MilestoneDependencyWhereInput
    /**
     * Limit how many MilestoneDependencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MilestoneDependency upsert
   */
  export type MilestoneDependencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * The filter to search for the MilestoneDependency to update in case it exists.
     */
    where: MilestoneDependencyWhereUniqueInput
    /**
     * In case the MilestoneDependency found by the `where` argument doesn't exist, create a new MilestoneDependency with this data.
     */
    create: XOR<MilestoneDependencyCreateInput, MilestoneDependencyUncheckedCreateInput>
    /**
     * In case the MilestoneDependency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneDependencyUpdateInput, MilestoneDependencyUncheckedUpdateInput>
  }

  /**
   * MilestoneDependency delete
   */
  export type MilestoneDependencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
    /**
     * Filter which MilestoneDependency to delete.
     */
    where: MilestoneDependencyWhereUniqueInput
  }

  /**
   * MilestoneDependency deleteMany
   */
  export type MilestoneDependencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MilestoneDependencies to delete
     */
    where?: MilestoneDependencyWhereInput
    /**
     * Limit how many MilestoneDependencies to delete.
     */
    limit?: number
  }

  /**
   * MilestoneDependency without action
   */
  export type MilestoneDependencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneDependency
     */
    select?: MilestoneDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneDependency
     */
    omit?: MilestoneDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneDependencyInclude<ExtArgs> | null
  }


  /**
   * Model Suggestion
   */

  export type AggregateSuggestion = {
    _count: SuggestionCountAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  export type SuggestionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    provider: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SuggestionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    provider: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SuggestionCountAggregateOutputType = {
    id: number
    userId: number
    goalId: number
    provider: number
    response: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type SuggestionMinAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    provider?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SuggestionMaxAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    provider?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SuggestionCountAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    provider?: true
    response?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type SuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestion to aggregate.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suggestions
    **/
    _count?: true | SuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestionMaxAggregateInputType
  }

  export type GetSuggestionAggregateType<T extends SuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggestion[P]>
      : GetScalarType<T[P], AggregateSuggestion[P]>
  }




  export type SuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithAggregationInput | SuggestionOrderByWithAggregationInput[]
    by: SuggestionScalarFieldEnum[] | SuggestionScalarFieldEnum
    having?: SuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestionCountAggregateInputType | true
    _min?: SuggestionMinAggregateInputType
    _max?: SuggestionMaxAggregateInputType
  }

  export type SuggestionGroupByOutputType = {
    id: string
    userId: string
    goalId: string
    provider: string
    response: JsonValue
    createdAt: Date
    expiresAt: Date | null
    _count: SuggestionCountAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  type GetSuggestionGroupByPayload<T extends SuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
        }
      >
    >


  export type SuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    provider?: boolean
    response?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    provider?: boolean
    response?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    provider?: boolean
    response?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectScalar = {
    id?: boolean
    userId?: boolean
    goalId?: boolean
    provider?: boolean
    response?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type SuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "goalId" | "provider" | "response" | "createdAt" | "expiresAt", ExtArgs["result"]["suggestion"]>
  export type SuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }
  export type SuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }
  export type SuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }

  export type $SuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suggestion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goalId: string
      provider: string
      response: Prisma.JsonValue
      createdAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["suggestion"]>
    composites: {}
  }

  type SuggestionGetPayload<S extends boolean | null | undefined | SuggestionDefaultArgs> = $Result.GetResult<Prisma.$SuggestionPayload, S>

  type SuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuggestionCountAggregateInputType | true
    }

  export interface SuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suggestion'], meta: { name: 'Suggestion' } }
    /**
     * Find zero or one Suggestion that matches the filter.
     * @param {SuggestionFindUniqueArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuggestionFindUniqueArgs>(args: SelectSubset<T, SuggestionFindUniqueArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuggestionFindUniqueOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuggestionFindFirstArgs>(args?: SelectSubset<T, SuggestionFindFirstArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suggestions
     * const suggestions = await prisma.suggestion.findMany()
     * 
     * // Get first 10 Suggestions
     * const suggestions = await prisma.suggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuggestionFindManyArgs>(args?: SelectSubset<T, SuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suggestion.
     * @param {SuggestionCreateArgs} args - Arguments to create a Suggestion.
     * @example
     * // Create one Suggestion
     * const Suggestion = await prisma.suggestion.create({
     *   data: {
     *     // ... data to create a Suggestion
     *   }
     * })
     * 
     */
    create<T extends SuggestionCreateArgs>(args: SelectSubset<T, SuggestionCreateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suggestions.
     * @param {SuggestionCreateManyArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuggestionCreateManyArgs>(args?: SelectSubset<T, SuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suggestions and returns the data saved in the database.
     * @param {SuggestionCreateManyAndReturnArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, SuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suggestion.
     * @param {SuggestionDeleteArgs} args - Arguments to delete one Suggestion.
     * @example
     * // Delete one Suggestion
     * const Suggestion = await prisma.suggestion.delete({
     *   where: {
     *     // ... filter to delete one Suggestion
     *   }
     * })
     * 
     */
    delete<T extends SuggestionDeleteArgs>(args: SelectSubset<T, SuggestionDeleteArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suggestion.
     * @param {SuggestionUpdateArgs} args - Arguments to update one Suggestion.
     * @example
     * // Update one Suggestion
     * const suggestion = await prisma.suggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuggestionUpdateArgs>(args: SelectSubset<T, SuggestionUpdateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suggestions.
     * @param {SuggestionDeleteManyArgs} args - Arguments to filter Suggestions to delete.
     * @example
     * // Delete a few Suggestions
     * const { count } = await prisma.suggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuggestionDeleteManyArgs>(args?: SelectSubset<T, SuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuggestionUpdateManyArgs>(args: SelectSubset<T, SuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions and returns the data updated in the database.
     * @param {SuggestionUpdateManyAndReturnArgs} args - Arguments to update many Suggestions.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, SuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suggestion.
     * @param {SuggestionUpsertArgs} args - Arguments to update or create a Suggestion.
     * @example
     * // Update or create a Suggestion
     * const suggestion = await prisma.suggestion.upsert({
     *   create: {
     *     // ... data to create a Suggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suggestion we want to update
     *   }
     * })
     */
    upsert<T extends SuggestionUpsertArgs>(args: SelectSubset<T, SuggestionUpsertArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionCountArgs} args - Arguments to filter Suggestions to count.
     * @example
     * // Count the number of Suggestions
     * const count = await prisma.suggestion.count({
     *   where: {
     *     // ... the filter for the Suggestions we want to count
     *   }
     * })
    **/
    count<T extends SuggestionCountArgs>(
      args?: Subset<T, SuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuggestionAggregateArgs>(args: Subset<T, SuggestionAggregateArgs>): Prisma.PrismaPromise<GetSuggestionAggregateType<T>>

    /**
     * Group by Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionGroupByArgs} args - Group by arguments.
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
      T extends SuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuggestionGroupByArgs['orderBy'] }
        : { orderBy?: SuggestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suggestion model
   */
  readonly fields: SuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Suggestion model
   */
  interface SuggestionFieldRefs {
    readonly id: FieldRef<"Suggestion", 'String'>
    readonly userId: FieldRef<"Suggestion", 'String'>
    readonly goalId: FieldRef<"Suggestion", 'String'>
    readonly provider: FieldRef<"Suggestion", 'String'>
    readonly response: FieldRef<"Suggestion", 'Json'>
    readonly createdAt: FieldRef<"Suggestion", 'DateTime'>
    readonly expiresAt: FieldRef<"Suggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suggestion findUnique
   */
  export type SuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findUniqueOrThrow
   */
  export type SuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findFirst
   */
  export type SuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findFirstOrThrow
   */
  export type SuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findMany
   */
  export type SuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestions to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion create
   */
  export type SuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Suggestion.
     */
    data: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
  }

  /**
   * Suggestion createMany
   */
  export type SuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suggestion createManyAndReturn
   */
  export type SuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion update
   */
  export type SuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Suggestion.
     */
    data: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
    /**
     * Choose, which Suggestion to update.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion updateMany
   */
  export type SuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to update.
     */
    limit?: number
  }

  /**
   * Suggestion updateManyAndReturn
   */
  export type SuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion upsert
   */
  export type SuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Suggestion to update in case it exists.
     */
    where: SuggestionWhereUniqueInput
    /**
     * In case the Suggestion found by the `where` argument doesn't exist, create a new Suggestion with this data.
     */
    create: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
    /**
     * In case the Suggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
  }

  /**
   * Suggestion delete
   */
  export type SuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter which Suggestion to delete.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion deleteMany
   */
  export type SuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestions to delete
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to delete.
     */
    limit?: number
  }

  /**
   * Suggestion without action
   */
  export type SuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
  }


  /**
   * Model TutorSession
   */

  export type AggregateTutorSession = {
    _count: TutorSessionCountAggregateOutputType | null
    _min: TutorSessionMinAggregateOutputType | null
    _max: TutorSessionMaxAggregateOutputType | null
  }

  export type TutorSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    milestoneId: string | null
    title: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TutorSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    milestoneId: string | null
    title: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TutorSessionCountAggregateOutputType = {
    id: number
    userId: number
    goalId: number
    milestoneId: number
    title: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TutorSessionMinAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TutorSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TutorSessionCountAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TutorSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSession to aggregate.
     */
    where?: TutorSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessions to fetch.
     */
    orderBy?: TutorSessionOrderByWithRelationInput | TutorSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorSessions
    **/
    _count?: true | TutorSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorSessionMaxAggregateInputType
  }

  export type GetTutorSessionAggregateType<T extends TutorSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorSession[P]>
      : GetScalarType<T[P], AggregateTutorSession[P]>
  }




  export type TutorSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSessionWhereInput
    orderBy?: TutorSessionOrderByWithAggregationInput | TutorSessionOrderByWithAggregationInput[]
    by: TutorSessionScalarFieldEnum[] | TutorSessionScalarFieldEnum
    having?: TutorSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorSessionCountAggregateInputType | true
    _min?: TutorSessionMinAggregateInputType
    _max?: TutorSessionMaxAggregateInputType
  }

  export type TutorSessionGroupByOutputType = {
    id: string
    userId: string
    goalId: string | null
    milestoneId: string | null
    title: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TutorSessionCountAggregateOutputType | null
    _min: TutorSessionMinAggregateOutputType | null
    _max: TutorSessionMaxAggregateOutputType | null
  }

  type GetTutorSessionGroupByPayload<T extends TutorSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TutorSessionGroupByOutputType[P]>
        }
      >
    >


  export type TutorSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | TutorSession$goalArgs<ExtArgs>
    milestone?: boolean | TutorSession$milestoneArgs<ExtArgs>
    messages?: boolean | TutorSession$messagesArgs<ExtArgs>
    summary?: boolean | TutorSession$summaryArgs<ExtArgs>
    _count?: boolean | TutorSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSession"]>

  export type TutorSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | TutorSession$goalArgs<ExtArgs>
    milestone?: boolean | TutorSession$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSession"]>

  export type TutorSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | TutorSession$goalArgs<ExtArgs>
    milestone?: boolean | TutorSession$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSession"]>

  export type TutorSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TutorSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "goalId" | "milestoneId" | "title" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tutorSession"]>
  export type TutorSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | TutorSession$goalArgs<ExtArgs>
    milestone?: boolean | TutorSession$milestoneArgs<ExtArgs>
    messages?: boolean | TutorSession$messagesArgs<ExtArgs>
    summary?: boolean | TutorSession$summaryArgs<ExtArgs>
    _count?: boolean | TutorSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | TutorSession$goalArgs<ExtArgs>
    milestone?: boolean | TutorSession$milestoneArgs<ExtArgs>
  }
  export type TutorSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | TutorSession$goalArgs<ExtArgs>
    milestone?: boolean | TutorSession$milestoneArgs<ExtArgs>
  }

  export type $TutorSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs> | null
      milestone: Prisma.$MilestonePayload<ExtArgs> | null
      messages: Prisma.$TutorMessagePayload<ExtArgs>[]
      summary: Prisma.$SessionSummaryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goalId: string | null
      milestoneId: string | null
      title: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tutorSession"]>
    composites: {}
  }

  type TutorSessionGetPayload<S extends boolean | null | undefined | TutorSessionDefaultArgs> = $Result.GetResult<Prisma.$TutorSessionPayload, S>

  type TutorSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorSessionCountAggregateInputType | true
    }

  export interface TutorSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorSession'], meta: { name: 'TutorSession' } }
    /**
     * Find zero or one TutorSession that matches the filter.
     * @param {TutorSessionFindUniqueArgs} args - Arguments to find a TutorSession
     * @example
     * // Get one TutorSession
     * const tutorSession = await prisma.tutorSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorSessionFindUniqueArgs>(args: SelectSubset<T, TutorSessionFindUniqueArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorSessionFindUniqueOrThrowArgs} args - Arguments to find a TutorSession
     * @example
     * // Get one TutorSession
     * const tutorSession = await prisma.tutorSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionFindFirstArgs} args - Arguments to find a TutorSession
     * @example
     * // Get one TutorSession
     * const tutorSession = await prisma.tutorSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorSessionFindFirstArgs>(args?: SelectSubset<T, TutorSessionFindFirstArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionFindFirstOrThrowArgs} args - Arguments to find a TutorSession
     * @example
     * // Get one TutorSession
     * const tutorSession = await prisma.tutorSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorSessions
     * const tutorSessions = await prisma.tutorSession.findMany()
     * 
     * // Get first 10 TutorSessions
     * const tutorSessions = await prisma.tutorSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorSessionWithIdOnly = await prisma.tutorSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorSessionFindManyArgs>(args?: SelectSubset<T, TutorSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorSession.
     * @param {TutorSessionCreateArgs} args - Arguments to create a TutorSession.
     * @example
     * // Create one TutorSession
     * const TutorSession = await prisma.tutorSession.create({
     *   data: {
     *     // ... data to create a TutorSession
     *   }
     * })
     * 
     */
    create<T extends TutorSessionCreateArgs>(args: SelectSubset<T, TutorSessionCreateArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorSessions.
     * @param {TutorSessionCreateManyArgs} args - Arguments to create many TutorSessions.
     * @example
     * // Create many TutorSessions
     * const tutorSession = await prisma.tutorSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorSessionCreateManyArgs>(args?: SelectSubset<T, TutorSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorSessions and returns the data saved in the database.
     * @param {TutorSessionCreateManyAndReturnArgs} args - Arguments to create many TutorSessions.
     * @example
     * // Create many TutorSessions
     * const tutorSession = await prisma.tutorSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorSessions and only return the `id`
     * const tutorSessionWithIdOnly = await prisma.tutorSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorSession.
     * @param {TutorSessionDeleteArgs} args - Arguments to delete one TutorSession.
     * @example
     * // Delete one TutorSession
     * const TutorSession = await prisma.tutorSession.delete({
     *   where: {
     *     // ... filter to delete one TutorSession
     *   }
     * })
     * 
     */
    delete<T extends TutorSessionDeleteArgs>(args: SelectSubset<T, TutorSessionDeleteArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorSession.
     * @param {TutorSessionUpdateArgs} args - Arguments to update one TutorSession.
     * @example
     * // Update one TutorSession
     * const tutorSession = await prisma.tutorSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorSessionUpdateArgs>(args: SelectSubset<T, TutorSessionUpdateArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorSessions.
     * @param {TutorSessionDeleteManyArgs} args - Arguments to filter TutorSessions to delete.
     * @example
     * // Delete a few TutorSessions
     * const { count } = await prisma.tutorSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorSessionDeleteManyArgs>(args?: SelectSubset<T, TutorSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorSessions
     * const tutorSession = await prisma.tutorSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorSessionUpdateManyArgs>(args: SelectSubset<T, TutorSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSessions and returns the data updated in the database.
     * @param {TutorSessionUpdateManyAndReturnArgs} args - Arguments to update many TutorSessions.
     * @example
     * // Update many TutorSessions
     * const tutorSession = await prisma.tutorSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorSessions and only return the `id`
     * const tutorSessionWithIdOnly = await prisma.tutorSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorSession.
     * @param {TutorSessionUpsertArgs} args - Arguments to update or create a TutorSession.
     * @example
     * // Update or create a TutorSession
     * const tutorSession = await prisma.tutorSession.upsert({
     *   create: {
     *     // ... data to create a TutorSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorSession we want to update
     *   }
     * })
     */
    upsert<T extends TutorSessionUpsertArgs>(args: SelectSubset<T, TutorSessionUpsertArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionCountArgs} args - Arguments to filter TutorSessions to count.
     * @example
     * // Count the number of TutorSessions
     * const count = await prisma.tutorSession.count({
     *   where: {
     *     // ... the filter for the TutorSessions we want to count
     *   }
     * })
    **/
    count<T extends TutorSessionCountArgs>(
      args?: Subset<T, TutorSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorSessionAggregateArgs>(args: Subset<T, TutorSessionAggregateArgs>): Prisma.PrismaPromise<GetTutorSessionAggregateType<T>>

    /**
     * Group by TutorSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionGroupByArgs} args - Group by arguments.
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
      T extends TutorSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorSessionGroupByArgs['orderBy'] }
        : { orderBy?: TutorSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorSession model
   */
  readonly fields: TutorSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goal<T extends TutorSession$goalArgs<ExtArgs> = {}>(args?: Subset<T, TutorSession$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestone<T extends TutorSession$milestoneArgs<ExtArgs> = {}>(args?: Subset<T, TutorSession$milestoneArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends TutorSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, TutorSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    summary<T extends TutorSession$summaryArgs<ExtArgs> = {}>(args?: Subset<T, TutorSession$summaryArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TutorSession model
   */
  interface TutorSessionFieldRefs {
    readonly id: FieldRef<"TutorSession", 'String'>
    readonly userId: FieldRef<"TutorSession", 'String'>
    readonly goalId: FieldRef<"TutorSession", 'String'>
    readonly milestoneId: FieldRef<"TutorSession", 'String'>
    readonly title: FieldRef<"TutorSession", 'String'>
    readonly status: FieldRef<"TutorSession", 'String'>
    readonly createdAt: FieldRef<"TutorSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TutorSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TutorSession findUnique
   */
  export type TutorSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * Filter, which TutorSession to fetch.
     */
    where: TutorSessionWhereUniqueInput
  }

  /**
   * TutorSession findUniqueOrThrow
   */
  export type TutorSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * Filter, which TutorSession to fetch.
     */
    where: TutorSessionWhereUniqueInput
  }

  /**
   * TutorSession findFirst
   */
  export type TutorSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * Filter, which TutorSession to fetch.
     */
    where?: TutorSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessions to fetch.
     */
    orderBy?: TutorSessionOrderByWithRelationInput | TutorSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSessions.
     */
    cursor?: TutorSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSessions.
     */
    distinct?: TutorSessionScalarFieldEnum | TutorSessionScalarFieldEnum[]
  }

  /**
   * TutorSession findFirstOrThrow
   */
  export type TutorSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * Filter, which TutorSession to fetch.
     */
    where?: TutorSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessions to fetch.
     */
    orderBy?: TutorSessionOrderByWithRelationInput | TutorSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSessions.
     */
    cursor?: TutorSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSessions.
     */
    distinct?: TutorSessionScalarFieldEnum | TutorSessionScalarFieldEnum[]
  }

  /**
   * TutorSession findMany
   */
  export type TutorSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * Filter, which TutorSessions to fetch.
     */
    where?: TutorSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessions to fetch.
     */
    orderBy?: TutorSessionOrderByWithRelationInput | TutorSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorSessions.
     */
    cursor?: TutorSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessions.
     */
    skip?: number
    distinct?: TutorSessionScalarFieldEnum | TutorSessionScalarFieldEnum[]
  }

  /**
   * TutorSession create
   */
  export type TutorSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorSession.
     */
    data: XOR<TutorSessionCreateInput, TutorSessionUncheckedCreateInput>
  }

  /**
   * TutorSession createMany
   */
  export type TutorSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorSessions.
     */
    data: TutorSessionCreateManyInput | TutorSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorSession createManyAndReturn
   */
  export type TutorSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TutorSessions.
     */
    data: TutorSessionCreateManyInput | TutorSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorSession update
   */
  export type TutorSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorSession.
     */
    data: XOR<TutorSessionUpdateInput, TutorSessionUncheckedUpdateInput>
    /**
     * Choose, which TutorSession to update.
     */
    where: TutorSessionWhereUniqueInput
  }

  /**
   * TutorSession updateMany
   */
  export type TutorSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorSessions.
     */
    data: XOR<TutorSessionUpdateManyMutationInput, TutorSessionUncheckedUpdateManyInput>
    /**
     * Filter which TutorSessions to update
     */
    where?: TutorSessionWhereInput
    /**
     * Limit how many TutorSessions to update.
     */
    limit?: number
  }

  /**
   * TutorSession updateManyAndReturn
   */
  export type TutorSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * The data used to update TutorSessions.
     */
    data: XOR<TutorSessionUpdateManyMutationInput, TutorSessionUncheckedUpdateManyInput>
    /**
     * Filter which TutorSessions to update
     */
    where?: TutorSessionWhereInput
    /**
     * Limit how many TutorSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorSession upsert
   */
  export type TutorSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorSession to update in case it exists.
     */
    where: TutorSessionWhereUniqueInput
    /**
     * In case the TutorSession found by the `where` argument doesn't exist, create a new TutorSession with this data.
     */
    create: XOR<TutorSessionCreateInput, TutorSessionUncheckedCreateInput>
    /**
     * In case the TutorSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorSessionUpdateInput, TutorSessionUncheckedUpdateInput>
  }

  /**
   * TutorSession delete
   */
  export type TutorSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
    /**
     * Filter which TutorSession to delete.
     */
    where: TutorSessionWhereUniqueInput
  }

  /**
   * TutorSession deleteMany
   */
  export type TutorSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSessions to delete
     */
    where?: TutorSessionWhereInput
    /**
     * Limit how many TutorSessions to delete.
     */
    limit?: number
  }

  /**
   * TutorSession.goal
   */
  export type TutorSession$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * TutorSession.milestone
   */
  export type TutorSession$milestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
  }

  /**
   * TutorSession.messages
   */
  export type TutorSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    where?: TutorMessageWhereInput
    orderBy?: TutorMessageOrderByWithRelationInput | TutorMessageOrderByWithRelationInput[]
    cursor?: TutorMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorMessageScalarFieldEnum | TutorMessageScalarFieldEnum[]
  }

  /**
   * TutorSession.summary
   */
  export type TutorSession$summaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    where?: SessionSummaryWhereInput
  }

  /**
   * TutorSession without action
   */
  export type TutorSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSession
     */
    select?: TutorSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSession
     */
    omit?: TutorSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionInclude<ExtArgs> | null
  }


  /**
   * Model TutorMessage
   */

  export type AggregateTutorMessage = {
    _count: TutorMessageCountAggregateOutputType | null
    _min: TutorMessageMinAggregateOutputType | null
    _max: TutorMessageMaxAggregateOutputType | null
  }

  export type TutorMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    sender: string | null
    content: string | null
    createdAt: Date | null
  }

  export type TutorMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    sender: string | null
    content: string | null
    createdAt: Date | null
  }

  export type TutorMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    sender: number
    content: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type TutorMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    content?: true
    createdAt?: true
  }

  export type TutorMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    content?: true
    createdAt?: true
  }

  export type TutorMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    content?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type TutorMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorMessage to aggregate.
     */
    where?: TutorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorMessages to fetch.
     */
    orderBy?: TutorMessageOrderByWithRelationInput | TutorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorMessages
    **/
    _count?: true | TutorMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorMessageMaxAggregateInputType
  }

  export type GetTutorMessageAggregateType<T extends TutorMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorMessage[P]>
      : GetScalarType<T[P], AggregateTutorMessage[P]>
  }




  export type TutorMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorMessageWhereInput
    orderBy?: TutorMessageOrderByWithAggregationInput | TutorMessageOrderByWithAggregationInput[]
    by: TutorMessageScalarFieldEnum[] | TutorMessageScalarFieldEnum
    having?: TutorMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorMessageCountAggregateInputType | true
    _min?: TutorMessageMinAggregateInputType
    _max?: TutorMessageMaxAggregateInputType
  }

  export type TutorMessageGroupByOutputType = {
    id: string
    sessionId: string
    sender: string
    content: string
    metadata: JsonValue | null
    createdAt: Date
    _count: TutorMessageCountAggregateOutputType | null
    _min: TutorMessageMinAggregateOutputType | null
    _max: TutorMessageMaxAggregateOutputType | null
  }

  type GetTutorMessageGroupByPayload<T extends TutorMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TutorMessageGroupByOutputType[P]>
        }
      >
    >


  export type TutorMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorMessage"]>

  export type TutorMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorMessage"]>

  export type TutorMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorMessage"]>

  export type TutorMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type TutorMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "sender" | "content" | "metadata" | "createdAt", ExtArgs["result"]["tutorMessage"]>
  export type TutorMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
  }
  export type TutorMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
  }
  export type TutorMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
  }

  export type $TutorMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorMessage"
    objects: {
      session: Prisma.$TutorSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      sender: string
      content: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["tutorMessage"]>
    composites: {}
  }

  type TutorMessageGetPayload<S extends boolean | null | undefined | TutorMessageDefaultArgs> = $Result.GetResult<Prisma.$TutorMessagePayload, S>

  type TutorMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorMessageCountAggregateInputType | true
    }

  export interface TutorMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorMessage'], meta: { name: 'TutorMessage' } }
    /**
     * Find zero or one TutorMessage that matches the filter.
     * @param {TutorMessageFindUniqueArgs} args - Arguments to find a TutorMessage
     * @example
     * // Get one TutorMessage
     * const tutorMessage = await prisma.tutorMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorMessageFindUniqueArgs>(args: SelectSubset<T, TutorMessageFindUniqueArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorMessageFindUniqueOrThrowArgs} args - Arguments to find a TutorMessage
     * @example
     * // Get one TutorMessage
     * const tutorMessage = await prisma.tutorMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorMessageFindFirstArgs} args - Arguments to find a TutorMessage
     * @example
     * // Get one TutorMessage
     * const tutorMessage = await prisma.tutorMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorMessageFindFirstArgs>(args?: SelectSubset<T, TutorMessageFindFirstArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorMessageFindFirstOrThrowArgs} args - Arguments to find a TutorMessage
     * @example
     * // Get one TutorMessage
     * const tutorMessage = await prisma.tutorMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorMessages
     * const tutorMessages = await prisma.tutorMessage.findMany()
     * 
     * // Get first 10 TutorMessages
     * const tutorMessages = await prisma.tutorMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorMessageWithIdOnly = await prisma.tutorMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorMessageFindManyArgs>(args?: SelectSubset<T, TutorMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorMessage.
     * @param {TutorMessageCreateArgs} args - Arguments to create a TutorMessage.
     * @example
     * // Create one TutorMessage
     * const TutorMessage = await prisma.tutorMessage.create({
     *   data: {
     *     // ... data to create a TutorMessage
     *   }
     * })
     * 
     */
    create<T extends TutorMessageCreateArgs>(args: SelectSubset<T, TutorMessageCreateArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorMessages.
     * @param {TutorMessageCreateManyArgs} args - Arguments to create many TutorMessages.
     * @example
     * // Create many TutorMessages
     * const tutorMessage = await prisma.tutorMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorMessageCreateManyArgs>(args?: SelectSubset<T, TutorMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorMessages and returns the data saved in the database.
     * @param {TutorMessageCreateManyAndReturnArgs} args - Arguments to create many TutorMessages.
     * @example
     * // Create many TutorMessages
     * const tutorMessage = await prisma.tutorMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorMessages and only return the `id`
     * const tutorMessageWithIdOnly = await prisma.tutorMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorMessage.
     * @param {TutorMessageDeleteArgs} args - Arguments to delete one TutorMessage.
     * @example
     * // Delete one TutorMessage
     * const TutorMessage = await prisma.tutorMessage.delete({
     *   where: {
     *     // ... filter to delete one TutorMessage
     *   }
     * })
     * 
     */
    delete<T extends TutorMessageDeleteArgs>(args: SelectSubset<T, TutorMessageDeleteArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorMessage.
     * @param {TutorMessageUpdateArgs} args - Arguments to update one TutorMessage.
     * @example
     * // Update one TutorMessage
     * const tutorMessage = await prisma.tutorMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorMessageUpdateArgs>(args: SelectSubset<T, TutorMessageUpdateArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorMessages.
     * @param {TutorMessageDeleteManyArgs} args - Arguments to filter TutorMessages to delete.
     * @example
     * // Delete a few TutorMessages
     * const { count } = await prisma.tutorMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorMessageDeleteManyArgs>(args?: SelectSubset<T, TutorMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorMessages
     * const tutorMessage = await prisma.tutorMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorMessageUpdateManyArgs>(args: SelectSubset<T, TutorMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorMessages and returns the data updated in the database.
     * @param {TutorMessageUpdateManyAndReturnArgs} args - Arguments to update many TutorMessages.
     * @example
     * // Update many TutorMessages
     * const tutorMessage = await prisma.tutorMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorMessages and only return the `id`
     * const tutorMessageWithIdOnly = await prisma.tutorMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorMessage.
     * @param {TutorMessageUpsertArgs} args - Arguments to update or create a TutorMessage.
     * @example
     * // Update or create a TutorMessage
     * const tutorMessage = await prisma.tutorMessage.upsert({
     *   create: {
     *     // ... data to create a TutorMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorMessage we want to update
     *   }
     * })
     */
    upsert<T extends TutorMessageUpsertArgs>(args: SelectSubset<T, TutorMessageUpsertArgs<ExtArgs>>): Prisma__TutorMessageClient<$Result.GetResult<Prisma.$TutorMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorMessageCountArgs} args - Arguments to filter TutorMessages to count.
     * @example
     * // Count the number of TutorMessages
     * const count = await prisma.tutorMessage.count({
     *   where: {
     *     // ... the filter for the TutorMessages we want to count
     *   }
     * })
    **/
    count<T extends TutorMessageCountArgs>(
      args?: Subset<T, TutorMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorMessageAggregateArgs>(args: Subset<T, TutorMessageAggregateArgs>): Prisma.PrismaPromise<GetTutorMessageAggregateType<T>>

    /**
     * Group by TutorMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorMessageGroupByArgs} args - Group by arguments.
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
      T extends TutorMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorMessageGroupByArgs['orderBy'] }
        : { orderBy?: TutorMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorMessage model
   */
  readonly fields: TutorMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends TutorSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorSessionDefaultArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TutorMessage model
   */
  interface TutorMessageFieldRefs {
    readonly id: FieldRef<"TutorMessage", 'String'>
    readonly sessionId: FieldRef<"TutorMessage", 'String'>
    readonly sender: FieldRef<"TutorMessage", 'String'>
    readonly content: FieldRef<"TutorMessage", 'String'>
    readonly metadata: FieldRef<"TutorMessage", 'Json'>
    readonly createdAt: FieldRef<"TutorMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TutorMessage findUnique
   */
  export type TutorMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * Filter, which TutorMessage to fetch.
     */
    where: TutorMessageWhereUniqueInput
  }

  /**
   * TutorMessage findUniqueOrThrow
   */
  export type TutorMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * Filter, which TutorMessage to fetch.
     */
    where: TutorMessageWhereUniqueInput
  }

  /**
   * TutorMessage findFirst
   */
  export type TutorMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * Filter, which TutorMessage to fetch.
     */
    where?: TutorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorMessages to fetch.
     */
    orderBy?: TutorMessageOrderByWithRelationInput | TutorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorMessages.
     */
    cursor?: TutorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorMessages.
     */
    distinct?: TutorMessageScalarFieldEnum | TutorMessageScalarFieldEnum[]
  }

  /**
   * TutorMessage findFirstOrThrow
   */
  export type TutorMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * Filter, which TutorMessage to fetch.
     */
    where?: TutorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorMessages to fetch.
     */
    orderBy?: TutorMessageOrderByWithRelationInput | TutorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorMessages.
     */
    cursor?: TutorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorMessages.
     */
    distinct?: TutorMessageScalarFieldEnum | TutorMessageScalarFieldEnum[]
  }

  /**
   * TutorMessage findMany
   */
  export type TutorMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * Filter, which TutorMessages to fetch.
     */
    where?: TutorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorMessages to fetch.
     */
    orderBy?: TutorMessageOrderByWithRelationInput | TutorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorMessages.
     */
    cursor?: TutorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorMessages.
     */
    skip?: number
    distinct?: TutorMessageScalarFieldEnum | TutorMessageScalarFieldEnum[]
  }

  /**
   * TutorMessage create
   */
  export type TutorMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorMessage.
     */
    data: XOR<TutorMessageCreateInput, TutorMessageUncheckedCreateInput>
  }

  /**
   * TutorMessage createMany
   */
  export type TutorMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorMessages.
     */
    data: TutorMessageCreateManyInput | TutorMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorMessage createManyAndReturn
   */
  export type TutorMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * The data used to create many TutorMessages.
     */
    data: TutorMessageCreateManyInput | TutorMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorMessage update
   */
  export type TutorMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorMessage.
     */
    data: XOR<TutorMessageUpdateInput, TutorMessageUncheckedUpdateInput>
    /**
     * Choose, which TutorMessage to update.
     */
    where: TutorMessageWhereUniqueInput
  }

  /**
   * TutorMessage updateMany
   */
  export type TutorMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorMessages.
     */
    data: XOR<TutorMessageUpdateManyMutationInput, TutorMessageUncheckedUpdateManyInput>
    /**
     * Filter which TutorMessages to update
     */
    where?: TutorMessageWhereInput
    /**
     * Limit how many TutorMessages to update.
     */
    limit?: number
  }

  /**
   * TutorMessage updateManyAndReturn
   */
  export type TutorMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * The data used to update TutorMessages.
     */
    data: XOR<TutorMessageUpdateManyMutationInput, TutorMessageUncheckedUpdateManyInput>
    /**
     * Filter which TutorMessages to update
     */
    where?: TutorMessageWhereInput
    /**
     * Limit how many TutorMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorMessage upsert
   */
  export type TutorMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorMessage to update in case it exists.
     */
    where: TutorMessageWhereUniqueInput
    /**
     * In case the TutorMessage found by the `where` argument doesn't exist, create a new TutorMessage with this data.
     */
    create: XOR<TutorMessageCreateInput, TutorMessageUncheckedCreateInput>
    /**
     * In case the TutorMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorMessageUpdateInput, TutorMessageUncheckedUpdateInput>
  }

  /**
   * TutorMessage delete
   */
  export type TutorMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
    /**
     * Filter which TutorMessage to delete.
     */
    where: TutorMessageWhereUniqueInput
  }

  /**
   * TutorMessage deleteMany
   */
  export type TutorMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorMessages to delete
     */
    where?: TutorMessageWhereInput
    /**
     * Limit how many TutorMessages to delete.
     */
    limit?: number
  }

  /**
   * TutorMessage without action
   */
  export type TutorMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorMessage
     */
    select?: TutorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorMessage
     */
    omit?: TutorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorMessageInclude<ExtArgs> | null
  }


  /**
   * Model SessionSummary
   */

  export type AggregateSessionSummary = {
    _count: SessionSummaryCountAggregateOutputType | null
    _min: SessionSummaryMinAggregateOutputType | null
    _max: SessionSummaryMaxAggregateOutputType | null
  }

  export type SessionSummaryMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    summaryText: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionSummaryMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    summaryText: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionSummaryCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    summaryText: number
    keyPoints: number
    actionItems: number
    provider: number
    rawResponse: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionSummaryMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    summaryText?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionSummaryMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    summaryText?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionSummaryCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    summaryText?: true
    keyPoints?: true
    actionItems?: true
    provider?: true
    rawResponse?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionSummary to aggregate.
     */
    where?: SessionSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSummaries to fetch.
     */
    orderBy?: SessionSummaryOrderByWithRelationInput | SessionSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionSummaries
    **/
    _count?: true | SessionSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionSummaryMaxAggregateInputType
  }

  export type GetSessionSummaryAggregateType<T extends SessionSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionSummary[P]>
      : GetScalarType<T[P], AggregateSessionSummary[P]>
  }




  export type SessionSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionSummaryWhereInput
    orderBy?: SessionSummaryOrderByWithAggregationInput | SessionSummaryOrderByWithAggregationInput[]
    by: SessionSummaryScalarFieldEnum[] | SessionSummaryScalarFieldEnum
    having?: SessionSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionSummaryCountAggregateInputType | true
    _min?: SessionSummaryMinAggregateInputType
    _max?: SessionSummaryMaxAggregateInputType
  }

  export type SessionSummaryGroupByOutputType = {
    id: string
    sessionId: string
    userId: string
    summaryText: string
    keyPoints: JsonValue | null
    actionItems: JsonValue | null
    provider: string
    rawResponse: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: SessionSummaryCountAggregateOutputType | null
    _min: SessionSummaryMinAggregateOutputType | null
    _max: SessionSummaryMaxAggregateOutputType | null
  }

  type GetSessionSummaryGroupByPayload<T extends SessionSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], SessionSummaryGroupByOutputType[P]>
        }
      >
    >


  export type SessionSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    summaryText?: boolean
    keyPoints?: boolean
    actionItems?: boolean
    provider?: boolean
    rawResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionSummary"]>

  export type SessionSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    summaryText?: boolean
    keyPoints?: boolean
    actionItems?: boolean
    provider?: boolean
    rawResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionSummary"]>

  export type SessionSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    summaryText?: boolean
    keyPoints?: boolean
    actionItems?: boolean
    provider?: boolean
    rawResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionSummary"]>

  export type SessionSummarySelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    summaryText?: boolean
    keyPoints?: boolean
    actionItems?: boolean
    provider?: boolean
    rawResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId" | "summaryText" | "keyPoints" | "actionItems" | "provider" | "rawResponse" | "createdAt" | "updatedAt", ExtArgs["result"]["sessionSummary"]>
  export type SessionSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TutorSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionSummary"
    objects: {
      session: Prisma.$TutorSessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string
      summaryText: string
      keyPoints: Prisma.JsonValue | null
      actionItems: Prisma.JsonValue | null
      provider: string
      rawResponse: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sessionSummary"]>
    composites: {}
  }

  type SessionSummaryGetPayload<S extends boolean | null | undefined | SessionSummaryDefaultArgs> = $Result.GetResult<Prisma.$SessionSummaryPayload, S>

  type SessionSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionSummaryCountAggregateInputType | true
    }

  export interface SessionSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionSummary'], meta: { name: 'SessionSummary' } }
    /**
     * Find zero or one SessionSummary that matches the filter.
     * @param {SessionSummaryFindUniqueArgs} args - Arguments to find a SessionSummary
     * @example
     * // Get one SessionSummary
     * const sessionSummary = await prisma.sessionSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionSummaryFindUniqueArgs>(args: SelectSubset<T, SessionSummaryFindUniqueArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionSummaryFindUniqueOrThrowArgs} args - Arguments to find a SessionSummary
     * @example
     * // Get one SessionSummary
     * const sessionSummary = await prisma.sessionSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionSummaryFindFirstArgs} args - Arguments to find a SessionSummary
     * @example
     * // Get one SessionSummary
     * const sessionSummary = await prisma.sessionSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionSummaryFindFirstArgs>(args?: SelectSubset<T, SessionSummaryFindFirstArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionSummaryFindFirstOrThrowArgs} args - Arguments to find a SessionSummary
     * @example
     * // Get one SessionSummary
     * const sessionSummary = await prisma.sessionSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionSummaries
     * const sessionSummaries = await prisma.sessionSummary.findMany()
     * 
     * // Get first 10 SessionSummaries
     * const sessionSummaries = await prisma.sessionSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionSummaryWithIdOnly = await prisma.sessionSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionSummaryFindManyArgs>(args?: SelectSubset<T, SessionSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionSummary.
     * @param {SessionSummaryCreateArgs} args - Arguments to create a SessionSummary.
     * @example
     * // Create one SessionSummary
     * const SessionSummary = await prisma.sessionSummary.create({
     *   data: {
     *     // ... data to create a SessionSummary
     *   }
     * })
     * 
     */
    create<T extends SessionSummaryCreateArgs>(args: SelectSubset<T, SessionSummaryCreateArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionSummaries.
     * @param {SessionSummaryCreateManyArgs} args - Arguments to create many SessionSummaries.
     * @example
     * // Create many SessionSummaries
     * const sessionSummary = await prisma.sessionSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionSummaryCreateManyArgs>(args?: SelectSubset<T, SessionSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionSummaries and returns the data saved in the database.
     * @param {SessionSummaryCreateManyAndReturnArgs} args - Arguments to create many SessionSummaries.
     * @example
     * // Create many SessionSummaries
     * const sessionSummary = await prisma.sessionSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionSummaries and only return the `id`
     * const sessionSummaryWithIdOnly = await prisma.sessionSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionSummary.
     * @param {SessionSummaryDeleteArgs} args - Arguments to delete one SessionSummary.
     * @example
     * // Delete one SessionSummary
     * const SessionSummary = await prisma.sessionSummary.delete({
     *   where: {
     *     // ... filter to delete one SessionSummary
     *   }
     * })
     * 
     */
    delete<T extends SessionSummaryDeleteArgs>(args: SelectSubset<T, SessionSummaryDeleteArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionSummary.
     * @param {SessionSummaryUpdateArgs} args - Arguments to update one SessionSummary.
     * @example
     * // Update one SessionSummary
     * const sessionSummary = await prisma.sessionSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionSummaryUpdateArgs>(args: SelectSubset<T, SessionSummaryUpdateArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionSummaries.
     * @param {SessionSummaryDeleteManyArgs} args - Arguments to filter SessionSummaries to delete.
     * @example
     * // Delete a few SessionSummaries
     * const { count } = await prisma.sessionSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionSummaryDeleteManyArgs>(args?: SelectSubset<T, SessionSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionSummaries
     * const sessionSummary = await prisma.sessionSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionSummaryUpdateManyArgs>(args: SelectSubset<T, SessionSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionSummaries and returns the data updated in the database.
     * @param {SessionSummaryUpdateManyAndReturnArgs} args - Arguments to update many SessionSummaries.
     * @example
     * // Update many SessionSummaries
     * const sessionSummary = await prisma.sessionSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionSummaries and only return the `id`
     * const sessionSummaryWithIdOnly = await prisma.sessionSummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionSummary.
     * @param {SessionSummaryUpsertArgs} args - Arguments to update or create a SessionSummary.
     * @example
     * // Update or create a SessionSummary
     * const sessionSummary = await prisma.sessionSummary.upsert({
     *   create: {
     *     // ... data to create a SessionSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionSummary we want to update
     *   }
     * })
     */
    upsert<T extends SessionSummaryUpsertArgs>(args: SelectSubset<T, SessionSummaryUpsertArgs<ExtArgs>>): Prisma__SessionSummaryClient<$Result.GetResult<Prisma.$SessionSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionSummaryCountArgs} args - Arguments to filter SessionSummaries to count.
     * @example
     * // Count the number of SessionSummaries
     * const count = await prisma.sessionSummary.count({
     *   where: {
     *     // ... the filter for the SessionSummaries we want to count
     *   }
     * })
    **/
    count<T extends SessionSummaryCountArgs>(
      args?: Subset<T, SessionSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionSummaryAggregateArgs>(args: Subset<T, SessionSummaryAggregateArgs>): Prisma.PrismaPromise<GetSessionSummaryAggregateType<T>>

    /**
     * Group by SessionSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionSummaryGroupByArgs} args - Group by arguments.
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
      T extends SessionSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionSummaryGroupByArgs['orderBy'] }
        : { orderBy?: SessionSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionSummary model
   */
  readonly fields: SessionSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends TutorSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorSessionDefaultArgs<ExtArgs>>): Prisma__TutorSessionClient<$Result.GetResult<Prisma.$TutorSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionSummary model
   */
  interface SessionSummaryFieldRefs {
    readonly id: FieldRef<"SessionSummary", 'String'>
    readonly sessionId: FieldRef<"SessionSummary", 'String'>
    readonly userId: FieldRef<"SessionSummary", 'String'>
    readonly summaryText: FieldRef<"SessionSummary", 'String'>
    readonly keyPoints: FieldRef<"SessionSummary", 'Json'>
    readonly actionItems: FieldRef<"SessionSummary", 'Json'>
    readonly provider: FieldRef<"SessionSummary", 'String'>
    readonly rawResponse: FieldRef<"SessionSummary", 'Json'>
    readonly createdAt: FieldRef<"SessionSummary", 'DateTime'>
    readonly updatedAt: FieldRef<"SessionSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionSummary findUnique
   */
  export type SessionSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * Filter, which SessionSummary to fetch.
     */
    where: SessionSummaryWhereUniqueInput
  }

  /**
   * SessionSummary findUniqueOrThrow
   */
  export type SessionSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * Filter, which SessionSummary to fetch.
     */
    where: SessionSummaryWhereUniqueInput
  }

  /**
   * SessionSummary findFirst
   */
  export type SessionSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * Filter, which SessionSummary to fetch.
     */
    where?: SessionSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSummaries to fetch.
     */
    orderBy?: SessionSummaryOrderByWithRelationInput | SessionSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionSummaries.
     */
    cursor?: SessionSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionSummaries.
     */
    distinct?: SessionSummaryScalarFieldEnum | SessionSummaryScalarFieldEnum[]
  }

  /**
   * SessionSummary findFirstOrThrow
   */
  export type SessionSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * Filter, which SessionSummary to fetch.
     */
    where?: SessionSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSummaries to fetch.
     */
    orderBy?: SessionSummaryOrderByWithRelationInput | SessionSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionSummaries.
     */
    cursor?: SessionSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionSummaries.
     */
    distinct?: SessionSummaryScalarFieldEnum | SessionSummaryScalarFieldEnum[]
  }

  /**
   * SessionSummary findMany
   */
  export type SessionSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * Filter, which SessionSummaries to fetch.
     */
    where?: SessionSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSummaries to fetch.
     */
    orderBy?: SessionSummaryOrderByWithRelationInput | SessionSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionSummaries.
     */
    cursor?: SessionSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSummaries.
     */
    skip?: number
    distinct?: SessionSummaryScalarFieldEnum | SessionSummaryScalarFieldEnum[]
  }

  /**
   * SessionSummary create
   */
  export type SessionSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionSummary.
     */
    data: XOR<SessionSummaryCreateInput, SessionSummaryUncheckedCreateInput>
  }

  /**
   * SessionSummary createMany
   */
  export type SessionSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionSummaries.
     */
    data: SessionSummaryCreateManyInput | SessionSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionSummary createManyAndReturn
   */
  export type SessionSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many SessionSummaries.
     */
    data: SessionSummaryCreateManyInput | SessionSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionSummary update
   */
  export type SessionSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionSummary.
     */
    data: XOR<SessionSummaryUpdateInput, SessionSummaryUncheckedUpdateInput>
    /**
     * Choose, which SessionSummary to update.
     */
    where: SessionSummaryWhereUniqueInput
  }

  /**
   * SessionSummary updateMany
   */
  export type SessionSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionSummaries.
     */
    data: XOR<SessionSummaryUpdateManyMutationInput, SessionSummaryUncheckedUpdateManyInput>
    /**
     * Filter which SessionSummaries to update
     */
    where?: SessionSummaryWhereInput
    /**
     * Limit how many SessionSummaries to update.
     */
    limit?: number
  }

  /**
   * SessionSummary updateManyAndReturn
   */
  export type SessionSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * The data used to update SessionSummaries.
     */
    data: XOR<SessionSummaryUpdateManyMutationInput, SessionSummaryUncheckedUpdateManyInput>
    /**
     * Filter which SessionSummaries to update
     */
    where?: SessionSummaryWhereInput
    /**
     * Limit how many SessionSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionSummary upsert
   */
  export type SessionSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionSummary to update in case it exists.
     */
    where: SessionSummaryWhereUniqueInput
    /**
     * In case the SessionSummary found by the `where` argument doesn't exist, create a new SessionSummary with this data.
     */
    create: XOR<SessionSummaryCreateInput, SessionSummaryUncheckedCreateInput>
    /**
     * In case the SessionSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionSummaryUpdateInput, SessionSummaryUncheckedUpdateInput>
  }

  /**
   * SessionSummary delete
   */
  export type SessionSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
    /**
     * Filter which SessionSummary to delete.
     */
    where: SessionSummaryWhereUniqueInput
  }

  /**
   * SessionSummary deleteMany
   */
  export type SessionSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionSummaries to delete
     */
    where?: SessionSummaryWhereInput
    /**
     * Limit how many SessionSummaries to delete.
     */
    limit?: number
  }

  /**
   * SessionSummary without action
   */
  export type SessionSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionSummary
     */
    select?: SessionSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionSummary
     */
    omit?: SessionSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionSummaryInclude<ExtArgs> | null
  }


  /**
   * Model CheckinSchedule
   */

  export type AggregateCheckinSchedule = {
    _count: CheckinScheduleCountAggregateOutputType | null
    _min: CheckinScheduleMinAggregateOutputType | null
    _max: CheckinScheduleMaxAggregateOutputType | null
  }

  export type CheckinScheduleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    milestoneId: string | null
    frequency: string | null
    nextDueAt: Date | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckinScheduleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    milestoneId: string | null
    frequency: string | null
    nextDueAt: Date | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckinScheduleCountAggregateOutputType = {
    id: number
    userId: number
    goalId: number
    milestoneId: number
    frequency: number
    nextDueAt: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CheckinScheduleMinAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    frequency?: true
    nextDueAt?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckinScheduleMaxAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    frequency?: true
    nextDueAt?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckinScheduleCountAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    frequency?: true
    nextDueAt?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CheckinScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckinSchedule to aggregate.
     */
    where?: CheckinScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinSchedules to fetch.
     */
    orderBy?: CheckinScheduleOrderByWithRelationInput | CheckinScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckinSchedules
    **/
    _count?: true | CheckinScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinScheduleMaxAggregateInputType
  }

  export type GetCheckinScheduleAggregateType<T extends CheckinScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckinSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckinSchedule[P]>
      : GetScalarType<T[P], AggregateCheckinSchedule[P]>
  }




  export type CheckinScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinScheduleWhereInput
    orderBy?: CheckinScheduleOrderByWithAggregationInput | CheckinScheduleOrderByWithAggregationInput[]
    by: CheckinScheduleScalarFieldEnum[] | CheckinScheduleScalarFieldEnum
    having?: CheckinScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinScheduleCountAggregateInputType | true
    _min?: CheckinScheduleMinAggregateInputType
    _max?: CheckinScheduleMaxAggregateInputType
  }

  export type CheckinScheduleGroupByOutputType = {
    id: string
    userId: string
    goalId: string | null
    milestoneId: string | null
    frequency: string
    nextDueAt: Date | null
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: CheckinScheduleCountAggregateOutputType | null
    _min: CheckinScheduleMinAggregateOutputType | null
    _max: CheckinScheduleMaxAggregateOutputType | null
  }

  type GetCheckinScheduleGroupByPayload<T extends CheckinScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinScheduleGroupByOutputType[P]>
        }
      >
    >


  export type CheckinScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    frequency?: boolean
    nextDueAt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinSchedule$goalArgs<ExtArgs>
    milestone?: boolean | CheckinSchedule$milestoneArgs<ExtArgs>
    entries?: boolean | CheckinSchedule$entriesArgs<ExtArgs>
    _count?: boolean | CheckinScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkinSchedule"]>

  export type CheckinScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    frequency?: boolean
    nextDueAt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinSchedule$goalArgs<ExtArgs>
    milestone?: boolean | CheckinSchedule$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["checkinSchedule"]>

  export type CheckinScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    frequency?: boolean
    nextDueAt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinSchedule$goalArgs<ExtArgs>
    milestone?: boolean | CheckinSchedule$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["checkinSchedule"]>

  export type CheckinScheduleSelectScalar = {
    id?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    frequency?: boolean
    nextDueAt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CheckinScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "goalId" | "milestoneId" | "frequency" | "nextDueAt" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["checkinSchedule"]>
  export type CheckinScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinSchedule$goalArgs<ExtArgs>
    milestone?: boolean | CheckinSchedule$milestoneArgs<ExtArgs>
    entries?: boolean | CheckinSchedule$entriesArgs<ExtArgs>
    _count?: boolean | CheckinScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CheckinScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinSchedule$goalArgs<ExtArgs>
    milestone?: boolean | CheckinSchedule$milestoneArgs<ExtArgs>
  }
  export type CheckinScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinSchedule$goalArgs<ExtArgs>
    milestone?: boolean | CheckinSchedule$milestoneArgs<ExtArgs>
  }

  export type $CheckinSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckinSchedule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs> | null
      milestone: Prisma.$MilestonePayload<ExtArgs> | null
      entries: Prisma.$CheckinEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goalId: string | null
      milestoneId: string | null
      frequency: string
      nextDueAt: Date | null
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checkinSchedule"]>
    composites: {}
  }

  type CheckinScheduleGetPayload<S extends boolean | null | undefined | CheckinScheduleDefaultArgs> = $Result.GetResult<Prisma.$CheckinSchedulePayload, S>

  type CheckinScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckinScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckinScheduleCountAggregateInputType | true
    }

  export interface CheckinScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckinSchedule'], meta: { name: 'CheckinSchedule' } }
    /**
     * Find zero or one CheckinSchedule that matches the filter.
     * @param {CheckinScheduleFindUniqueArgs} args - Arguments to find a CheckinSchedule
     * @example
     * // Get one CheckinSchedule
     * const checkinSchedule = await prisma.checkinSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckinScheduleFindUniqueArgs>(args: SelectSubset<T, CheckinScheduleFindUniqueArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckinSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckinScheduleFindUniqueOrThrowArgs} args - Arguments to find a CheckinSchedule
     * @example
     * // Get one CheckinSchedule
     * const checkinSchedule = await prisma.checkinSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckinScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckinScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckinSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinScheduleFindFirstArgs} args - Arguments to find a CheckinSchedule
     * @example
     * // Get one CheckinSchedule
     * const checkinSchedule = await prisma.checkinSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckinScheduleFindFirstArgs>(args?: SelectSubset<T, CheckinScheduleFindFirstArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckinSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinScheduleFindFirstOrThrowArgs} args - Arguments to find a CheckinSchedule
     * @example
     * // Get one CheckinSchedule
     * const checkinSchedule = await prisma.checkinSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckinScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckinScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckinSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckinSchedules
     * const checkinSchedules = await prisma.checkinSchedule.findMany()
     * 
     * // Get first 10 CheckinSchedules
     * const checkinSchedules = await prisma.checkinSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinScheduleWithIdOnly = await prisma.checkinSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckinScheduleFindManyArgs>(args?: SelectSubset<T, CheckinScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckinSchedule.
     * @param {CheckinScheduleCreateArgs} args - Arguments to create a CheckinSchedule.
     * @example
     * // Create one CheckinSchedule
     * const CheckinSchedule = await prisma.checkinSchedule.create({
     *   data: {
     *     // ... data to create a CheckinSchedule
     *   }
     * })
     * 
     */
    create<T extends CheckinScheduleCreateArgs>(args: SelectSubset<T, CheckinScheduleCreateArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckinSchedules.
     * @param {CheckinScheduleCreateManyArgs} args - Arguments to create many CheckinSchedules.
     * @example
     * // Create many CheckinSchedules
     * const checkinSchedule = await prisma.checkinSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckinScheduleCreateManyArgs>(args?: SelectSubset<T, CheckinScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckinSchedules and returns the data saved in the database.
     * @param {CheckinScheduleCreateManyAndReturnArgs} args - Arguments to create many CheckinSchedules.
     * @example
     * // Create many CheckinSchedules
     * const checkinSchedule = await prisma.checkinSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckinSchedules and only return the `id`
     * const checkinScheduleWithIdOnly = await prisma.checkinSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckinScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckinScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckinSchedule.
     * @param {CheckinScheduleDeleteArgs} args - Arguments to delete one CheckinSchedule.
     * @example
     * // Delete one CheckinSchedule
     * const CheckinSchedule = await prisma.checkinSchedule.delete({
     *   where: {
     *     // ... filter to delete one CheckinSchedule
     *   }
     * })
     * 
     */
    delete<T extends CheckinScheduleDeleteArgs>(args: SelectSubset<T, CheckinScheduleDeleteArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckinSchedule.
     * @param {CheckinScheduleUpdateArgs} args - Arguments to update one CheckinSchedule.
     * @example
     * // Update one CheckinSchedule
     * const checkinSchedule = await prisma.checkinSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckinScheduleUpdateArgs>(args: SelectSubset<T, CheckinScheduleUpdateArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckinSchedules.
     * @param {CheckinScheduleDeleteManyArgs} args - Arguments to filter CheckinSchedules to delete.
     * @example
     * // Delete a few CheckinSchedules
     * const { count } = await prisma.checkinSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckinScheduleDeleteManyArgs>(args?: SelectSubset<T, CheckinScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckinSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckinSchedules
     * const checkinSchedule = await prisma.checkinSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckinScheduleUpdateManyArgs>(args: SelectSubset<T, CheckinScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckinSchedules and returns the data updated in the database.
     * @param {CheckinScheduleUpdateManyAndReturnArgs} args - Arguments to update many CheckinSchedules.
     * @example
     * // Update many CheckinSchedules
     * const checkinSchedule = await prisma.checkinSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckinSchedules and only return the `id`
     * const checkinScheduleWithIdOnly = await prisma.checkinSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckinScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckinScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckinSchedule.
     * @param {CheckinScheduleUpsertArgs} args - Arguments to update or create a CheckinSchedule.
     * @example
     * // Update or create a CheckinSchedule
     * const checkinSchedule = await prisma.checkinSchedule.upsert({
     *   create: {
     *     // ... data to create a CheckinSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckinSchedule we want to update
     *   }
     * })
     */
    upsert<T extends CheckinScheduleUpsertArgs>(args: SelectSubset<T, CheckinScheduleUpsertArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckinSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinScheduleCountArgs} args - Arguments to filter CheckinSchedules to count.
     * @example
     * // Count the number of CheckinSchedules
     * const count = await prisma.checkinSchedule.count({
     *   where: {
     *     // ... the filter for the CheckinSchedules we want to count
     *   }
     * })
    **/
    count<T extends CheckinScheduleCountArgs>(
      args?: Subset<T, CheckinScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckinSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckinScheduleAggregateArgs>(args: Subset<T, CheckinScheduleAggregateArgs>): Prisma.PrismaPromise<GetCheckinScheduleAggregateType<T>>

    /**
     * Group by CheckinSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinScheduleGroupByArgs} args - Group by arguments.
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
      T extends CheckinScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinScheduleGroupByArgs['orderBy'] }
        : { orderBy?: CheckinScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckinScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckinSchedule model
   */
  readonly fields: CheckinScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckinSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goal<T extends CheckinSchedule$goalArgs<ExtArgs> = {}>(args?: Subset<T, CheckinSchedule$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestone<T extends CheckinSchedule$milestoneArgs<ExtArgs> = {}>(args?: Subset<T, CheckinSchedule$milestoneArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entries<T extends CheckinSchedule$entriesArgs<ExtArgs> = {}>(args?: Subset<T, CheckinSchedule$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CheckinSchedule model
   */
  interface CheckinScheduleFieldRefs {
    readonly id: FieldRef<"CheckinSchedule", 'String'>
    readonly userId: FieldRef<"CheckinSchedule", 'String'>
    readonly goalId: FieldRef<"CheckinSchedule", 'String'>
    readonly milestoneId: FieldRef<"CheckinSchedule", 'String'>
    readonly frequency: FieldRef<"CheckinSchedule", 'String'>
    readonly nextDueAt: FieldRef<"CheckinSchedule", 'DateTime'>
    readonly enabled: FieldRef<"CheckinSchedule", 'Boolean'>
    readonly createdAt: FieldRef<"CheckinSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"CheckinSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckinSchedule findUnique
   */
  export type CheckinScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CheckinSchedule to fetch.
     */
    where: CheckinScheduleWhereUniqueInput
  }

  /**
   * CheckinSchedule findUniqueOrThrow
   */
  export type CheckinScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CheckinSchedule to fetch.
     */
    where: CheckinScheduleWhereUniqueInput
  }

  /**
   * CheckinSchedule findFirst
   */
  export type CheckinScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CheckinSchedule to fetch.
     */
    where?: CheckinScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinSchedules to fetch.
     */
    orderBy?: CheckinScheduleOrderByWithRelationInput | CheckinScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckinSchedules.
     */
    cursor?: CheckinScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckinSchedules.
     */
    distinct?: CheckinScheduleScalarFieldEnum | CheckinScheduleScalarFieldEnum[]
  }

  /**
   * CheckinSchedule findFirstOrThrow
   */
  export type CheckinScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CheckinSchedule to fetch.
     */
    where?: CheckinScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinSchedules to fetch.
     */
    orderBy?: CheckinScheduleOrderByWithRelationInput | CheckinScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckinSchedules.
     */
    cursor?: CheckinScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckinSchedules.
     */
    distinct?: CheckinScheduleScalarFieldEnum | CheckinScheduleScalarFieldEnum[]
  }

  /**
   * CheckinSchedule findMany
   */
  export type CheckinScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CheckinSchedules to fetch.
     */
    where?: CheckinScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinSchedules to fetch.
     */
    orderBy?: CheckinScheduleOrderByWithRelationInput | CheckinScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckinSchedules.
     */
    cursor?: CheckinScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinSchedules.
     */
    skip?: number
    distinct?: CheckinScheduleScalarFieldEnum | CheckinScheduleScalarFieldEnum[]
  }

  /**
   * CheckinSchedule create
   */
  export type CheckinScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckinSchedule.
     */
    data: XOR<CheckinScheduleCreateInput, CheckinScheduleUncheckedCreateInput>
  }

  /**
   * CheckinSchedule createMany
   */
  export type CheckinScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckinSchedules.
     */
    data: CheckinScheduleCreateManyInput | CheckinScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckinSchedule createManyAndReturn
   */
  export type CheckinScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many CheckinSchedules.
     */
    data: CheckinScheduleCreateManyInput | CheckinScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckinSchedule update
   */
  export type CheckinScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckinSchedule.
     */
    data: XOR<CheckinScheduleUpdateInput, CheckinScheduleUncheckedUpdateInput>
    /**
     * Choose, which CheckinSchedule to update.
     */
    where: CheckinScheduleWhereUniqueInput
  }

  /**
   * CheckinSchedule updateMany
   */
  export type CheckinScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckinSchedules.
     */
    data: XOR<CheckinScheduleUpdateManyMutationInput, CheckinScheduleUncheckedUpdateManyInput>
    /**
     * Filter which CheckinSchedules to update
     */
    where?: CheckinScheduleWhereInput
    /**
     * Limit how many CheckinSchedules to update.
     */
    limit?: number
  }

  /**
   * CheckinSchedule updateManyAndReturn
   */
  export type CheckinScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * The data used to update CheckinSchedules.
     */
    data: XOR<CheckinScheduleUpdateManyMutationInput, CheckinScheduleUncheckedUpdateManyInput>
    /**
     * Filter which CheckinSchedules to update
     */
    where?: CheckinScheduleWhereInput
    /**
     * Limit how many CheckinSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckinSchedule upsert
   */
  export type CheckinScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckinSchedule to update in case it exists.
     */
    where: CheckinScheduleWhereUniqueInput
    /**
     * In case the CheckinSchedule found by the `where` argument doesn't exist, create a new CheckinSchedule with this data.
     */
    create: XOR<CheckinScheduleCreateInput, CheckinScheduleUncheckedCreateInput>
    /**
     * In case the CheckinSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinScheduleUpdateInput, CheckinScheduleUncheckedUpdateInput>
  }

  /**
   * CheckinSchedule delete
   */
  export type CheckinScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
    /**
     * Filter which CheckinSchedule to delete.
     */
    where: CheckinScheduleWhereUniqueInput
  }

  /**
   * CheckinSchedule deleteMany
   */
  export type CheckinScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckinSchedules to delete
     */
    where?: CheckinScheduleWhereInput
    /**
     * Limit how many CheckinSchedules to delete.
     */
    limit?: number
  }

  /**
   * CheckinSchedule.goal
   */
  export type CheckinSchedule$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * CheckinSchedule.milestone
   */
  export type CheckinSchedule$milestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
  }

  /**
   * CheckinSchedule.entries
   */
  export type CheckinSchedule$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    where?: CheckinEntryWhereInput
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    cursor?: CheckinEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinEntryScalarFieldEnum | CheckinEntryScalarFieldEnum[]
  }

  /**
   * CheckinSchedule without action
   */
  export type CheckinScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinSchedule
     */
    select?: CheckinScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinSchedule
     */
    omit?: CheckinScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinScheduleInclude<ExtArgs> | null
  }


  /**
   * Model CheckinEntry
   */

  export type AggregateCheckinEntry = {
    _count: CheckinEntryCountAggregateOutputType | null
    _avg: CheckinEntryAvgAggregateOutputType | null
    _sum: CheckinEntrySumAggregateOutputType | null
    _min: CheckinEntryMinAggregateOutputType | null
    _max: CheckinEntryMaxAggregateOutputType | null
  }

  export type CheckinEntryAvgAggregateOutputType = {
    progress: number | null
  }

  export type CheckinEntrySumAggregateOutputType = {
    progress: number | null
  }

  export type CheckinEntryMinAggregateOutputType = {
    id: string | null
    scheduleId: string | null
    userId: string | null
    goalId: string | null
    milestoneId: string | null
    completedAt: Date | null
    notes: string | null
    progress: number | null
    createdAt: Date | null
  }

  export type CheckinEntryMaxAggregateOutputType = {
    id: string | null
    scheduleId: string | null
    userId: string | null
    goalId: string | null
    milestoneId: string | null
    completedAt: Date | null
    notes: string | null
    progress: number | null
    createdAt: Date | null
  }

  export type CheckinEntryCountAggregateOutputType = {
    id: number
    scheduleId: number
    userId: number
    goalId: number
    milestoneId: number
    completedAt: number
    answers: number
    notes: number
    progress: number
    createdAt: number
    _all: number
  }


  export type CheckinEntryAvgAggregateInputType = {
    progress?: true
  }

  export type CheckinEntrySumAggregateInputType = {
    progress?: true
  }

  export type CheckinEntryMinAggregateInputType = {
    id?: true
    scheduleId?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    completedAt?: true
    notes?: true
    progress?: true
    createdAt?: true
  }

  export type CheckinEntryMaxAggregateInputType = {
    id?: true
    scheduleId?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    completedAt?: true
    notes?: true
    progress?: true
    createdAt?: true
  }

  export type CheckinEntryCountAggregateInputType = {
    id?: true
    scheduleId?: true
    userId?: true
    goalId?: true
    milestoneId?: true
    completedAt?: true
    answers?: true
    notes?: true
    progress?: true
    createdAt?: true
    _all?: true
  }

  export type CheckinEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckinEntry to aggregate.
     */
    where?: CheckinEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinEntries to fetch.
     */
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckinEntries
    **/
    _count?: true | CheckinEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckinEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckinEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinEntryMaxAggregateInputType
  }

  export type GetCheckinEntryAggregateType<T extends CheckinEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckinEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckinEntry[P]>
      : GetScalarType<T[P], AggregateCheckinEntry[P]>
  }




  export type CheckinEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinEntryWhereInput
    orderBy?: CheckinEntryOrderByWithAggregationInput | CheckinEntryOrderByWithAggregationInput[]
    by: CheckinEntryScalarFieldEnum[] | CheckinEntryScalarFieldEnum
    having?: CheckinEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinEntryCountAggregateInputType | true
    _avg?: CheckinEntryAvgAggregateInputType
    _sum?: CheckinEntrySumAggregateInputType
    _min?: CheckinEntryMinAggregateInputType
    _max?: CheckinEntryMaxAggregateInputType
  }

  export type CheckinEntryGroupByOutputType = {
    id: string
    scheduleId: string
    userId: string
    goalId: string | null
    milestoneId: string | null
    completedAt: Date
    answers: JsonValue | null
    notes: string | null
    progress: number | null
    createdAt: Date
    _count: CheckinEntryCountAggregateOutputType | null
    _avg: CheckinEntryAvgAggregateOutputType | null
    _sum: CheckinEntrySumAggregateOutputType | null
    _min: CheckinEntryMinAggregateOutputType | null
    _max: CheckinEntryMaxAggregateOutputType | null
  }

  type GetCheckinEntryGroupByPayload<T extends CheckinEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinEntryGroupByOutputType[P]>
        }
      >
    >


  export type CheckinEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    completedAt?: boolean
    answers?: boolean
    notes?: boolean
    progress?: boolean
    createdAt?: boolean
    schedule?: boolean | CheckinScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinEntry$goalArgs<ExtArgs>
    milestone?: boolean | CheckinEntry$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["checkinEntry"]>

  export type CheckinEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    completedAt?: boolean
    answers?: boolean
    notes?: boolean
    progress?: boolean
    createdAt?: boolean
    schedule?: boolean | CheckinScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinEntry$goalArgs<ExtArgs>
    milestone?: boolean | CheckinEntry$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["checkinEntry"]>

  export type CheckinEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    completedAt?: boolean
    answers?: boolean
    notes?: boolean
    progress?: boolean
    createdAt?: boolean
    schedule?: boolean | CheckinScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinEntry$goalArgs<ExtArgs>
    milestone?: boolean | CheckinEntry$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["checkinEntry"]>

  export type CheckinEntrySelectScalar = {
    id?: boolean
    scheduleId?: boolean
    userId?: boolean
    goalId?: boolean
    milestoneId?: boolean
    completedAt?: boolean
    answers?: boolean
    notes?: boolean
    progress?: boolean
    createdAt?: boolean
  }

  export type CheckinEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduleId" | "userId" | "goalId" | "milestoneId" | "completedAt" | "answers" | "notes" | "progress" | "createdAt", ExtArgs["result"]["checkinEntry"]>
  export type CheckinEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | CheckinScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinEntry$goalArgs<ExtArgs>
    milestone?: boolean | CheckinEntry$milestoneArgs<ExtArgs>
  }
  export type CheckinEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | CheckinScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinEntry$goalArgs<ExtArgs>
    milestone?: boolean | CheckinEntry$milestoneArgs<ExtArgs>
  }
  export type CheckinEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | CheckinScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | CheckinEntry$goalArgs<ExtArgs>
    milestone?: boolean | CheckinEntry$milestoneArgs<ExtArgs>
  }

  export type $CheckinEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckinEntry"
    objects: {
      schedule: Prisma.$CheckinSchedulePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs> | null
      milestone: Prisma.$MilestonePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scheduleId: string
      userId: string
      goalId: string | null
      milestoneId: string | null
      completedAt: Date
      answers: Prisma.JsonValue | null
      notes: string | null
      progress: number | null
      createdAt: Date
    }, ExtArgs["result"]["checkinEntry"]>
    composites: {}
  }

  type CheckinEntryGetPayload<S extends boolean | null | undefined | CheckinEntryDefaultArgs> = $Result.GetResult<Prisma.$CheckinEntryPayload, S>

  type CheckinEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckinEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckinEntryCountAggregateInputType | true
    }

  export interface CheckinEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckinEntry'], meta: { name: 'CheckinEntry' } }
    /**
     * Find zero or one CheckinEntry that matches the filter.
     * @param {CheckinEntryFindUniqueArgs} args - Arguments to find a CheckinEntry
     * @example
     * // Get one CheckinEntry
     * const checkinEntry = await prisma.checkinEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckinEntryFindUniqueArgs>(args: SelectSubset<T, CheckinEntryFindUniqueArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckinEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckinEntryFindUniqueOrThrowArgs} args - Arguments to find a CheckinEntry
     * @example
     * // Get one CheckinEntry
     * const checkinEntry = await prisma.checkinEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckinEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckinEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckinEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinEntryFindFirstArgs} args - Arguments to find a CheckinEntry
     * @example
     * // Get one CheckinEntry
     * const checkinEntry = await prisma.checkinEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckinEntryFindFirstArgs>(args?: SelectSubset<T, CheckinEntryFindFirstArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckinEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinEntryFindFirstOrThrowArgs} args - Arguments to find a CheckinEntry
     * @example
     * // Get one CheckinEntry
     * const checkinEntry = await prisma.checkinEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckinEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckinEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckinEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckinEntries
     * const checkinEntries = await prisma.checkinEntry.findMany()
     * 
     * // Get first 10 CheckinEntries
     * const checkinEntries = await prisma.checkinEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinEntryWithIdOnly = await prisma.checkinEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckinEntryFindManyArgs>(args?: SelectSubset<T, CheckinEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckinEntry.
     * @param {CheckinEntryCreateArgs} args - Arguments to create a CheckinEntry.
     * @example
     * // Create one CheckinEntry
     * const CheckinEntry = await prisma.checkinEntry.create({
     *   data: {
     *     // ... data to create a CheckinEntry
     *   }
     * })
     * 
     */
    create<T extends CheckinEntryCreateArgs>(args: SelectSubset<T, CheckinEntryCreateArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckinEntries.
     * @param {CheckinEntryCreateManyArgs} args - Arguments to create many CheckinEntries.
     * @example
     * // Create many CheckinEntries
     * const checkinEntry = await prisma.checkinEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckinEntryCreateManyArgs>(args?: SelectSubset<T, CheckinEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckinEntries and returns the data saved in the database.
     * @param {CheckinEntryCreateManyAndReturnArgs} args - Arguments to create many CheckinEntries.
     * @example
     * // Create many CheckinEntries
     * const checkinEntry = await prisma.checkinEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckinEntries and only return the `id`
     * const checkinEntryWithIdOnly = await prisma.checkinEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckinEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckinEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckinEntry.
     * @param {CheckinEntryDeleteArgs} args - Arguments to delete one CheckinEntry.
     * @example
     * // Delete one CheckinEntry
     * const CheckinEntry = await prisma.checkinEntry.delete({
     *   where: {
     *     // ... filter to delete one CheckinEntry
     *   }
     * })
     * 
     */
    delete<T extends CheckinEntryDeleteArgs>(args: SelectSubset<T, CheckinEntryDeleteArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckinEntry.
     * @param {CheckinEntryUpdateArgs} args - Arguments to update one CheckinEntry.
     * @example
     * // Update one CheckinEntry
     * const checkinEntry = await prisma.checkinEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckinEntryUpdateArgs>(args: SelectSubset<T, CheckinEntryUpdateArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckinEntries.
     * @param {CheckinEntryDeleteManyArgs} args - Arguments to filter CheckinEntries to delete.
     * @example
     * // Delete a few CheckinEntries
     * const { count } = await prisma.checkinEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckinEntryDeleteManyArgs>(args?: SelectSubset<T, CheckinEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckinEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckinEntries
     * const checkinEntry = await prisma.checkinEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckinEntryUpdateManyArgs>(args: SelectSubset<T, CheckinEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckinEntries and returns the data updated in the database.
     * @param {CheckinEntryUpdateManyAndReturnArgs} args - Arguments to update many CheckinEntries.
     * @example
     * // Update many CheckinEntries
     * const checkinEntry = await prisma.checkinEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckinEntries and only return the `id`
     * const checkinEntryWithIdOnly = await prisma.checkinEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckinEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckinEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckinEntry.
     * @param {CheckinEntryUpsertArgs} args - Arguments to update or create a CheckinEntry.
     * @example
     * // Update or create a CheckinEntry
     * const checkinEntry = await prisma.checkinEntry.upsert({
     *   create: {
     *     // ... data to create a CheckinEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckinEntry we want to update
     *   }
     * })
     */
    upsert<T extends CheckinEntryUpsertArgs>(args: SelectSubset<T, CheckinEntryUpsertArgs<ExtArgs>>): Prisma__CheckinEntryClient<$Result.GetResult<Prisma.$CheckinEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckinEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinEntryCountArgs} args - Arguments to filter CheckinEntries to count.
     * @example
     * // Count the number of CheckinEntries
     * const count = await prisma.checkinEntry.count({
     *   where: {
     *     // ... the filter for the CheckinEntries we want to count
     *   }
     * })
    **/
    count<T extends CheckinEntryCountArgs>(
      args?: Subset<T, CheckinEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckinEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckinEntryAggregateArgs>(args: Subset<T, CheckinEntryAggregateArgs>): Prisma.PrismaPromise<GetCheckinEntryAggregateType<T>>

    /**
     * Group by CheckinEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinEntryGroupByArgs} args - Group by arguments.
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
      T extends CheckinEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinEntryGroupByArgs['orderBy'] }
        : { orderBy?: CheckinEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckinEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckinEntry model
   */
  readonly fields: CheckinEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckinEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends CheckinScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CheckinScheduleDefaultArgs<ExtArgs>>): Prisma__CheckinScheduleClient<$Result.GetResult<Prisma.$CheckinSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goal<T extends CheckinEntry$goalArgs<ExtArgs> = {}>(args?: Subset<T, CheckinEntry$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestone<T extends CheckinEntry$milestoneArgs<ExtArgs> = {}>(args?: Subset<T, CheckinEntry$milestoneArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CheckinEntry model
   */
  interface CheckinEntryFieldRefs {
    readonly id: FieldRef<"CheckinEntry", 'String'>
    readonly scheduleId: FieldRef<"CheckinEntry", 'String'>
    readonly userId: FieldRef<"CheckinEntry", 'String'>
    readonly goalId: FieldRef<"CheckinEntry", 'String'>
    readonly milestoneId: FieldRef<"CheckinEntry", 'String'>
    readonly completedAt: FieldRef<"CheckinEntry", 'DateTime'>
    readonly answers: FieldRef<"CheckinEntry", 'Json'>
    readonly notes: FieldRef<"CheckinEntry", 'String'>
    readonly progress: FieldRef<"CheckinEntry", 'Int'>
    readonly createdAt: FieldRef<"CheckinEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckinEntry findUnique
   */
  export type CheckinEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * Filter, which CheckinEntry to fetch.
     */
    where: CheckinEntryWhereUniqueInput
  }

  /**
   * CheckinEntry findUniqueOrThrow
   */
  export type CheckinEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * Filter, which CheckinEntry to fetch.
     */
    where: CheckinEntryWhereUniqueInput
  }

  /**
   * CheckinEntry findFirst
   */
  export type CheckinEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * Filter, which CheckinEntry to fetch.
     */
    where?: CheckinEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinEntries to fetch.
     */
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckinEntries.
     */
    cursor?: CheckinEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckinEntries.
     */
    distinct?: CheckinEntryScalarFieldEnum | CheckinEntryScalarFieldEnum[]
  }

  /**
   * CheckinEntry findFirstOrThrow
   */
  export type CheckinEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * Filter, which CheckinEntry to fetch.
     */
    where?: CheckinEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinEntries to fetch.
     */
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckinEntries.
     */
    cursor?: CheckinEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckinEntries.
     */
    distinct?: CheckinEntryScalarFieldEnum | CheckinEntryScalarFieldEnum[]
  }

  /**
   * CheckinEntry findMany
   */
  export type CheckinEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * Filter, which CheckinEntries to fetch.
     */
    where?: CheckinEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinEntries to fetch.
     */
    orderBy?: CheckinEntryOrderByWithRelationInput | CheckinEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckinEntries.
     */
    cursor?: CheckinEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinEntries.
     */
    skip?: number
    distinct?: CheckinEntryScalarFieldEnum | CheckinEntryScalarFieldEnum[]
  }

  /**
   * CheckinEntry create
   */
  export type CheckinEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckinEntry.
     */
    data: XOR<CheckinEntryCreateInput, CheckinEntryUncheckedCreateInput>
  }

  /**
   * CheckinEntry createMany
   */
  export type CheckinEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckinEntries.
     */
    data: CheckinEntryCreateManyInput | CheckinEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckinEntry createManyAndReturn
   */
  export type CheckinEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * The data used to create many CheckinEntries.
     */
    data: CheckinEntryCreateManyInput | CheckinEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckinEntry update
   */
  export type CheckinEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckinEntry.
     */
    data: XOR<CheckinEntryUpdateInput, CheckinEntryUncheckedUpdateInput>
    /**
     * Choose, which CheckinEntry to update.
     */
    where: CheckinEntryWhereUniqueInput
  }

  /**
   * CheckinEntry updateMany
   */
  export type CheckinEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckinEntries.
     */
    data: XOR<CheckinEntryUpdateManyMutationInput, CheckinEntryUncheckedUpdateManyInput>
    /**
     * Filter which CheckinEntries to update
     */
    where?: CheckinEntryWhereInput
    /**
     * Limit how many CheckinEntries to update.
     */
    limit?: number
  }

  /**
   * CheckinEntry updateManyAndReturn
   */
  export type CheckinEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * The data used to update CheckinEntries.
     */
    data: XOR<CheckinEntryUpdateManyMutationInput, CheckinEntryUncheckedUpdateManyInput>
    /**
     * Filter which CheckinEntries to update
     */
    where?: CheckinEntryWhereInput
    /**
     * Limit how many CheckinEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckinEntry upsert
   */
  export type CheckinEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckinEntry to update in case it exists.
     */
    where: CheckinEntryWhereUniqueInput
    /**
     * In case the CheckinEntry found by the `where` argument doesn't exist, create a new CheckinEntry with this data.
     */
    create: XOR<CheckinEntryCreateInput, CheckinEntryUncheckedCreateInput>
    /**
     * In case the CheckinEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinEntryUpdateInput, CheckinEntryUncheckedUpdateInput>
  }

  /**
   * CheckinEntry delete
   */
  export type CheckinEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
    /**
     * Filter which CheckinEntry to delete.
     */
    where: CheckinEntryWhereUniqueInput
  }

  /**
   * CheckinEntry deleteMany
   */
  export type CheckinEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckinEntries to delete
     */
    where?: CheckinEntryWhereInput
    /**
     * Limit how many CheckinEntries to delete.
     */
    limit?: number
  }

  /**
   * CheckinEntry.goal
   */
  export type CheckinEntry$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * CheckinEntry.milestone
   */
  export type CheckinEntry$milestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
  }

  /**
   * CheckinEntry without action
   */
  export type CheckinEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinEntry
     */
    select?: CheckinEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinEntry
     */
    omit?: CheckinEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinEntryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    complexity: 'complexity',
    suggestedWeeks: 'suggestedWeeks',
    chunking: 'chunking',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const JourneyScalarFieldEnum: {
    id: 'id',
    goalId: 'goalId',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    meta: 'meta',
    createdAt: 'createdAt'
  };

  export type JourneyScalarFieldEnum = (typeof JourneyScalarFieldEnum)[keyof typeof JourneyScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    journeyId: 'journeyId',
    title: 'title',
    description: 'description',
    orderIndex: 'orderIndex',
    startWeek: 'startWeek',
    endWeek: 'endWeek',
    estimatedHours: 'estimatedHours',
    progress: 'progress',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const MilestoneDependencyScalarFieldEnum: {
    id: 'id',
    milestoneId: 'milestoneId',
    dependsOnId: 'dependsOnId',
    createdAt: 'createdAt'
  };

  export type MilestoneDependencyScalarFieldEnum = (typeof MilestoneDependencyScalarFieldEnum)[keyof typeof MilestoneDependencyScalarFieldEnum]


  export const SuggestionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    goalId: 'goalId',
    provider: 'provider',
    response: 'response',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type SuggestionScalarFieldEnum = (typeof SuggestionScalarFieldEnum)[keyof typeof SuggestionScalarFieldEnum]


  export const TutorSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    goalId: 'goalId',
    milestoneId: 'milestoneId',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TutorSessionScalarFieldEnum = (typeof TutorSessionScalarFieldEnum)[keyof typeof TutorSessionScalarFieldEnum]


  export const TutorMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    sender: 'sender',
    content: 'content',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type TutorMessageScalarFieldEnum = (typeof TutorMessageScalarFieldEnum)[keyof typeof TutorMessageScalarFieldEnum]


  export const SessionSummaryScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    summaryText: 'summaryText',
    keyPoints: 'keyPoints',
    actionItems: 'actionItems',
    provider: 'provider',
    rawResponse: 'rawResponse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionSummaryScalarFieldEnum = (typeof SessionSummaryScalarFieldEnum)[keyof typeof SessionSummaryScalarFieldEnum]


  export const CheckinScheduleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    goalId: 'goalId',
    milestoneId: 'milestoneId',
    frequency: 'frequency',
    nextDueAt: 'nextDueAt',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CheckinScheduleScalarFieldEnum = (typeof CheckinScheduleScalarFieldEnum)[keyof typeof CheckinScheduleScalarFieldEnum]


  export const CheckinEntryScalarFieldEnum: {
    id: 'id',
    scheduleId: 'scheduleId',
    userId: 'userId',
    goalId: 'goalId',
    milestoneId: 'milestoneId',
    completedAt: 'completedAt',
    answers: 'answers',
    notes: 'notes',
    progress: 'progress',
    createdAt: 'createdAt'
  };

  export type CheckinEntryScalarFieldEnum = (typeof CheckinEntryScalarFieldEnum)[keyof typeof CheckinEntryScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    goals?: GoalListRelationFilter
    suggestions?: SuggestionListRelationFilter
    tutorSessions?: TutorSessionListRelationFilter
    sessionSummaries?: SessionSummaryListRelationFilter
    CheckinSchedule?: CheckinScheduleListRelationFilter
    CheckinEntry?: CheckinEntryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goals?: GoalOrderByRelationAggregateInput
    suggestions?: SuggestionOrderByRelationAggregateInput
    tutorSessions?: TutorSessionOrderByRelationAggregateInput
    sessionSummaries?: SessionSummaryOrderByRelationAggregateInput
    CheckinSchedule?: CheckinScheduleOrderByRelationAggregateInput
    CheckinEntry?: CheckinEntryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    goals?: GoalListRelationFilter
    suggestions?: SuggestionListRelationFilter
    tutorSessions?: TutorSessionListRelationFilter
    sessionSummaries?: SessionSummaryListRelationFilter
    CheckinSchedule?: CheckinScheduleListRelationFilter
    CheckinEntry?: CheckinEntryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: UuidFilter<"Goal"> | string
    userId?: UuidFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    complexity?: IntNullableFilter<"Goal"> | number | null
    suggestedWeeks?: IntNullableFilter<"Goal"> | number | null
    chunking?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    journeys?: JourneyListRelationFilter
    suggestions?: SuggestionListRelationFilter
    tutorSessions?: TutorSessionListRelationFilter
    CheckinSchedule?: CheckinScheduleListRelationFilter
    CheckinEntry?: CheckinEntryListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    complexity?: SortOrderInput | SortOrder
    suggestedWeeks?: SortOrderInput | SortOrder
    chunking?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    journeys?: JourneyOrderByRelationAggregateInput
    suggestions?: SuggestionOrderByRelationAggregateInput
    tutorSessions?: TutorSessionOrderByRelationAggregateInput
    CheckinSchedule?: CheckinScheduleOrderByRelationAggregateInput
    CheckinEntry?: CheckinEntryOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    userId?: UuidFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    complexity?: IntNullableFilter<"Goal"> | number | null
    suggestedWeeks?: IntNullableFilter<"Goal"> | number | null
    chunking?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    journeys?: JourneyListRelationFilter
    suggestions?: SuggestionListRelationFilter
    tutorSessions?: TutorSessionListRelationFilter
    CheckinSchedule?: CheckinScheduleListRelationFilter
    CheckinEntry?: CheckinEntryListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    complexity?: SortOrderInput | SortOrder
    suggestedWeeks?: SortOrderInput | SortOrder
    chunking?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Goal"> | string
    userId?: UuidWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    complexity?: IntNullableWithAggregatesFilter<"Goal"> | number | null
    suggestedWeeks?: IntNullableWithAggregatesFilter<"Goal"> | number | null
    chunking?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type JourneyWhereInput = {
    AND?: JourneyWhereInput | JourneyWhereInput[]
    OR?: JourneyWhereInput[]
    NOT?: JourneyWhereInput | JourneyWhereInput[]
    id?: UuidFilter<"Journey"> | string
    goalId?: UuidFilter<"Journey"> | string
    title?: StringNullableFilter<"Journey"> | string | null
    startDate?: DateTimeNullableFilter<"Journey"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Journey"> | Date | string | null
    meta?: JsonNullableFilter<"Journey">
    createdAt?: DateTimeFilter<"Journey"> | Date | string
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    milestones?: MilestoneListRelationFilter
  }

  export type JourneyOrderByWithRelationInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    goal?: GoalOrderByWithRelationInput
    milestones?: MilestoneOrderByRelationAggregateInput
  }

  export type JourneyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JourneyWhereInput | JourneyWhereInput[]
    OR?: JourneyWhereInput[]
    NOT?: JourneyWhereInput | JourneyWhereInput[]
    goalId?: UuidFilter<"Journey"> | string
    title?: StringNullableFilter<"Journey"> | string | null
    startDate?: DateTimeNullableFilter<"Journey"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Journey"> | Date | string | null
    meta?: JsonNullableFilter<"Journey">
    createdAt?: DateTimeFilter<"Journey"> | Date | string
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    milestones?: MilestoneListRelationFilter
  }, "id">

  export type JourneyOrderByWithAggregationInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JourneyCountOrderByAggregateInput
    _max?: JourneyMaxOrderByAggregateInput
    _min?: JourneyMinOrderByAggregateInput
  }

  export type JourneyScalarWhereWithAggregatesInput = {
    AND?: JourneyScalarWhereWithAggregatesInput | JourneyScalarWhereWithAggregatesInput[]
    OR?: JourneyScalarWhereWithAggregatesInput[]
    NOT?: JourneyScalarWhereWithAggregatesInput | JourneyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Journey"> | string
    goalId?: UuidWithAggregatesFilter<"Journey"> | string
    title?: StringNullableWithAggregatesFilter<"Journey"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    meta?: JsonNullableWithAggregatesFilter<"Journey">
    createdAt?: DateTimeWithAggregatesFilter<"Journey"> | Date | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: UuidFilter<"Milestone"> | string
    journeyId?: UuidFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    orderIndex?: IntFilter<"Milestone"> | number
    startWeek?: IntNullableFilter<"Milestone"> | number | null
    endWeek?: IntNullableFilter<"Milestone"> | number | null
    estimatedHours?: IntNullableFilter<"Milestone"> | number | null
    progress?: IntFilter<"Milestone"> | number
    metadata?: JsonNullableFilter<"Milestone">
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    journey?: XOR<JourneyScalarRelationFilter, JourneyWhereInput>
    dependencies?: MilestoneDependencyListRelationFilter
    requiredBy?: MilestoneDependencyListRelationFilter
    tutorSessions?: TutorSessionListRelationFilter
    CheckinSchedule?: CheckinScheduleListRelationFilter
    CheckinEntry?: CheckinEntryListRelationFilter
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    journeyId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    startWeek?: SortOrderInput | SortOrder
    endWeek?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    progress?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    journey?: JourneyOrderByWithRelationInput
    dependencies?: MilestoneDependencyOrderByRelationAggregateInput
    requiredBy?: MilestoneDependencyOrderByRelationAggregateInput
    tutorSessions?: TutorSessionOrderByRelationAggregateInput
    CheckinSchedule?: CheckinScheduleOrderByRelationAggregateInput
    CheckinEntry?: CheckinEntryOrderByRelationAggregateInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    journeyId?: UuidFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    orderIndex?: IntFilter<"Milestone"> | number
    startWeek?: IntNullableFilter<"Milestone"> | number | null
    endWeek?: IntNullableFilter<"Milestone"> | number | null
    estimatedHours?: IntNullableFilter<"Milestone"> | number | null
    progress?: IntFilter<"Milestone"> | number
    metadata?: JsonNullableFilter<"Milestone">
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    journey?: XOR<JourneyScalarRelationFilter, JourneyWhereInput>
    dependencies?: MilestoneDependencyListRelationFilter
    requiredBy?: MilestoneDependencyListRelationFilter
    tutorSessions?: TutorSessionListRelationFilter
    CheckinSchedule?: CheckinScheduleListRelationFilter
    CheckinEntry?: CheckinEntryListRelationFilter
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    journeyId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    startWeek?: SortOrderInput | SortOrder
    endWeek?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    progress?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Milestone"> | string
    journeyId?: UuidWithAggregatesFilter<"Milestone"> | string
    title?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    orderIndex?: IntWithAggregatesFilter<"Milestone"> | number
    startWeek?: IntNullableWithAggregatesFilter<"Milestone"> | number | null
    endWeek?: IntNullableWithAggregatesFilter<"Milestone"> | number | null
    estimatedHours?: IntNullableWithAggregatesFilter<"Milestone"> | number | null
    progress?: IntWithAggregatesFilter<"Milestone"> | number
    metadata?: JsonNullableWithAggregatesFilter<"Milestone">
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
  }

  export type MilestoneDependencyWhereInput = {
    AND?: MilestoneDependencyWhereInput | MilestoneDependencyWhereInput[]
    OR?: MilestoneDependencyWhereInput[]
    NOT?: MilestoneDependencyWhereInput | MilestoneDependencyWhereInput[]
    id?: UuidFilter<"MilestoneDependency"> | string
    milestoneId?: UuidFilter<"MilestoneDependency"> | string
    dependsOnId?: UuidFilter<"MilestoneDependency"> | string
    createdAt?: DateTimeFilter<"MilestoneDependency"> | Date | string
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
    dependsOn?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }

  export type MilestoneDependencyOrderByWithRelationInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    dependsOnId?: SortOrder
    createdAt?: SortOrder
    milestone?: MilestoneOrderByWithRelationInput
    dependsOn?: MilestoneOrderByWithRelationInput
  }

  export type MilestoneDependencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneDependencyWhereInput | MilestoneDependencyWhereInput[]
    OR?: MilestoneDependencyWhereInput[]
    NOT?: MilestoneDependencyWhereInput | MilestoneDependencyWhereInput[]
    milestoneId?: UuidFilter<"MilestoneDependency"> | string
    dependsOnId?: UuidFilter<"MilestoneDependency"> | string
    createdAt?: DateTimeFilter<"MilestoneDependency"> | Date | string
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
    dependsOn?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }, "id">

  export type MilestoneDependencyOrderByWithAggregationInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    dependsOnId?: SortOrder
    createdAt?: SortOrder
    _count?: MilestoneDependencyCountOrderByAggregateInput
    _max?: MilestoneDependencyMaxOrderByAggregateInput
    _min?: MilestoneDependencyMinOrderByAggregateInput
  }

  export type MilestoneDependencyScalarWhereWithAggregatesInput = {
    AND?: MilestoneDependencyScalarWhereWithAggregatesInput | MilestoneDependencyScalarWhereWithAggregatesInput[]
    OR?: MilestoneDependencyScalarWhereWithAggregatesInput[]
    NOT?: MilestoneDependencyScalarWhereWithAggregatesInput | MilestoneDependencyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MilestoneDependency"> | string
    milestoneId?: UuidWithAggregatesFilter<"MilestoneDependency"> | string
    dependsOnId?: UuidWithAggregatesFilter<"MilestoneDependency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MilestoneDependency"> | Date | string
  }

  export type SuggestionWhereInput = {
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    id?: UuidFilter<"Suggestion"> | string
    userId?: UuidFilter<"Suggestion"> | string
    goalId?: UuidFilter<"Suggestion"> | string
    provider?: StringFilter<"Suggestion"> | string
    response?: JsonFilter<"Suggestion">
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
  }

  export type SuggestionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    provider?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
  }

  export type SuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    userId?: UuidFilter<"Suggestion"> | string
    goalId?: UuidFilter<"Suggestion"> | string
    provider?: StringFilter<"Suggestion"> | string
    response?: JsonFilter<"Suggestion">
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
  }, "id">

  export type SuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    provider?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: SuggestionCountOrderByAggregateInput
    _max?: SuggestionMaxOrderByAggregateInput
    _min?: SuggestionMinOrderByAggregateInput
  }

  export type SuggestionScalarWhereWithAggregatesInput = {
    AND?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    OR?: SuggestionScalarWhereWithAggregatesInput[]
    NOT?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Suggestion"> | string
    userId?: UuidWithAggregatesFilter<"Suggestion"> | string
    goalId?: UuidWithAggregatesFilter<"Suggestion"> | string
    provider?: StringWithAggregatesFilter<"Suggestion"> | string
    response?: JsonWithAggregatesFilter<"Suggestion">
    createdAt?: DateTimeWithAggregatesFilter<"Suggestion"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Suggestion"> | Date | string | null
  }

  export type TutorSessionWhereInput = {
    AND?: TutorSessionWhereInput | TutorSessionWhereInput[]
    OR?: TutorSessionWhereInput[]
    NOT?: TutorSessionWhereInput | TutorSessionWhereInput[]
    id?: UuidFilter<"TutorSession"> | string
    userId?: UuidFilter<"TutorSession"> | string
    goalId?: UuidNullableFilter<"TutorSession"> | string | null
    milestoneId?: UuidNullableFilter<"TutorSession"> | string | null
    title?: StringNullableFilter<"TutorSession"> | string | null
    status?: StringFilter<"TutorSession"> | string
    createdAt?: DateTimeFilter<"TutorSession"> | Date | string
    updatedAt?: DateTimeFilter<"TutorSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
    messages?: TutorMessageListRelationFilter
    summary?: XOR<SessionSummaryNullableScalarRelationFilter, SessionSummaryWhereInput> | null
  }

  export type TutorSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
    milestone?: MilestoneOrderByWithRelationInput
    messages?: TutorMessageOrderByRelationAggregateInput
    summary?: SessionSummaryOrderByWithRelationInput
  }

  export type TutorSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TutorSessionWhereInput | TutorSessionWhereInput[]
    OR?: TutorSessionWhereInput[]
    NOT?: TutorSessionWhereInput | TutorSessionWhereInput[]
    userId?: UuidFilter<"TutorSession"> | string
    goalId?: UuidNullableFilter<"TutorSession"> | string | null
    milestoneId?: UuidNullableFilter<"TutorSession"> | string | null
    title?: StringNullableFilter<"TutorSession"> | string | null
    status?: StringFilter<"TutorSession"> | string
    createdAt?: DateTimeFilter<"TutorSession"> | Date | string
    updatedAt?: DateTimeFilter<"TutorSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
    messages?: TutorMessageListRelationFilter
    summary?: XOR<SessionSummaryNullableScalarRelationFilter, SessionSummaryWhereInput> | null
  }, "id">

  export type TutorSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TutorSessionCountOrderByAggregateInput
    _max?: TutorSessionMaxOrderByAggregateInput
    _min?: TutorSessionMinOrderByAggregateInput
  }

  export type TutorSessionScalarWhereWithAggregatesInput = {
    AND?: TutorSessionScalarWhereWithAggregatesInput | TutorSessionScalarWhereWithAggregatesInput[]
    OR?: TutorSessionScalarWhereWithAggregatesInput[]
    NOT?: TutorSessionScalarWhereWithAggregatesInput | TutorSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TutorSession"> | string
    userId?: UuidWithAggregatesFilter<"TutorSession"> | string
    goalId?: UuidNullableWithAggregatesFilter<"TutorSession"> | string | null
    milestoneId?: UuidNullableWithAggregatesFilter<"TutorSession"> | string | null
    title?: StringNullableWithAggregatesFilter<"TutorSession"> | string | null
    status?: StringWithAggregatesFilter<"TutorSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TutorSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TutorSession"> | Date | string
  }

  export type TutorMessageWhereInput = {
    AND?: TutorMessageWhereInput | TutorMessageWhereInput[]
    OR?: TutorMessageWhereInput[]
    NOT?: TutorMessageWhereInput | TutorMessageWhereInput[]
    id?: UuidFilter<"TutorMessage"> | string
    sessionId?: UuidFilter<"TutorMessage"> | string
    sender?: StringFilter<"TutorMessage"> | string
    content?: StringFilter<"TutorMessage"> | string
    metadata?: JsonNullableFilter<"TutorMessage">
    createdAt?: DateTimeFilter<"TutorMessage"> | Date | string
    session?: XOR<TutorSessionScalarRelationFilter, TutorSessionWhereInput>
  }

  export type TutorMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: TutorSessionOrderByWithRelationInput
  }

  export type TutorMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TutorMessageWhereInput | TutorMessageWhereInput[]
    OR?: TutorMessageWhereInput[]
    NOT?: TutorMessageWhereInput | TutorMessageWhereInput[]
    sessionId?: UuidFilter<"TutorMessage"> | string
    sender?: StringFilter<"TutorMessage"> | string
    content?: StringFilter<"TutorMessage"> | string
    metadata?: JsonNullableFilter<"TutorMessage">
    createdAt?: DateTimeFilter<"TutorMessage"> | Date | string
    session?: XOR<TutorSessionScalarRelationFilter, TutorSessionWhereInput>
  }, "id">

  export type TutorMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TutorMessageCountOrderByAggregateInput
    _max?: TutorMessageMaxOrderByAggregateInput
    _min?: TutorMessageMinOrderByAggregateInput
  }

  export type TutorMessageScalarWhereWithAggregatesInput = {
    AND?: TutorMessageScalarWhereWithAggregatesInput | TutorMessageScalarWhereWithAggregatesInput[]
    OR?: TutorMessageScalarWhereWithAggregatesInput[]
    NOT?: TutorMessageScalarWhereWithAggregatesInput | TutorMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TutorMessage"> | string
    sessionId?: UuidWithAggregatesFilter<"TutorMessage"> | string
    sender?: StringWithAggregatesFilter<"TutorMessage"> | string
    content?: StringWithAggregatesFilter<"TutorMessage"> | string
    metadata?: JsonNullableWithAggregatesFilter<"TutorMessage">
    createdAt?: DateTimeWithAggregatesFilter<"TutorMessage"> | Date | string
  }

  export type SessionSummaryWhereInput = {
    AND?: SessionSummaryWhereInput | SessionSummaryWhereInput[]
    OR?: SessionSummaryWhereInput[]
    NOT?: SessionSummaryWhereInput | SessionSummaryWhereInput[]
    id?: UuidFilter<"SessionSummary"> | string
    sessionId?: UuidFilter<"SessionSummary"> | string
    userId?: UuidFilter<"SessionSummary"> | string
    summaryText?: StringFilter<"SessionSummary"> | string
    keyPoints?: JsonNullableFilter<"SessionSummary">
    actionItems?: JsonNullableFilter<"SessionSummary">
    provider?: StringFilter<"SessionSummary"> | string
    rawResponse?: JsonNullableFilter<"SessionSummary">
    createdAt?: DateTimeFilter<"SessionSummary"> | Date | string
    updatedAt?: DateTimeFilter<"SessionSummary"> | Date | string
    session?: XOR<TutorSessionScalarRelationFilter, TutorSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionSummaryOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    summaryText?: SortOrder
    keyPoints?: SortOrderInput | SortOrder
    actionItems?: SortOrderInput | SortOrder
    provider?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: TutorSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SessionSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: SessionSummaryWhereInput | SessionSummaryWhereInput[]
    OR?: SessionSummaryWhereInput[]
    NOT?: SessionSummaryWhereInput | SessionSummaryWhereInput[]
    userId?: UuidFilter<"SessionSummary"> | string
    summaryText?: StringFilter<"SessionSummary"> | string
    keyPoints?: JsonNullableFilter<"SessionSummary">
    actionItems?: JsonNullableFilter<"SessionSummary">
    provider?: StringFilter<"SessionSummary"> | string
    rawResponse?: JsonNullableFilter<"SessionSummary">
    createdAt?: DateTimeFilter<"SessionSummary"> | Date | string
    updatedAt?: DateTimeFilter<"SessionSummary"> | Date | string
    session?: XOR<TutorSessionScalarRelationFilter, TutorSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId">

  export type SessionSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    summaryText?: SortOrder
    keyPoints?: SortOrderInput | SortOrder
    actionItems?: SortOrderInput | SortOrder
    provider?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionSummaryCountOrderByAggregateInput
    _max?: SessionSummaryMaxOrderByAggregateInput
    _min?: SessionSummaryMinOrderByAggregateInput
  }

  export type SessionSummaryScalarWhereWithAggregatesInput = {
    AND?: SessionSummaryScalarWhereWithAggregatesInput | SessionSummaryScalarWhereWithAggregatesInput[]
    OR?: SessionSummaryScalarWhereWithAggregatesInput[]
    NOT?: SessionSummaryScalarWhereWithAggregatesInput | SessionSummaryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SessionSummary"> | string
    sessionId?: UuidWithAggregatesFilter<"SessionSummary"> | string
    userId?: UuidWithAggregatesFilter<"SessionSummary"> | string
    summaryText?: StringWithAggregatesFilter<"SessionSummary"> | string
    keyPoints?: JsonNullableWithAggregatesFilter<"SessionSummary">
    actionItems?: JsonNullableWithAggregatesFilter<"SessionSummary">
    provider?: StringWithAggregatesFilter<"SessionSummary"> | string
    rawResponse?: JsonNullableWithAggregatesFilter<"SessionSummary">
    createdAt?: DateTimeWithAggregatesFilter<"SessionSummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SessionSummary"> | Date | string
  }

  export type CheckinScheduleWhereInput = {
    AND?: CheckinScheduleWhereInput | CheckinScheduleWhereInput[]
    OR?: CheckinScheduleWhereInput[]
    NOT?: CheckinScheduleWhereInput | CheckinScheduleWhereInput[]
    id?: UuidFilter<"CheckinSchedule"> | string
    userId?: UuidFilter<"CheckinSchedule"> | string
    goalId?: UuidNullableFilter<"CheckinSchedule"> | string | null
    milestoneId?: UuidNullableFilter<"CheckinSchedule"> | string | null
    frequency?: StringFilter<"CheckinSchedule"> | string
    nextDueAt?: DateTimeNullableFilter<"CheckinSchedule"> | Date | string | null
    enabled?: BoolFilter<"CheckinSchedule"> | boolean
    createdAt?: DateTimeFilter<"CheckinSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"CheckinSchedule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
    entries?: CheckinEntryListRelationFilter
  }

  export type CheckinScheduleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    frequency?: SortOrder
    nextDueAt?: SortOrderInput | SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
    milestone?: MilestoneOrderByWithRelationInput
    entries?: CheckinEntryOrderByRelationAggregateInput
  }

  export type CheckinScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckinScheduleWhereInput | CheckinScheduleWhereInput[]
    OR?: CheckinScheduleWhereInput[]
    NOT?: CheckinScheduleWhereInput | CheckinScheduleWhereInput[]
    userId?: UuidFilter<"CheckinSchedule"> | string
    goalId?: UuidNullableFilter<"CheckinSchedule"> | string | null
    milestoneId?: UuidNullableFilter<"CheckinSchedule"> | string | null
    frequency?: StringFilter<"CheckinSchedule"> | string
    nextDueAt?: DateTimeNullableFilter<"CheckinSchedule"> | Date | string | null
    enabled?: BoolFilter<"CheckinSchedule"> | boolean
    createdAt?: DateTimeFilter<"CheckinSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"CheckinSchedule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
    entries?: CheckinEntryListRelationFilter
  }, "id">

  export type CheckinScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    frequency?: SortOrder
    nextDueAt?: SortOrderInput | SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CheckinScheduleCountOrderByAggregateInput
    _max?: CheckinScheduleMaxOrderByAggregateInput
    _min?: CheckinScheduleMinOrderByAggregateInput
  }

  export type CheckinScheduleScalarWhereWithAggregatesInput = {
    AND?: CheckinScheduleScalarWhereWithAggregatesInput | CheckinScheduleScalarWhereWithAggregatesInput[]
    OR?: CheckinScheduleScalarWhereWithAggregatesInput[]
    NOT?: CheckinScheduleScalarWhereWithAggregatesInput | CheckinScheduleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CheckinSchedule"> | string
    userId?: UuidWithAggregatesFilter<"CheckinSchedule"> | string
    goalId?: UuidNullableWithAggregatesFilter<"CheckinSchedule"> | string | null
    milestoneId?: UuidNullableWithAggregatesFilter<"CheckinSchedule"> | string | null
    frequency?: StringWithAggregatesFilter<"CheckinSchedule"> | string
    nextDueAt?: DateTimeNullableWithAggregatesFilter<"CheckinSchedule"> | Date | string | null
    enabled?: BoolWithAggregatesFilter<"CheckinSchedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CheckinSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CheckinSchedule"> | Date | string
  }

  export type CheckinEntryWhereInput = {
    AND?: CheckinEntryWhereInput | CheckinEntryWhereInput[]
    OR?: CheckinEntryWhereInput[]
    NOT?: CheckinEntryWhereInput | CheckinEntryWhereInput[]
    id?: UuidFilter<"CheckinEntry"> | string
    scheduleId?: UuidFilter<"CheckinEntry"> | string
    userId?: UuidFilter<"CheckinEntry"> | string
    goalId?: UuidNullableFilter<"CheckinEntry"> | string | null
    milestoneId?: UuidNullableFilter<"CheckinEntry"> | string | null
    completedAt?: DateTimeFilter<"CheckinEntry"> | Date | string
    answers?: JsonNullableFilter<"CheckinEntry">
    notes?: StringNullableFilter<"CheckinEntry"> | string | null
    progress?: IntNullableFilter<"CheckinEntry"> | number | null
    createdAt?: DateTimeFilter<"CheckinEntry"> | Date | string
    schedule?: XOR<CheckinScheduleScalarRelationFilter, CheckinScheduleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
  }

  export type CheckinEntryOrderByWithRelationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    answers?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    schedule?: CheckinScheduleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
    milestone?: MilestoneOrderByWithRelationInput
  }

  export type CheckinEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckinEntryWhereInput | CheckinEntryWhereInput[]
    OR?: CheckinEntryWhereInput[]
    NOT?: CheckinEntryWhereInput | CheckinEntryWhereInput[]
    scheduleId?: UuidFilter<"CheckinEntry"> | string
    userId?: UuidFilter<"CheckinEntry"> | string
    goalId?: UuidNullableFilter<"CheckinEntry"> | string | null
    milestoneId?: UuidNullableFilter<"CheckinEntry"> | string | null
    completedAt?: DateTimeFilter<"CheckinEntry"> | Date | string
    answers?: JsonNullableFilter<"CheckinEntry">
    notes?: StringNullableFilter<"CheckinEntry"> | string | null
    progress?: IntNullableFilter<"CheckinEntry"> | number | null
    createdAt?: DateTimeFilter<"CheckinEntry"> | Date | string
    schedule?: XOR<CheckinScheduleScalarRelationFilter, CheckinScheduleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
  }, "id">

  export type CheckinEntryOrderByWithAggregationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    answers?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CheckinEntryCountOrderByAggregateInput
    _avg?: CheckinEntryAvgOrderByAggregateInput
    _max?: CheckinEntryMaxOrderByAggregateInput
    _min?: CheckinEntryMinOrderByAggregateInput
    _sum?: CheckinEntrySumOrderByAggregateInput
  }

  export type CheckinEntryScalarWhereWithAggregatesInput = {
    AND?: CheckinEntryScalarWhereWithAggregatesInput | CheckinEntryScalarWhereWithAggregatesInput[]
    OR?: CheckinEntryScalarWhereWithAggregatesInput[]
    NOT?: CheckinEntryScalarWhereWithAggregatesInput | CheckinEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CheckinEntry"> | string
    scheduleId?: UuidWithAggregatesFilter<"CheckinEntry"> | string
    userId?: UuidWithAggregatesFilter<"CheckinEntry"> | string
    goalId?: UuidNullableWithAggregatesFilter<"CheckinEntry"> | string | null
    milestoneId?: UuidNullableWithAggregatesFilter<"CheckinEntry"> | string | null
    completedAt?: DateTimeWithAggregatesFilter<"CheckinEntry"> | Date | string
    answers?: JsonNullableWithAggregatesFilter<"CheckinEntry">
    notes?: StringNullableWithAggregatesFilter<"CheckinEntry"> | string | null
    progress?: IntNullableWithAggregatesFilter<"CheckinEntry"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CheckinEntry"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    suggestions?: SuggestionCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryUncheckedCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUncheckedUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    journeys?: JourneyCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyUncheckedCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    journeys?: JourneyUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUncheckedUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyCreateInput = {
    id?: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    goal: GoalCreateNestedOneWithoutJourneysInput
    milestones?: MilestoneCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUncheckedCreateInput = {
    id?: string
    goalId: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutJourneysNestedInput
    milestones?: MilestoneUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyCreateManyInput = {
    id?: string
    goalId: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type JourneyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMilestonesInput
    dependencies?: MilestoneDependencyCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    journeyId: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dependencies?: MilestoneDependencyUncheckedCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMilestonesNestedInput
    dependencies?: MilestoneDependencyUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencies?: MilestoneDependencyUncheckedUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneCreateManyInput = {
    id?: string
    journeyId: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyCreateInput = {
    id?: string
    createdAt?: Date | string
    milestone: MilestoneCreateNestedOneWithoutDependenciesInput
    dependsOn: MilestoneCreateNestedOneWithoutRequiredByInput
  }

  export type MilestoneDependencyUncheckedCreateInput = {
    id?: string
    milestoneId: string
    dependsOnId: string
    createdAt?: Date | string
  }

  export type MilestoneDependencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateOneRequiredWithoutDependenciesNestedInput
    dependsOn?: MilestoneUpdateOneRequiredWithoutRequiredByNestedInput
  }

  export type MilestoneDependencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyCreateManyInput = {
    id?: string
    milestoneId: string
    dependsOnId: string
    createdAt?: Date | string
  }

  export type MilestoneDependencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateInput = {
    id?: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutSuggestionsInput
    goal: GoalCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateInput = {
    id?: string
    userId: string
    goalId: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSuggestionsNestedInput
    goal?: GoalUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuggestionCreateManyInput = {
    id?: string
    userId: string
    goalId: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TutorSessionCreateInput = {
    id?: string
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTutorSessionsInput
    goal?: GoalCreateNestedOneWithoutTutorSessionsInput
    milestone?: MilestoneCreateNestedOneWithoutTutorSessionsInput
    messages?: TutorMessageCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionUncheckedCreateInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TutorMessageUncheckedCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTutorSessionsNestedInput
    goal?: GoalUpdateOneWithoutTutorSessionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTutorSessionsNestedInput
    messages?: TutorMessageUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TutorMessageUncheckedUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionCreateManyInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TutorSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorMessageCreateInput = {
    id?: string
    sender: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    session: TutorSessionCreateNestedOneWithoutMessagesInput
  }

  export type TutorMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    sender: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TutorMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TutorSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TutorMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorMessageCreateManyInput = {
    id?: string
    sessionId: string
    sender: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TutorMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionSummaryCreateInput = {
    id?: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    session: TutorSessionCreateNestedOneWithoutSummaryInput
    user: UserCreateNestedOneWithoutSessionSummariesInput
  }

  export type SessionSummaryUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TutorSessionUpdateOneRequiredWithoutSummaryNestedInput
    user?: UserUpdateOneRequiredWithoutSessionSummariesNestedInput
  }

  export type SessionSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionSummaryCreateManyInput = {
    id?: string
    sessionId: string
    userId: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinScheduleCreateInput = {
    id?: string
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCheckinScheduleInput
    goal?: GoalCreateNestedOneWithoutCheckinScheduleInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinScheduleInput
    entries?: CheckinEntryCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleUncheckedCreateInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: CheckinEntryUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinScheduleNestedInput
    goal?: GoalUpdateOneWithoutCheckinScheduleNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinScheduleNestedInput
    entries?: CheckinEntryUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CheckinEntryUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleCreateManyInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryCreateInput = {
    id?: string
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
    schedule: CheckinScheduleCreateNestedOneWithoutEntriesInput
    user: UserCreateNestedOneWithoutCheckinEntryInput
    goal?: GoalCreateNestedOneWithoutCheckinEntryInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinEntryInput
  }

  export type CheckinEntryUncheckedCreateInput = {
    id?: string
    scheduleId: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type CheckinEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: CheckinScheduleUpdateOneRequiredWithoutEntriesNestedInput
    user?: UserUpdateOneRequiredWithoutCheckinEntryNestedInput
    goal?: GoalUpdateOneWithoutCheckinEntryNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinEntryNestedInput
  }

  export type CheckinEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryCreateManyInput = {
    id?: string
    scheduleId: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type CheckinEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type SuggestionListRelationFilter = {
    every?: SuggestionWhereInput
    some?: SuggestionWhereInput
    none?: SuggestionWhereInput
  }

  export type TutorSessionListRelationFilter = {
    every?: TutorSessionWhereInput
    some?: TutorSessionWhereInput
    none?: TutorSessionWhereInput
  }

  export type SessionSummaryListRelationFilter = {
    every?: SessionSummaryWhereInput
    some?: SessionSummaryWhereInput
    none?: SessionSummaryWhereInput
  }

  export type CheckinScheduleListRelationFilter = {
    every?: CheckinScheduleWhereInput
    some?: CheckinScheduleWhereInput
    none?: CheckinScheduleWhereInput
  }

  export type CheckinEntryListRelationFilter = {
    every?: CheckinEntryWhereInput
    some?: CheckinEntryWhereInput
    none?: CheckinEntryWhereInput
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckinScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckinEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JourneyListRelationFilter = {
    every?: JourneyWhereInput
    some?: JourneyWhereInput
    none?: JourneyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JourneyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    complexity?: SortOrder
    suggestedWeeks?: SortOrder
    chunking?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    complexity?: SortOrder
    suggestedWeeks?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    complexity?: SortOrder
    suggestedWeeks?: SortOrder
    chunking?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    complexity?: SortOrder
    suggestedWeeks?: SortOrder
    chunking?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    complexity?: SortOrder
    suggestedWeeks?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GoalScalarRelationFilter = {
    is?: GoalWhereInput
    isNot?: GoalWhereInput
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JourneyCountOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    meta?: SortOrder
    createdAt?: SortOrder
  }

  export type JourneyMaxOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type JourneyMinOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type JourneyScalarRelationFilter = {
    is?: JourneyWhereInput
    isNot?: JourneyWhereInput
  }

  export type MilestoneDependencyListRelationFilter = {
    every?: MilestoneDependencyWhereInput
    some?: MilestoneDependencyWhereInput
    none?: MilestoneDependencyWhereInput
  }

  export type MilestoneDependencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    startWeek?: SortOrder
    endWeek?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
    startWeek?: SortOrder
    endWeek?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    startWeek?: SortOrder
    endWeek?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    startWeek?: SortOrder
    endWeek?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    orderIndex?: SortOrder
    startWeek?: SortOrder
    endWeek?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
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

  export type MilestoneScalarRelationFilter = {
    is?: MilestoneWhereInput
    isNot?: MilestoneWhereInput
  }

  export type MilestoneDependencyCountOrderByAggregateInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    dependsOnId?: SortOrder
    createdAt?: SortOrder
  }

  export type MilestoneDependencyMaxOrderByAggregateInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    dependsOnId?: SortOrder
    createdAt?: SortOrder
  }

  export type MilestoneDependencyMinOrderByAggregateInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    dependsOnId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    provider?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type GoalNullableScalarRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type MilestoneNullableScalarRelationFilter = {
    is?: MilestoneWhereInput | null
    isNot?: MilestoneWhereInput | null
  }

  export type TutorMessageListRelationFilter = {
    every?: TutorMessageWhereInput
    some?: TutorMessageWhereInput
    none?: TutorMessageWhereInput
  }

  export type SessionSummaryNullableScalarRelationFilter = {
    is?: SessionSummaryWhereInput | null
    isNot?: SessionSummaryWhereInput | null
  }

  export type TutorMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TutorSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TutorSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TutorSessionScalarRelationFilter = {
    is?: TutorSessionWhereInput
    isNot?: TutorSessionWhereInput
  }

  export type TutorMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type TutorMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type TutorMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    summaryText?: SortOrder
    keyPoints?: SortOrder
    actionItems?: SortOrder
    provider?: SortOrder
    rawResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    summaryText?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    summaryText?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CheckinScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    frequency?: SortOrder
    nextDueAt?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckinScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    frequency?: SortOrder
    nextDueAt?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckinScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    frequency?: SortOrder
    nextDueAt?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CheckinScheduleScalarRelationFilter = {
    is?: CheckinScheduleWhereInput
    isNot?: CheckinScheduleWhereInput
  }

  export type CheckinEntryCountOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    completedAt?: SortOrder
    answers?: SortOrder
    notes?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckinEntryAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type CheckinEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    completedAt?: SortOrder
    notes?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckinEntryMinOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    milestoneId?: SortOrder
    completedAt?: SortOrder
    notes?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckinEntrySumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type SuggestionCreateNestedManyWithoutUserInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type TutorSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<TutorSessionCreateWithoutUserInput, TutorSessionUncheckedCreateWithoutUserInput> | TutorSessionCreateWithoutUserInput[] | TutorSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutUserInput | TutorSessionCreateOrConnectWithoutUserInput[]
    createMany?: TutorSessionCreateManyUserInputEnvelope
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
  }

  export type SessionSummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionSummaryCreateWithoutUserInput, SessionSummaryUncheckedCreateWithoutUserInput> | SessionSummaryCreateWithoutUserInput[] | SessionSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutUserInput | SessionSummaryCreateOrConnectWithoutUserInput[]
    createMany?: SessionSummaryCreateManyUserInputEnvelope
    connect?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
  }

  export type CheckinScheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinScheduleCreateWithoutUserInput, CheckinScheduleUncheckedCreateWithoutUserInput> | CheckinScheduleCreateWithoutUserInput[] | CheckinScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutUserInput | CheckinScheduleCreateOrConnectWithoutUserInput[]
    createMany?: CheckinScheduleCreateManyUserInputEnvelope
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
  }

  export type CheckinEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinEntryCreateWithoutUserInput, CheckinEntryUncheckedCreateWithoutUserInput> | CheckinEntryCreateWithoutUserInput[] | CheckinEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutUserInput | CheckinEntryCreateOrConnectWithoutUserInput[]
    createMany?: CheckinEntryCreateManyUserInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type TutorSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TutorSessionCreateWithoutUserInput, TutorSessionUncheckedCreateWithoutUserInput> | TutorSessionCreateWithoutUserInput[] | TutorSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutUserInput | TutorSessionCreateOrConnectWithoutUserInput[]
    createMany?: TutorSessionCreateManyUserInputEnvelope
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
  }

  export type SessionSummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionSummaryCreateWithoutUserInput, SessionSummaryUncheckedCreateWithoutUserInput> | SessionSummaryCreateWithoutUserInput[] | SessionSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutUserInput | SessionSummaryCreateOrConnectWithoutUserInput[]
    createMany?: SessionSummaryCreateManyUserInputEnvelope
    connect?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
  }

  export type CheckinScheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinScheduleCreateWithoutUserInput, CheckinScheduleUncheckedCreateWithoutUserInput> | CheckinScheduleCreateWithoutUserInput[] | CheckinScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutUserInput | CheckinScheduleCreateOrConnectWithoutUserInput[]
    createMany?: CheckinScheduleCreateManyUserInputEnvelope
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
  }

  export type CheckinEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinEntryCreateWithoutUserInput, CheckinEntryUncheckedCreateWithoutUserInput> | CheckinEntryCreateWithoutUserInput[] | CheckinEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutUserInput | CheckinEntryCreateOrConnectWithoutUserInput[]
    createMany?: CheckinEntryCreateManyUserInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type SuggestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutUserInput | SuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutUserInput | SuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutUserInput | SuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type TutorSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TutorSessionCreateWithoutUserInput, TutorSessionUncheckedCreateWithoutUserInput> | TutorSessionCreateWithoutUserInput[] | TutorSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutUserInput | TutorSessionCreateOrConnectWithoutUserInput[]
    upsert?: TutorSessionUpsertWithWhereUniqueWithoutUserInput | TutorSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TutorSessionCreateManyUserInputEnvelope
    set?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    disconnect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    delete?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    update?: TutorSessionUpdateWithWhereUniqueWithoutUserInput | TutorSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TutorSessionUpdateManyWithWhereWithoutUserInput | TutorSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
  }

  export type SessionSummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionSummaryCreateWithoutUserInput, SessionSummaryUncheckedCreateWithoutUserInput> | SessionSummaryCreateWithoutUserInput[] | SessionSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutUserInput | SessionSummaryCreateOrConnectWithoutUserInput[]
    upsert?: SessionSummaryUpsertWithWhereUniqueWithoutUserInput | SessionSummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionSummaryCreateManyUserInputEnvelope
    set?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    disconnect?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    delete?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    connect?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    update?: SessionSummaryUpdateWithWhereUniqueWithoutUserInput | SessionSummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionSummaryUpdateManyWithWhereWithoutUserInput | SessionSummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionSummaryScalarWhereInput | SessionSummaryScalarWhereInput[]
  }

  export type CheckinScheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinScheduleCreateWithoutUserInput, CheckinScheduleUncheckedCreateWithoutUserInput> | CheckinScheduleCreateWithoutUserInput[] | CheckinScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutUserInput | CheckinScheduleCreateOrConnectWithoutUserInput[]
    upsert?: CheckinScheduleUpsertWithWhereUniqueWithoutUserInput | CheckinScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinScheduleCreateManyUserInputEnvelope
    set?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    disconnect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    delete?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    update?: CheckinScheduleUpdateWithWhereUniqueWithoutUserInput | CheckinScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinScheduleUpdateManyWithWhereWithoutUserInput | CheckinScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
  }

  export type CheckinEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutUserInput, CheckinEntryUncheckedCreateWithoutUserInput> | CheckinEntryCreateWithoutUserInput[] | CheckinEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutUserInput | CheckinEntryCreateOrConnectWithoutUserInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutUserInput | CheckinEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinEntryCreateManyUserInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutUserInput | CheckinEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutUserInput | CheckinEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput> | SuggestionCreateWithoutUserInput[] | SuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutUserInput | SuggestionCreateOrConnectWithoutUserInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutUserInput | SuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuggestionCreateManyUserInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutUserInput | SuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutUserInput | SuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type TutorSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TutorSessionCreateWithoutUserInput, TutorSessionUncheckedCreateWithoutUserInput> | TutorSessionCreateWithoutUserInput[] | TutorSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutUserInput | TutorSessionCreateOrConnectWithoutUserInput[]
    upsert?: TutorSessionUpsertWithWhereUniqueWithoutUserInput | TutorSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TutorSessionCreateManyUserInputEnvelope
    set?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    disconnect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    delete?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    update?: TutorSessionUpdateWithWhereUniqueWithoutUserInput | TutorSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TutorSessionUpdateManyWithWhereWithoutUserInput | TutorSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
  }

  export type SessionSummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionSummaryCreateWithoutUserInput, SessionSummaryUncheckedCreateWithoutUserInput> | SessionSummaryCreateWithoutUserInput[] | SessionSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutUserInput | SessionSummaryCreateOrConnectWithoutUserInput[]
    upsert?: SessionSummaryUpsertWithWhereUniqueWithoutUserInput | SessionSummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionSummaryCreateManyUserInputEnvelope
    set?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    disconnect?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    delete?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    connect?: SessionSummaryWhereUniqueInput | SessionSummaryWhereUniqueInput[]
    update?: SessionSummaryUpdateWithWhereUniqueWithoutUserInput | SessionSummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionSummaryUpdateManyWithWhereWithoutUserInput | SessionSummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionSummaryScalarWhereInput | SessionSummaryScalarWhereInput[]
  }

  export type CheckinScheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinScheduleCreateWithoutUserInput, CheckinScheduleUncheckedCreateWithoutUserInput> | CheckinScheduleCreateWithoutUserInput[] | CheckinScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutUserInput | CheckinScheduleCreateOrConnectWithoutUserInput[]
    upsert?: CheckinScheduleUpsertWithWhereUniqueWithoutUserInput | CheckinScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinScheduleCreateManyUserInputEnvelope
    set?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    disconnect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    delete?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    update?: CheckinScheduleUpdateWithWhereUniqueWithoutUserInput | CheckinScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinScheduleUpdateManyWithWhereWithoutUserInput | CheckinScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
  }

  export type CheckinEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutUserInput, CheckinEntryUncheckedCreateWithoutUserInput> | CheckinEntryCreateWithoutUserInput[] | CheckinEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutUserInput | CheckinEntryCreateOrConnectWithoutUserInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutUserInput | CheckinEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinEntryCreateManyUserInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutUserInput | CheckinEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutUserInput | CheckinEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type JourneyCreateNestedManyWithoutGoalInput = {
    create?: XOR<JourneyCreateWithoutGoalInput, JourneyUncheckedCreateWithoutGoalInput> | JourneyCreateWithoutGoalInput[] | JourneyUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutGoalInput | JourneyCreateOrConnectWithoutGoalInput[]
    createMany?: JourneyCreateManyGoalInputEnvelope
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
  }

  export type SuggestionCreateNestedManyWithoutGoalInput = {
    create?: XOR<SuggestionCreateWithoutGoalInput, SuggestionUncheckedCreateWithoutGoalInput> | SuggestionCreateWithoutGoalInput[] | SuggestionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutGoalInput | SuggestionCreateOrConnectWithoutGoalInput[]
    createMany?: SuggestionCreateManyGoalInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type TutorSessionCreateNestedManyWithoutGoalInput = {
    create?: XOR<TutorSessionCreateWithoutGoalInput, TutorSessionUncheckedCreateWithoutGoalInput> | TutorSessionCreateWithoutGoalInput[] | TutorSessionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutGoalInput | TutorSessionCreateOrConnectWithoutGoalInput[]
    createMany?: TutorSessionCreateManyGoalInputEnvelope
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
  }

  export type CheckinScheduleCreateNestedManyWithoutGoalInput = {
    create?: XOR<CheckinScheduleCreateWithoutGoalInput, CheckinScheduleUncheckedCreateWithoutGoalInput> | CheckinScheduleCreateWithoutGoalInput[] | CheckinScheduleUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutGoalInput | CheckinScheduleCreateOrConnectWithoutGoalInput[]
    createMany?: CheckinScheduleCreateManyGoalInputEnvelope
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
  }

  export type CheckinEntryCreateNestedManyWithoutGoalInput = {
    create?: XOR<CheckinEntryCreateWithoutGoalInput, CheckinEntryUncheckedCreateWithoutGoalInput> | CheckinEntryCreateWithoutGoalInput[] | CheckinEntryUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutGoalInput | CheckinEntryCreateOrConnectWithoutGoalInput[]
    createMany?: CheckinEntryCreateManyGoalInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type JourneyUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<JourneyCreateWithoutGoalInput, JourneyUncheckedCreateWithoutGoalInput> | JourneyCreateWithoutGoalInput[] | JourneyUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutGoalInput | JourneyCreateOrConnectWithoutGoalInput[]
    createMany?: JourneyCreateManyGoalInputEnvelope
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<SuggestionCreateWithoutGoalInput, SuggestionUncheckedCreateWithoutGoalInput> | SuggestionCreateWithoutGoalInput[] | SuggestionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutGoalInput | SuggestionCreateOrConnectWithoutGoalInput[]
    createMany?: SuggestionCreateManyGoalInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type TutorSessionUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<TutorSessionCreateWithoutGoalInput, TutorSessionUncheckedCreateWithoutGoalInput> | TutorSessionCreateWithoutGoalInput[] | TutorSessionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutGoalInput | TutorSessionCreateOrConnectWithoutGoalInput[]
    createMany?: TutorSessionCreateManyGoalInputEnvelope
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
  }

  export type CheckinScheduleUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<CheckinScheduleCreateWithoutGoalInput, CheckinScheduleUncheckedCreateWithoutGoalInput> | CheckinScheduleCreateWithoutGoalInput[] | CheckinScheduleUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutGoalInput | CheckinScheduleCreateOrConnectWithoutGoalInput[]
    createMany?: CheckinScheduleCreateManyGoalInputEnvelope
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
  }

  export type CheckinEntryUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<CheckinEntryCreateWithoutGoalInput, CheckinEntryUncheckedCreateWithoutGoalInput> | CheckinEntryCreateWithoutGoalInput[] | CheckinEntryUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutGoalInput | CheckinEntryCreateOrConnectWithoutGoalInput[]
    createMany?: CheckinEntryCreateManyGoalInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type JourneyUpdateManyWithoutGoalNestedInput = {
    create?: XOR<JourneyCreateWithoutGoalInput, JourneyUncheckedCreateWithoutGoalInput> | JourneyCreateWithoutGoalInput[] | JourneyUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutGoalInput | JourneyCreateOrConnectWithoutGoalInput[]
    upsert?: JourneyUpsertWithWhereUniqueWithoutGoalInput | JourneyUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: JourneyCreateManyGoalInputEnvelope
    set?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    disconnect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    delete?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    update?: JourneyUpdateWithWhereUniqueWithoutGoalInput | JourneyUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: JourneyUpdateManyWithWhereWithoutGoalInput | JourneyUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
  }

  export type SuggestionUpdateManyWithoutGoalNestedInput = {
    create?: XOR<SuggestionCreateWithoutGoalInput, SuggestionUncheckedCreateWithoutGoalInput> | SuggestionCreateWithoutGoalInput[] | SuggestionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutGoalInput | SuggestionCreateOrConnectWithoutGoalInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutGoalInput | SuggestionUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: SuggestionCreateManyGoalInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutGoalInput | SuggestionUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutGoalInput | SuggestionUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type TutorSessionUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TutorSessionCreateWithoutGoalInput, TutorSessionUncheckedCreateWithoutGoalInput> | TutorSessionCreateWithoutGoalInput[] | TutorSessionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutGoalInput | TutorSessionCreateOrConnectWithoutGoalInput[]
    upsert?: TutorSessionUpsertWithWhereUniqueWithoutGoalInput | TutorSessionUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TutorSessionCreateManyGoalInputEnvelope
    set?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    disconnect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    delete?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    update?: TutorSessionUpdateWithWhereUniqueWithoutGoalInput | TutorSessionUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TutorSessionUpdateManyWithWhereWithoutGoalInput | TutorSessionUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
  }

  export type CheckinScheduleUpdateManyWithoutGoalNestedInput = {
    create?: XOR<CheckinScheduleCreateWithoutGoalInput, CheckinScheduleUncheckedCreateWithoutGoalInput> | CheckinScheduleCreateWithoutGoalInput[] | CheckinScheduleUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutGoalInput | CheckinScheduleCreateOrConnectWithoutGoalInput[]
    upsert?: CheckinScheduleUpsertWithWhereUniqueWithoutGoalInput | CheckinScheduleUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: CheckinScheduleCreateManyGoalInputEnvelope
    set?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    disconnect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    delete?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    update?: CheckinScheduleUpdateWithWhereUniqueWithoutGoalInput | CheckinScheduleUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: CheckinScheduleUpdateManyWithWhereWithoutGoalInput | CheckinScheduleUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
  }

  export type CheckinEntryUpdateManyWithoutGoalNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutGoalInput, CheckinEntryUncheckedCreateWithoutGoalInput> | CheckinEntryCreateWithoutGoalInput[] | CheckinEntryUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutGoalInput | CheckinEntryCreateOrConnectWithoutGoalInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutGoalInput | CheckinEntryUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: CheckinEntryCreateManyGoalInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutGoalInput | CheckinEntryUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutGoalInput | CheckinEntryUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type JourneyUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<JourneyCreateWithoutGoalInput, JourneyUncheckedCreateWithoutGoalInput> | JourneyCreateWithoutGoalInput[] | JourneyUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutGoalInput | JourneyCreateOrConnectWithoutGoalInput[]
    upsert?: JourneyUpsertWithWhereUniqueWithoutGoalInput | JourneyUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: JourneyCreateManyGoalInputEnvelope
    set?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    disconnect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    delete?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    update?: JourneyUpdateWithWhereUniqueWithoutGoalInput | JourneyUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: JourneyUpdateManyWithWhereWithoutGoalInput | JourneyUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<SuggestionCreateWithoutGoalInput, SuggestionUncheckedCreateWithoutGoalInput> | SuggestionCreateWithoutGoalInput[] | SuggestionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutGoalInput | SuggestionCreateOrConnectWithoutGoalInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutGoalInput | SuggestionUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: SuggestionCreateManyGoalInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutGoalInput | SuggestionUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutGoalInput | SuggestionUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type TutorSessionUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TutorSessionCreateWithoutGoalInput, TutorSessionUncheckedCreateWithoutGoalInput> | TutorSessionCreateWithoutGoalInput[] | TutorSessionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutGoalInput | TutorSessionCreateOrConnectWithoutGoalInput[]
    upsert?: TutorSessionUpsertWithWhereUniqueWithoutGoalInput | TutorSessionUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TutorSessionCreateManyGoalInputEnvelope
    set?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    disconnect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    delete?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    update?: TutorSessionUpdateWithWhereUniqueWithoutGoalInput | TutorSessionUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TutorSessionUpdateManyWithWhereWithoutGoalInput | TutorSessionUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
  }

  export type CheckinScheduleUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<CheckinScheduleCreateWithoutGoalInput, CheckinScheduleUncheckedCreateWithoutGoalInput> | CheckinScheduleCreateWithoutGoalInput[] | CheckinScheduleUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutGoalInput | CheckinScheduleCreateOrConnectWithoutGoalInput[]
    upsert?: CheckinScheduleUpsertWithWhereUniqueWithoutGoalInput | CheckinScheduleUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: CheckinScheduleCreateManyGoalInputEnvelope
    set?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    disconnect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    delete?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    update?: CheckinScheduleUpdateWithWhereUniqueWithoutGoalInput | CheckinScheduleUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: CheckinScheduleUpdateManyWithWhereWithoutGoalInput | CheckinScheduleUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
  }

  export type CheckinEntryUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutGoalInput, CheckinEntryUncheckedCreateWithoutGoalInput> | CheckinEntryCreateWithoutGoalInput[] | CheckinEntryUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutGoalInput | CheckinEntryCreateOrConnectWithoutGoalInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutGoalInput | CheckinEntryUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: CheckinEntryCreateManyGoalInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutGoalInput | CheckinEntryUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutGoalInput | CheckinEntryUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutJourneysInput = {
    create?: XOR<GoalCreateWithoutJourneysInput, GoalUncheckedCreateWithoutJourneysInput>
    connectOrCreate?: GoalCreateOrConnectWithoutJourneysInput
    connect?: GoalWhereUniqueInput
  }

  export type MilestoneCreateNestedManyWithoutJourneyInput = {
    create?: XOR<MilestoneCreateWithoutJourneyInput, MilestoneUncheckedCreateWithoutJourneyInput> | MilestoneCreateWithoutJourneyInput[] | MilestoneUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutJourneyInput | MilestoneCreateOrConnectWithoutJourneyInput[]
    createMany?: MilestoneCreateManyJourneyInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutJourneyInput = {
    create?: XOR<MilestoneCreateWithoutJourneyInput, MilestoneUncheckedCreateWithoutJourneyInput> | MilestoneCreateWithoutJourneyInput[] | MilestoneUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutJourneyInput | MilestoneCreateOrConnectWithoutJourneyInput[]
    createMany?: MilestoneCreateManyJourneyInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GoalUpdateOneRequiredWithoutJourneysNestedInput = {
    create?: XOR<GoalCreateWithoutJourneysInput, GoalUncheckedCreateWithoutJourneysInput>
    connectOrCreate?: GoalCreateOrConnectWithoutJourneysInput
    upsert?: GoalUpsertWithoutJourneysInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutJourneysInput, GoalUpdateWithoutJourneysInput>, GoalUncheckedUpdateWithoutJourneysInput>
  }

  export type MilestoneUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<MilestoneCreateWithoutJourneyInput, MilestoneUncheckedCreateWithoutJourneyInput> | MilestoneCreateWithoutJourneyInput[] | MilestoneUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutJourneyInput | MilestoneCreateOrConnectWithoutJourneyInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutJourneyInput | MilestoneUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: MilestoneCreateManyJourneyInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutJourneyInput | MilestoneUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutJourneyInput | MilestoneUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<MilestoneCreateWithoutJourneyInput, MilestoneUncheckedCreateWithoutJourneyInput> | MilestoneCreateWithoutJourneyInput[] | MilestoneUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutJourneyInput | MilestoneCreateOrConnectWithoutJourneyInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutJourneyInput | MilestoneUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: MilestoneCreateManyJourneyInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutJourneyInput | MilestoneUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutJourneyInput | MilestoneUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type JourneyCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<JourneyCreateWithoutMilestonesInput, JourneyUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutMilestonesInput
    connect?: JourneyWhereUniqueInput
  }

  export type MilestoneDependencyCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<MilestoneDependencyCreateWithoutMilestoneInput, MilestoneDependencyUncheckedCreateWithoutMilestoneInput> | MilestoneDependencyCreateWithoutMilestoneInput[] | MilestoneDependencyUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutMilestoneInput | MilestoneDependencyCreateOrConnectWithoutMilestoneInput[]
    createMany?: MilestoneDependencyCreateManyMilestoneInputEnvelope
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
  }

  export type MilestoneDependencyCreateNestedManyWithoutDependsOnInput = {
    create?: XOR<MilestoneDependencyCreateWithoutDependsOnInput, MilestoneDependencyUncheckedCreateWithoutDependsOnInput> | MilestoneDependencyCreateWithoutDependsOnInput[] | MilestoneDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutDependsOnInput | MilestoneDependencyCreateOrConnectWithoutDependsOnInput[]
    createMany?: MilestoneDependencyCreateManyDependsOnInputEnvelope
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
  }

  export type TutorSessionCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<TutorSessionCreateWithoutMilestoneInput, TutorSessionUncheckedCreateWithoutMilestoneInput> | TutorSessionCreateWithoutMilestoneInput[] | TutorSessionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutMilestoneInput | TutorSessionCreateOrConnectWithoutMilestoneInput[]
    createMany?: TutorSessionCreateManyMilestoneInputEnvelope
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
  }

  export type CheckinScheduleCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<CheckinScheduleCreateWithoutMilestoneInput, CheckinScheduleUncheckedCreateWithoutMilestoneInput> | CheckinScheduleCreateWithoutMilestoneInput[] | CheckinScheduleUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutMilestoneInput | CheckinScheduleCreateOrConnectWithoutMilestoneInput[]
    createMany?: CheckinScheduleCreateManyMilestoneInputEnvelope
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
  }

  export type CheckinEntryCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<CheckinEntryCreateWithoutMilestoneInput, CheckinEntryUncheckedCreateWithoutMilestoneInput> | CheckinEntryCreateWithoutMilestoneInput[] | CheckinEntryUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutMilestoneInput | CheckinEntryCreateOrConnectWithoutMilestoneInput[]
    createMany?: CheckinEntryCreateManyMilestoneInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type MilestoneDependencyUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<MilestoneDependencyCreateWithoutMilestoneInput, MilestoneDependencyUncheckedCreateWithoutMilestoneInput> | MilestoneDependencyCreateWithoutMilestoneInput[] | MilestoneDependencyUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutMilestoneInput | MilestoneDependencyCreateOrConnectWithoutMilestoneInput[]
    createMany?: MilestoneDependencyCreateManyMilestoneInputEnvelope
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
  }

  export type MilestoneDependencyUncheckedCreateNestedManyWithoutDependsOnInput = {
    create?: XOR<MilestoneDependencyCreateWithoutDependsOnInput, MilestoneDependencyUncheckedCreateWithoutDependsOnInput> | MilestoneDependencyCreateWithoutDependsOnInput[] | MilestoneDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutDependsOnInput | MilestoneDependencyCreateOrConnectWithoutDependsOnInput[]
    createMany?: MilestoneDependencyCreateManyDependsOnInputEnvelope
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
  }

  export type TutorSessionUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<TutorSessionCreateWithoutMilestoneInput, TutorSessionUncheckedCreateWithoutMilestoneInput> | TutorSessionCreateWithoutMilestoneInput[] | TutorSessionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutMilestoneInput | TutorSessionCreateOrConnectWithoutMilestoneInput[]
    createMany?: TutorSessionCreateManyMilestoneInputEnvelope
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
  }

  export type CheckinScheduleUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<CheckinScheduleCreateWithoutMilestoneInput, CheckinScheduleUncheckedCreateWithoutMilestoneInput> | CheckinScheduleCreateWithoutMilestoneInput[] | CheckinScheduleUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutMilestoneInput | CheckinScheduleCreateOrConnectWithoutMilestoneInput[]
    createMany?: CheckinScheduleCreateManyMilestoneInputEnvelope
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
  }

  export type CheckinEntryUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<CheckinEntryCreateWithoutMilestoneInput, CheckinEntryUncheckedCreateWithoutMilestoneInput> | CheckinEntryCreateWithoutMilestoneInput[] | CheckinEntryUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutMilestoneInput | CheckinEntryCreateOrConnectWithoutMilestoneInput[]
    createMany?: CheckinEntryCreateManyMilestoneInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JourneyUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<JourneyCreateWithoutMilestonesInput, JourneyUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutMilestonesInput
    upsert?: JourneyUpsertWithoutMilestonesInput
    connect?: JourneyWhereUniqueInput
    update?: XOR<XOR<JourneyUpdateToOneWithWhereWithoutMilestonesInput, JourneyUpdateWithoutMilestonesInput>, JourneyUncheckedUpdateWithoutMilestonesInput>
  }

  export type MilestoneDependencyUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<MilestoneDependencyCreateWithoutMilestoneInput, MilestoneDependencyUncheckedCreateWithoutMilestoneInput> | MilestoneDependencyCreateWithoutMilestoneInput[] | MilestoneDependencyUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutMilestoneInput | MilestoneDependencyCreateOrConnectWithoutMilestoneInput[]
    upsert?: MilestoneDependencyUpsertWithWhereUniqueWithoutMilestoneInput | MilestoneDependencyUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: MilestoneDependencyCreateManyMilestoneInputEnvelope
    set?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    disconnect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    delete?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    update?: MilestoneDependencyUpdateWithWhereUniqueWithoutMilestoneInput | MilestoneDependencyUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: MilestoneDependencyUpdateManyWithWhereWithoutMilestoneInput | MilestoneDependencyUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: MilestoneDependencyScalarWhereInput | MilestoneDependencyScalarWhereInput[]
  }

  export type MilestoneDependencyUpdateManyWithoutDependsOnNestedInput = {
    create?: XOR<MilestoneDependencyCreateWithoutDependsOnInput, MilestoneDependencyUncheckedCreateWithoutDependsOnInput> | MilestoneDependencyCreateWithoutDependsOnInput[] | MilestoneDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutDependsOnInput | MilestoneDependencyCreateOrConnectWithoutDependsOnInput[]
    upsert?: MilestoneDependencyUpsertWithWhereUniqueWithoutDependsOnInput | MilestoneDependencyUpsertWithWhereUniqueWithoutDependsOnInput[]
    createMany?: MilestoneDependencyCreateManyDependsOnInputEnvelope
    set?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    disconnect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    delete?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    update?: MilestoneDependencyUpdateWithWhereUniqueWithoutDependsOnInput | MilestoneDependencyUpdateWithWhereUniqueWithoutDependsOnInput[]
    updateMany?: MilestoneDependencyUpdateManyWithWhereWithoutDependsOnInput | MilestoneDependencyUpdateManyWithWhereWithoutDependsOnInput[]
    deleteMany?: MilestoneDependencyScalarWhereInput | MilestoneDependencyScalarWhereInput[]
  }

  export type TutorSessionUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<TutorSessionCreateWithoutMilestoneInput, TutorSessionUncheckedCreateWithoutMilestoneInput> | TutorSessionCreateWithoutMilestoneInput[] | TutorSessionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutMilestoneInput | TutorSessionCreateOrConnectWithoutMilestoneInput[]
    upsert?: TutorSessionUpsertWithWhereUniqueWithoutMilestoneInput | TutorSessionUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: TutorSessionCreateManyMilestoneInputEnvelope
    set?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    disconnect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    delete?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    update?: TutorSessionUpdateWithWhereUniqueWithoutMilestoneInput | TutorSessionUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: TutorSessionUpdateManyWithWhereWithoutMilestoneInput | TutorSessionUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
  }

  export type CheckinScheduleUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<CheckinScheduleCreateWithoutMilestoneInput, CheckinScheduleUncheckedCreateWithoutMilestoneInput> | CheckinScheduleCreateWithoutMilestoneInput[] | CheckinScheduleUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutMilestoneInput | CheckinScheduleCreateOrConnectWithoutMilestoneInput[]
    upsert?: CheckinScheduleUpsertWithWhereUniqueWithoutMilestoneInput | CheckinScheduleUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: CheckinScheduleCreateManyMilestoneInputEnvelope
    set?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    disconnect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    delete?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    update?: CheckinScheduleUpdateWithWhereUniqueWithoutMilestoneInput | CheckinScheduleUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: CheckinScheduleUpdateManyWithWhereWithoutMilestoneInput | CheckinScheduleUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
  }

  export type CheckinEntryUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutMilestoneInput, CheckinEntryUncheckedCreateWithoutMilestoneInput> | CheckinEntryCreateWithoutMilestoneInput[] | CheckinEntryUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutMilestoneInput | CheckinEntryCreateOrConnectWithoutMilestoneInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutMilestoneInput | CheckinEntryUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: CheckinEntryCreateManyMilestoneInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutMilestoneInput | CheckinEntryUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutMilestoneInput | CheckinEntryUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type MilestoneDependencyUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<MilestoneDependencyCreateWithoutMilestoneInput, MilestoneDependencyUncheckedCreateWithoutMilestoneInput> | MilestoneDependencyCreateWithoutMilestoneInput[] | MilestoneDependencyUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutMilestoneInput | MilestoneDependencyCreateOrConnectWithoutMilestoneInput[]
    upsert?: MilestoneDependencyUpsertWithWhereUniqueWithoutMilestoneInput | MilestoneDependencyUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: MilestoneDependencyCreateManyMilestoneInputEnvelope
    set?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    disconnect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    delete?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    update?: MilestoneDependencyUpdateWithWhereUniqueWithoutMilestoneInput | MilestoneDependencyUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: MilestoneDependencyUpdateManyWithWhereWithoutMilestoneInput | MilestoneDependencyUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: MilestoneDependencyScalarWhereInput | MilestoneDependencyScalarWhereInput[]
  }

  export type MilestoneDependencyUncheckedUpdateManyWithoutDependsOnNestedInput = {
    create?: XOR<MilestoneDependencyCreateWithoutDependsOnInput, MilestoneDependencyUncheckedCreateWithoutDependsOnInput> | MilestoneDependencyCreateWithoutDependsOnInput[] | MilestoneDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: MilestoneDependencyCreateOrConnectWithoutDependsOnInput | MilestoneDependencyCreateOrConnectWithoutDependsOnInput[]
    upsert?: MilestoneDependencyUpsertWithWhereUniqueWithoutDependsOnInput | MilestoneDependencyUpsertWithWhereUniqueWithoutDependsOnInput[]
    createMany?: MilestoneDependencyCreateManyDependsOnInputEnvelope
    set?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    disconnect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    delete?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    connect?: MilestoneDependencyWhereUniqueInput | MilestoneDependencyWhereUniqueInput[]
    update?: MilestoneDependencyUpdateWithWhereUniqueWithoutDependsOnInput | MilestoneDependencyUpdateWithWhereUniqueWithoutDependsOnInput[]
    updateMany?: MilestoneDependencyUpdateManyWithWhereWithoutDependsOnInput | MilestoneDependencyUpdateManyWithWhereWithoutDependsOnInput[]
    deleteMany?: MilestoneDependencyScalarWhereInput | MilestoneDependencyScalarWhereInput[]
  }

  export type TutorSessionUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<TutorSessionCreateWithoutMilestoneInput, TutorSessionUncheckedCreateWithoutMilestoneInput> | TutorSessionCreateWithoutMilestoneInput[] | TutorSessionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TutorSessionCreateOrConnectWithoutMilestoneInput | TutorSessionCreateOrConnectWithoutMilestoneInput[]
    upsert?: TutorSessionUpsertWithWhereUniqueWithoutMilestoneInput | TutorSessionUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: TutorSessionCreateManyMilestoneInputEnvelope
    set?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    disconnect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    delete?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    connect?: TutorSessionWhereUniqueInput | TutorSessionWhereUniqueInput[]
    update?: TutorSessionUpdateWithWhereUniqueWithoutMilestoneInput | TutorSessionUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: TutorSessionUpdateManyWithWhereWithoutMilestoneInput | TutorSessionUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
  }

  export type CheckinScheduleUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<CheckinScheduleCreateWithoutMilestoneInput, CheckinScheduleUncheckedCreateWithoutMilestoneInput> | CheckinScheduleCreateWithoutMilestoneInput[] | CheckinScheduleUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutMilestoneInput | CheckinScheduleCreateOrConnectWithoutMilestoneInput[]
    upsert?: CheckinScheduleUpsertWithWhereUniqueWithoutMilestoneInput | CheckinScheduleUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: CheckinScheduleCreateManyMilestoneInputEnvelope
    set?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    disconnect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    delete?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    connect?: CheckinScheduleWhereUniqueInput | CheckinScheduleWhereUniqueInput[]
    update?: CheckinScheduleUpdateWithWhereUniqueWithoutMilestoneInput | CheckinScheduleUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: CheckinScheduleUpdateManyWithWhereWithoutMilestoneInput | CheckinScheduleUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
  }

  export type CheckinEntryUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutMilestoneInput, CheckinEntryUncheckedCreateWithoutMilestoneInput> | CheckinEntryCreateWithoutMilestoneInput[] | CheckinEntryUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutMilestoneInput | CheckinEntryCreateOrConnectWithoutMilestoneInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutMilestoneInput | CheckinEntryUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: CheckinEntryCreateManyMilestoneInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutMilestoneInput | CheckinEntryUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutMilestoneInput | CheckinEntryUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type MilestoneCreateNestedOneWithoutDependenciesInput = {
    create?: XOR<MilestoneCreateWithoutDependenciesInput, MilestoneUncheckedCreateWithoutDependenciesInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutDependenciesInput
    connect?: MilestoneWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutRequiredByInput = {
    create?: XOR<MilestoneCreateWithoutRequiredByInput, MilestoneUncheckedCreateWithoutRequiredByInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutRequiredByInput
    connect?: MilestoneWhereUniqueInput
  }

  export type MilestoneUpdateOneRequiredWithoutDependenciesNestedInput = {
    create?: XOR<MilestoneCreateWithoutDependenciesInput, MilestoneUncheckedCreateWithoutDependenciesInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutDependenciesInput
    upsert?: MilestoneUpsertWithoutDependenciesInput
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutDependenciesInput, MilestoneUpdateWithoutDependenciesInput>, MilestoneUncheckedUpdateWithoutDependenciesInput>
  }

  export type MilestoneUpdateOneRequiredWithoutRequiredByNestedInput = {
    create?: XOR<MilestoneCreateWithoutRequiredByInput, MilestoneUncheckedCreateWithoutRequiredByInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutRequiredByInput
    upsert?: MilestoneUpsertWithoutRequiredByInput
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutRequiredByInput, MilestoneUpdateWithoutRequiredByInput>, MilestoneUncheckedUpdateWithoutRequiredByInput>
  }

  export type UserCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuggestionsInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<GoalCreateWithoutSuggestionsInput, GoalUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutSuggestionsInput
    connect?: GoalWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSuggestionsNestedInput = {
    create?: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuggestionsInput
    upsert?: UserUpsertWithoutSuggestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuggestionsInput, UserUpdateWithoutSuggestionsInput>, UserUncheckedUpdateWithoutSuggestionsInput>
  }

  export type GoalUpdateOneRequiredWithoutSuggestionsNestedInput = {
    create?: XOR<GoalCreateWithoutSuggestionsInput, GoalUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutSuggestionsInput
    upsert?: GoalUpsertWithoutSuggestionsInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutSuggestionsInput, GoalUpdateWithoutSuggestionsInput>, GoalUncheckedUpdateWithoutSuggestionsInput>
  }

  export type UserCreateNestedOneWithoutTutorSessionsInput = {
    create?: XOR<UserCreateWithoutTutorSessionsInput, UserUncheckedCreateWithoutTutorSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutTutorSessionsInput = {
    create?: XOR<GoalCreateWithoutTutorSessionsInput, GoalUncheckedCreateWithoutTutorSessionsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTutorSessionsInput
    connect?: GoalWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutTutorSessionsInput = {
    create?: XOR<MilestoneCreateWithoutTutorSessionsInput, MilestoneUncheckedCreateWithoutTutorSessionsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutTutorSessionsInput
    connect?: MilestoneWhereUniqueInput
  }

  export type TutorMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<TutorMessageCreateWithoutSessionInput, TutorMessageUncheckedCreateWithoutSessionInput> | TutorMessageCreateWithoutSessionInput[] | TutorMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TutorMessageCreateOrConnectWithoutSessionInput | TutorMessageCreateOrConnectWithoutSessionInput[]
    createMany?: TutorMessageCreateManySessionInputEnvelope
    connect?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
  }

  export type SessionSummaryCreateNestedOneWithoutSessionInput = {
    create?: XOR<SessionSummaryCreateWithoutSessionInput, SessionSummaryUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutSessionInput
    connect?: SessionSummaryWhereUniqueInput
  }

  export type TutorMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TutorMessageCreateWithoutSessionInput, TutorMessageUncheckedCreateWithoutSessionInput> | TutorMessageCreateWithoutSessionInput[] | TutorMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TutorMessageCreateOrConnectWithoutSessionInput | TutorMessageCreateOrConnectWithoutSessionInput[]
    createMany?: TutorMessageCreateManySessionInputEnvelope
    connect?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
  }

  export type SessionSummaryUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<SessionSummaryCreateWithoutSessionInput, SessionSummaryUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutSessionInput
    connect?: SessionSummaryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTutorSessionsNestedInput = {
    create?: XOR<UserCreateWithoutTutorSessionsInput, UserUncheckedCreateWithoutTutorSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorSessionsInput
    upsert?: UserUpsertWithoutTutorSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutorSessionsInput, UserUpdateWithoutTutorSessionsInput>, UserUncheckedUpdateWithoutTutorSessionsInput>
  }

  export type GoalUpdateOneWithoutTutorSessionsNestedInput = {
    create?: XOR<GoalCreateWithoutTutorSessionsInput, GoalUncheckedCreateWithoutTutorSessionsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTutorSessionsInput
    upsert?: GoalUpsertWithoutTutorSessionsInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutTutorSessionsInput, GoalUpdateWithoutTutorSessionsInput>, GoalUncheckedUpdateWithoutTutorSessionsInput>
  }

  export type MilestoneUpdateOneWithoutTutorSessionsNestedInput = {
    create?: XOR<MilestoneCreateWithoutTutorSessionsInput, MilestoneUncheckedCreateWithoutTutorSessionsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutTutorSessionsInput
    upsert?: MilestoneUpsertWithoutTutorSessionsInput
    disconnect?: MilestoneWhereInput | boolean
    delete?: MilestoneWhereInput | boolean
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutTutorSessionsInput, MilestoneUpdateWithoutTutorSessionsInput>, MilestoneUncheckedUpdateWithoutTutorSessionsInput>
  }

  export type TutorMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TutorMessageCreateWithoutSessionInput, TutorMessageUncheckedCreateWithoutSessionInput> | TutorMessageCreateWithoutSessionInput[] | TutorMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TutorMessageCreateOrConnectWithoutSessionInput | TutorMessageCreateOrConnectWithoutSessionInput[]
    upsert?: TutorMessageUpsertWithWhereUniqueWithoutSessionInput | TutorMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TutorMessageCreateManySessionInputEnvelope
    set?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    disconnect?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    delete?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    connect?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    update?: TutorMessageUpdateWithWhereUniqueWithoutSessionInput | TutorMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TutorMessageUpdateManyWithWhereWithoutSessionInput | TutorMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TutorMessageScalarWhereInput | TutorMessageScalarWhereInput[]
  }

  export type SessionSummaryUpdateOneWithoutSessionNestedInput = {
    create?: XOR<SessionSummaryCreateWithoutSessionInput, SessionSummaryUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutSessionInput
    upsert?: SessionSummaryUpsertWithoutSessionInput
    disconnect?: SessionSummaryWhereInput | boolean
    delete?: SessionSummaryWhereInput | boolean
    connect?: SessionSummaryWhereUniqueInput
    update?: XOR<XOR<SessionSummaryUpdateToOneWithWhereWithoutSessionInput, SessionSummaryUpdateWithoutSessionInput>, SessionSummaryUncheckedUpdateWithoutSessionInput>
  }

  export type TutorMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TutorMessageCreateWithoutSessionInput, TutorMessageUncheckedCreateWithoutSessionInput> | TutorMessageCreateWithoutSessionInput[] | TutorMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TutorMessageCreateOrConnectWithoutSessionInput | TutorMessageCreateOrConnectWithoutSessionInput[]
    upsert?: TutorMessageUpsertWithWhereUniqueWithoutSessionInput | TutorMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TutorMessageCreateManySessionInputEnvelope
    set?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    disconnect?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    delete?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    connect?: TutorMessageWhereUniqueInput | TutorMessageWhereUniqueInput[]
    update?: TutorMessageUpdateWithWhereUniqueWithoutSessionInput | TutorMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TutorMessageUpdateManyWithWhereWithoutSessionInput | TutorMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TutorMessageScalarWhereInput | TutorMessageScalarWhereInput[]
  }

  export type SessionSummaryUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<SessionSummaryCreateWithoutSessionInput, SessionSummaryUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionSummaryCreateOrConnectWithoutSessionInput
    upsert?: SessionSummaryUpsertWithoutSessionInput
    disconnect?: SessionSummaryWhereInput | boolean
    delete?: SessionSummaryWhereInput | boolean
    connect?: SessionSummaryWhereUniqueInput
    update?: XOR<XOR<SessionSummaryUpdateToOneWithWhereWithoutSessionInput, SessionSummaryUpdateWithoutSessionInput>, SessionSummaryUncheckedUpdateWithoutSessionInput>
  }

  export type TutorSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TutorSessionCreateWithoutMessagesInput, TutorSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TutorSessionCreateOrConnectWithoutMessagesInput
    connect?: TutorSessionWhereUniqueInput
  }

  export type TutorSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TutorSessionCreateWithoutMessagesInput, TutorSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TutorSessionCreateOrConnectWithoutMessagesInput
    upsert?: TutorSessionUpsertWithoutMessagesInput
    connect?: TutorSessionWhereUniqueInput
    update?: XOR<XOR<TutorSessionUpdateToOneWithWhereWithoutMessagesInput, TutorSessionUpdateWithoutMessagesInput>, TutorSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type TutorSessionCreateNestedOneWithoutSummaryInput = {
    create?: XOR<TutorSessionCreateWithoutSummaryInput, TutorSessionUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: TutorSessionCreateOrConnectWithoutSummaryInput
    connect?: TutorSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionSummariesInput = {
    create?: XOR<UserCreateWithoutSessionSummariesInput, UserUncheckedCreateWithoutSessionSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionSummariesInput
    connect?: UserWhereUniqueInput
  }

  export type TutorSessionUpdateOneRequiredWithoutSummaryNestedInput = {
    create?: XOR<TutorSessionCreateWithoutSummaryInput, TutorSessionUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: TutorSessionCreateOrConnectWithoutSummaryInput
    upsert?: TutorSessionUpsertWithoutSummaryInput
    connect?: TutorSessionWhereUniqueInput
    update?: XOR<XOR<TutorSessionUpdateToOneWithWhereWithoutSummaryInput, TutorSessionUpdateWithoutSummaryInput>, TutorSessionUncheckedUpdateWithoutSummaryInput>
  }

  export type UserUpdateOneRequiredWithoutSessionSummariesNestedInput = {
    create?: XOR<UserCreateWithoutSessionSummariesInput, UserUncheckedCreateWithoutSessionSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionSummariesInput
    upsert?: UserUpsertWithoutSessionSummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionSummariesInput, UserUpdateWithoutSessionSummariesInput>, UserUncheckedUpdateWithoutSessionSummariesInput>
  }

  export type UserCreateNestedOneWithoutCheckinScheduleInput = {
    create?: XOR<UserCreateWithoutCheckinScheduleInput, UserUncheckedCreateWithoutCheckinScheduleInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinScheduleInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutCheckinScheduleInput = {
    create?: XOR<GoalCreateWithoutCheckinScheduleInput, GoalUncheckedCreateWithoutCheckinScheduleInput>
    connectOrCreate?: GoalCreateOrConnectWithoutCheckinScheduleInput
    connect?: GoalWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutCheckinScheduleInput = {
    create?: XOR<MilestoneCreateWithoutCheckinScheduleInput, MilestoneUncheckedCreateWithoutCheckinScheduleInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutCheckinScheduleInput
    connect?: MilestoneWhereUniqueInput
  }

  export type CheckinEntryCreateNestedManyWithoutScheduleInput = {
    create?: XOR<CheckinEntryCreateWithoutScheduleInput, CheckinEntryUncheckedCreateWithoutScheduleInput> | CheckinEntryCreateWithoutScheduleInput[] | CheckinEntryUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutScheduleInput | CheckinEntryCreateOrConnectWithoutScheduleInput[]
    createMany?: CheckinEntryCreateManyScheduleInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type CheckinEntryUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<CheckinEntryCreateWithoutScheduleInput, CheckinEntryUncheckedCreateWithoutScheduleInput> | CheckinEntryCreateWithoutScheduleInput[] | CheckinEntryUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutScheduleInput | CheckinEntryCreateOrConnectWithoutScheduleInput[]
    createMany?: CheckinEntryCreateManyScheduleInputEnvelope
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCheckinScheduleNestedInput = {
    create?: XOR<UserCreateWithoutCheckinScheduleInput, UserUncheckedCreateWithoutCheckinScheduleInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinScheduleInput
    upsert?: UserUpsertWithoutCheckinScheduleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckinScheduleInput, UserUpdateWithoutCheckinScheduleInput>, UserUncheckedUpdateWithoutCheckinScheduleInput>
  }

  export type GoalUpdateOneWithoutCheckinScheduleNestedInput = {
    create?: XOR<GoalCreateWithoutCheckinScheduleInput, GoalUncheckedCreateWithoutCheckinScheduleInput>
    connectOrCreate?: GoalCreateOrConnectWithoutCheckinScheduleInput
    upsert?: GoalUpsertWithoutCheckinScheduleInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutCheckinScheduleInput, GoalUpdateWithoutCheckinScheduleInput>, GoalUncheckedUpdateWithoutCheckinScheduleInput>
  }

  export type MilestoneUpdateOneWithoutCheckinScheduleNestedInput = {
    create?: XOR<MilestoneCreateWithoutCheckinScheduleInput, MilestoneUncheckedCreateWithoutCheckinScheduleInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutCheckinScheduleInput
    upsert?: MilestoneUpsertWithoutCheckinScheduleInput
    disconnect?: MilestoneWhereInput | boolean
    delete?: MilestoneWhereInput | boolean
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutCheckinScheduleInput, MilestoneUpdateWithoutCheckinScheduleInput>, MilestoneUncheckedUpdateWithoutCheckinScheduleInput>
  }

  export type CheckinEntryUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutScheduleInput, CheckinEntryUncheckedCreateWithoutScheduleInput> | CheckinEntryCreateWithoutScheduleInput[] | CheckinEntryUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutScheduleInput | CheckinEntryCreateOrConnectWithoutScheduleInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutScheduleInput | CheckinEntryUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: CheckinEntryCreateManyScheduleInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutScheduleInput | CheckinEntryUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutScheduleInput | CheckinEntryUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type CheckinEntryUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<CheckinEntryCreateWithoutScheduleInput, CheckinEntryUncheckedCreateWithoutScheduleInput> | CheckinEntryCreateWithoutScheduleInput[] | CheckinEntryUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: CheckinEntryCreateOrConnectWithoutScheduleInput | CheckinEntryCreateOrConnectWithoutScheduleInput[]
    upsert?: CheckinEntryUpsertWithWhereUniqueWithoutScheduleInput | CheckinEntryUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: CheckinEntryCreateManyScheduleInputEnvelope
    set?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    disconnect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    delete?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    connect?: CheckinEntryWhereUniqueInput | CheckinEntryWhereUniqueInput[]
    update?: CheckinEntryUpdateWithWhereUniqueWithoutScheduleInput | CheckinEntryUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: CheckinEntryUpdateManyWithWhereWithoutScheduleInput | CheckinEntryUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
  }

  export type CheckinScheduleCreateNestedOneWithoutEntriesInput = {
    create?: XOR<CheckinScheduleCreateWithoutEntriesInput, CheckinScheduleUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutEntriesInput
    connect?: CheckinScheduleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCheckinEntryInput = {
    create?: XOR<UserCreateWithoutCheckinEntryInput, UserUncheckedCreateWithoutCheckinEntryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinEntryInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutCheckinEntryInput = {
    create?: XOR<GoalCreateWithoutCheckinEntryInput, GoalUncheckedCreateWithoutCheckinEntryInput>
    connectOrCreate?: GoalCreateOrConnectWithoutCheckinEntryInput
    connect?: GoalWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutCheckinEntryInput = {
    create?: XOR<MilestoneCreateWithoutCheckinEntryInput, MilestoneUncheckedCreateWithoutCheckinEntryInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutCheckinEntryInput
    connect?: MilestoneWhereUniqueInput
  }

  export type CheckinScheduleUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<CheckinScheduleCreateWithoutEntriesInput, CheckinScheduleUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: CheckinScheduleCreateOrConnectWithoutEntriesInput
    upsert?: CheckinScheduleUpsertWithoutEntriesInput
    connect?: CheckinScheduleWhereUniqueInput
    update?: XOR<XOR<CheckinScheduleUpdateToOneWithWhereWithoutEntriesInput, CheckinScheduleUpdateWithoutEntriesInput>, CheckinScheduleUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutCheckinEntryNestedInput = {
    create?: XOR<UserCreateWithoutCheckinEntryInput, UserUncheckedCreateWithoutCheckinEntryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinEntryInput
    upsert?: UserUpsertWithoutCheckinEntryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckinEntryInput, UserUpdateWithoutCheckinEntryInput>, UserUncheckedUpdateWithoutCheckinEntryInput>
  }

  export type GoalUpdateOneWithoutCheckinEntryNestedInput = {
    create?: XOR<GoalCreateWithoutCheckinEntryInput, GoalUncheckedCreateWithoutCheckinEntryInput>
    connectOrCreate?: GoalCreateOrConnectWithoutCheckinEntryInput
    upsert?: GoalUpsertWithoutCheckinEntryInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutCheckinEntryInput, GoalUpdateWithoutCheckinEntryInput>, GoalUncheckedUpdateWithoutCheckinEntryInput>
  }

  export type MilestoneUpdateOneWithoutCheckinEntryNestedInput = {
    create?: XOR<MilestoneCreateWithoutCheckinEntryInput, MilestoneUncheckedCreateWithoutCheckinEntryInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutCheckinEntryInput
    upsert?: MilestoneUpsertWithoutCheckinEntryInput
    disconnect?: MilestoneWhereInput | boolean
    delete?: MilestoneWhereInput | boolean
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutCheckinEntryInput, MilestoneUpdateWithoutCheckinEntryInput>, MilestoneUncheckedUpdateWithoutCheckinEntryInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyUncheckedCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SuggestionCreateWithoutUserInput = {
    id?: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
    goal: GoalCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateWithoutUserInput = {
    id?: string
    goalId: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SuggestionCreateOrConnectWithoutUserInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput>
  }

  export type SuggestionCreateManyUserInputEnvelope = {
    data: SuggestionCreateManyUserInput | SuggestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TutorSessionCreateWithoutUserInput = {
    id?: string
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutTutorSessionsInput
    milestone?: MilestoneCreateNestedOneWithoutTutorSessionsInput
    messages?: TutorMessageCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionUncheckedCreateWithoutUserInput = {
    id?: string
    goalId?: string | null
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TutorMessageUncheckedCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionCreateOrConnectWithoutUserInput = {
    where: TutorSessionWhereUniqueInput
    create: XOR<TutorSessionCreateWithoutUserInput, TutorSessionUncheckedCreateWithoutUserInput>
  }

  export type TutorSessionCreateManyUserInputEnvelope = {
    data: TutorSessionCreateManyUserInput | TutorSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionSummaryCreateWithoutUserInput = {
    id?: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    session: TutorSessionCreateNestedOneWithoutSummaryInput
  }

  export type SessionSummaryUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionSummaryCreateOrConnectWithoutUserInput = {
    where: SessionSummaryWhereUniqueInput
    create: XOR<SessionSummaryCreateWithoutUserInput, SessionSummaryUncheckedCreateWithoutUserInput>
  }

  export type SessionSummaryCreateManyUserInputEnvelope = {
    data: SessionSummaryCreateManyUserInput | SessionSummaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CheckinScheduleCreateWithoutUserInput = {
    id?: string
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutCheckinScheduleInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinScheduleInput
    entries?: CheckinEntryCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleUncheckedCreateWithoutUserInput = {
    id?: string
    goalId?: string | null
    milestoneId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: CheckinEntryUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleCreateOrConnectWithoutUserInput = {
    where: CheckinScheduleWhereUniqueInput
    create: XOR<CheckinScheduleCreateWithoutUserInput, CheckinScheduleUncheckedCreateWithoutUserInput>
  }

  export type CheckinScheduleCreateManyUserInputEnvelope = {
    data: CheckinScheduleCreateManyUserInput | CheckinScheduleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CheckinEntryCreateWithoutUserInput = {
    id?: string
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
    schedule: CheckinScheduleCreateNestedOneWithoutEntriesInput
    goal?: GoalCreateNestedOneWithoutCheckinEntryInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinEntryInput
  }

  export type CheckinEntryUncheckedCreateWithoutUserInput = {
    id?: string
    scheduleId: string
    goalId?: string | null
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type CheckinEntryCreateOrConnectWithoutUserInput = {
    where: CheckinEntryWhereUniqueInput
    create: XOR<CheckinEntryCreateWithoutUserInput, CheckinEntryUncheckedCreateWithoutUserInput>
  }

  export type CheckinEntryCreateManyUserInputEnvelope = {
    data: CheckinEntryCreateManyUserInput | CheckinEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: UuidFilter<"Goal"> | string
    userId?: UuidFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    complexity?: IntNullableFilter<"Goal"> | number | null
    suggestedWeeks?: IntNullableFilter<"Goal"> | number | null
    chunking?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type SuggestionUpsertWithWhereUniqueWithoutUserInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutUserInput, SuggestionUncheckedUpdateWithoutUserInput>
    create: XOR<SuggestionCreateWithoutUserInput, SuggestionUncheckedCreateWithoutUserInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutUserInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutUserInput, SuggestionUncheckedUpdateWithoutUserInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutUserInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutUserInput>
  }

  export type SuggestionScalarWhereInput = {
    AND?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    OR?: SuggestionScalarWhereInput[]
    NOT?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    id?: UuidFilter<"Suggestion"> | string
    userId?: UuidFilter<"Suggestion"> | string
    goalId?: UuidFilter<"Suggestion"> | string
    provider?: StringFilter<"Suggestion"> | string
    response?: JsonFilter<"Suggestion">
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
  }

  export type TutorSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: TutorSessionWhereUniqueInput
    update: XOR<TutorSessionUpdateWithoutUserInput, TutorSessionUncheckedUpdateWithoutUserInput>
    create: XOR<TutorSessionCreateWithoutUserInput, TutorSessionUncheckedCreateWithoutUserInput>
  }

  export type TutorSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: TutorSessionWhereUniqueInput
    data: XOR<TutorSessionUpdateWithoutUserInput, TutorSessionUncheckedUpdateWithoutUserInput>
  }

  export type TutorSessionUpdateManyWithWhereWithoutUserInput = {
    where: TutorSessionScalarWhereInput
    data: XOR<TutorSessionUpdateManyMutationInput, TutorSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type TutorSessionScalarWhereInput = {
    AND?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
    OR?: TutorSessionScalarWhereInput[]
    NOT?: TutorSessionScalarWhereInput | TutorSessionScalarWhereInput[]
    id?: UuidFilter<"TutorSession"> | string
    userId?: UuidFilter<"TutorSession"> | string
    goalId?: UuidNullableFilter<"TutorSession"> | string | null
    milestoneId?: UuidNullableFilter<"TutorSession"> | string | null
    title?: StringNullableFilter<"TutorSession"> | string | null
    status?: StringFilter<"TutorSession"> | string
    createdAt?: DateTimeFilter<"TutorSession"> | Date | string
    updatedAt?: DateTimeFilter<"TutorSession"> | Date | string
  }

  export type SessionSummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionSummaryWhereUniqueInput
    update: XOR<SessionSummaryUpdateWithoutUserInput, SessionSummaryUncheckedUpdateWithoutUserInput>
    create: XOR<SessionSummaryCreateWithoutUserInput, SessionSummaryUncheckedCreateWithoutUserInput>
  }

  export type SessionSummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionSummaryWhereUniqueInput
    data: XOR<SessionSummaryUpdateWithoutUserInput, SessionSummaryUncheckedUpdateWithoutUserInput>
  }

  export type SessionSummaryUpdateManyWithWhereWithoutUserInput = {
    where: SessionSummaryScalarWhereInput
    data: XOR<SessionSummaryUpdateManyMutationInput, SessionSummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionSummaryScalarWhereInput = {
    AND?: SessionSummaryScalarWhereInput | SessionSummaryScalarWhereInput[]
    OR?: SessionSummaryScalarWhereInput[]
    NOT?: SessionSummaryScalarWhereInput | SessionSummaryScalarWhereInput[]
    id?: UuidFilter<"SessionSummary"> | string
    sessionId?: UuidFilter<"SessionSummary"> | string
    userId?: UuidFilter<"SessionSummary"> | string
    summaryText?: StringFilter<"SessionSummary"> | string
    keyPoints?: JsonNullableFilter<"SessionSummary">
    actionItems?: JsonNullableFilter<"SessionSummary">
    provider?: StringFilter<"SessionSummary"> | string
    rawResponse?: JsonNullableFilter<"SessionSummary">
    createdAt?: DateTimeFilter<"SessionSummary"> | Date | string
    updatedAt?: DateTimeFilter<"SessionSummary"> | Date | string
  }

  export type CheckinScheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckinScheduleWhereUniqueInput
    update: XOR<CheckinScheduleUpdateWithoutUserInput, CheckinScheduleUncheckedUpdateWithoutUserInput>
    create: XOR<CheckinScheduleCreateWithoutUserInput, CheckinScheduleUncheckedCreateWithoutUserInput>
  }

  export type CheckinScheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckinScheduleWhereUniqueInput
    data: XOR<CheckinScheduleUpdateWithoutUserInput, CheckinScheduleUncheckedUpdateWithoutUserInput>
  }

  export type CheckinScheduleUpdateManyWithWhereWithoutUserInput = {
    where: CheckinScheduleScalarWhereInput
    data: XOR<CheckinScheduleUpdateManyMutationInput, CheckinScheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckinScheduleScalarWhereInput = {
    AND?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
    OR?: CheckinScheduleScalarWhereInput[]
    NOT?: CheckinScheduleScalarWhereInput | CheckinScheduleScalarWhereInput[]
    id?: UuidFilter<"CheckinSchedule"> | string
    userId?: UuidFilter<"CheckinSchedule"> | string
    goalId?: UuidNullableFilter<"CheckinSchedule"> | string | null
    milestoneId?: UuidNullableFilter<"CheckinSchedule"> | string | null
    frequency?: StringFilter<"CheckinSchedule"> | string
    nextDueAt?: DateTimeNullableFilter<"CheckinSchedule"> | Date | string | null
    enabled?: BoolFilter<"CheckinSchedule"> | boolean
    createdAt?: DateTimeFilter<"CheckinSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"CheckinSchedule"> | Date | string
  }

  export type CheckinEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckinEntryWhereUniqueInput
    update: XOR<CheckinEntryUpdateWithoutUserInput, CheckinEntryUncheckedUpdateWithoutUserInput>
    create: XOR<CheckinEntryCreateWithoutUserInput, CheckinEntryUncheckedCreateWithoutUserInput>
  }

  export type CheckinEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckinEntryWhereUniqueInput
    data: XOR<CheckinEntryUpdateWithoutUserInput, CheckinEntryUncheckedUpdateWithoutUserInput>
  }

  export type CheckinEntryUpdateManyWithWhereWithoutUserInput = {
    where: CheckinEntryScalarWhereInput
    data: XOR<CheckinEntryUpdateManyMutationInput, CheckinEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckinEntryScalarWhereInput = {
    AND?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
    OR?: CheckinEntryScalarWhereInput[]
    NOT?: CheckinEntryScalarWhereInput | CheckinEntryScalarWhereInput[]
    id?: UuidFilter<"CheckinEntry"> | string
    scheduleId?: UuidFilter<"CheckinEntry"> | string
    userId?: UuidFilter<"CheckinEntry"> | string
    goalId?: UuidNullableFilter<"CheckinEntry"> | string | null
    milestoneId?: UuidNullableFilter<"CheckinEntry"> | string | null
    completedAt?: DateTimeFilter<"CheckinEntry"> | Date | string
    answers?: JsonNullableFilter<"CheckinEntry">
    notes?: StringNullableFilter<"CheckinEntry"> | string | null
    progress?: IntNullableFilter<"CheckinEntry"> | number | null
    createdAt?: DateTimeFilter<"CheckinEntry"> | Date | string
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryUncheckedCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type JourneyCreateWithoutGoalInput = {
    id?: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    milestones?: MilestoneCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUncheckedCreateWithoutGoalInput = {
    id?: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutJourneyInput
  }

  export type JourneyCreateOrConnectWithoutGoalInput = {
    where: JourneyWhereUniqueInput
    create: XOR<JourneyCreateWithoutGoalInput, JourneyUncheckedCreateWithoutGoalInput>
  }

  export type JourneyCreateManyGoalInputEnvelope = {
    data: JourneyCreateManyGoalInput | JourneyCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type SuggestionCreateWithoutGoalInput = {
    id?: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateWithoutGoalInput = {
    id?: string
    userId: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SuggestionCreateOrConnectWithoutGoalInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutGoalInput, SuggestionUncheckedCreateWithoutGoalInput>
  }

  export type SuggestionCreateManyGoalInputEnvelope = {
    data: SuggestionCreateManyGoalInput | SuggestionCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type TutorSessionCreateWithoutGoalInput = {
    id?: string
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTutorSessionsInput
    milestone?: MilestoneCreateNestedOneWithoutTutorSessionsInput
    messages?: TutorMessageCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionUncheckedCreateWithoutGoalInput = {
    id?: string
    userId: string
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TutorMessageUncheckedCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionCreateOrConnectWithoutGoalInput = {
    where: TutorSessionWhereUniqueInput
    create: XOR<TutorSessionCreateWithoutGoalInput, TutorSessionUncheckedCreateWithoutGoalInput>
  }

  export type TutorSessionCreateManyGoalInputEnvelope = {
    data: TutorSessionCreateManyGoalInput | TutorSessionCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type CheckinScheduleCreateWithoutGoalInput = {
    id?: string
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCheckinScheduleInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinScheduleInput
    entries?: CheckinEntryCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleUncheckedCreateWithoutGoalInput = {
    id?: string
    userId: string
    milestoneId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: CheckinEntryUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleCreateOrConnectWithoutGoalInput = {
    where: CheckinScheduleWhereUniqueInput
    create: XOR<CheckinScheduleCreateWithoutGoalInput, CheckinScheduleUncheckedCreateWithoutGoalInput>
  }

  export type CheckinScheduleCreateManyGoalInputEnvelope = {
    data: CheckinScheduleCreateManyGoalInput | CheckinScheduleCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type CheckinEntryCreateWithoutGoalInput = {
    id?: string
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
    schedule: CheckinScheduleCreateNestedOneWithoutEntriesInput
    user: UserCreateNestedOneWithoutCheckinEntryInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinEntryInput
  }

  export type CheckinEntryUncheckedCreateWithoutGoalInput = {
    id?: string
    scheduleId: string
    userId: string
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type CheckinEntryCreateOrConnectWithoutGoalInput = {
    where: CheckinEntryWhereUniqueInput
    create: XOR<CheckinEntryCreateWithoutGoalInput, CheckinEntryUncheckedCreateWithoutGoalInput>
  }

  export type CheckinEntryCreateManyGoalInputEnvelope = {
    data: CheckinEntryCreateManyGoalInput | CheckinEntryCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUncheckedUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUncheckedUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JourneyUpsertWithWhereUniqueWithoutGoalInput = {
    where: JourneyWhereUniqueInput
    update: XOR<JourneyUpdateWithoutGoalInput, JourneyUncheckedUpdateWithoutGoalInput>
    create: XOR<JourneyCreateWithoutGoalInput, JourneyUncheckedCreateWithoutGoalInput>
  }

  export type JourneyUpdateWithWhereUniqueWithoutGoalInput = {
    where: JourneyWhereUniqueInput
    data: XOR<JourneyUpdateWithoutGoalInput, JourneyUncheckedUpdateWithoutGoalInput>
  }

  export type JourneyUpdateManyWithWhereWithoutGoalInput = {
    where: JourneyScalarWhereInput
    data: XOR<JourneyUpdateManyMutationInput, JourneyUncheckedUpdateManyWithoutGoalInput>
  }

  export type JourneyScalarWhereInput = {
    AND?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
    OR?: JourneyScalarWhereInput[]
    NOT?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
    id?: UuidFilter<"Journey"> | string
    goalId?: UuidFilter<"Journey"> | string
    title?: StringNullableFilter<"Journey"> | string | null
    startDate?: DateTimeNullableFilter<"Journey"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Journey"> | Date | string | null
    meta?: JsonNullableFilter<"Journey">
    createdAt?: DateTimeFilter<"Journey"> | Date | string
  }

  export type SuggestionUpsertWithWhereUniqueWithoutGoalInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutGoalInput, SuggestionUncheckedUpdateWithoutGoalInput>
    create: XOR<SuggestionCreateWithoutGoalInput, SuggestionUncheckedCreateWithoutGoalInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutGoalInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutGoalInput, SuggestionUncheckedUpdateWithoutGoalInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutGoalInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutGoalInput>
  }

  export type TutorSessionUpsertWithWhereUniqueWithoutGoalInput = {
    where: TutorSessionWhereUniqueInput
    update: XOR<TutorSessionUpdateWithoutGoalInput, TutorSessionUncheckedUpdateWithoutGoalInput>
    create: XOR<TutorSessionCreateWithoutGoalInput, TutorSessionUncheckedCreateWithoutGoalInput>
  }

  export type TutorSessionUpdateWithWhereUniqueWithoutGoalInput = {
    where: TutorSessionWhereUniqueInput
    data: XOR<TutorSessionUpdateWithoutGoalInput, TutorSessionUncheckedUpdateWithoutGoalInput>
  }

  export type TutorSessionUpdateManyWithWhereWithoutGoalInput = {
    where: TutorSessionScalarWhereInput
    data: XOR<TutorSessionUpdateManyMutationInput, TutorSessionUncheckedUpdateManyWithoutGoalInput>
  }

  export type CheckinScheduleUpsertWithWhereUniqueWithoutGoalInput = {
    where: CheckinScheduleWhereUniqueInput
    update: XOR<CheckinScheduleUpdateWithoutGoalInput, CheckinScheduleUncheckedUpdateWithoutGoalInput>
    create: XOR<CheckinScheduleCreateWithoutGoalInput, CheckinScheduleUncheckedCreateWithoutGoalInput>
  }

  export type CheckinScheduleUpdateWithWhereUniqueWithoutGoalInput = {
    where: CheckinScheduleWhereUniqueInput
    data: XOR<CheckinScheduleUpdateWithoutGoalInput, CheckinScheduleUncheckedUpdateWithoutGoalInput>
  }

  export type CheckinScheduleUpdateManyWithWhereWithoutGoalInput = {
    where: CheckinScheduleScalarWhereInput
    data: XOR<CheckinScheduleUpdateManyMutationInput, CheckinScheduleUncheckedUpdateManyWithoutGoalInput>
  }

  export type CheckinEntryUpsertWithWhereUniqueWithoutGoalInput = {
    where: CheckinEntryWhereUniqueInput
    update: XOR<CheckinEntryUpdateWithoutGoalInput, CheckinEntryUncheckedUpdateWithoutGoalInput>
    create: XOR<CheckinEntryCreateWithoutGoalInput, CheckinEntryUncheckedCreateWithoutGoalInput>
  }

  export type CheckinEntryUpdateWithWhereUniqueWithoutGoalInput = {
    where: CheckinEntryWhereUniqueInput
    data: XOR<CheckinEntryUpdateWithoutGoalInput, CheckinEntryUncheckedUpdateWithoutGoalInput>
  }

  export type CheckinEntryUpdateManyWithWhereWithoutGoalInput = {
    where: CheckinEntryScalarWhereInput
    data: XOR<CheckinEntryUpdateManyMutationInput, CheckinEntryUncheckedUpdateManyWithoutGoalInput>
  }

  export type GoalCreateWithoutJourneysInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    suggestions?: SuggestionCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutJourneysInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutJourneysInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutJourneysInput, GoalUncheckedCreateWithoutJourneysInput>
  }

  export type MilestoneCreateWithoutJourneyInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dependencies?: MilestoneDependencyCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutJourneyInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dependencies?: MilestoneDependencyUncheckedCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutJourneyInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutJourneyInput, MilestoneUncheckedCreateWithoutJourneyInput>
  }

  export type MilestoneCreateManyJourneyInputEnvelope = {
    data: MilestoneCreateManyJourneyInput | MilestoneCreateManyJourneyInput[]
    skipDuplicates?: boolean
  }

  export type GoalUpsertWithoutJourneysInput = {
    update: XOR<GoalUpdateWithoutJourneysInput, GoalUncheckedUpdateWithoutJourneysInput>
    create: XOR<GoalCreateWithoutJourneysInput, GoalUncheckedCreateWithoutJourneysInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutJourneysInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutJourneysInput, GoalUncheckedUpdateWithoutJourneysInput>
  }

  export type GoalUpdateWithoutJourneysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    suggestions?: SuggestionUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutJourneysInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUncheckedUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type MilestoneUpsertWithWhereUniqueWithoutJourneyInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutJourneyInput, MilestoneUncheckedUpdateWithoutJourneyInput>
    create: XOR<MilestoneCreateWithoutJourneyInput, MilestoneUncheckedCreateWithoutJourneyInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutJourneyInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutJourneyInput, MilestoneUncheckedUpdateWithoutJourneyInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutJourneyInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutJourneyInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: UuidFilter<"Milestone"> | string
    journeyId?: UuidFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    orderIndex?: IntFilter<"Milestone"> | number
    startWeek?: IntNullableFilter<"Milestone"> | number | null
    endWeek?: IntNullableFilter<"Milestone"> | number | null
    estimatedHours?: IntNullableFilter<"Milestone"> | number | null
    progress?: IntFilter<"Milestone"> | number
    metadata?: JsonNullableFilter<"Milestone">
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
  }

  export type JourneyCreateWithoutMilestonesInput = {
    id?: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    goal: GoalCreateNestedOneWithoutJourneysInput
  }

  export type JourneyUncheckedCreateWithoutMilestonesInput = {
    id?: string
    goalId: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type JourneyCreateOrConnectWithoutMilestonesInput = {
    where: JourneyWhereUniqueInput
    create: XOR<JourneyCreateWithoutMilestonesInput, JourneyUncheckedCreateWithoutMilestonesInput>
  }

  export type MilestoneDependencyCreateWithoutMilestoneInput = {
    id?: string
    createdAt?: Date | string
    dependsOn: MilestoneCreateNestedOneWithoutRequiredByInput
  }

  export type MilestoneDependencyUncheckedCreateWithoutMilestoneInput = {
    id?: string
    dependsOnId: string
    createdAt?: Date | string
  }

  export type MilestoneDependencyCreateOrConnectWithoutMilestoneInput = {
    where: MilestoneDependencyWhereUniqueInput
    create: XOR<MilestoneDependencyCreateWithoutMilestoneInput, MilestoneDependencyUncheckedCreateWithoutMilestoneInput>
  }

  export type MilestoneDependencyCreateManyMilestoneInputEnvelope = {
    data: MilestoneDependencyCreateManyMilestoneInput | MilestoneDependencyCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneDependencyCreateWithoutDependsOnInput = {
    id?: string
    createdAt?: Date | string
    milestone: MilestoneCreateNestedOneWithoutDependenciesInput
  }

  export type MilestoneDependencyUncheckedCreateWithoutDependsOnInput = {
    id?: string
    milestoneId: string
    createdAt?: Date | string
  }

  export type MilestoneDependencyCreateOrConnectWithoutDependsOnInput = {
    where: MilestoneDependencyWhereUniqueInput
    create: XOR<MilestoneDependencyCreateWithoutDependsOnInput, MilestoneDependencyUncheckedCreateWithoutDependsOnInput>
  }

  export type MilestoneDependencyCreateManyDependsOnInputEnvelope = {
    data: MilestoneDependencyCreateManyDependsOnInput | MilestoneDependencyCreateManyDependsOnInput[]
    skipDuplicates?: boolean
  }

  export type TutorSessionCreateWithoutMilestoneInput = {
    id?: string
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTutorSessionsInput
    goal?: GoalCreateNestedOneWithoutTutorSessionsInput
    messages?: TutorMessageCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionUncheckedCreateWithoutMilestoneInput = {
    id?: string
    userId: string
    goalId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TutorMessageUncheckedCreateNestedManyWithoutSessionInput
    summary?: SessionSummaryUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionCreateOrConnectWithoutMilestoneInput = {
    where: TutorSessionWhereUniqueInput
    create: XOR<TutorSessionCreateWithoutMilestoneInput, TutorSessionUncheckedCreateWithoutMilestoneInput>
  }

  export type TutorSessionCreateManyMilestoneInputEnvelope = {
    data: TutorSessionCreateManyMilestoneInput | TutorSessionCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type CheckinScheduleCreateWithoutMilestoneInput = {
    id?: string
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCheckinScheduleInput
    goal?: GoalCreateNestedOneWithoutCheckinScheduleInput
    entries?: CheckinEntryCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleUncheckedCreateWithoutMilestoneInput = {
    id?: string
    userId: string
    goalId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: CheckinEntryUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type CheckinScheduleCreateOrConnectWithoutMilestoneInput = {
    where: CheckinScheduleWhereUniqueInput
    create: XOR<CheckinScheduleCreateWithoutMilestoneInput, CheckinScheduleUncheckedCreateWithoutMilestoneInput>
  }

  export type CheckinScheduleCreateManyMilestoneInputEnvelope = {
    data: CheckinScheduleCreateManyMilestoneInput | CheckinScheduleCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type CheckinEntryCreateWithoutMilestoneInput = {
    id?: string
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
    schedule: CheckinScheduleCreateNestedOneWithoutEntriesInput
    user: UserCreateNestedOneWithoutCheckinEntryInput
    goal?: GoalCreateNestedOneWithoutCheckinEntryInput
  }

  export type CheckinEntryUncheckedCreateWithoutMilestoneInput = {
    id?: string
    scheduleId: string
    userId: string
    goalId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type CheckinEntryCreateOrConnectWithoutMilestoneInput = {
    where: CheckinEntryWhereUniqueInput
    create: XOR<CheckinEntryCreateWithoutMilestoneInput, CheckinEntryUncheckedCreateWithoutMilestoneInput>
  }

  export type CheckinEntryCreateManyMilestoneInputEnvelope = {
    data: CheckinEntryCreateManyMilestoneInput | CheckinEntryCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type JourneyUpsertWithoutMilestonesInput = {
    update: XOR<JourneyUpdateWithoutMilestonesInput, JourneyUncheckedUpdateWithoutMilestonesInput>
    create: XOR<JourneyCreateWithoutMilestonesInput, JourneyUncheckedCreateWithoutMilestonesInput>
    where?: JourneyWhereInput
  }

  export type JourneyUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: JourneyWhereInput
    data: XOR<JourneyUpdateWithoutMilestonesInput, JourneyUncheckedUpdateWithoutMilestonesInput>
  }

  export type JourneyUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutJourneysNestedInput
  }

  export type JourneyUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: MilestoneDependencyWhereUniqueInput
    update: XOR<MilestoneDependencyUpdateWithoutMilestoneInput, MilestoneDependencyUncheckedUpdateWithoutMilestoneInput>
    create: XOR<MilestoneDependencyCreateWithoutMilestoneInput, MilestoneDependencyUncheckedCreateWithoutMilestoneInput>
  }

  export type MilestoneDependencyUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: MilestoneDependencyWhereUniqueInput
    data: XOR<MilestoneDependencyUpdateWithoutMilestoneInput, MilestoneDependencyUncheckedUpdateWithoutMilestoneInput>
  }

  export type MilestoneDependencyUpdateManyWithWhereWithoutMilestoneInput = {
    where: MilestoneDependencyScalarWhereInput
    data: XOR<MilestoneDependencyUpdateManyMutationInput, MilestoneDependencyUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type MilestoneDependencyScalarWhereInput = {
    AND?: MilestoneDependencyScalarWhereInput | MilestoneDependencyScalarWhereInput[]
    OR?: MilestoneDependencyScalarWhereInput[]
    NOT?: MilestoneDependencyScalarWhereInput | MilestoneDependencyScalarWhereInput[]
    id?: UuidFilter<"MilestoneDependency"> | string
    milestoneId?: UuidFilter<"MilestoneDependency"> | string
    dependsOnId?: UuidFilter<"MilestoneDependency"> | string
    createdAt?: DateTimeFilter<"MilestoneDependency"> | Date | string
  }

  export type MilestoneDependencyUpsertWithWhereUniqueWithoutDependsOnInput = {
    where: MilestoneDependencyWhereUniqueInput
    update: XOR<MilestoneDependencyUpdateWithoutDependsOnInput, MilestoneDependencyUncheckedUpdateWithoutDependsOnInput>
    create: XOR<MilestoneDependencyCreateWithoutDependsOnInput, MilestoneDependencyUncheckedCreateWithoutDependsOnInput>
  }

  export type MilestoneDependencyUpdateWithWhereUniqueWithoutDependsOnInput = {
    where: MilestoneDependencyWhereUniqueInput
    data: XOR<MilestoneDependencyUpdateWithoutDependsOnInput, MilestoneDependencyUncheckedUpdateWithoutDependsOnInput>
  }

  export type MilestoneDependencyUpdateManyWithWhereWithoutDependsOnInput = {
    where: MilestoneDependencyScalarWhereInput
    data: XOR<MilestoneDependencyUpdateManyMutationInput, MilestoneDependencyUncheckedUpdateManyWithoutDependsOnInput>
  }

  export type TutorSessionUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: TutorSessionWhereUniqueInput
    update: XOR<TutorSessionUpdateWithoutMilestoneInput, TutorSessionUncheckedUpdateWithoutMilestoneInput>
    create: XOR<TutorSessionCreateWithoutMilestoneInput, TutorSessionUncheckedCreateWithoutMilestoneInput>
  }

  export type TutorSessionUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: TutorSessionWhereUniqueInput
    data: XOR<TutorSessionUpdateWithoutMilestoneInput, TutorSessionUncheckedUpdateWithoutMilestoneInput>
  }

  export type TutorSessionUpdateManyWithWhereWithoutMilestoneInput = {
    where: TutorSessionScalarWhereInput
    data: XOR<TutorSessionUpdateManyMutationInput, TutorSessionUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type CheckinScheduleUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: CheckinScheduleWhereUniqueInput
    update: XOR<CheckinScheduleUpdateWithoutMilestoneInput, CheckinScheduleUncheckedUpdateWithoutMilestoneInput>
    create: XOR<CheckinScheduleCreateWithoutMilestoneInput, CheckinScheduleUncheckedCreateWithoutMilestoneInput>
  }

  export type CheckinScheduleUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: CheckinScheduleWhereUniqueInput
    data: XOR<CheckinScheduleUpdateWithoutMilestoneInput, CheckinScheduleUncheckedUpdateWithoutMilestoneInput>
  }

  export type CheckinScheduleUpdateManyWithWhereWithoutMilestoneInput = {
    where: CheckinScheduleScalarWhereInput
    data: XOR<CheckinScheduleUpdateManyMutationInput, CheckinScheduleUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type CheckinEntryUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: CheckinEntryWhereUniqueInput
    update: XOR<CheckinEntryUpdateWithoutMilestoneInput, CheckinEntryUncheckedUpdateWithoutMilestoneInput>
    create: XOR<CheckinEntryCreateWithoutMilestoneInput, CheckinEntryUncheckedCreateWithoutMilestoneInput>
  }

  export type CheckinEntryUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: CheckinEntryWhereUniqueInput
    data: XOR<CheckinEntryUpdateWithoutMilestoneInput, CheckinEntryUncheckedUpdateWithoutMilestoneInput>
  }

  export type CheckinEntryUpdateManyWithWhereWithoutMilestoneInput = {
    where: CheckinEntryScalarWhereInput
    data: XOR<CheckinEntryUpdateManyMutationInput, CheckinEntryUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type MilestoneCreateWithoutDependenciesInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMilestonesInput
    requiredBy?: MilestoneDependencyCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutDependenciesInput = {
    id?: string
    journeyId: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredBy?: MilestoneDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutDependenciesInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutDependenciesInput, MilestoneUncheckedCreateWithoutDependenciesInput>
  }

  export type MilestoneCreateWithoutRequiredByInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMilestonesInput
    dependencies?: MilestoneDependencyCreateNestedManyWithoutMilestoneInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutRequiredByInput = {
    id?: string
    journeyId: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dependencies?: MilestoneDependencyUncheckedCreateNestedManyWithoutMilestoneInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutRequiredByInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutRequiredByInput, MilestoneUncheckedCreateWithoutRequiredByInput>
  }

  export type MilestoneUpsertWithoutDependenciesInput = {
    update: XOR<MilestoneUpdateWithoutDependenciesInput, MilestoneUncheckedUpdateWithoutDependenciesInput>
    create: XOR<MilestoneCreateWithoutDependenciesInput, MilestoneUncheckedCreateWithoutDependenciesInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutDependenciesInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutDependenciesInput, MilestoneUncheckedUpdateWithoutDependenciesInput>
  }

  export type MilestoneUpdateWithoutDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMilestonesNestedInput
    requiredBy?: MilestoneDependencyUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredBy?: MilestoneDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUpsertWithoutRequiredByInput = {
    update: XOR<MilestoneUpdateWithoutRequiredByInput, MilestoneUncheckedUpdateWithoutRequiredByInput>
    create: XOR<MilestoneCreateWithoutRequiredByInput, MilestoneUncheckedCreateWithoutRequiredByInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutRequiredByInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutRequiredByInput, MilestoneUncheckedUpdateWithoutRequiredByInput>
  }

  export type MilestoneUpdateWithoutRequiredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMilestonesNestedInput
    dependencies?: MilestoneDependencyUpdateManyWithoutMilestoneNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutRequiredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencies?: MilestoneDependencyUncheckedUpdateManyWithoutMilestoneNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type UserCreateWithoutSuggestionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSuggestionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryUncheckedCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSuggestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
  }

  export type GoalCreateWithoutSuggestionsInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    journeys?: JourneyCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutSuggestionsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyUncheckedCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutSuggestionsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutSuggestionsInput, GoalUncheckedCreateWithoutSuggestionsInput>
  }

  export type UserUpsertWithoutSuggestionsInput = {
    update: XOR<UserUpdateWithoutSuggestionsInput, UserUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<UserCreateWithoutSuggestionsInput, UserUncheckedCreateWithoutSuggestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuggestionsInput, UserUncheckedUpdateWithoutSuggestionsInput>
  }

  export type UserUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUncheckedUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalUpsertWithoutSuggestionsInput = {
    update: XOR<GoalUpdateWithoutSuggestionsInput, GoalUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<GoalCreateWithoutSuggestionsInput, GoalUncheckedCreateWithoutSuggestionsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutSuggestionsInput, GoalUncheckedUpdateWithoutSuggestionsInput>
  }

  export type GoalUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    journeys?: JourneyUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUncheckedUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type UserCreateWithoutTutorSessionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    suggestions?: SuggestionCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTutorSessionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryUncheckedCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTutorSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutorSessionsInput, UserUncheckedCreateWithoutTutorSessionsInput>
  }

  export type GoalCreateWithoutTutorSessionsInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    journeys?: JourneyCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutTutorSessionsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyUncheckedCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutTutorSessionsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutTutorSessionsInput, GoalUncheckedCreateWithoutTutorSessionsInput>
  }

  export type MilestoneCreateWithoutTutorSessionsInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMilestonesInput
    dependencies?: MilestoneDependencyCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyCreateNestedManyWithoutDependsOnInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutTutorSessionsInput = {
    id?: string
    journeyId: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dependencies?: MilestoneDependencyUncheckedCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutTutorSessionsInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutTutorSessionsInput, MilestoneUncheckedCreateWithoutTutorSessionsInput>
  }

  export type TutorMessageCreateWithoutSessionInput = {
    id?: string
    sender: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TutorMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    sender: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TutorMessageCreateOrConnectWithoutSessionInput = {
    where: TutorMessageWhereUniqueInput
    create: XOR<TutorMessageCreateWithoutSessionInput, TutorMessageUncheckedCreateWithoutSessionInput>
  }

  export type TutorMessageCreateManySessionInputEnvelope = {
    data: TutorMessageCreateManySessionInput | TutorMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SessionSummaryCreateWithoutSessionInput = {
    id?: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionSummariesInput
  }

  export type SessionSummaryUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionSummaryCreateOrConnectWithoutSessionInput = {
    where: SessionSummaryWhereUniqueInput
    create: XOR<SessionSummaryCreateWithoutSessionInput, SessionSummaryUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutTutorSessionsInput = {
    update: XOR<UserUpdateWithoutTutorSessionsInput, UserUncheckedUpdateWithoutTutorSessionsInput>
    create: XOR<UserCreateWithoutTutorSessionsInput, UserUncheckedCreateWithoutTutorSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutorSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutorSessionsInput, UserUncheckedUpdateWithoutTutorSessionsInput>
  }

  export type UserUpdateWithoutTutorSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTutorSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUncheckedUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalUpsertWithoutTutorSessionsInput = {
    update: XOR<GoalUpdateWithoutTutorSessionsInput, GoalUncheckedUpdateWithoutTutorSessionsInput>
    create: XOR<GoalCreateWithoutTutorSessionsInput, GoalUncheckedCreateWithoutTutorSessionsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutTutorSessionsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutTutorSessionsInput, GoalUncheckedUpdateWithoutTutorSessionsInput>
  }

  export type GoalUpdateWithoutTutorSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    journeys?: JourneyUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutTutorSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUncheckedUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type MilestoneUpsertWithoutTutorSessionsInput = {
    update: XOR<MilestoneUpdateWithoutTutorSessionsInput, MilestoneUncheckedUpdateWithoutTutorSessionsInput>
    create: XOR<MilestoneCreateWithoutTutorSessionsInput, MilestoneUncheckedCreateWithoutTutorSessionsInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutTutorSessionsInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutTutorSessionsInput, MilestoneUncheckedUpdateWithoutTutorSessionsInput>
  }

  export type MilestoneUpdateWithoutTutorSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMilestonesNestedInput
    dependencies?: MilestoneDependencyUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUpdateManyWithoutDependsOnNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutTutorSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencies?: MilestoneDependencyUncheckedUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type TutorMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: TutorMessageWhereUniqueInput
    update: XOR<TutorMessageUpdateWithoutSessionInput, TutorMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<TutorMessageCreateWithoutSessionInput, TutorMessageUncheckedCreateWithoutSessionInput>
  }

  export type TutorMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: TutorMessageWhereUniqueInput
    data: XOR<TutorMessageUpdateWithoutSessionInput, TutorMessageUncheckedUpdateWithoutSessionInput>
  }

  export type TutorMessageUpdateManyWithWhereWithoutSessionInput = {
    where: TutorMessageScalarWhereInput
    data: XOR<TutorMessageUpdateManyMutationInput, TutorMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type TutorMessageScalarWhereInput = {
    AND?: TutorMessageScalarWhereInput | TutorMessageScalarWhereInput[]
    OR?: TutorMessageScalarWhereInput[]
    NOT?: TutorMessageScalarWhereInput | TutorMessageScalarWhereInput[]
    id?: UuidFilter<"TutorMessage"> | string
    sessionId?: UuidFilter<"TutorMessage"> | string
    sender?: StringFilter<"TutorMessage"> | string
    content?: StringFilter<"TutorMessage"> | string
    metadata?: JsonNullableFilter<"TutorMessage">
    createdAt?: DateTimeFilter<"TutorMessage"> | Date | string
  }

  export type SessionSummaryUpsertWithoutSessionInput = {
    update: XOR<SessionSummaryUpdateWithoutSessionInput, SessionSummaryUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionSummaryCreateWithoutSessionInput, SessionSummaryUncheckedCreateWithoutSessionInput>
    where?: SessionSummaryWhereInput
  }

  export type SessionSummaryUpdateToOneWithWhereWithoutSessionInput = {
    where?: SessionSummaryWhereInput
    data: XOR<SessionSummaryUpdateWithoutSessionInput, SessionSummaryUncheckedUpdateWithoutSessionInput>
  }

  export type SessionSummaryUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionSummariesNestedInput
  }

  export type SessionSummaryUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorSessionCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTutorSessionsInput
    goal?: GoalCreateNestedOneWithoutTutorSessionsInput
    milestone?: MilestoneCreateNestedOneWithoutTutorSessionsInput
    summary?: SessionSummaryCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    summary?: SessionSummaryUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TutorSessionCreateOrConnectWithoutMessagesInput = {
    where: TutorSessionWhereUniqueInput
    create: XOR<TutorSessionCreateWithoutMessagesInput, TutorSessionUncheckedCreateWithoutMessagesInput>
  }

  export type TutorSessionUpsertWithoutMessagesInput = {
    update: XOR<TutorSessionUpdateWithoutMessagesInput, TutorSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<TutorSessionCreateWithoutMessagesInput, TutorSessionUncheckedCreateWithoutMessagesInput>
    where?: TutorSessionWhereInput
  }

  export type TutorSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TutorSessionWhereInput
    data: XOR<TutorSessionUpdateWithoutMessagesInput, TutorSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type TutorSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTutorSessionsNestedInput
    goal?: GoalUpdateOneWithoutTutorSessionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTutorSessionsNestedInput
    summary?: SessionSummaryUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SessionSummaryUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionCreateWithoutSummaryInput = {
    id?: string
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTutorSessionsInput
    goal?: GoalCreateNestedOneWithoutTutorSessionsInput
    milestone?: MilestoneCreateNestedOneWithoutTutorSessionsInput
    messages?: TutorMessageCreateNestedManyWithoutSessionInput
  }

  export type TutorSessionUncheckedCreateWithoutSummaryInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TutorMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TutorSessionCreateOrConnectWithoutSummaryInput = {
    where: TutorSessionWhereUniqueInput
    create: XOR<TutorSessionCreateWithoutSummaryInput, TutorSessionUncheckedCreateWithoutSummaryInput>
  }

  export type UserCreateWithoutSessionSummariesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    suggestions?: SuggestionCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionSummariesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionSummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionSummariesInput, UserUncheckedCreateWithoutSessionSummariesInput>
  }

  export type TutorSessionUpsertWithoutSummaryInput = {
    update: XOR<TutorSessionUpdateWithoutSummaryInput, TutorSessionUncheckedUpdateWithoutSummaryInput>
    create: XOR<TutorSessionCreateWithoutSummaryInput, TutorSessionUncheckedCreateWithoutSummaryInput>
    where?: TutorSessionWhereInput
  }

  export type TutorSessionUpdateToOneWithWhereWithoutSummaryInput = {
    where?: TutorSessionWhereInput
    data: XOR<TutorSessionUpdateWithoutSummaryInput, TutorSessionUncheckedUpdateWithoutSummaryInput>
  }

  export type TutorSessionUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTutorSessionsNestedInput
    goal?: GoalUpdateOneWithoutTutorSessionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTutorSessionsNestedInput
    messages?: TutorMessageUpdateManyWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TutorMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutSessionSummariesInput = {
    update: XOR<UserUpdateWithoutSessionSummariesInput, UserUncheckedUpdateWithoutSessionSummariesInput>
    create: XOR<UserCreateWithoutSessionSummariesInput, UserUncheckedCreateWithoutSessionSummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionSummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionSummariesInput, UserUncheckedUpdateWithoutSessionSummariesInput>
  }

  export type UserUpdateWithoutSessionSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCheckinScheduleInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    suggestions?: SuggestionCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheckinScheduleInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryUncheckedCreateNestedManyWithoutUserInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheckinScheduleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckinScheduleInput, UserUncheckedCreateWithoutCheckinScheduleInput>
  }

  export type GoalCreateWithoutCheckinScheduleInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    journeys?: JourneyCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutCheckinScheduleInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyUncheckedCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutGoalInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutCheckinScheduleInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutCheckinScheduleInput, GoalUncheckedCreateWithoutCheckinScheduleInput>
  }

  export type MilestoneCreateWithoutCheckinScheduleInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMilestonesInput
    dependencies?: MilestoneDependencyCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutCheckinScheduleInput = {
    id?: string
    journeyId: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dependencies?: MilestoneDependencyUncheckedCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinEntry?: CheckinEntryUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutCheckinScheduleInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutCheckinScheduleInput, MilestoneUncheckedCreateWithoutCheckinScheduleInput>
  }

  export type CheckinEntryCreateWithoutScheduleInput = {
    id?: string
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCheckinEntryInput
    goal?: GoalCreateNestedOneWithoutCheckinEntryInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinEntryInput
  }

  export type CheckinEntryUncheckedCreateWithoutScheduleInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type CheckinEntryCreateOrConnectWithoutScheduleInput = {
    where: CheckinEntryWhereUniqueInput
    create: XOR<CheckinEntryCreateWithoutScheduleInput, CheckinEntryUncheckedCreateWithoutScheduleInput>
  }

  export type CheckinEntryCreateManyScheduleInputEnvelope = {
    data: CheckinEntryCreateManyScheduleInput | CheckinEntryCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCheckinScheduleInput = {
    update: XOR<UserUpdateWithoutCheckinScheduleInput, UserUncheckedUpdateWithoutCheckinScheduleInput>
    create: XOR<UserCreateWithoutCheckinScheduleInput, UserUncheckedCreateWithoutCheckinScheduleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckinScheduleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckinScheduleInput, UserUncheckedUpdateWithoutCheckinScheduleInput>
  }

  export type UserUpdateWithoutCheckinScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckinScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUncheckedUpdateManyWithoutUserNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalUpsertWithoutCheckinScheduleInput = {
    update: XOR<GoalUpdateWithoutCheckinScheduleInput, GoalUncheckedUpdateWithoutCheckinScheduleInput>
    create: XOR<GoalCreateWithoutCheckinScheduleInput, GoalUncheckedCreateWithoutCheckinScheduleInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutCheckinScheduleInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutCheckinScheduleInput, GoalUncheckedUpdateWithoutCheckinScheduleInput>
  }

  export type GoalUpdateWithoutCheckinScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    journeys?: JourneyUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutCheckinScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUncheckedUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type MilestoneUpsertWithoutCheckinScheduleInput = {
    update: XOR<MilestoneUpdateWithoutCheckinScheduleInput, MilestoneUncheckedUpdateWithoutCheckinScheduleInput>
    create: XOR<MilestoneCreateWithoutCheckinScheduleInput, MilestoneUncheckedCreateWithoutCheckinScheduleInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutCheckinScheduleInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutCheckinScheduleInput, MilestoneUncheckedUpdateWithoutCheckinScheduleInput>
  }

  export type MilestoneUpdateWithoutCheckinScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMilestonesNestedInput
    dependencies?: MilestoneDependencyUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutCheckinScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencies?: MilestoneDependencyUncheckedUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type CheckinEntryUpsertWithWhereUniqueWithoutScheduleInput = {
    where: CheckinEntryWhereUniqueInput
    update: XOR<CheckinEntryUpdateWithoutScheduleInput, CheckinEntryUncheckedUpdateWithoutScheduleInput>
    create: XOR<CheckinEntryCreateWithoutScheduleInput, CheckinEntryUncheckedCreateWithoutScheduleInput>
  }

  export type CheckinEntryUpdateWithWhereUniqueWithoutScheduleInput = {
    where: CheckinEntryWhereUniqueInput
    data: XOR<CheckinEntryUpdateWithoutScheduleInput, CheckinEntryUncheckedUpdateWithoutScheduleInput>
  }

  export type CheckinEntryUpdateManyWithWhereWithoutScheduleInput = {
    where: CheckinEntryScalarWhereInput
    data: XOR<CheckinEntryUpdateManyMutationInput, CheckinEntryUncheckedUpdateManyWithoutScheduleInput>
  }

  export type CheckinScheduleCreateWithoutEntriesInput = {
    id?: string
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCheckinScheduleInput
    goal?: GoalCreateNestedOneWithoutCheckinScheduleInput
    milestone?: MilestoneCreateNestedOneWithoutCheckinScheduleInput
  }

  export type CheckinScheduleUncheckedCreateWithoutEntriesInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinScheduleCreateOrConnectWithoutEntriesInput = {
    where: CheckinScheduleWhereUniqueInput
    create: XOR<CheckinScheduleCreateWithoutEntriesInput, CheckinScheduleUncheckedCreateWithoutEntriesInput>
  }

  export type UserCreateWithoutCheckinEntryInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    suggestions?: SuggestionCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheckinEntryInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutUserInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutUserInput
    sessionSummaries?: SessionSummaryUncheckedCreateNestedManyWithoutUserInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheckinEntryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckinEntryInput, UserUncheckedCreateWithoutCheckinEntryInput>
  }

  export type GoalCreateWithoutCheckinEntryInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    journeys?: JourneyCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutCheckinEntryInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyUncheckedCreateNestedManyWithoutGoalInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutGoalInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutGoalInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutCheckinEntryInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutCheckinEntryInput, GoalUncheckedCreateWithoutCheckinEntryInput>
  }

  export type MilestoneCreateWithoutCheckinEntryInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMilestonesInput
    dependencies?: MilestoneDependencyCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutCheckinEntryInput = {
    id?: string
    journeyId: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dependencies?: MilestoneDependencyUncheckedCreateNestedManyWithoutMilestoneInput
    requiredBy?: MilestoneDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    tutorSessions?: TutorSessionUncheckedCreateNestedManyWithoutMilestoneInput
    CheckinSchedule?: CheckinScheduleUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutCheckinEntryInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutCheckinEntryInput, MilestoneUncheckedCreateWithoutCheckinEntryInput>
  }

  export type CheckinScheduleUpsertWithoutEntriesInput = {
    update: XOR<CheckinScheduleUpdateWithoutEntriesInput, CheckinScheduleUncheckedUpdateWithoutEntriesInput>
    create: XOR<CheckinScheduleCreateWithoutEntriesInput, CheckinScheduleUncheckedCreateWithoutEntriesInput>
    where?: CheckinScheduleWhereInput
  }

  export type CheckinScheduleUpdateToOneWithWhereWithoutEntriesInput = {
    where?: CheckinScheduleWhereInput
    data: XOR<CheckinScheduleUpdateWithoutEntriesInput, CheckinScheduleUncheckedUpdateWithoutEntriesInput>
  }

  export type CheckinScheduleUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinScheduleNestedInput
    goal?: GoalUpdateOneWithoutCheckinScheduleNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCheckinEntryInput = {
    update: XOR<UserUpdateWithoutCheckinEntryInput, UserUncheckedUpdateWithoutCheckinEntryInput>
    create: XOR<UserCreateWithoutCheckinEntryInput, UserUncheckedCreateWithoutCheckinEntryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckinEntryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckinEntryInput, UserUncheckedUpdateWithoutCheckinEntryInput>
  }

  export type UserUpdateWithoutCheckinEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckinEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutUserNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutUserNestedInput
    sessionSummaries?: SessionSummaryUncheckedUpdateManyWithoutUserNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalUpsertWithoutCheckinEntryInput = {
    update: XOR<GoalUpdateWithoutCheckinEntryInput, GoalUncheckedUpdateWithoutCheckinEntryInput>
    create: XOR<GoalCreateWithoutCheckinEntryInput, GoalUncheckedCreateWithoutCheckinEntryInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutCheckinEntryInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutCheckinEntryInput, GoalUncheckedUpdateWithoutCheckinEntryInput>
  }

  export type GoalUpdateWithoutCheckinEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    journeys?: JourneyUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutCheckinEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUncheckedUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type MilestoneUpsertWithoutCheckinEntryInput = {
    update: XOR<MilestoneUpdateWithoutCheckinEntryInput, MilestoneUncheckedUpdateWithoutCheckinEntryInput>
    create: XOR<MilestoneCreateWithoutCheckinEntryInput, MilestoneUncheckedCreateWithoutCheckinEntryInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutCheckinEntryInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutCheckinEntryInput, MilestoneUncheckedUpdateWithoutCheckinEntryInput>
  }

  export type MilestoneUpdateWithoutCheckinEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMilestonesNestedInput
    dependencies?: MilestoneDependencyUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutCheckinEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencies?: MilestoneDependencyUncheckedUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type GoalCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number | null
    suggestedWeeks?: number | null
    chunking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuggestionCreateManyUserInput = {
    id?: string
    goalId: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type TutorSessionCreateManyUserInput = {
    id?: string
    goalId?: string | null
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionSummaryCreateManyUserInput = {
    id?: string
    sessionId: string
    summaryText: string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinScheduleCreateManyUserInput = {
    id?: string
    goalId?: string | null
    milestoneId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinEntryCreateManyUserInput = {
    id?: string
    scheduleId: string
    goalId?: string | null
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUncheckedUpdateManyWithoutGoalNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutGoalNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutGoalNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutGoalNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: NullableIntFieldUpdateOperationsInput | number | null
    suggestedWeeks?: NullableIntFieldUpdateOperationsInput | number | null
    chunking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: GoalUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuggestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TutorSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutTutorSessionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTutorSessionsNestedInput
    messages?: TutorMessageUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TutorMessageUncheckedUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionSummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TutorSessionUpdateOneRequiredWithoutSummaryNestedInput
  }

  export type SessionSummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionSummaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    summaryText?: StringFieldUpdateOperationsInput | string
    keyPoints?: NullableJsonNullValueInput | InputJsonValue
    actionItems?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinScheduleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutCheckinScheduleNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinScheduleNestedInput
    entries?: CheckinEntryUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CheckinEntryUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: CheckinScheduleUpdateOneRequiredWithoutEntriesNestedInput
    goal?: GoalUpdateOneWithoutCheckinEntryNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinEntryNestedInput
  }

  export type CheckinEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyCreateManyGoalInput = {
    id?: string
    title?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SuggestionCreateManyGoalInput = {
    id?: string
    userId: string
    provider: string
    response: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type TutorSessionCreateManyGoalInput = {
    id?: string
    userId: string
    milestoneId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinScheduleCreateManyGoalInput = {
    id?: string
    userId: string
    milestoneId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinEntryCreateManyGoalInput = {
    id?: string
    scheduleId: string
    userId: string
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type JourneyUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuggestionUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    response?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TutorSessionUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTutorSessionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTutorSessionsNestedInput
    messages?: TutorMessageUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TutorMessageUncheckedUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinScheduleUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinScheduleNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinScheduleNestedInput
    entries?: CheckinEntryUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CheckinEntryUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: CheckinScheduleUpdateOneRequiredWithoutEntriesNestedInput
    user?: UserUpdateOneRequiredWithoutCheckinEntryNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinEntryNestedInput
  }

  export type CheckinEntryUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateManyJourneyInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    startWeek?: number | null
    endWeek?: number | null
    estimatedHours?: number | null
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencies?: MilestoneDependencyUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencies?: MilestoneDependencyUncheckedUpdateManyWithoutMilestoneNestedInput
    requiredBy?: MilestoneDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    tutorSessions?: TutorSessionUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinSchedule?: CheckinScheduleUncheckedUpdateManyWithoutMilestoneNestedInput
    CheckinEntry?: CheckinEntryUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateManyWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    startWeek?: NullableIntFieldUpdateOperationsInput | number | null
    endWeek?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyCreateManyMilestoneInput = {
    id?: string
    dependsOnId: string
    createdAt?: Date | string
  }

  export type MilestoneDependencyCreateManyDependsOnInput = {
    id?: string
    milestoneId: string
    createdAt?: Date | string
  }

  export type TutorSessionCreateManyMilestoneInput = {
    id?: string
    userId: string
    goalId?: string | null
    title?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinScheduleCreateManyMilestoneInput = {
    id?: string
    userId: string
    goalId?: string | null
    frequency: string
    nextDueAt?: Date | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinEntryCreateManyMilestoneInput = {
    id?: string
    scheduleId: string
    userId: string
    goalId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type MilestoneDependencyUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependsOn?: MilestoneUpdateOneRequiredWithoutRequiredByNestedInput
  }

  export type MilestoneDependencyUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyUncheckedUpdateManyWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyUpdateWithoutDependsOnInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateOneRequiredWithoutDependenciesNestedInput
  }

  export type MilestoneDependencyUncheckedUpdateWithoutDependsOnInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneDependencyUncheckedUpdateManyWithoutDependsOnInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorSessionUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTutorSessionsNestedInput
    goal?: GoalUpdateOneWithoutTutorSessionsNestedInput
    messages?: TutorMessageUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TutorMessageUncheckedUpdateManyWithoutSessionNestedInput
    summary?: SessionSummaryUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TutorSessionUncheckedUpdateManyWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinScheduleUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinScheduleNestedInput
    goal?: GoalUpdateOneWithoutCheckinScheduleNestedInput
    entries?: CheckinEntryUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CheckinEntryUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type CheckinScheduleUncheckedUpdateManyWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    nextDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: CheckinScheduleUpdateOneRequiredWithoutEntriesNestedInput
    user?: UserUpdateOneRequiredWithoutCheckinEntryNestedInput
    goal?: GoalUpdateOneWithoutCheckinEntryNestedInput
  }

  export type CheckinEntryUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUncheckedUpdateManyWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorMessageCreateManySessionInput = {
    id?: string
    sender: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TutorMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryCreateManyScheduleInput = {
    id?: string
    userId: string
    goalId?: string | null
    milestoneId?: string | null
    completedAt?: Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type CheckinEntryUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinEntryNestedInput
    goal?: GoalUpdateOneWithoutCheckinEntryNestedInput
    milestone?: MilestoneUpdateOneWithoutCheckinEntryNestedInput
  }

  export type CheckinEntryUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinEntryUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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