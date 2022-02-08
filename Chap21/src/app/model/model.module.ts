import { NgModule } from '@angular/core';
import { SimpleDataSource } from './datasource.model';
import { Model } from './repository.model';

@NgModule({
  providers: [SimpleDataSource, Model]
})
export class ModelModule {

}
