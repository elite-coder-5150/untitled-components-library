import { DropDownMenu } from './drop-down-menu';
import { Notify } from './notifications'
class App {
    init() {
        this.droopdownMenu =  DropDownMenu.init();
        this.notify = Notify.init()

       
    }
}

let t = new App();
t.init();