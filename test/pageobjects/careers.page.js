const Page = require('./page');

class CareersPage extends Page {

    get jobOffersSection() {
        return $('.job-offers__wrapper');
    }

    get searchInputField() {
        return $('#search-job');
    }

    waitForItemToBeDisplayed(item, time = '10000') {
        browser.waitUntil(() => item.isDisplayed() === true, {
            timeout: time,
            timeoutMsg: "Item is not displayed",
        });
    }
}

module.exports = new CareersPage();
