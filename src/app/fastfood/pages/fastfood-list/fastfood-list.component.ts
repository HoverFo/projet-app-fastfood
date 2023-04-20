
import { Component, OnInit } from '@angular/core';
import { Fastfood } from '../../models/fastfood';
import { FastfoodService } from '../../services/fastfood.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fastfood-list',
  templateUrl: './fastfood-list.component.html',
  styleUrls: ['./fastfood-list.component.scss']
})
export class FastfoodListComponent implements OnInit {

	fastfoods$: Observable<Fastfood[]> 

	
	constructor(private fastfoodService: FastfoodService, private router: Router){
	
  
	 }
		
	 ngOnInit(): void {
	   this.fastfoods$ = this.fastfoodService.get();
	 }

	 navigateToMenuPage(fastfood: Fastfood) {
		this.router.navigate(['/menu/fastfood', fastfood.id]);
		console.log(fastfood.id);
	  }
	  
	  
 }
