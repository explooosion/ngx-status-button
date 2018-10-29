import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-status-button';
  step = 1;

  onNext() {
    this.step = this.step >= 4 ? 1 : this.step + 1;
  }
}
