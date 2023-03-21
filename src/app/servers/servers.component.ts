import { Component } from '@angular/core';
import { timestamp } from 'rxjs';
import { Configuration, OpenAIApi } from "openai";
import { environment } from "../../../environment";

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
  questions = '';
  gptOutput = '';
  isServerCreated = false;
  servers = ['Testserver', 'Testserver2'];
  isToggle = false;
  toggleDetails = [];
  configuration: Configuration = new Configuration({
    apiKey: environment.openAI.OPENAI_API_KEY,
  });
  openai: OpenAIApi = new OpenAIApi(this.configuration);
  response: any;


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

  onChangeBackgroundColor(i) {
    return i >= 4 ? 'blue' : 'white';
  }

  async onSubmit() {
    this.response = await this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: this.questions,
      temperature: 0,
      max_tokens: 1000,
    });
    this.gptOutput = this.response.data.choices[0].text;
  }
}
