import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: string;
  userName = '';
  isServerCreated = false;
  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
 
  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName + 'user name is: ' + this.userName;
  }
}
