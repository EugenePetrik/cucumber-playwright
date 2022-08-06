Feature: As a user I can interact with switches

  @smoke
  @regression
  Scenario: As a user I can interact and assert on switches
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    And the "switch one" switch should be checked
    When I uncheck the "switch one" switch
    Then the "switch one" switch should not be checked
    When I check the "switch one" switch
    Then the "switch one" switch should be checked
    And the "switch two" should not be enabled
