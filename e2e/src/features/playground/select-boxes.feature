Feature: As a user I can interact with select boxes

  @smoke
  @regression
  Scenario: As a user I can interact and assert on select boxes
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    When I select the "10" option from the "age"
    Then the "age" should contain the value "10"
    When I select the "20" option from the "age"
    Then the "age" should contain the value "20"
    When I select the "30" option from the "age"
    Then the "age" should contain the value "30"
