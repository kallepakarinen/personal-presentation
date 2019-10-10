import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HeaderComponent } from './presentation/header/header.component';
import { ContainerComponent } from './presentation/container/container.component';
import { FooterComponent } from './presentation/footer/footer.component';
import { NavbarComponent } from './presentation/header/navbar/navbar.component';
import { SidebarComponent } from './presentation/container/sidebar/sidebar.component';
import { FirstPageComponent } from './presentation/container/first-page/first-page.component';
import { ImagePageComponent } from './presentation/container/image-page/image-page.component';
import { ContactPageComponent } from './presentation/container/contact-page/contact-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkSchoolComponent } from './presentation/container/work-school/work-school.component';
import { MaterialComponentsModule } from './ui/material-components/material-components.module';


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    FirstPageComponent,
    ImagePageComponent,
    ContactPageComponent,
    WorkSchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
