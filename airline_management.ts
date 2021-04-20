import { Airplane } from "./airplane";
import { Airports } from "./airports";
import { Flights } from "./flights";

export default class AirlineManagement{
  airports: Airports;
  flights: Flights;
  airplanes: Airplane;
  constructor() {
    this.airports = new Airports();
    this.flights = new Flights();
    this.airplanes = new Airplane();
  }
}