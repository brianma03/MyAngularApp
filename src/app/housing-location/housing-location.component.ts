import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  // In this template we added the property binding to the <app-housing-location> tag
  template: `
    <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
  `,
  // The [----]="----" syntax is used to notify Angular that the assigned value should be treated as a property from the component class and not just a string value.
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation; // There is an ! because the Input decorator is expecting the value to be passed. However, there is no defualt value. Essentially, it satisfies Typescripts complaints and says that the housingLocation value will not be null.
  // ! - non-null assertion operator
}

// This component was added using the following:
// 'ng generate component HousingLocation --standalone --inline-template --skip-tests'