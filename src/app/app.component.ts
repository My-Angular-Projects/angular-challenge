import { Component } from '@angular/core';

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly truncateExample = {
    title: 'Truncate Pipe',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis cupiditate dignissimos dolore ea id incidunt, iusto, magni molestias nemo nesciunt non optio perferendis quasi quidem vel voluptas voluptatibus!',
  };
  public readonly progressBarExample = {
    title: 'Progress Bar',
    currentValue: 25,
    maxValue: 100,
  };
}
