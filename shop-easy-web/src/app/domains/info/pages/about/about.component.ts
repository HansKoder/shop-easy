import { Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';
import { CustomForDirective } from '@shared/directives/custom-for.directive';
import { RepeatedDirective } from '@shared/directives/repeated.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    WaveAudioComponent,
    CustomForDirective,
    RepeatedDirective,
    FormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  items = signal<string[]>(["one", "two", "three"]);

  addItem (event : Event) {
    const input = event.target as HTMLInputElement;
    this.items.update((prev) => [...prev, input.value]);
    input.value = "";
  }

  cantOfItems = 3;

}
