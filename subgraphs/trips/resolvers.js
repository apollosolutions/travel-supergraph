import { TRIPS } from "./data.js";
import { GraphQLError } from "graphql";

export const getTripById = (id) => TRIPS.find((it) => it.id === id);
export const getTripsByUserId = (userId) => TRIPS.filter((it) => it.user.id === userId);

export const resolvers = {
  Trip: {
    __resolveReference(ref) {
      return getTripById(ref.id);
    }
  },
  User: {
    trips: (parent) => {
      return getTripsByUserId(parent.id)
    }
  }
};
