import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minio',
  templateUrl: './minio.component.html'
})
export class MinioComponent {

  @Input() minions:any;
  
}
