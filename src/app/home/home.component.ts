import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home', // This statement uses the SELECTOR property that identifies this component 
  //Notice: Component name is HOME. Hence, the selector identifier is called app-HOME.
  standalone: true,     // Standalone is just a component that is not part of any Angular module.
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  // Below is a template which is simply a blueprint for a fragment of a user interface.
  template: ` 
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css'] // This calls the css file corresponding to it to style the template.
})
export class HomeComponent {
  // This cretes a single instance of the HousingLocation interface in the component
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: 'assets/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

// This component was added using the following:
// 'ng generate component Home --standalone --inline-template --skip-tests'