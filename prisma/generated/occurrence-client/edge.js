
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
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
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

exports.Prisma.OccurrenceScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Occurrence: 'Occurrence'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "occurrenceClient",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/brunootto/dev/api-sgo-nest/prisma/generated/occurrence-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "OCCURRENCE_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIG9jY3VycmVuY2VDbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvb2NjdXJyZW5jZS1jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICAgICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICAgICA9IGVudigiT0NDVVJSRU5DRV9EQVRBQkFTRV9VUkwiKQogIHJlbGF0aW9uTW9kZSA9ICJwcmlzbWEiCn0KCm1vZGVsIE9jY3VycmVuY2UgewogIG9jb0lkICAgICAgIFN0cmluZyAgIEBpZCBAbWFwKCJPY29JZCIpCiAgc2UgICAgICAgICAgU3RyaW5nICAgQG1hcCgiU0UiKQogIGFsICAgICAgICAgIFN0cmluZyAgIEBtYXAoIkFMIikKICBlcXAgICAgICAgICBTdHJpbmcgICBAbWFwKCJFUVAiKQogIGR0SHJBbHQgICAgIERhdGVUaW1lIEBtYXAoIkR0SHJBbHQiKQogIGR0SHJPY28gICAgIERhdGVUaW1lIEBtYXAoIkR0SHJPY28iKQogIGR0SHJJbmkgICAgIERhdGVUaW1lIEBtYXAoIkR0SHJJbmkiKQogIGR0SHJGaW0gICAgIERhdGVUaW1lIEBtYXAoIkR0SHJGaW0iKQogIG5SZWxpZyAgICAgIEludCAgICAgIEBtYXAoIk5SZWxpZyIpCiAgZHVyYWNhbyAgICAgRmxvYXQgICAgQG1hcCgiRHVyYWNhbyIpCiAgdGlwb09jbyAgICAgU3RyaW5nICAgQG1hcCgiVGlwb09jbyIpCiAgcHJvdFNlbiAgICAgU3RyaW5nICAgQG1hcCgiUHJvdFNlbiIpCiAgcHJvdEF0dSAgICAgU3RyaW5nICAgQG1hcCgiUHJvdEF0dSIpCiAgZmFsdGFzICAgICAgU3RyaW5nICAgQG1hcCgiRmFsdGFzIikKICBjb25kUHJlICAgICBTdHJpbmcgICBAbWFwKCJDb25kUHJlIikKICBjb25kUG9zICAgICBTdHJpbmcgICBAbWFwKCJDb25kUG9zIikKICBlbWFpbFNlbmRlZCBTdHJpbmcgICBAbWFwKCJFbWFpbFNlbmRlZCIpCiAgc21zU2VuZGVkICAgU3RyaW5nICAgQG1hcCgiU01TU2VuZGVkIikKICBpZENhdXNhICAgICBJbnQgICAgICBAbWFwKCJJZENhdXNhIikKICBtb2RpZnlCeSAgICBTdHJpbmcgICBAbWFwKCJNb2RpZnlCeSIpCiAgY2F1c2EgICAgICAgU3RyaW5nICAgQG1hcCgiQ2F1c2EiKQogIG9icyAgICAgICAgIFN0cmluZyAgIEBtYXAoIk9icyIpCiAgaWRFbGVSZWRlICAgSW50ICAgICAgQG1hcCgiSWRFbGVSZWRlIikKICBkYWRvc19DQyAgICBTdHJpbmcgICBAbWFwKCJEYWRvc19DQyIpCiAgZGFkb3NfQ09EICAgU3RyaW5nICAgQG1hcCgiRGFkb3NfQ09EIikKICByZWZMb2NGYWx0ICBTdHJpbmcgICBAbWFwKCJSZWZMb2NGYWx0IikKICBjb250YWJEYXRhICBEYXRlVGltZSBAbWFwKCJDb250YWJEYXRhIikKICBjb250YUJ5ICAgICBTdHJpbmcgICBAbWFwKCJDb250YUJ5IikKICBtb2RpZkJ5ICAgICBTdHJpbmcgICBAbWFwKCJNb2RpZkJ5IikKCiAgQEBtYXAoIk9jb3JyZW5jaWEiKQp9Cg==",
  "inlineSchemaHash": "7be0011805e17013ccf41400fce5c29aab124c529199a06c54ab1cf7051adf9b"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Occurrence\":{\"dbName\":\"Ocorrencia\",\"fields\":[{\"name\":\"ocoId\",\"dbName\":\"OcoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"se\",\"dbName\":\"SE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"al\",\"dbName\":\"AL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eqp\",\"dbName\":\"EQP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dtHrAlt\",\"dbName\":\"DtHrAlt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dtHrOco\",\"dbName\":\"DtHrOco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dtHrIni\",\"dbName\":\"DtHrIni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dtHrFim\",\"dbName\":\"DtHrFim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nRelig\",\"dbName\":\"NRelig\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duracao\",\"dbName\":\"Duracao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoOco\",\"dbName\":\"TipoOco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"protSen\",\"dbName\":\"ProtSen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"protAtu\",\"dbName\":\"ProtAtu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faltas\",\"dbName\":\"Faltas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"condPre\",\"dbName\":\"CondPre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"condPos\",\"dbName\":\"CondPos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailSended\",\"dbName\":\"EmailSended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smsSended\",\"dbName\":\"SMSSended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idCausa\",\"dbName\":\"IdCausa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifyBy\",\"dbName\":\"ModifyBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"causa\",\"dbName\":\"Causa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obs\",\"dbName\":\"Obs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idEleRede\",\"dbName\":\"IdEleRede\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_CC\",\"dbName\":\"Dados_CC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_COD\",\"dbName\":\"Dados_COD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refLocFalt\",\"dbName\":\"RefLocFalt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contabData\",\"dbName\":\"ContabData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contaBy\",\"dbName\":\"ContaBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifBy\",\"dbName\":\"ModifBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    OCCURRENCE_DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['OCCURRENCE_DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.OCCURRENCE_DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

