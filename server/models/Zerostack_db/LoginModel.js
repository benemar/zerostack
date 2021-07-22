import LoginModelGenerated from "./generated/LoginModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = LoginModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await LoginModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LoginModelGenerated,
  ...customModel
};
