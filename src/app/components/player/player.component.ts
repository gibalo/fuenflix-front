import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  template: `<h1>Hello {{name}}!</h1>
      <vg-player>
        <video [vgMedia]="media" #media id="singleVideo" preload="auto" controls>
            <source src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4">
        </video>
    </vg-player>
`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PlayerComponent {

  @Input() name: string;
  constructor() { }

}
