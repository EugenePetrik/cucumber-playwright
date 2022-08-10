Feature: As a user I can intercept a REST api and mock the response

  @smoke
  @regression
  Scenario: As a user I expect to see the REST users
    Given I am on the "home" page
    When I click the "playground" button
    Then I am directed to the "playground" page
    And the "1st" "full name" should contain the text "Leanne Graham"

  @smoke
  @regression
  Scenario: As a user I can mock no users existing
    Given I am on the "home" page
    When the "api" endpoint for "users" is mocked with "no users"
    And I click the "playground" button
    Then I am directed to the "playground" page
    And the "full name" should not be displayed

  @smoke
  @regression
  Scenario: As a user I can mock a single user
    Given I am on the "home" page
    When the "api" endpoint for "users" is mocked with "single user"
    And I click the "playground" button
    Then I am directed to the "playground" page
    When the "1st" "full name" should not contain the text "Leanne Graham"
    Then the "1st" "full name" should contain the text "Todd Smith"

  @smoke
  @regression
  Scenario: As a user I can mock multiple users
    Given I am on the "home" page
    When the "api" endpoint for "users" is mocked with "multiple users"
    And I click the "playground" button
    Then I am directed to the "playground" page
    And the "1st" "full name" should contain the text "Todd Smith"
    And the "2nd" "full name" should contain the text "Natalie Ford"
    And the "3rd" "full name" should contain the text "River Wild"

  @smoke
  @regression
  Scenario: As a user I can validate only 5 users will display as expected
    Given I am on the "home" page
    When the "api" endpoint for "users" is mocked with "six users"
    And I click the "playground" button
    Then I am directed to the "playground" page
    And the "1st" "full name" should contain the text "Todd Smith"
    And the "2nd" "full name" should contain the text "Natalie Ford"
    And the "3rd" "full name" should contain the text "River Wild"
    And the "4th" "full name" should contain the text "Monica Louise"
    And the "5th" "full name" should contain the text "Ted Nugget"
    And the "6th" "full name" should not be displayed
