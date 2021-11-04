import { homePage } from "../pageObjects/HomePage";
import { onLoginPage } from "../pageObjects/LoginPage";
import { registerPage } from "../pageObjects/RegisterPage";
import { Actions } from "../Utils/Actions";

class RegisterActions extends Actions {
  homepage;
  loginpage;
  registerPage;
  constructor() {
    super();
    this.loginpage = onLoginPage;
    this.homePage = homePage;
    this.registerPage = registerPage;
  }
  registerUser(data) {
     this.homePage.clickLoginLink();
     this.loginpage.clickRegisterButton();
     this.registerPage.enterRegistrationDetails(
      data[0],
      data[1],
      data[2],
      data[3],
      data[4],
      data[5],
      data[6],
      data[7],
      data[8]
    );
     this.registerPage.validateRegistrationSuccess(data[9]);
    console.log("Successfully registered a user");
  }

    //eval function by name
    evalFunction(fname, fnParams) {
        this[`${fname}`](fnParams);
      }
}

export const registerActions = new RegisterActions();
