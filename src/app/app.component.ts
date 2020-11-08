import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  notification = false;
  title = 'orbzone';
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.notification = true;
    // }, 8000);
  }
}
