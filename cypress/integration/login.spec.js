
///<reference types ="cypress"/>
import { onLoginPage } from "../support/pageObjects/LoginPage"
import { homePage } from "../support/pageObjects/HomePage"

import testData from '../../data/TestsData.json'

describe('Login Success Flow', function () {
  it('Navigates to web app page', function () {
    cy.visit('/');
  })

  it('should fill login form and redirect to homepage', () => {
    homePage.clickLoginLink()
    onLoginPage.enterUserName(testData.LoginData.username)
    onLoginPage.enterPassword(testData.LoginData.password)
    onLoginPage.clickLoginButton()
    homePage.isUserNameDisplayed(testData.LoginData.username)
    // Verify the app redirected you to the homepage
    // cy.location('pathname', { timeout: 10000 }).should('eq', '/');

    // Verify the footer main page appears.
    // cy.get('.footerPageID',{timeout:10000}).should('eq', '506_16039');

  });
})