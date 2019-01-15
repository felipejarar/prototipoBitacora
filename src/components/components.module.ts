import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListadoBitacorasPersonalesComponent } from './listado-bitacoras-personales/listado-bitacoras-personales';
import { ListadoBitacorasCompartidasComponent } from './listado-bitacoras-compartidas/listado-bitacoras-compartidas';
import { ListadoBitacorasSocialesComponent } from './listado-bitacoras-sociales/listado-bitacoras-sociales';
import { ImageSliderViewerComponent } from './image-slider-viewer/image-slider-viewer';
import { NewTabComponent } from './new-tab/new-tab';
import { SelectBitacoraComponent } from './select-bitacora/select-bitacora';
import { PlacesComponent } from './places/places';
@NgModule({
	declarations: [ListadoBitacorasPersonalesComponent,
    ListadoBitacorasCompartidasComponent,
    ListadoBitacorasSocialesComponent,
    ImageSliderViewerComponent,
    NewTabComponent,
    SelectBitacoraComponent,
    PlacesComponent],
	imports: [IonicModule],
	exports: [ListadoBitacorasPersonalesComponent,
    ListadoBitacorasCompartidasComponent,
    ListadoBitacorasSocialesComponent,
    ImageSliderViewerComponent,
    NewTabComponent,
    SelectBitacoraComponent,
    PlacesComponent]
})
export class ComponentsModule {}
