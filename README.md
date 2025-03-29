# Cat Fact Application

## "The Objectives"

Create an application that will display a single cat fact after setting a maximum number of characters in the input field.

## Data fetching

Use `https://catfact.ninja/` to check the Swagger API definition and find the proper URL that would enable you to specify the maximum length of the cat fact.

In order for the data to be fetched the maximum number of characters must be minimum 20.

## Input field

The input field should only accept numbers.

## Validation

- No validation message should be visible if the input was pristine (not used).
- If a user sets a non-numeric character, an error message should appear asking for a number value.
- If a user sets a number lower than 20, an error message should appear asking for a number greater than 19.
- If the correct value is provided no error messages should be displayed.

## Design

The layout should be clean and readable, everything should be in proportions and fairly aesthetically pleasing.

---

## Explanation of the Objectives

The above objectives (the section marked "The Objectives") were the instructions I received to build this application. These are the specific requirements I followed in order to create the Cat Fact Application. The app allows users to input a numeric value, which is used to set the maximum number of characters for the cat fact retrieved from the API. 

### Key Points:
- **Data Fetching**: The app fetches a cat fact based on the length provided, ensuring the number is greater than or equal to 20 characters.
- **Input Field**: Only numeric values are accepted, with validation messages shown for any invalid input.
- **Validation**: Proper checks are in place to ensure the input is valid and meets the minimum requirement of 20 characters.
- **Design**: The application layout is designed to be clean, simple, and visually pleasant, with clear and readable error messages when necessary.

---

## Conversation

During the development of this application, I had a moment of confusion regarding the instruction: "In order for the data to be fetched the maximum number of characters must be minimum 20."

Initially, I was unclear if this meant that the maximum number of characters should be at least 20 or if the input from the user should also be limited to a number greater than or equal to 20. To clarify, I reached out to the interlocutor and asked if the requirement was indeed that the user input a number that was a minimum of 20 characters.

The interlocutor confirmed that they wanted a minimum of 20 characters to be specified by the user. 

In addition, I asked if I could further enforce a numeric input field to limit the user's input to numbers only. This would help narrow down the possibilities for the user and ensure they wouldn't receive multiple error messages unnecessarily. The interlocutor agreed with this suggestion, and thus, I proceeded to implement the input field to only accept numbers.


---

## Features

- **Data Fetching**: The application uses the `https://catfact.ninja/` API to retrieve the cat facts. The API allows you to specify the maximum length of the cat fact returned.
- **Input Field**: The input field accepts only numeric input and ensures that the user inputs a value greater than or equal to 20.
- **Validation**: The app uses validation to ensure that the user only enters numbers greater than or equal to 20. If invalid input is detected, error messages guide the user to correct it.
- **UI Design**: The layout is simple, clean, and aesthetically pleasing, with proper proportions and clear error messages where necessary.

## Technologies Used

- **React**: The core of the application, for building the user interface.
- **TypeScript**: For type safety and better development experience.
- **Formik**: A popular library for handling forms, including input validation.
- **Yup**: A schema validation library used alongside Formik to validate the input field.
- **React-testing-library**: A popular library for handling tests. 
- **LINTER & PRETTIER**: Configured according to best practices and formatting recommendations.


## Validation Logic

- If the input field is empty or pristine, the submit button is disallowed and no validation message is shown. 
- A user will not be able to enter a non numeric value avoiding the harassament (placeholder is used instead as a light indication).
- If a user enters a number smaller than 20, an error message prompts them to enter a value greater than 19.
- If the user inputs a valid number greater than or equal to 20, no error messages are displayed, and the cat fact is fetched and shown.

## Code Review

The app is relatively simple, with basic data management and form handling. The goal of the project was to demonstrate my coding skills. The code is designed to be straightforward and modular, following best practices (SOLID Principles). For some parts of the code, I performed an auto-critique to improve readability and efficiency (SOLID Principles not respected). For further insights and areas I evaluated for improvement, please refer to the `quickAccess.txt` file.

## How to Run the Application

1. Clone this repository.
2. Navigate to the project folder and install the dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

4. Open the app in your browser at `http://localhost:3000`.

## Screenshots

![Cat Fact Application](./assets/screenshot.png)

## Conclusion

This project serves as a demonstration of my React and TypeScript skills, as well as my ability to manage simple data fetching and form validation. It is a simple but functional app that delivers the required functionality with minimal complexity.


