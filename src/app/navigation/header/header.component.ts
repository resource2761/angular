import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { authservice } from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();

  isauth= false;
  authsubscription: Subscription;
  constructor(private authservice : authservice) 
  {
    
   }

  ngOnInit() {
   this.authsubscription = this.authservice.authchange.subscribe(authstatus =>
      {
        this.isauth=authstatus;
      })
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() 
  {
    this.authsubscription.unsubscribe();

  }

  // logout method

  logout()
  {
    this.authservice.logout(); 
  }


}
