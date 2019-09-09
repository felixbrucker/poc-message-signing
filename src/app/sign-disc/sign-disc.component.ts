import { Component, OnInit } from '@angular/core';
import {PrivateKey, Message} from 'bitcore-lib';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sign-disc',
  templateUrl: './sign-disc.component.html',
  styleUrls: ['./sign-disc.component.scss']
})
export class SignDiscComponent implements OnInit {

  private _privateKey;
  private _address;
  private _messageToSign;
  private _privateKeyHidden = true;
  private _signature;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      const messageToSign = queryParams.get('messageToSign');
      if (messageToSign) {
        this.messageToSign = messageToSign;
      }
    });
  }

  toggleHidePrivateKey() {
    this.privateKeyHidden = !this.privateKeyHidden;
  }

  updateSignature() {
    if (!this.privateKey) {
      this.address = '';
      this.signature = '';
      return;
    }
    try {
      const privateKey = new PrivateKey(this.privateKey);
      this.address = privateKey.toAddress();
      try {
        const message = new Message(this.messageToSign);
        this.signature = message.sign(privateKey);
      } catch (err) {
        this.signature = '';
      }
    } catch (err) {
      this.address = '';
      this.signature = '';
    }
  }

  get privateKey() {
    return this._privateKey;
  }

  set privateKey(value) {
    this._privateKey = value;
    this.updateSignature();
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  get messageToSign() {
    return this._messageToSign;
  }

  set messageToSign(value) {
    this._messageToSign = value || null;
    this.updateSignature();
  }

  get privateKeyHidden(): boolean {
    return this._privateKeyHidden;
  }

  set privateKeyHidden(value: boolean) {
    this._privateKeyHidden = value;
  }

  get signature() {
    return this._signature;
  }

  set signature(value) {
    this._signature = value;
  }
}
