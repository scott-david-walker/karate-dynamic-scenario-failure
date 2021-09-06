Feature: Creating a patient
Scenario Outline: Create Patient Iteration <test>

Given url "https://google.com"

When method GET
Then status 200



Examples:
    | read('../../data/random.csv') |

