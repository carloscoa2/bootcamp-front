import { Component } from '@angular/core';

@Component({
  selector: 'c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component {
  className: string = 'box  box2';

  boxSize: number = 80;
}
