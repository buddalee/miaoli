import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [MatSidenavModule], // 先import
  exports: [MatSidenavModule] // 在export
})
export class SharedMaterialModule {}