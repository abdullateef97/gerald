import { AirportType, Coordinates } from "./shared";



export interface IAirports {
  code: string;
  name: string;
  type: AirportType;
  country: string;
  state: string;
  coordinates: Coordinates;
  active?: boolean;
  licensed?: boolean;
}

export interface updateAirport {
  name?: string;
  type?: AirportType;
  country?: string;
  state?: string;
  coordinates?: Coordinates;
  active?: boolean;
  licensed?: boolean;
}


export class Airports {
  private airports: IAirports[]

  constructor(){
    this.airports = []
  }

  addNewAirport(airport: IAirports) {
    this.airports.push(airport)
  }

  getAllAirports() : IAirports[] {
    return this.airports;
  }

  getAirportDetails(code: string): IAirports {
    const airport = this.airports.filter(airport => airport.code === code);
    return airport[0];
  }

  updateAirportDetails(code: string, update: updateAirport): IAirports {
    const airportFilter = this.airports.filter(airport => airport.code === code);
    const airportIndex = this.airports.findIndex(airport => airport.code === code)
    const airport = {
      ...airportFilter[0],
      ...update
    };
    this.airports[airportIndex] = airport;
    return airport
  }
}