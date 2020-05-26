import {NgModule} from '@angular/core';
import {IntToArrayPipe} from './int-to-array.pipe';
import {CardComponent} from './components/card/card.component';
import {SeparatorComponent} from './components/separator/separator.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    IntToArrayPipe,
    CardComponent,
    SeparatorComponent
  ],
  exports: [
    IntToArrayPipe,
    CardComponent,
    SeparatorComponent
  ],
  imports: [
    CommonModule
  ],
})

export class SharedModule {}
