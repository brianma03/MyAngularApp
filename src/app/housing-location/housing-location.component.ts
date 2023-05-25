import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation; // There is an ! because the Input decorator is expecting the value to be passed. However, there is no defualt value. Essentially, it satisfies Typescripts complaints and says that the housingLocation value will not be null.
  // ! - non-null assertion operator
}

// This component was added using the following:
// 'ng generate component HousingLocation --standalone --inline-template --skip-tests'