import * as path from "path";
import { DataSource } from "typeorm";
import * as entities from "../entities";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5437,
  username: "ayin_user",
  password: "1997M1997m",
  database: "nest_learning_db",
  synchronize: false,
  logging: true,
  ssl: false,
  extra: {
    connectionTimeoutMillis: 10000,
  },

  entities: Object.values(entities),
  migrations: [path.join(__dirname, "../migrations/**/*.{ts,js}")],
});

export default AppDataSource;
