import { DataSource } from "typeorm";
import { Users_entities } from "../../entities";

export default async function seedHashTags(dataSource: DataSource) {
  const Repo = dataSource.getRepository(Users_entities);
  const hashTags: Partial<Users_entities>[] = [
    {
      first_name: "ali",
      last_name: "norozi",
      contact: "0911111111",
      password: "1234A1234a",
    },
    {
      first_name: "zahra",
      last_name: "akbari",
      contact: "0922222222",
      password: "1234C1234c",
    },
    {
      first_name: "navid",
      last_name: "rostami",
      contact: "0933333333",
      password: "1234O1234o",
    },
  ];

  await Repo.upsert(hashTags, ["contact"]);
}
