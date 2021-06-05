import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { authservice } from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isauth= false;
  authsubscription: Subscription;


  constructor(private authservice : authservice) { }

  ngOnInit() {
    this.authsubscription = this.authservice.authchange.subscribe(authstatus =>
      {
        this.isauth=authstatus;
      })
  }

  onClose() {
    this.closeSidenav.emit();
  }


  logout()
  {
    this.onClose();
    this.authservice.logout(); 
    
  }


  ngOnDestroy() 
  {
    this.authsubscription.unsubscribe();

  }

}
