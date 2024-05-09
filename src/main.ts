import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';
// import { Comp1Component } from './app/comp1/comp1.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // bootstrapApplication(Comp1Component, appConfig)
  // .catch((err) => console.error(err));
