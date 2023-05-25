import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

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
  <app-housing-location *ngFor="let housingLocation of housingLocationList"
  [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css'] // This calls the css file corresponding to it to style the template.
})
export class HomeComponent {

  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

// This component was added using the following:
// 'ng generate component Home --standalone --inline-template --skip-tests'