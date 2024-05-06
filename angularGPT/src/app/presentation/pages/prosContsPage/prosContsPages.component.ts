import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pros-conts-pages',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './prosContsPages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsContsPageComponent { }
