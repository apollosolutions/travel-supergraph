import { FLIGHTS, AIRPORTS } from "./data.js";

const getFlightById = (id) => FLIGHTS.find((it) => it.id === id);
const getAirportByCode = (airportCode) => AIRPORTS.find(it => it.airportCode === airportCode);

export const resolvers = {
  Query: {
    allFlights: () => FLIGHTS,
    allAirports: () => AIRPORTS
  },
  Flight: {
    __resolveReference(ref) {
      return getFlightById(ref.id);
    }
  },
  Airport: {
    __resolveReference(ref) {
      return getAirportByCode(ref.airportCode);
    }
  }
};
