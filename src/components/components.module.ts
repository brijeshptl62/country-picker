import { NgModule } from '@angular/core';
import { SelectCountryComponent } from './select-country/select-country';
import { FlagDropdownComponent } from './flag-dropdown/flag-dropdown';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [SelectCountryComponent,
    FlagDropdownComponent],
	imports: [IonicModule],
	exports: [SelectCountryComponent,
    FlagDropdownComponent]
})
export class ComponentsModule {}
