export type AirportType = 'local' | 'international'

export enum CrewRole {
  PilotOne,
  PilotTwo,
  Hostess,
  Engineer,
}

export interface Coordinates {
  type: string;
  coordinates: string[2]
}

export interface CrewMember {
  name: string;
  role: CrewRole;
}

export enum WeatherType {
  Sunny,
  Rainy,
  Humid,
  Clear,
  Stormy
}

export interface Weather {
  type: WeatherType;
  location: Coordinates
}