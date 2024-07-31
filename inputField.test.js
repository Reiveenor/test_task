const { test, expect } = require('@playwright/test');

test('Input field should accept only digits', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/inputs');
    const inputSelector = 'input[type="number"]';
    await page.fill(inputSelector, '123456');
    const value = await page.inputValue(inputSelector);
    expect(value).toBe('123456');
    await page.fill(inputSelector, '');
    try {
        await page.fill(inputSelector, 'abc');
        const newValue = await page.inputValue(inputSelector);
        expect(newValue).toBe('');
    } catch (error) {
        console.error('Error encountered while entering non-digits:', error);
    }
});
