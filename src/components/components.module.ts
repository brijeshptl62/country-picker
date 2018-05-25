import { NgModule } from '@angular/core';
import { SelectCountryComponent } from './select-country/select-country';
import { FlagDropdownComponent } from './flag-dropdown/flag-dropdown';
@NgModule({
	declarations: [SelectCountryComponent,
    FlagDropdownComponent],
	imports: [],
	exports: [SelectCountryComponent,
    FlagDropdownComponent]
})
export class ComponentsModule {}
