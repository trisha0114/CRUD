import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";
import "./models/Book.js";
import inquirer from "inquirer";

// MySQL root connection
const rootSequelize = new Sequelize(
  "mysql://root:ogbactrisha@localhost:3306/"
);

try {
  const { createDb } = await inquirer.prompt([
    {
      type: "confirm",
      name: "createDb",
      message: "Database 'crud' may not exist. Create it?",
      default: true,
    },
  ]);

  if (createDb) {
    await rootSequelize.query(
      "CREATE DATABASE IF NOT EXISTS crud;"
    );
    console.log("✅ Database created (if it did not exist)");
  }

  await sequelize.authenticate();
  console.log("✅ Connected to MySQL database!");

  // Create/update tables without deleting existing records
  await sequelize.sync();

  console.log("✅ Tables created for all registered models!");
} catch (err) {
  console.error("❌ Migration failed:", err);
} finally {
  await sequelize.close();
  await rootSequelize.close();
}