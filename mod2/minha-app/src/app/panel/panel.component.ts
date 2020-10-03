import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  expanded = true;
  @Input() title: string;

  constructor() {}

  expand() {
    this.expanded = true;
  }

  contract() {
    this.expanded = false;
  }

  ngOnInit(): void {}
}
