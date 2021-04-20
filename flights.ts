import { IAirplane } from "./airplane";
import { IAirports } from "./airports";
import { AirportType, Coordinates, CrewMember, Weather } from "./shared";



export interface IFlights {
  code: string;
  airplane?: IAirplane;
  departure_airport?: IAirports;
  arrival_airport?: IAirports;
  departure_time?: Date
  arrival_time?: Date
  passengers?: string[];
  crew_members?: CrewMember[]
  weather?: Weather[]
}


export class Flights {
  private flights: IFlights[];

  constructor(){
    this.flights = []
  }
  addNewFlight(flight: IFlights) {
    flight.passengers = flight.passengers ? flight.passengers : [];
    flight.crew_members = flight.crew_members ? flight.crew_members : [];
    flight.weather = [];
    this.flights.push(flight);
  }

  getAllFlights(): IFlights[] {
    return this.flights;
  }

  getFlightDetails(code: string): IFlights {
    const flight = this.flights.filter(flight => flight.code === code);
    return flight[0]
  }

  updateFlightDetails(update: IFlights): IFlights {
    const { code, passengers, crew_members, weather } = update;
    const flightFilter = this.flights.filter(flight => flight.code === code)[0];
    const flightIndex = this.flights.findIndex(flight => flight.code === code);
    const flight: IFlights = {
      ...flightFilter,
      ...update,
      passengers: passengers ? [...flightFilter.passengers, ...passengers]: passengers,
      crew_members: crew_members ? [...flightFilter.crew_members, ...crew_members]: crew_members,
      weather: weather ? [...flightFilter.weather, ...weather]: weather,
    }
    this.flights[flightIndex] = flight
    return flight
  }
}