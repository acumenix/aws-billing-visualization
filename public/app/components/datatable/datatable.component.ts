import { Component,OnInit }  from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
	selector : 'aws-billing-datatable',
	templateUrl: 'datatable.component.html',
	styleUrls: ['datatable.component.css']
})
export class DatatableComponent implements OnInit{
	public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("/app/components/datatable/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 2000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }
}