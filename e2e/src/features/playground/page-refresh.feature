Feature: As a user I can refresh the browser and see the application

  @smoke
  @regression
  Scenario: As a user I can refresh the browser and be on the page expected
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    And I refresh the "playground" page
