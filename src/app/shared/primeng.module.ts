import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

const PrimeNgComponents = [
  ButtonModule,
  ImageModule,
  CarouselModule,
  TabViewModule,
  InputTextModule,
  PaginatorModule
];

@NgModule({
  imports: [PrimeNgComponents],
  exports: [PrimeNgComponents],
})
export class PrimeNgModule {}
