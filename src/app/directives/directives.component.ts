import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  success: boolean = true;
  success2: boolean = false;

  bColor: String = "red";
  diameter: String = "23";

  constructor() { }

  ngOnInit() {
  }

  setDiameter(e: Event): void {
    this.diameter = (<HTMLInputElement>e.target).value;
  }

  getDiameter(): String {
    return this.diameter + 'px';
  }
}
