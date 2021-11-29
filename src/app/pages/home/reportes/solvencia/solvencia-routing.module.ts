import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { SolvenciaComponent } from "./solvencia.component";


const routes: Routes = [{ path: '', component: SolvenciaComponent, children: []
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SolvenciaRoutingModule{}