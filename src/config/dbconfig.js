const Pool = require("pg").Pool;
require("dotenv").config();
// const pool=new Pool({
//     user:"postgres",
//     host:"localhost",
//     database:"suoxappdb",
//     password:"mapostgres",
//     port:5432,

// });
//postgresql://bwtadmin:ZilTYM2np9KGsrtA@db-postgresql-blr1-58279-do-user-10483800-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

pool.connect((err) => {
  if (!err) {
    console.log("database connection succeeded");
  } else {
    console.log("database connection failed" + err);
  }
});

module.exports = pool;
