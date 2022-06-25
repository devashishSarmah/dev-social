import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer), EffectsModule.forFeature([AuthEffects])],
})
export class AuthModule {}
