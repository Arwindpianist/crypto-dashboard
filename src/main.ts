import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Ensure you have the correct path to your app config
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));