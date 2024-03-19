import { Component } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    WaveAudioComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
