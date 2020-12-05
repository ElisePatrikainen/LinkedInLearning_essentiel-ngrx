import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      items: () => {},
      filters: () => {},
      selectedItems: () => {}
    })
  ]
})
export class StateModule { }
