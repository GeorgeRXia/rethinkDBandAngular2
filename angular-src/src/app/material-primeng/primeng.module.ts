import {NgModule} from '@angular/core';
import {RadioButtonModule, ChartModule, MessagesModule, GrowlModule, TreeTableModule, SharedModule, TreeModule, PickListModule, DataTableModule, CalendarModule, ButtonModule, InputTextareaModule, DialogModule, SpinnerModule, MenuModule, CheckboxModule, ListboxModule, DragDropModule, FileUploadModule} from 'primeng/primeng';


@NgModule({
  exports: [RadioButtonModule, ChartModule, MessagesModule, GrowlModule, TreeTableModule, SharedModule, TreeModule, PickListModule, DataTableModule, CalendarModule, ButtonModule, InputTextareaModule, DialogModule, SpinnerModule, MenuModule, CheckboxModule, ListboxModule, DragDropModule, FileUploadModule]
})
export class MyOwnCustomPrimengModule{}
