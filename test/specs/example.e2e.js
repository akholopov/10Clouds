const homePage = require('../pageobjects/home.page');
const careerPage = require('../pageobjects/careers.page');

const roleTitle = 'QA Automation Engineer';
const jobTitle = 'Automation';

describe('10 Clouds page:', () => {
    beforeEach(() => {
        homePage.browserReload();
        homePage.open();
        homePage.careersButton.waitForDisplayed();
        homePage.careersButton.click();
    });

    it("Validate that there is exactly 1 'QA Automation Engineer' role open.", () => {
        careerPage.waitForItemToBeDisplayed(careerPage.jobOffersSection);
        expect(careerPage.jobOffersSection.getText()).to.contains(roleTitle);
    });

    it("Validate that each result contains 'Automation' in title.", () => {
        careerPage.waitForItemToBeDisplayed(careerPage.searchInputField);
        careerPage.searchInputField.setValue(jobTitle);
        careerPage.waitForItemToBeDisplayed(careerPage.jobOffersSection);
        expect(careerPage.jobOffersSection.getText()).to.contains(jobTitle);
    });
});


