import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { Model } from './repository.model';

@NgModule({
  providers:[StaticDataSource,Model]
})
export class ModelModule {
  
}
