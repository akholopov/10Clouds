const Page = require('./page');

class HomePage extends Page {

    get careersButton() {
        return $('.nav-link-container [href="/careers/"]');
    }

    open() {
        return super.open();
    }

    browserReload() {
        browser.reloadSession();
    }
}

module.exports = new HomePage();
