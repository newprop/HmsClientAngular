import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models/staff';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../../../services/staff.service';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrl: './staff-edit.component.css'
})
export class StaffEditComponent implements OnInit {
  public model: Staff = new Staff();
  public staffId!: number;
  public shiftTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonApiService,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.staffId = +params['id'];
      this.getStaffDetails(this.staffId);
    });
    this.commonService.GetShiftTypes().subscribe((data: string[]) => {
      this.shiftTypes = data;
    });
  }

  getStaffDetails(id: number): void {
    this.staffService.getStaff(id).subscribe(
      (data: Staff) => {
        this.model = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    this.staffService.updateStaff(this.model).subscribe(
      () => {
        this.router.navigate(['/StaffList']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
