///<reference types ="cypress"/>
///<reference types ="cypress"/>

import * as suiteData from "../../data/Template.json";
import * as testData from "../../data/Test.json";
import { baseActions } from "../cypress/../support/Actions/BaseActions";

describe("Suite: TemplateSuite", function () {
  for (let i = 0; i < Object.keys(suiteData).length - 1; i++) {
    if (suiteData[i].RunMode.toUpperCase() === "YES") {
      it(suiteData[i].TC, () => {
        cy.visit(
          "https://services.smartbear.com//samples/TestComplete15/smartstore"
        );
        for (let k = 0; k < Object.keys(testData).length - 1; k++)
          if (testData[k].TC === suiteData[i].TC) {
            for (let l = 0; l < Object.keys(testData[k].actions).length; l++) {
              describe(testData[k].actions[l].Step, () => {
                baseActions.executeFunctionByFuncName(
                  testData[k].actions[l].Action,
                  testData[k].ClassName,
                  testData[k].actions[l].Data
                );
              });
            }
          }
      });
    } else {
      it(suiteData[i].TC, () => {
        test.skip();
      });
    }
  }
});
