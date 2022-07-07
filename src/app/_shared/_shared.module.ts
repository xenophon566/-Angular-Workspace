import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NEBULAR_CHILD, NEBULAR_ALL } from "@define/nebular/nebular.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { COMPONENTS } from "./components.define";

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ...NEBULAR_CHILD, ...NEBULAR_ALL],
})
export class SharedModule {}
