@SupplierManagement
Feature: Prototype Buyers
    Background: Login to Prototype
        Given I login to INX prototype with INX User 1 user
        When I click on Supplier Management text

    Scenario: Validate the UI elements on buyers Supplier Management
        Then I should see text Supplier Management
        And I should see text Invite Supplier