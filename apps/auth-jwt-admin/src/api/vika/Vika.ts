import { JsonValue } from "type-fest";

export type Vika = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
