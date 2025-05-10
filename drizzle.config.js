/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://myGenerator_owner:npg_OnP0bhTJ3Htf@ep-shiny-term-a5mrx119-pooler.us-east-2.aws.neon.tech/myGenerator?sslmode=require'
    }
  };