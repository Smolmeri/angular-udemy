import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  userNameIsEmpty = false;
  serverCreationStatus = "No server was created!";
  serverName: any;
  userName = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  isPressed = false;
  log = [];
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUpdateUserName(event: any) {
    this.userName = event.target.value;
  }

  onRemoveUserName(event: any) {
    this.userName = "";
    event.target.value = "";
  }

  onToggleDetails() {
    this.isPressed = !this.isPressed;
    this.log.push(new Date());
  }
}
