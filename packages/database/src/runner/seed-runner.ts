import { AppDataSource } from "../data-source";
import { seedUsers } from "../seeds";

export default async function runSeeds() {
  await AppDataSource.initialize();

  try {
    await seedUsers(AppDataSource);
  } catch (err) {
    console.error("❌ Seed failed", err);
  } finally {
    await AppDataSource.destroy();
  }
}
