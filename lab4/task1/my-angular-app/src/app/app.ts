/*export class App {
  title = 'My first Angular app';
  description = 'Angular is working!';
  count = 0;

  increase(){
    this.count++;
  }
}*/
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('angular');
}