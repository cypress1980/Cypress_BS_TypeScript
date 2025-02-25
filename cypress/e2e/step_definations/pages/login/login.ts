import { UrlUtility } from "../../../../support/utilities/urlUtilities";
import { UserList } from "../../../data/userList";

export class Login {

    public static userLogin(portalName: any, userName: any) {

        let siteURL = UrlUtility.urlBuilder(portalName);
        let UserName = UserList.getUserList(userName);
        const args = { UserName, siteURL };
        let origin = siteURL

        //cy.session(args, () => {

            //cy.origin(origin, { args }, ({ UserName, siteURL }) => {
      
              Cypress.on("uncaught:exception", (err, runnable) => {
      
                return false;
      
              });
      
              cy.visit(siteURL);
              cy.contains('Register Now').click();
              cy.wait(1000)
              cy.get('[title="External HTML"]')
                .its("0.contentDocument.body")
                .find("#loginBtn").click()
              cy.get('[title="External HTML"]')
                .its("0.contentDocument.body")
                .find('input[name="email"]').type(UserName)
              cy.get('[title="External HTML"]')
                .its("0.contentDocument.body")  
                .find('input[name="password"]').type("Buyer@123")
              cy.get('[title="External HTML"]')
                .its("0.contentDocument.body")
                .find('button[class="iiris-aThJd iiris-btn iiris-btn-block"]').eq(0).click();
              cy.wait(10000)

              cy.get('[title="External HTML"]')
                .its("0.contentDocument.body")
                .find('button[class="iiris-bfnSK iiris-btn iiris-btn-block "]').click();

              cy.wait(10000)      
            //});
      
        //});
    
    }

}