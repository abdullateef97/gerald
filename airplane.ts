export interface IAirplane {
  name?: string;
  code: string;
  capacity?: number;
  availability?: boolean;
  mileage?: number;
  distance_limit?: number;
  purchase_year?: number;
  last_serviced?: Date
}

export class Airplane {
  private airplanes: IAirplane[];

  constructor() {
    this.airplanes = [];
  }

  addNewAirplane(airplane: IAirplane) {
    this.airplanes.push(airplane)
  }

  getAllAirplanes() : IAirplane[] {
    return this.airplanes;
  }

  getAirplaneDetails(code: string): IAirplane {
    const airplane = this.airplanes.filter(airplane => airplane.code === code);
    return airplane[0];
  }

  updateAirplaneDetails(update: IAirplane): IAirplane {
    const airplaneFilter = this.airplanes.filter(airplane => airplane.code === update.code);
    const airplaneIndex = this.airplanes.findIndex(airplane => airplane.code === update.code)
    const airplane = {
      ...airplaneFilter[0],
      ...update
    };
    this.airplanes[airplaneIndex] = airplane;
    return airplane
  }
}