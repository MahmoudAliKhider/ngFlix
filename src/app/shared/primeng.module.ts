import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';

const PrimeNgComponents = [
  ButtonModule,
  ImageModule,
  CarouselModule,
  TabViewModule
];

@NgModule({
  imports: [PrimeNgComponents],
  exports: [PrimeNgComponents],
})
export class PrimeNgModule {}
