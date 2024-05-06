import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pros-conts-stream-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './prosContsStreamPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsContsStreamPageComponent { }
