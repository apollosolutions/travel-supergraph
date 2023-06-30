import { SUGGESTIONS } from "./data.js";

const getSuggestionsByTripId = (tripId) => SUGGESTIONS.find((it) => it.trip.id === tripId);

export const resolvers = {
  TripSuggestion: {
    __resolveReference(ref) {
      console.log(ref);
      return getSuggestionsByTripId(ref.trip.id);
    }
  },
};
