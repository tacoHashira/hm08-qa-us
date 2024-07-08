const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.click();
        const parentElement = await supportivePlanButton.parentElement();
        const classList = await parentElement.getAttribute('class');
        const isActive = classList.split(' ').includes('active');
        await expect(isActive).toBeTrue();
    })

    it('should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.waitForDisplayed();
        const cvvField = await $(page.cvvField);
        await cvvField.waitForDisplayed();
        await cardNumberField.click();
        await cardNumberField.setValue('123400004321');
        await expect(cardNumberField).toBeDisplayed();
    })

    it('should write a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const message = 'Please call when you arrive';
        await page.writeDriverMessage(message);
        const driverMessage = await $(page.driverMessage);
        await expect(driverMessage).toHaveValue(message);
    })

    it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const orderRequirementsButton = await $(page.orderRequirementsButton);
        await orderRequirementsButton.click();
        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.click();
        await expect(blanketAndHandkerchiefsButton).toBeEnabled();
    })

    it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const orderRequirementsButton = await $(page.orderRequirementsButton);
        await orderRequirementsButton.click();
        const iceCreamBucketButton = await $(page.iceCreamBucketButton);
        await iceCreamBucketButton.click();
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.click();
        const iceCreamValue = await $(page.iceCreamValue);
        await iceCreamValue.toBeExisting();
        await expect(iceCreamValue).toBe('2');
    })

    it('should display car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        const phoneNumber = helper.getPhoneNumber('+1');
        await page.submitPhoneNumber(phoneNumber);
        await page.fillCardNumber('123400004321');
        await page.fillCvvNumber('123');
        const closeButton = await $(page.closeButton);
        await closeButton.click();
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await expect(carSearchModal).toBeExisting();
    })
})

