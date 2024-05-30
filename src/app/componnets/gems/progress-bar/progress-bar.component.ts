import { Component, Input } from '@angular/core';

@Component({
  selector: 'ch-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input({ required: true })
  public currentValue: number = 0;

  @Input({ required: true })
  public maxValue: number = 100;
}
