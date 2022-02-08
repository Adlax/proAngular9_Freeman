import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange, IterableDiffer, IterableDiffers, ChangeDetectorRef, DefaultIterableDiffer, ViewRef } from '@angular/core';

@Directive({
  selector: "[paForOf]"
})
export class PaIteratorDirective {

  @Input('paForOf') dataSource: any;
  private differ: DefaultIterableDiffer<any>;
  private views: Map<any,PaIteratorContext> = new Map<any,PaIteratorContext>();

  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>, private differs: IterableDiffers, private changeDetector: ChangeDetectorRef){

  }

  ngOnInit(){
    // this.updateContent();
    this.differ = <DefaultIterableDiffer<any>>this.differs.find(this.dataSource).create();
  }

  ngDoCheck(){
    // let changes = this.differ.diff(this.dataSource);
    // if(changes != null){
    //   console.log("ngDoCheck with CHANGES in dataSource");
    //   changes.forEachAddedItem( added => {
    //     this.container.createEmbeddedView(this.template, new PaIteratorContext(added.item,added.currentIndex,changes.length));
    //   } );
    // }
    let changes = this.differ.diff(this.dataSource);
    if(changes != null){
      changes.forEachAddedItem( added => {
        let context = new PaIteratorContext(added.item, added.currentIndex, changes.length);
        context.view = this.container.createEmbeddedView(this.template,context);
        this.views.set(added.trackById,context);
      } );
      let removals = false;
      changes.forEachRemovedItem( removed => {
        removals = true;
        let context =  this.views.get(removed.trackById);
        if(context != null){
          this.container.remove(this.container.indexOf(context.view));
          this.views.delete(removed.trackById);
        }
      } );
      if(removals){
        let index = 0;
        this.views.forEach(context=>context.setData(index++,this.views.size));
      }
    }
  }

  updateContent(){
    this.container.clear();
    for(let i = 0; i < this.dataSource.length; i++){
      this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i],i,this.dataSource.length));
    }
  }

}

class PaIteratorContext {
  
  index: number;
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  view: ViewRef;

  constructor(public $implicit: any, public position: number, public total: number){
    this.setData(position,total);
  }

  setData(index: number, total: number){
    this.index = index;
    this.odd = index%2==1;
    this.even = !this.odd;
    this.first = index==0;
    this.last = index==total-1;
  }

}
