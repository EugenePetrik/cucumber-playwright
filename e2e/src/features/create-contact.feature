Feature: As a user I expect to be able to create contacts

  @smoke
  @regression
  Scenario: As a user I expect to be able to create a new contact
    Given I am on the "home" page
    When I click the "create" button
    Then I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    When I fill in the "name" input with "Ted Smith"
    And I select the "Male" option from the "gender"
    And I fill in the "phone" input with "0434555555"
    And I fill in the "street" input with "123 Fake Street"
    And I fill in the "city" input with "Melbourne"
    And I click the "save" button

    Then I am directed to the "home" page
    When I fill in the "search" input with "Ted Smith"
    Then the "search" should not equal the text "Ted Smiths"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Ted Smith"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "123 Fake Street, Melbourne"
    And the "edit" should be displayed
    And the "delete" should be displayed
