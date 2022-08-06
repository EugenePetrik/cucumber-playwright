Feature: As a user I can interact with text areas

  @smoke
  @regression
  Scenario: As a user I can interact and assert on text areas
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    And the "textarea" should contain the value "Testing Talks Hub has been established to teach the community how to build world class automation frameworks using the latest tooling."
    When I fill in the "textarea" input with "Learning to input to textarea."
    Then the "textarea" should contain the value "Learning to input to textarea."
