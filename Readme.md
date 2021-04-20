# Airline Management System

This is the readme explaining my submission

## Classess
the following classes were created
- Airport class
- Airplanes class
- Flights class

## models
### Airport Model
```
  code: string;
  name: string;
  type: AirportType;
  country: string;
  state: string;
  coordinates: Coordinates;
  active?: boolean;
  licensed?: boolean;
```

### Airplanes Model
```
  name?: string;
  code: string;
  capacity?: number;
  availability?: boolean;
  mileage?: number;
  distance_limit?: number;
  purchase_year?: number;
  last_serviced?: Date
```

### Flights Model
```
code: string;
  airplane?: IAirplane;
  departure_airport?: IAirports;
  arrival_airport?: IAirports;
  departure_time?: Date
  arrival_time?: Date
  passengers?: string[];
  crew_members?: CrewMember[]
  weather?: Weather[]
```

## process
The airline management system allows a user to manage airports the airline is licensed to fly to, airplanes owned by the airline, and also the flight's schedules by the airline

The flight model also allows specifying crew members and their roles, passengers. It also allows the management to keep track of the weather changes during the flight

The airplane model helps keep track of mileage the airplane has used when it was last serviced, and how long it is allowed to travel before been serviced
 
