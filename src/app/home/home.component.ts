import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        this.httpClient.get("https://angular-tgt3dv--3000.local.webcontainer.io/posts").subscribe((r) => {
            console.log(r);
        });

        this.httpClient.get("http://localhost:3000/profile").subscribe((r) => {
            console.log(r);
        });

        // fetch("https://json-server-qhnqau--3000.local.webcontainer.io/profile")
        //     .then((r) => r.json())
        //     .then((json) => console.log(JSON.stringify(json, null, 2)));
    }
}
