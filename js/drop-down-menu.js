/* tslint:disable */
class DropDownMenu {
    init() {}

    cacheDom() {
        this.dropDownMenu = document.querySelector('.drop-down-menu')
    }

    initEvents() {
        this.dropDownMenu.addEventListener('click', this.toggleDropDown())
    }

    toggleDropDown() {
        if (!(this.dropDownMenu.classList.contains('show'))) {
            this.dropDownMenu.classList.add('show');
            this.dropDownMenu.classList.remove('hidden');
        } else if (this.dropDownMenu.classList.contains('hidden')) {
            this.dropDownMenu.classList.remove('hidden');
            this.dropDownMenu.classList.add('show');
        }
    }
}

/* eslint-env node */
module.exports = DropDownMenu;