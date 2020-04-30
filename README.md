# BetterUni

![BetterUni Logo](https://master.d10zhgeiihhv0k.amplifyapp.com/images/bulogo.png)

## The Team
- **Dillon Coffman**
- **Davis Samuel**
- **Richard Kemmerer**
- **Ariela Pellumbi**
- **Noah Costello**

## Trello
- **https://trello.com/b/40Un2Nlh/betteruni**
  
## Project Description
BetterUni is a [progressive web application](https://web.dev/progressive-web-apps/) for college students, from college students. We help students find the campus resources they need when they need them. As students, we know that wait times can be unbearable and in person advisor meetings can often waste a lot of time. It's also important to note that not every student is available on campus to come in for a meeting. A lot of students have disabilities that make the process of physically having to come into get help, even more cumbersome. Universities also incur costs in the process of in-person advising. They have to pay for the space and upkeep of their offices. It's 2020 and we should utilize the technology available to us to improve the university advising experience as a whole.

Advising doesn't *just* include major advising. Many universities offer student success centers, counseling services, and tutoring offices which present problems of their own. As students, we hear too often how counseling services aren't always available. Students with severe social anxiety, may also experience discomfort when seeking help or may not seek help at all because of this.

BetterUni looks to make all university resources as accessible as possible. In turn students can enjoy a better advising experience and university experience all together. Schools with easily accessible resources enable students to be even more successful in their college careers and beyond!

## Installation & Set Up
1. Create a free [AWS Account](https://aws.amazon.com/free/?trk=ps_a131L0000085DvcQAE&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_US&sc_publisher=google&sc_category=core&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=create%20aws%20account&sc_content=Account_e&sc_segment=432339156165&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|AWS|Core|US|EN|Text&s_kwcid=AL!4422!3!432339156165!e!!g!!create%20aws%20account&ef_id=Cj0KCQjwy6T1BRDXARIsAIqCTXpTa0qW7gURNKhrcGYEIvI8d5HSd4qot7x7siztyovUUobly5tosqQaAtItEALw_wcB:G:s&s_kwcid=AL!4422!3!432339156165!e!!g!!create%20aws%20account)

2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
     - Note: Install [Node](https://nodejs.org/en/) if you don't already have it. Choose the LTS version. Check if you have a version of Node already installed greater than version 10 by running node --version in your terminal.

3. Install and configure the AWS Amplify CLI
   - In your terminal or shell, run the following commands:
      <pre><code>npm install -g @aws-amplify/cli</code></pre>
      <pre><code>amplify configure</code></pre>
      
     - Note: If you're having permission issues on your system installing the CLI, please try the following command:
        <pre><code>sudo npm install -g @aws-amplify/cli --unsafe-perm=true</code></pre>
        <pre><code>amplify configure</code></pre>
    - Follow the steps the `amplify configure` command guides you through to sign in with your new AWS Account using the Amplify CLI.

4. Clone BetterUni and provision your own AWS resources

    1. Wherever you want your project to live locally on your computer, run: `mkdir betteruni`

    2. Change into your new directory with: `cd betteruni`

    3. Run `amplify init --app https://github.com/BetterUnI/BetterUni.git`
         - [What does this command do?](https://docs.amplify.aws/cli/usage/headless#--app)
           - "The init command clones the GitHub repo, initializes the CLI, creates a ‘sampledev’ environment in CLI, detects and adds categories, provisions the backend, pushes the changes to the cloud, and starts the app."

    4. Use `Ctrl + C` in your terminal or shell to stop your development server

5. Get Google Calendar API Key and Client Credentials
   1. Sign in to [Google's Developer Console](https://console.developers.google.com/) using a Gmail account
   2. Create a new Google project named 'YourAppName'
   3. Go to 'APIs and Services' in your Google Developer Console
      1. Click 'Credentials' on the left then click the '+ Create Credentials' button in the top bar just below the search input
      2. Create an API Key
      3. Create an OAuth client ID
      4. Note down your API Key as well as your Client ID and Client Secret

6. Get CometChat Pro API Credentials
   1. Sign up for a [CometChat Pro](https://app.cometchat.io/register) 30-day free trial account
   2. Log in to your CometChat Pro dashboard
   3. Create a new app named 'YourAppName'
   4. Note down your App ID and your auth only API key
   - What is CometChat Pro? [Read more here.](https://www.cometchat.com/pro/)

7. At the root level of your betteruni project, create a `.env` file
   - What is a `.env` file?
     - We'll use this file to store your Google and CometChat Pro Credentials safely in environment variables. When you run your project locally with `yarn start`, the values you define in this file are accessed with `process.env.YOUR_VARIABLE_NAME`.
   - You'll want your `.env` file to include the following:
      <pre><code> 
        REACT_APP_COMETCHAT_APP_ID=YOUR_COMETCHAT_APP_ID
        REACT_APP_COMETCHAT_API_KEY=YOUR_COMETCHAT_AUTH_ONLY_API_KEY
        REACT_APP_COMETCHAT_REGION=YOUR_REGION
        REACT_APP_CALENDAR_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
        REACT_APP_CALENDAR_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
        REACT_APP_CALENDAR_API_KEY=YOUR_GOOGLE_API_KEY
      </code></pre>
      - Why do all the environment variables begin with `REACT_APP`?
        - Please refer to [the create-react-app documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/) about this.

8. Run `yarn start` to run your local development server and go to localhost:3000 in your browser.

## Uninstalling
1. From your betteruni directory in your terminal or shell, run: `amplify delete`
2. Wait several minutes. The above command will delete all the AWS resources associated with your project.
3. Run `amplify env remove sampledev` to ensure your Amplify development environment is deleted.
4. Outside of the betteruni directory, run `rm -rf betteruni` in your terminal or shell to delete your local project entirely.

## Basic Development Process
1. Pull down the most recent master branch changes: `git pull origin master`
2. Make sure all AWS resources are provisioned for your AWS Amplify environment: `amplify push` 
3. `git checkout -b yourname-taskdescription`
4. Move your Trello task card from 'Sprint Backlog' to 'In Progress'
5. Work on your task
6. Commit your changes
    1. `git add .` to stage all your local changes or `git add -p` to walk through and add your changes one by one
    2. `git commit -m "Your commit message here"`
7. Push your changes: `git push origin yourname-taskdescription`. 
8. Create a pull request on GitHub with a description of what you've completed
    - ***Be sure to assign yourself to the PR AND add everyone as a reviewer***
9. Move your Trello task card to the 'In Code Review' list
10. Once your PR gets two approvals, merge your PR to master
11. Move your Trello task card to the 'Done' list

## Testing

### Unit Tests
BetterUni uses Jest and Enzyme to test its React components.
  - Run `yarn test` in your terminal or shell to run all of our component unit tests
  - [Learn more about Jest](https://jestjs.io/en/)
  - [Learn more about Enzyme](https://enzymejs.github.io/enzyme/)
- [View our Test Procedures document](https://drive.google.com/a/temple.edu/file/d/1vx-3hNl0IK_FhLMB8PudLm_0-6IP4fZL/view?usp=sharing)

### Integration Tests
BetterUni uses Cypress to do integration testing.
- Install Cypress with `npx cypress install` on your machine
- Run `node_modules/.bin/cypress open` in your shell or terminal to launch the Cypress testing window
  - Click tests within the Cypress window to run an automated integration test. You can view the automated integration test happen in real time within the window.
- [Learn more about Cypress](https://www.cypress.io/)
- [View our Test Procedures document](https://drive.google.com/a/temple.edu/file/d/1vx-3hNl0IK_FhLMB8PudLm_0-6IP4fZL/view?usp=sharing)


### Acceptance Tests
BetterUni uses Cypress to do acceptance testing.
- Install Cypress with `npx cypress install` on your machine
- Run `node_modules/.bin/cypress open` in your shell or terminal to launch the Cypress testing window
  - Click tests within the Cypress window to run an automated integration test. You can view the automated integration test happen in real time within the window.
- [Learn more about Cypress](https://www.cypress.io/)
- [View our Test Procedures document](https://drive.google.com/a/temple.edu/file/d/1vx-3hNl0IK_FhLMB8PudLm_0-6IP4fZL/view?usp=sharing)



## View our UI Prototypes
- Web size: https://www.figma.com/proto/1YLLQ4cvWhcLwUq776a2bk/BetterUni-Web-Size-UI-Prototype?node-id=1%3A3&viewport=457%2C471%2C0.10185033082962036&scaling=contain
- Tablet size: https://www.figma.com/proto/KbAMz2LllCaaZYiufXjvEs/BetterUni-Tablet-Size-UI-Prototype?node-id=1%3A2&viewport=660%2C561%2C0.2040012776851654&scaling=min-zoom
- Mobile size: https://www.figma.com/proto/738yMbW2VdEj1jmlrtk5v4/BetterUni-Mobile-Size-UI-Prototype?node-id=1%3A2&viewport=519%2C735%2C0.22340570390224457&scaling=min-zoom

You can click through each prototype. If you're ever unsure where to click to progress, click anywhere on the prototype and a box will highlight blue showing you where you can click next. These UI prototypes will be used to develop our actual web application for all screen sizes.

## Licensing
BetterUni is licensed under a MIT License. Please see that file within the root of our repository for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).