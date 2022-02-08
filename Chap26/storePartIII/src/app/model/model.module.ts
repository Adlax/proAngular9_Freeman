import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Model } from './repository.model';
import { RestDataSourceService, REST_URL } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers:[Model,RestDataSourceService,{provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}]
})
export class ModelModule {

}
