import { Component } from '@angular/core';
import {SignDiscComponent} from "../sign-disc/sign-disc.component";
import {ECPair, payments} from 'bitcoinjs-lib';
import * as bitcoinMessage from 'bitcoinjs-message';

@Component({
  selector: 'app-sign-bhd',
  templateUrl: '../sign-disc/sign-disc.component.html',
  styleUrls: ['../sign-disc/sign-disc.component.scss']
})
export class SignBhdComponent extends SignDiscComponent {
  updateSignature() {
    if (!this.privateKey) {
      this.address = '';
      this.signature = '';
      return;
    }
    try {
      const keyPair = ECPair.fromWIF(this.privateKey);
      const privateKey = keyPair.privateKey;
      const { address } = payments.p2sh({
        redeem: payments.p2wpkh({ pubkey: keyPair.publicKey })
      });
      this.address = address;
      try {
        this.signature = bitcoinMessage.sign(this.messageToSign, privateKey, null, { segwitType: 'p2sh(p2wpkh)' }).toString('base64');
      } catch (err) {
        this.signature = '';
      }
    } catch (err) {
      this.address = '';
      this.signature = '';
    }
  }
}
