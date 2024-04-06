import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { Router } from '@angular/router';
import { Staff } from '../../../models/staff';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {
  public model: Staff = new Staff();
  public shiftTypes: string[] = [];

  constructor(
    private staffService: StaffService,
    private commonService: CommonApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.model = new Staff();
    this.commonService.GetShiftTypes().subscribe((data: string[]) => {
      this.shiftTypes = data;
    });
  }

  onSubmit(): void {
    this.staffService.createStaff(this.model).subscribe({
      next: () => {
        this.router.navigate(['/StaffList']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
