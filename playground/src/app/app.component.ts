import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'In-Button-Status';
  step = 1;

  onNext() {
    this.step++;
  }
}
