import { NgModel } from "@angular/forms";
import { RouterModule, Route, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import {ListRenderComponent} from "./home/home.component/ListRenderComponent"




const routes: Routes = [
     {path: '', component: HomeComponent },
     {path 'list', component: ListRenderComponent}

]

@NgModel({
    declarations: [],
    import: [RouterModule.forRoot(routes)],
    export: [RouterModule],
})

export classe AppRoutingModule {}