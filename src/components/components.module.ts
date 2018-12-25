import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListadoBitacorasPersonalesComponent } from './listado-bitacoras-personales/listado-bitacoras-personales';
import { ListadoBitacorasCompartidasComponent } from './listado-bitacoras-compartidas/listado-bitacoras-compartidas';
import { ListadoBitacorasSocialesComponent } from './listado-bitacoras-sociales/listado-bitacoras-sociales';
@NgModule({
	declarations: [ListadoBitacorasPersonalesComponent,
    ListadoBitacorasCompartidasComponent,
    ListadoBitacorasSocialesComponent],
	imports: [IonicModule],
	exports: [ListadoBitacorasPersonalesComponent,
    ListadoBitacorasCompartidasComponent,
    ListadoBitacorasSocialesComponent]
})
export class ComponentsModule {}
