import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from '../shared/components/login-modal/login-modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalCtrl:ModalController) { }

  onTabsWillChange(event: any) {
    console.log(event.tab);
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8,
      mode: 'ios'
    });
    await modal.present();
  }

}
