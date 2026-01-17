import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
import { Home } from "../../components/home/home";
import { SpareParts } from "../../components/spare-parts/spare-parts";
import { EquipmentBrands } from "../../components/equipment-brands/equipment-brands";
import { Equipment } from "../../components/equipment/equipment";
import { Logistics } from "../../components/logistics/logistics";
import { Trust } from "../../components/trust/trust";

@Component({
  selector: 'app-blank-layout',
  imports: [Navbar, Home, SpareParts, EquipmentBrands, Equipment, Logistics, Trust],
  templateUrl: './blank-layout.html',
  styleUrl: './blank-layout.scss',
})
export class BlankLayout {

}
