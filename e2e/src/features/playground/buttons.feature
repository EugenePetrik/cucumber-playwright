Feature: As a user I can interact with buttons at index

  @smoke
  @regression
  Scenario: As a user I can interact and assert on buttons at index
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And I click the "1st" "my button" button
    Then the "1st" "my button" should contain the text "One"
    When I click the "2nd" "my button" button
    Then the "2nd" "my button" should contain the text "Two"
    When I click the "3rd" "my button" button
    Then the "3rd" "my button" should contain the text "Three"
