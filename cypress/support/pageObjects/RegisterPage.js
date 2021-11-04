export default class RegisterPage {
  cy;

  constructor() {
    this.cy = cy;
  }

  genderRadioButton = "#gender-%s";
  firstNameTextbox = "#FirstName";
  lastNameTextbox = "#LastName";
  dateOfBirthDayDropdown = "[name=DateOfBirthDay]";
  dateOfBirthMonthDropdown = "[name=DateOfBirthMonth]";
  dateOfBirthYearDropdown = "[name=DateOfBirthYear]";
  emailTextbox = "#Email";
  userNameTextbox = "#Username";
  passwordTextbox = "[name=Password]";
  confirmPasswordTextbox = "#ConfirmPassword";
  companyTextbox = "#Company";
  newsletterCheckbox = "#Newsletter";
  registerButton = "[name=register-button]";
  registerSuccessText = ".registration-result-page p";

  selectGender(gender) {
    this.cy
      .get(this.genderRadioButton.replace("%s", gender.toLowerCase()))
      .click();
  }

  enterFirstName(firstName) {
    this.cy.get(this.firstNameTextbox).type(firstName);
  }

  enterLastName(lastName) {
    this.cy.get(this.lastNameTextbox).type(lastName);
  }

  selectBirthDay(day) {
    this.cy.get(this.dateOfBirthDayDropdown).select(day);
  }

  selectBirthMonth(month) {
    this.cy.get(this.dateOfBirthMonthDropdown).select(month);
  }

  selectBirthYear(year) {
    this.cy.get(this.dateOfBirthYearDropdown).select(year);
  }

  enterEmail(email) {
    this.cy.get(this.emailTextbox).type(email);
  }

  enterUserName(userName) {
    this.cy.get(this.userNameTextbox).type(userName);
  }

  enterPassword(password) {
    this.cy.get(this.passwordTextbox).type(password);
  }

  enterConfirmPassword(confirmPassword) {
    this.cy.get(this.confirmPasswordTextbox).type(confirmPassword);
  }

  enterCompany(company) {
    this.cy.get(this.companyTextbox).type(company);
  }

  checkNewsLetter() {
    this.cy.get(this.newsletterCheckbox).check();
  }

  clickRegisterButton() {
    this.cy.get(this.registerButton).click();
  }

  enterRegistrationDetails(
    gender,
    firstName,
    lastName,
    dob,
    email,
    userName,
    password,
    confirmPassword,
    company
  ) {
    this.selectGender(gender);
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    let dobArray = dob.split("/");
    this.selectBirthDay(dobArray[0]);
    this.selectBirthMonth(dobArray[1]);
    this.selectBirthYear(dobArray[2]);
    let time = new Date().getTime().toString();
    email = email.replace("%s", time);
    this.enterEmail(email);
    userName = userName.replace("%s", time);
    this.enterUserName(userName);
    this.enterPassword(password);
    this.enterConfirmPassword(confirmPassword);
    this.enterCompany(company);
    this.checkNewsLetter();
    this.clickRegisterButton();
    return email;
  }

  getRegisterSuccessMessage() {
    let msg = String(this.cy.get(this.registerSuccessText).innerText).trim();
    console.log("Registration Message: " + msg);
    return msg;
  }

   validateRegistrationSuccess(message) {
    this.cy.get(this.registerSuccessText).should('contain.text', message) 
    // this.cy.get(this.registerSuccessText).should("have.text", message);
  }
}
export const registerPage = new RegisterPage();
