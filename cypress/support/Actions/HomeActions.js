import { homePage } from "../pageObjects/HomePage";
import { onLoginPage } from "../pageObjects/LoginPage";
import { Actions } from "../Utils/Actions";
export class HomeActions extends Actions {
  onLoginPage;
  homePage;
  constructor() {
    super();
    this.onLoginPage = onLoginPage;
    this.homePage = homePage;
  }
  login(data) {
    homePage.clickLoginLink();
    onLoginPage.login(data[0], data[1]);
    homePage.validateLoginSuccess(data[0]);
    console.log("Login Success");
  }

  logout() {
    homePage.clickMyAccountLink();
    homePage.clickLogoutLink();
    homePage.isLoginLinkDisplayed();
  }

  subscribeToNewsLetter(data) {
    homePage.subscribe(data[0]);
    homePage.validateNewsLetterMessage(data[1]);
    console.log("Subscribed " + data[0] + " to newsletters");
  }

  unsubscribeToNewsLetter(data) {
    homePage.unsubscribe(data[0]);
    homePage.validateNewsLetterMessage(data[1]);
    console.log("Unsubscribed " + data[0] + " to newsletters");
  }
    //eval function by name
    evalFunction(fname, fnParams) {
      this[`${fname}`](fnParams);
    }
}

export const homeActions = new HomeActions();
