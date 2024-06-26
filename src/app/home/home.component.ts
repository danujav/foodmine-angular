import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods: any[] = [];
  constructor(private foodService: FoodService, private cdr: ChangeDetectorRef) { }
  getAll() {
    console.log('log');

    this.foodService.getData().subscribe((response: any) => {
      this.foods = response.categories;
      this.cdr.detectChanges();
      console.log(this.foods);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }
}
