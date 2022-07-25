import { OpenApiClient } from "./openapi/OpenApiClient";

export const main = () => {
  const client = new OpenApiClient();
  client.pet.findPetsByStatus("available");
};
