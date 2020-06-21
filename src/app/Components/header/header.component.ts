import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() headerTabClicked = new EventEmitter<string>();

  constructor() {
  }

  collapsed = true;

  ngOnInit(): void {
  }

  tabClicked(tab: string) {
    this.headerTabClicked.emit(tab);
  }

}
