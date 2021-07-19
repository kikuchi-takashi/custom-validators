import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { UpperCaseValidatorDirective } from './shared/upper-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ForbiddenValidatorDirective,
    UpperCaseValidatorDirective,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
