import { Component, Input } from '@angular/core';

@Component({
  selector: 'ch-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true })
  title!: string;
}
