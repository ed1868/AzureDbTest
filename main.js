const sql = require('mssql');

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  authentication: {
    type: 'azure-active-directory-password',
    options: {
      userName: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  },
  options: {
    encrypt: true,
    enableArithAbort: true,
  }
};

async function connectToAzureDB() {
  try {
    let pool = await sql.connect(config);
    console.log("Connected successfully to Azure DB");
    let result = await pool.request().query("SELECT DB_NAME() AS [CurrentDatabase]");
    console.log(result.recordset);
    await sql.close();
  } catch (err) {
    console.error("Failed to connect to Azure DB", err);
  }
}

connectToAzureDB();
