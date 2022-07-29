Feature: As a user I expect to be able to navigate to the home page

  @dev
  @smoke
  @regression
  Scenario: As a user I expect to be able to see contacts
    Given I am on the "home" page
    Then the "header logo" should be displayed
    And the "contacts header" should contain the text "Contactsss"
