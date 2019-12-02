// outsource
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
// modules
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// components
import { LayoutComponent } from './states/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EvenComponent } from './components/even/even.component';
import { OddComponent } from './components/odd/odd.component';

// services
import { InfineNumberGeneratorService } from './services/infine-number-generator.service';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    EvenComponent,
    OddComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InfineNumberGeneratorService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
