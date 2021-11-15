import { Component, Injector, OnInit,NgZone  } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {

  constructor(private injector:Injector, private ngZone: NgZone) {
    super(injector);
  }
  Stt=0;
  listCartItem:any;
  ngOnInit(): void {
    // this.listCartItem=this._cart.getItems();
    // console.log(this.listCartItem);
    window['angularComponentReference'] = { component: this, zone: this.ngZone, loadAngularFunction: () => this.updateCartQuanty(this.listCartItem)};
  }
  updateCartQuanty(list){
    this.listCartItem=list;
    // for (let index = 0; index < list.length; index++) {
    //   this._cart.addQty(list[index]);
    // }
    console.log(list);
    // alertifyjs.success('Cập nhật giỏ hàng thành công');
  }
}
