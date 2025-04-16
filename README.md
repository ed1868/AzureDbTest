
 * README.md
 * 
 * # Azure Database Connection
 * 
 * This script connects to an Azure SQL Database using the `mssql` package.
 * 
 * ## Prerequisites
 * - Node.js installed on your machine.
 * - An Azure SQL Database.
 * - Environment variables set for database connection:
 *   - `DB_SERVER`: The server name of your Azure SQL Database.
 *   - `DB_DATABASE`: The name of your database.
 *   - `DB_USERNAME`: Your Azure SQL Database username.
 *   - `DB_PASSWORD`: Your Azure SQL Database password.
 * 
 * ## Installation
 * 1. Clone the repository.
 * 2. Run `npm install mssql` to install the required package.
 * 
 * ## Usage
 * Run the script using Node.js:
 * ```bash
 * node main.js
 * ```
 * 
 * Upon successful connection, it will log the current database name.
 * 
 * ## Error Handling
 * If the connection fails, an error message will be logged to the console.
