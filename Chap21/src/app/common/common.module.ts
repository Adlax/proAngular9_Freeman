import { NgModule } from '@angular/core';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaIfStructuralDirective } from './structural.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { MyAddTaxPipe } from './addTax.pipe';
import { CategoryFilterPipe } from './categoryFilter.pipe';
import { DiscountService } from './discount.service';
import { DiscountPipe } from './discount.pipe';
import { DicountAmountDirective } from './discountAmount.directive';
import { LogService, SpecialLogService, LogLevel, LOG_LEVEL, LOG_SERVICE } from './log.service';
import { VALUE_SERVICE, myDisplayValueDirective } from './valueDisplay.directive';
import { ModelModule } from '../model/model.module';

@NgModule({
  imports:[ModelModule],
  declarations:[
    PaAttrDirective,
    PaModel,
    PaIfStructuralDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    MyAddTaxPipe,
    CategoryFilterPipe,
    DiscountPipe,
    DicountAmountDirective,
    myDisplayValueDirective,
  ],
  exports:[
    PaAttrDirective,
    PaModel,
    PaIfStructuralDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    MyAddTaxPipe,
    CategoryFilterPipe,
    DiscountPipe,
    DicountAmountDirective,
    myDisplayValueDirective,
  ],
  providers:[
    DiscountService,
    LogService,
    {provide: VALUE_SERVICE, useValue: 'Apples'}
  ]
})
export class CommonModule {

}
