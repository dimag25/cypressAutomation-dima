
///<reference types ="cypress"/>
import { onLoginPage } from "../support/pageObjects/LoginPage"
import { homePage } from "../support/pageObjects/HomePage"

import testData from '../../data/TestsData.json'

describe('Login Fail flow', function () {
  it('Navigates to web app page', function () {
    cy.visit('/');
  })

  it('should fill login form and redirect to homepage', () => {
    homePage.clickLoginLink()
    onLoginPage.enterUserName('fakeUser')
    onLoginPage.enterPassword(testData.LoginData.password)
    onLoginPage.clickLoginButton()
    homePage.isUserNameDisplayed('fakeUser');

  });
})