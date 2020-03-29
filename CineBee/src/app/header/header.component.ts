import { Component, OnInit  } from '@angular/core';
import { IgxIconService } from "igniteui-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private iconService: IgxIconService) { }
  ngOnInit(): void {
    //creating icon with svg
    this.iconService.addSvgIcon("menu", "../../assets/images/svg/menu.svg", "filter-icons");
  }
}