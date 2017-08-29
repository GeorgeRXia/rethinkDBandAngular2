import {Component} from '@angular/core';


@Component({
  selector: 'form-controls',
  template: `<md-input-container>
  <input mdInput [mdDatepicker]="picker" placeholder="Choose a date">
  <button mdSuffix [mdDatepickerToggle]="picker"></button>
</md-input-container>
<md-datepicker #picker></md-datepicker>



`,
  styles:[]

})
export class FormControlsComponent{



}
