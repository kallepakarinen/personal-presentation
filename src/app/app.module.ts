import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HeaderComponent } from './presentation/header/header.component';
import { ContainerComponent } from './presentation/container/container.component';
import { FooterComponent } from './presentation/footer/footer.component';
import { ToolbarComponent } from './presentation/header/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
