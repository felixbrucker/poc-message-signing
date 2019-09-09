import { Component, OnInit } from '@angular/core';
import { generateMasterKeys, generateSignature, getAccountIdFromPublicKey } from '@burstjs/crypto';
import { convertStringToHexString, convertNumericIdToAddress } from '@burstjs/util';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sign-burst',
  templateUrl: './sign-burst.component.html',
  styleUrls: ['./sign-burst.component.scss']
})
export class SignBurstComponent implements OnInit {

  private _passphrase;
  private _address;
  private _messageToSign;
  private _passphraseHidden = true;
  private _signature;
  private _publicKey;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      const messageToSign = queryParams.get('messageToSign');
      if (messageToSign) {
        this.messageToSign = messageToSign;
      }
    });
  }

  toggleHidePassphrase() {
    this.passphraseHidden = !this.passphraseHidden;
  }

  updateSignatureAndPublicKey() {
    if (!this.passphrase) {
      this.address = '';
      this.signature = '';
      this.publicKey = '';
      return;
    }
    try {
      const keys = generateMasterKeys(this.passphrase);
      this.publicKey = keys.publicKey;
      const accountId = getAccountIdFromPublicKey(keys.publicKey);
      this.address = convertNumericIdToAddress(accountId);
      this.signature = generateSignature(convertStringToHexString(this.messageToSign), keys.signPrivateKey);
    } catch (err) {
      this.signature = '';
    }
  }

  get publicKey() {
    return this._publicKey;
  }

  set publicKey(value) {
    this._publicKey = value;
  }

  get passphrase() {
    return this._passphrase;
  }

  set passphrase(value) {
    this._passphrase = value;
    this.updateSignatureAndPublicKey();
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
    this.updateSignatureAndPublicKey();
  }

  get passphraseHidden(): boolean {
    return this._passphraseHidden;
  }

  set passphraseHidden(value: boolean) {
    this._passphraseHidden = value;
  }

  get signature() {
    return this._signature;
  }

  set signature(value) {
    this._signature = value;
  }
}
