import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input()
  numberOfItems: number = 0;

  @Input()
  itemsPerPage: number = 0;

  @Input()
  currentPage: number = 1;
  
  @Input()
  numberOfPages: number = 1;

  @Output()
  onChangePage: EventEmitter<number> = new EventEmitter<number>();

  get isPrevButtonDisabled() {
    return this.currentPage === 1;
  }

  get isNextButtonDisabled() {
    return this.currentPage !== this.pages.length+1;
  }

  get pages(): Array<number>{
    const pagesList = [];
    for (let page = 1; page <= this.numberOfPages; page++) {
      pagesList.push(page);
    }
    return pagesList;
  }

  changePage(pageIndex: number): void{
    this.currentPage = pageIndex;
    console.log(this.currentPage);
    this.onChangePage.emit(this.currentPage);
  }
}
