import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DemoButtonsComponent } from "./demo-buttons/demo-buttons.component";
import { DemoFirebaseComponent } from "./demo-firebase/demo-firebase.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "demo-buttons", component: DemoButtonsComponent },
            { path: "demo-firebase", component: DemoFirebaseComponent },
            { path: "", component: DemoButtonsComponent },
            { path: "**", redirectTo: "demo-buttons" },
        ]),
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
