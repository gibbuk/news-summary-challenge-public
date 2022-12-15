# Challenge Implementation notes

## contents:
1. User Stories completed
2. Thinking In React process
- 2a. Component hierarchy
- 2b. Build a static version (includes TDD test design)
- 2c. Identify the minimal (but complete) representation of UI state 
- 2d. Identify where your state should live
- 2e. Adding Inverse Data Flow
- 2f. External data

## 1. User Stories completed

### Standard
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

### Decomposed

User stories further broken down or implied missing stories added.

```
As the presentational layer
So that I have content to display
I want to request content data on loading the app from the guardian API 

```
```
As the presentational layer
I want to apply bootstrap CSS styling to the components I create 
so that I will look nice to the user
```

```
As the presentational layer
I want to render the HeadlinePage component on first loading the app
so that the user can see what content is available
```

```
As the HeadlinesPage component
I want to create an array of Headline components with the content data passed as props to me
so that I can display all of the content available.

```
```
As the HeadlinePage component
I want to define PropTypes for the props I receive
so that I receive data I am able to use
```

```
As the Headline component 
I want to use the content provided to me to populate the image and headline text within myself
so that I can be rendered by the presentational layer
```
```
As the headline component
I want to define PropTypes for the props I will receive
So that I receive data I am able to use
```

## 2. Thinking in React Process:

## 2a. Component hierarchy

### Headlines page 
Blue box = HeadlinePage component
Red boxes = Headline component

![Headlines page mockup with hierarchy annotations](/images/headlines-page-component-hierarchy-01.png)

## 2b. Build a static version

### TDD strategy - static version - props using mock data

### Headline component
This component will receive props and use this content within appropriate content tags. Appropriate `classNames` will also be used to CSS/Bootstrap styling within the tags.
We do expect to use PropTypes to ensure the correct data is received but as this is the concern of the `prop-types` package they will have been tested already.
As rendering is the responsibility of react and there is no logic associated with applying the `classNames` then in theory no testing for the render is needed. This would mean no tests for the component at all which seems suspect. Therefore a basic test of the render with the props value is proposed to ensure some testing in place.
Tests:
1. Render test - it should render the Headline text to the screen.
2. Render test - it should render the link to the image in the `<img>` tag.

### HeadlinePage component
Tests:
1. It should render the same number of Headline components as length of the array of articles passed to it via props.
2. It should contain the headline text for every article within the array passed to it by props.
3. It should contain the image URL for every article within the array passed to it by props.

We expect to use PropTypes to ensure a usable array of articles is passed to it. As this is the concern of the `prop-types` package they will have been tested already.

### App component

Static version:
The core static requirement involve no routes and therefore App will run the Headline component, passing in mock data. Therefore tests will be the same as for the Headline Page component and intended to to verify that the App component has passed the mockData to the HeadlinePage component. This testing is not ideal for various reasons - 1. it repeats tests already undertaken in other component. 2. These tests, being based on mock data imported within the test file will fail when the components are updated to obtain real data via API calls due to the difference between the mcokData and real data. 
Nonetheless I am including them as it seemed strange to not have any tests for the app component. 
Tests:
1. It should render the same number of Headline components as length of the array of articles obtained.
2. It should contain the headline text for every article within the array passed to it by props.
3. It should contain the image URL for every article within the array passed to it by props.

## 2c. Identify the minimal (but complete) representation of UI state
Core requirements - The only information subject to change on the website are the articles provided as content from the guardianAPI server. This state is the `articles`.

## 2d. Identify where your state should live
Core requirements - `articles` state - The information obtained from the guardian API server is only required by the HeadlinePage component. Therefore it could be argued that this state should be owned and sit here. However we know there are additional extended requirements and React only has one-way data flow via props. Therefore it seems sensible to hold this state in the `App component`. This will allow the content to easily be available to the whole website. The `articles` state will therefore be held within the `App` component.

## 2e. Adding Inverse Data Flow
Core requirements - as components lower down the tree *don't* have any `state` associated with them there is no need for inverse data flow back up the tree. 

## 2f. External data
The `App` component must obtain data from the guardianAPI. 
Therefore - the initial state for `articles` will be set to an empty array and then set from a useEffect hook.