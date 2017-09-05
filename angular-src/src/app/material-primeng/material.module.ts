import {NgModule} from '@angular/core';
import { MdNativeDateModule, MdDatepickerModule, MdInputModule, MdRadioModule, MdCheckboxModule, MdSelectModule,
MdSlideToggleModule, MdSidenavModule, MdMenuModule, MdToolbarModule,MdCardModule, MdProgressSpinnerModule, MdSnackBarModule, MdTabsModule, MdChipsModule, MdDialogModule, MdProgressBarModule, MdButtonModule} from '@angular/material';

@NgModule({
  exports: [MdNativeDateModule,  MdDatepickerModule, MdInputModule, MdRadioModule, MdCheckboxModule, MdSelectModule, MdSlideToggleModule, MdSidenavModule, MdMenuModule, MdToolbarModule,MdCardModule, MdProgressSpinnerModule, MdSnackBarModule, MdTabsModule, MdChipsModule, MdDialogModule, MdProgressBarModule, MdButtonModule]
})
export class MyOwnCustomMaterialModule{}
