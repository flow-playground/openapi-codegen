import { petApi, useFindPetsByStatusQuery } from "./store/petApi";

export const main = async () => {
  const { data } = useFindPetsByStatusQuery({ status: "available" });
  console.log(data?.[0].name);
};
