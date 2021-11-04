export default class LoginPage {
  cy;

  userNameTextbox = "#UsernameOrEmail";
  passwordTextbox = "[name=Password]";
  loginButton =
    "#content-center > div > div.row.mt-4 > div.col-12.col-md-7.col-lg-6.col-xl-5.order-md-last > div > form > div:nth-child(4) > button";
  registerButton = ".register-button";

  enterUserName(userName) {
    cy.get(this.userNameTextbox).type(userName);
  }

  enterPassword(password) {
    cy.get(this.passwordTextbox).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  login(userName, password) {
    this.enterUserName(userName);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  clickRegisterButton() {
    cy.get(this.registerButton).click();
  }



  isUserNameDisplayed() {
    return cy.page.waitForSelector(this.userNameText).isVisible();
  }

}
export const onLoginPage = new LoginPage();
