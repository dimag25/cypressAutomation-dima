export default class HomePage {
  cy;

  constructor(cy) {
    this.cy = cy;
  }

  loginLink = "Log in";
  userNameText = "#menubar-my-account .menubar-link>span";
  logoutLink = 'Log out';
  newsLetterEmailTextbox = "[name=NewsletterEmail]";
  newsletterSubscribeButton = "#newsletter-subscribe-button";
  subscriptionText = "#newsletter-result-block";
  unsubscribeRadioButton = "#newsletter-unsubscribe";

  open(uri) {
    cy.goto(uri);
  }

  clickLoginLink() {
    cy.contains(this.loginLink).click();
  }

  clickMyAccountLink() {
    cy.get(this.userNameText).click();
  }

  clickLogoutLink() {
    cy.contains(this.logoutLink).click();
  }

  isLoginLinkDisplayed() {
     cy.contains(this.loginLink).should('be.visible');
  }

  isUserNameDisplayed(username) {
    cy.get(this.userNameText).should("have.text", username);
  }

  validateLoginSuccess(userName) {
    this.isUserNameDisplayed(userName);
  }

  enterNewsLetterEmail(email) {
    cy.get(this.newsLetterEmailTextbox).type(email);
  }

  clickNewsLetterSubscribeButton() {
    cy.get(this.newsletterSubscribeButton).click();
  }

  clickNewsLetterUnsubscribeButton() {
    cy.get(this.unsubscribeRadioButton).click();
  }

  getNewsLetterSuccessMessage() {
    let message = cy.get(this.subscriptionText).innerText;
    console.log("News Letter Message : " + message);
    return message;
  }

  subscribe(email) {
    this.enterNewsLetterEmail(email);
    this.clickNewsLetterSubscribeButton();
  }

  unsubscribe(email) {
    this.clickNewsLetterUnsubscribeButton();
    this.subscribe(email)
  }

  validateNewsLetterMessage(message) {
    cy.get(this.subscriptionText).should("have.text", message);

    // expect(this.getNewsLetterSuccessMessage()).equal(message);
  }
}
export const homePage = new HomePage();
