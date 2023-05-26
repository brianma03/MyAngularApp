import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  // This template uses the property binding to bind the housingLocation.photo to the one in the src.
  // Interpolation was used to include the name, city, and state of the housingLocation property.
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
`,
// Above in the template, the code contains a routerLink that will redirect to the info of the housing location.
  // The [----]="----" syntax is used to notify Angular that the assigned value should be treated as a property from the component class and not just a string value.
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation; // There is an ! because the Input decorator is expecting the value to be passed. However, there is no defualt value. Essentially, it satisfies Typescripts complaints and says that the housingLocation value will not be null.
  // ! - non-null assertion operator
}

// This component was added using the following:
// 'ng generate component HousingLocation --standalone --inline-template --skip-tests'