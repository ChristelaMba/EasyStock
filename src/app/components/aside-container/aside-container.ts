import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside";

@Component({
  selector: 'app-aside-container',
  imports: [AsideComponent],
  templateUrl: './aside-container.html',
  styleUrl: './aside-container.css',
})
export class AsideContainerComponent {}
