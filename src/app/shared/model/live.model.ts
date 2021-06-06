import { SafeResourceUrl } from "@angular/platform-browser";

export class Live {
  id: string;
  liveName: string;
  channelName: string;
  liveDate: string;
  liveTime: string;
  liveLink: string;
  registrationDate: string;
  urlSafe: SafeResourceUrl;


  /**
   *
   */
  constructor() {
    this.id = "";
    this.liveName = "";
    this.channelName = "";
    this.liveDate = "";
    this.liveTime = "";
    this.liveLink = "";
    this.registrationDate = "";
    this.urlSafe = {};
  }
}

