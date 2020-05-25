import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
      <div class="title">Contacts</div>
      <div class="content">
          <form #contactForm="ngForm" (submit)="inviaMail.emit(contactForm.value)">
              <input type="text" placeholder="Your email*" required [ngModel] name="mail">
              <textarea cols="20" rows="6" placeholder="Your message*" [ngModel] name="msg" required></textarea>
              <button type="submit" [disabled]="contactForm.invalid">SEND</button>
          </form>
      </div>
  `,
  styles: []
})
export class ContactFormComponent {
  @Output() inviaMail: EventEmitter<any> = new EventEmitter<any>();
}
