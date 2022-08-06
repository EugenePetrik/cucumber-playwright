Feature: As a user I can interact with radio buttons

  @smoke
  @regression
  Scenario: As a user I can interact and assert on radio buttons
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    And the "female label" should contain the text "Female"
    And the "male label" should contain the text "Male"
    And the "female label" should not contain the text "Male"
    And the "male label" should not contain the text "Female"
    And the "female" radio button should be checked
    And the "male" radio button should not be checked
    When I check the "male" radio button
    Then the "male" radio button should be checked
    And the "female" radio button should not be checked
    When I check the "female" radio button
    Then the "female" radio button should be checked
    And the "male" radio button should not be checked
