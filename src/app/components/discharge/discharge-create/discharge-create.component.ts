import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../models/discharge ';
import { DischargeService } from '../../../services/discharge .service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discharge-create',
  templateUrl: './discharge-create.component.html',
  styleUrl: './discharge-create.component.css'
})
export class DischargeCreateComponent implements OnInit {
  public model: Discharge = new Discharge();

  constructor(private dischargeService: DischargeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dischargeService.createDischarge(this.model).subscribe({
      next: () => {
        this.router.navigate(['/DischargeList']); // Navigate to the list of discharges after successful creation
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
