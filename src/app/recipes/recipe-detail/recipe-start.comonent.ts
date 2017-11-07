import {Component} from '@angular/core';
@Component({
  selector: 'app-recipe-start',
  template: `
<h3>{{title}}</h3>
`
})
export class RecipeStartComponent {
  title = 'Please select recipe!!!';
}
