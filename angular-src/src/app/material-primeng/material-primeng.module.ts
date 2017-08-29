import {NgModule} from '@angular/core';

import { MdNativeDateModule, MdDatepickerModule, MdInputModule, MdRadioModule, MdCheckboxModule, MdSelectModule,
MdSlideToggleModule, MdSidenavModule, MdMenuModule, MdToolbarModule,MdCardModule, MdProgressSpinnerModule, MdSnackBarModule} from '@angular/material';

import {RadioButtonModule, ChartModule, MessagesModule, GrowlModule} from 'primeng/primeng';


@NgModule({
  exports: [MdNativeDateModule,  MdDatepickerModule, MdInputModule, MdRadioModule, MdCheckboxModule, MdSelectModule, MdSlideToggleModule, MdSidenavModule, MdMenuModule, MdToolbarModule,MdCardModule, MdProgressSpinnerModule,MdSnackBarModule, RadioButtonModule,ChartModule,MessagesModule,GrowlModule]
})
export class MyOwnCustomMaterialModule{}
