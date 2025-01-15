# Cancer or UI (cat diagnosis)

[My Notes](notes.md)

A brief description of the application here. This is a gag cite dedicated to given poor diagnoses for cats based on inputs from the user. There are a few different types of cancer taken from a repository of cancer types. There are only two types of diagnosis, cancer (with type) or UI. This is based off a real experience that my family had where the vets gave different diagnoses but none of it was helpful or reliable.


## 🚀 Specification Deliverable



For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator Pitch

This is a website made for fun and experience but still trying to bring attention to the lack of focus on pet healthcare. Healthcare for humans has to be correct for the sake of a person's life but petcare doesn't have to be as accurate or researched. While many people are attached to their pets, these pets are not as important to them as the lives of their parents but that doesn't mean that the healthcare can be unreliable. This website has to the goal to bring attention to how bad their diagnoses can be.

### Design

> This is a sketch of what it will look like before logging in or entering information

![Design image](BeforeLogIn.jpg)

<br/><br/>
> This is a sketch of it after logging in
  
![Design image](AfterLogIn.jpg)


<br/>

```mermaid
sequenceDiagram
    actor You
    actor Website
    actor API
    actor Friend
    You->>Website: Enter cat and characteristics
    Website->>API: Request names of cancer
    API-->>Website: Differnt names of cancers
    Website-->>You: "Diagnosis" of patient
    You->>Website: Request to share "diagnosis"
    Website-->>Friend: Generated link
```

### Key features

- Sign in to save cat information and fake diagnosis
- Save name of cat, discription of symtoms, and characteristics (age, color, etc)
- Generate diagnosis from symtoms
- Get names of diagnosis from database through API
- Ability to change cat's information and get new "diagnosis"
- Allows to share diagnosis with others
- Diagnosis will have warning that it isn't an actuall diagnosis and is purely for fun

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Create 4 screens: one before logging in, one for logging in, one for after logging in, and one to eneter cat's information
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast
- **React** - Provides login, choice display, applying votes, display other users votes, and use of React for routing and components
- **Service** - functions for things such as:
    - generate diagnosis
    - collect names of cancers
    - decided if it is cancer or not
    - login and register account
    - retrieve saved cat information
    - enter new cat information
- **DB/Login** - Store cat characteristics and diagnosis in database. Register and login users.
- **WebSocket** - When a diagnosis is shared, the information is generated from the server


## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
