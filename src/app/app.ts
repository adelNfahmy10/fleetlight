import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { SpareParts } from "./components/spare-parts/spare-parts";
import { EquipmentBrands } from "./components/equipment-brands/equipment-brands";
import { Equipment } from "./components/equipment/equipment";
import { Logistics } from "./components/logistics/logistics";
import { Trust } from "./components/trust/trust";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, SpareParts, EquipmentBrands, Equipment, Logistics, Trust, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fleetlight');
}
