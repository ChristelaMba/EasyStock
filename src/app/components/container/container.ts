import { Component } from '@angular/core';
import { NavbarComponent } from "../nav/nav";
import { MainComponent } from "../main/main";

@Component({
  selector: 'app-container',
  imports: [NavbarComponent, MainComponent],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class ContainerComponent {}
