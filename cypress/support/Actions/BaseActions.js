import { homeActions } from "./HomeActions";
import { registerActions } from "./RegisterActions";

export class BaseActions {
  homeActions;
  registerActions;
  constructor() {
    this.homeActions = homeActions;
    this.registerActions = registerActions;
  }

  // Execute function  by eval func : {class.functionName} with params.
  executeFunctionByFuncName(fname, className, fnParams) {
    console.log("Executing Function : ", `${className}.${fname}`);

    // await eval(`this.${fname}`)(fnParams);
    if (fname === "login") {
      this.homeActions.login(fnParams);
    } else if (fname === "registerUser") {
      this.registerActions.registerUser(fnParams);
    }
    else if(fname === "logout") {
      this.homeActions.logout(fnParams);
    }
      else if(fname === "subscribeToNewsLetter") {
        this.homeActions.subscribeToNewsLetter(fnParams);
      
    }
    else if(fname === "unsubscribeToNewsLetter") {
      this.homeActions.unsubscribeToNewsLetter(fnParams);
    
  } else {
      throw new Error("Invalid action :" + fname);
    }
  }
}
export const baseActions = new BaseActions();
