Feature: As a user I can interact with browser alerts

  @smoke
  @regression
  Scenario: As a user I can interact and assert on browser alerts
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    When I click the "browser alert" link
    Then I click accept on the alert dialog
    When I click the "browser alert" link
    Then I click dismiss on the alert dialog
