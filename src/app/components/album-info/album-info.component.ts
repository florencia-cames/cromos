import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss'],
})
export class AlbumInfoComponent {
  @Input() albumTitle!: string;
}
