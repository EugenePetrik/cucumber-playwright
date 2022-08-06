Feature: As a user I can interact with drop down menus

  @smoke
  @regression
  Scenario: As a user I can interact and assert on drop down menus
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    When I click the "drop down button" button
    Then the "drop down profile" should contain the text "Profile"
    And the "drop down my account" should contain the text "My account"
    And the "drop down logout" should contain the text "Logout"
    When I click the "drop down profile" button
    And I click the "drop down button" button
    And I click the "drop down my account" button
    And I click the "drop down button" button
    And I click the "drop down logout" button
    Then the "drop down profile" should not be displayed
    And the "drop down my account" should not be displayed
    And the "drop down logout" should not be displayed
