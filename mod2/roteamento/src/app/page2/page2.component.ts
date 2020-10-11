import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  template: ` <p>page2 id: {{ id }} works!</p> `,
  styles: [],
})
export class Page2Component implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
  }
}
