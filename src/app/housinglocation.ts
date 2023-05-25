export interface Housinglocation {
  // These are the properties of the interface that will represent a housing location
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  // Notice, each variable is followed by a specific type.
  // If any variable is switched from its designated type, the code will not compile
}
