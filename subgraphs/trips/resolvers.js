import { TRIPS } from "./data.js";
import {GraphQLError} from "graphql";

export const getTripById = (id) => TRIPS.find((it) => it.id === id);
export const getCurrentTripByUserId = (userId) => TRIPS.find((it) => it.user.id === userId);

export const resolvers = {
  Trip: {
    __resolveReference(ref) {
      return getTripById(ref.id);
    }
  },
  Query: {
    currentTrip(_, args) {
      const trip = getCurrentTripByUserId(args.userId);
      if (trip) {
        return trip;
      } else {
        throw new GraphQLError(`No trip found for user id ${args.userId}`)
      }
    }
  }
};
