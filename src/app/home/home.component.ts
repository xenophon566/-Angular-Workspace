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
        // this.httpClient.get("http://localhost:3000/ecp-agent-list").subscribe((r) => {
        //     console.log(r);
        // });

        fetch("http://localhost:3000/ecp-agent-list")
            .then((r) => r.json())
            .then((json) => console.log(JSON.stringify(json, null, 2)));
    }
}
