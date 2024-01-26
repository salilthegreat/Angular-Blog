import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sub } from '../modules/sub';
import { SubscribersService } from '../services/subscribers.service';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent implements OnInit {

  isEmailError:boolean = false;
  isSubscribed:boolean = false;

  constructor(private subService: SubscribersService) {

  }

  ngOnInit(): void {

  }
  onSubmit(f: NgForm) {
    const subData: Sub = {
      email: f.value.email,
      name: f.value.name
    }
    this.subService.checkIfSubsExist(subData.email).pipe(take(1)).subscribe((val) => {
      if (val.length === 0) {
        this.subService.addSub(subData)
        this.isSubscribed = true
        this.isEmailError = false
      } else {
        this.isEmailError = true
      }
    })
  }
}
