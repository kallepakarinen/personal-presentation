import { NgModule } from '@angular/core';
import {
  MatExpansionModule, MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [
  MatExpansionModule,
  BrowserAnimationsModule,
  MatCardModule
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialComponentsModule { }
