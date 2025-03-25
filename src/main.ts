import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Import the standalone AppComponent

bootstrapApplication(AppComponent) // Use bootstrapApplication to bootstrap the standalone component
  .catch(err => console.error(err));