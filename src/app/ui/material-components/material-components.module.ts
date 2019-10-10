import { NgModule } from '@angular/core';
import {
  MatExpansionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [
  MatExpansionModule,
  BrowserAnimationsModule
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
