import { SortOrder } from "../../util/SortOrder";

export type VikaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
};
