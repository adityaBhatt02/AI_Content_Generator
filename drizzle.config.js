/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://accounts:DUuEq1HxvI4n@ep-mute-mud-a5fjdzxd.us-east-2.aws.neon.tech/Ai-Content-Genrator?sslmode=require'
    }
  };