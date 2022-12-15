# News Summary Challenge

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#problem-statements">Problem Statements</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This project was one of the technical assignments in the Digital Futures Academy programme and was undertaken between 27th to 31st July 2022.

The project was to implement a ReactJS app that displayed selected information from a dataset received via API call.

The project was to demonstrate my ability to apply the Thinking In React process in order to build a ReactJS app with state.

## Built With

The project was built with ReactJS. Axios framework was applied to simplify HTTP requests.

Jest was used as the testing framework with the React testing-library (testing-library.com).

## Getting Started

After cloning, from the project root folder:

1. Install dependencies.

```
$ npm install
```

2. Update `key` export from `./src/guardianKey.js` with your key for the guardianAPI. Registration details can be found at [https://open-platform.theguardian.com/access/](https://open-platform.theguardian.com/access/)

3. Carry out tests

```
$ npm test
```

4. Run the app

```
$ npm start
```

5. Open the app in your web browser (if not auto open) at the host and port address logged to the console.

## Problem Statements

This was a technical assignment I undertook as part of the Digital Futures Academy programme. The project was to implement a ReactJS app that displayed selected information from a dataset received via API call.

The original user stories and requirements can be found in the file [./ChallengeNotes.md](./ChallengeNotes.md). The Aylien text summary API is no longer a free resource and whilst included within the original challenge notes article summary generation via it were removed from the requirements as a result.

In order to build the ReactJS app I applied the Thinking In React process, this is documented in the file [./ImplementationNotes.md](./ImplementationNotes.md).

## Project Review and Roadmap

**_My key overall learning from this project:_**

- How to apply the Thinking In React process, which is the recommended best practice for developing React apps.
- That the Thinking In React process is extremely useful as a way of breaking down the solution into bitesized chunks (through identification of the component hierarchy and the process of creating a static version prior to adding state) that enables myself as a developer to make progressive progress towards the completion of the solution.

**_My technical learnings from this project:_**

- Creating React components based on a component hierarchy and implementing these into the application.
- Applying state to the application including identifying the necessary state and where it should live. Using async functions and API calls after component mounting to obtain state from the server.
- Using the Jest testing framework with the React Testing Library to build components using a TDD approach.
- Passing information into components via props and using prop-types in order to define the data expected via the prop.

**_Improvements/additional features that could be included:_**

Note: For demonstration of my ability to implement the below please see a later fullstack project which included a React frontend: [https://github.com/gibbuk/chitter-challenge-public](https://github.com/gibbuk/chitter-challenge-public).

- Implement async testing within the App.test.js tests, alongside mocked API returns, to provide assurance as to the Apps handling of the API calls and associated state [Completed].
- Applying routes through the app using the react-router-dom to allow navigation to individual articles.
- Apply Bootstrap css styling to the components to create a better looking user experience. .
- Add a loading message component that is rendered in place of the HeadlinePage component whilst the state containing the articles is being obtained. This would improve user experience if there is a delay in the data being received from the API.

## Acknowledgements

- Advice and guidance was provided by Digital Futures Academy Trainers Ed Wright and Lucas Chagas at various points throughout the project.
- A Digital Futures Academy member helped me troubleshoot the application of the API call.
