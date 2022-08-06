Feature: As a user I can interact with links

  @smoke
  @regression
  Scenario: As a user I can interact and assert on autocomplete links
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    When I click the "primary" button
    Then the "primary" should contain the text "Primary"
    And the "secondary" should not be enabled
    And the "secondary" should equal the text "Disabled"
    When I click the "third" link
    Then the "third" should contain the text "Link"
