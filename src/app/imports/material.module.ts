import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
