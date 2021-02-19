import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  launchYearArray = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  filterQuery = '';
  filterCondition= {
    "launch_year" : null,
    "launch_success": null,
    "land_success": null,
  };
  constructor(private cardsService: CardService) { }

  ngOnInit(): void {
  }

  filterData(type, value){
    this.filterQuery = '';
    this.cardsService.loader = true;
    if(this.filterCondition[type] == null){
      this.filterCondition[type] = value;
    }
    else
    if(this.filterCondition[type] == value){
      this.filterCondition[type] = null;
    }
    else{
      this.filterCondition[type] = value;
    }
    if(this.filterCondition.land_success != null){
      this.filterQuery += '&land_success='+this.filterCondition.land_success;
    }
    if(this.filterCondition.launch_success != null){
      this.filterQuery += '&launch_success='+this.filterCondition.launch_success;
    }
    if(this.filterCondition.launch_year != null && this.filterCondition.launch_year != ''){
      this.filterQuery += '&launch_year='+this.filterCondition.launch_year;
    }
    if(this.filterQuery == ''){
      this.cardsService.allRecords = this.cardsService.backupRecords;
      this.cardsService.loader = false;
    }
    else{
    this.cardsService.getFilteredData(this.filterQuery).subscribe(res => {
      this.cardsService.allRecords = res;
      this.cardsService.loader = false;
    })}
  }

}
