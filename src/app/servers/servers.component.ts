import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`.biggerThan5 { color: white; }`]
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: string;
  userName = '';
  isServerCreated = false;
  servers = ['Testserver', 'Testserver2'];
  isToggle = false;
  toggleDetails = [];
  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
 
  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName + 'user name is: ' + this.userName;
  }

  onToggleDetails() { 
    this.isToggle = true;
    this.toggleDetails.push(this.toggleDetails.length + 1);
  }

  onChangeBackgroundColor() { 
    return this.toggleDetails.length >= 5 ? 'blue' : 'white';
  }
}
