#coursware
https://app.pluralsight.com/library/courses/react-18-fundamentals/table-of-contents

github: https://github.com/RolandGuijt/ps-react-fundamentals

localcopy in demo/ps-react-fundamentals

# how to run 
goto the top of the project
- `demo/wip/globomantics`
- `demo/ps_react_fundamentals_feat_hooks_prop_state` (default repo branch)
- `demo/ps_react_fundamentals_feat_app_design`  (end course app)
and run  1 time `npm install`
then you can (re)run:
`npm run dev`  then check in the browser adress *http://localhost:3000*


# The power of React
React brings a structure with components

## core react features
- structure with components
  - reusability, have state
- UIs declared in JavaScript
  - state changes, dynamically render
- Efficiency with reconciliation
  - only updates the parts of the UI that changed

components are javascript functions that return jsx.
JSX looks like html but it isnot , it's an alternative way to write Javascript.
JSX: javascript extension
JSX needs to be translated to javascript

React team recommends  to write functions

## tools
- transform jSX to JS
- process JavaScript files
- Run a development server
- create a production build

use a ready-to-go development environment
- create react app (CRA)
- Next.js  (using in this course)
  - has optional server-side features (beyhod this scope of this course)

Need to install Node.js  (nodejs.org)  

create skeleton app
`npx create-next-app globomantics`
chose options with tab:
- use typescript : No
- use EsLint : Yes
- use tailwind css : No
- use src dir : No
- use App Router : No
- customize default import alias: No
  
in the globomantics folder:
`package.json`  has dependencies  

## how to check the end results
got to cloned repo, run `npm install` , then run `npm run dev`

eslint helps to debug js apps 
`npm run lint` to check problems

in vscode install eslint plugin

## debugging app
in vscode select debug button then  select debugger for web app (chrome)

in chrome install extension : React developer tools
- this adds in developer tools  new  tabs: Components, Profiler

## section 4. styling components

css bootstrap is used  see pages/_document.js  link
pages/_documents.js

the bootstrap  positioning system 12 columns

css file can be imported in a component

css not a react feature

## section 5. hooks props and state

strict.rule: props are read-only ! keep it like this

props increese reusability of components

hoooks, only call at the top level,   
can't be called conditionally
only call hooks in function components
or custom hook,
most common hook = state.

state = data private to the component

reconciliation  updates only the changed part of the UI!

## sec 6 component redering and side effects

rendering != updating the browser

!NB every change state == its component is re-rendered

react relies on pure funcitons,  which results can be cached

React.memo   use it when it is faster

side effects  
e.g. api returning an error code  or a timeout

## section 7 conditional rendering and shared state

place state as much as possible in a lower component

componenets are mounted and unmounted ! 
states of unmounted components are destroyed

the callback hook   useCallback !

loading indicator via additional state of a custom hook

more generic hooks like  userGetRequest

## section 8 context and navigation 

context feature is well suitable for  navigation 

```js
const context = React.create("default value");
... //using
<context.Provider value= "some value"> 
/children
</context.Provider>
...
//in children components
const value = useContext(context);
<context.Consumer>
{value= > /*render something basedon balue */}
</context.Consumer>
```

when the context of value changes, all chlidren which use this vlaue will be rerendered

### navigation libraries
next.js  router  
React Router  (does not work with nextJs)

it is all based on global state

implication of context
- think about re-renders
- component reuse more difficult
- hidden state

## section 9 User input and Forms
### form librariess
 - Formik (formik.org)  external library
   - validation
   - handling form submission
   - state handling

evaluate if you need external dependency

## section 10  Application design
design is a continuous process.

- the mock
- find set of components with a single responsibility
- components that do too much are unwanted because difficult to maintain

applicaiton design can change through a development process

design steps:
- App
  - Banner
  - HouseList
    - HouseRow
  - House
    - BdList
    - AddBid
  
## File Structure

### components

* app.js
* houseList.js
* house.js
* ...

### helpers

* currencyFormatter.js
* loadingStatus.js
* navValues.js
* ...

### hooks

* useHouses.js
* useBids.js
* useGetRequest.js  

## Alternative File Structure
organized code by features.  Default struct of NextJs

* app.js

### houses

* houseList.js
* house.js
* useHouses.js
* useBids.js
* ...

### customers

* customerList.js
* useCustomers.js
* ...

### common

* currencyFormatter.js
* loadingStatus.js
* navValues.js
* useGetRequest.js


Rule of thumb : limit to 3 or 4 directory levels

A fist version of the App is the  app we created in this project
- no interactivity
- without state
- just props
- in-memory data source 

api backend can be added later

### when application data is a state candidate
- it isnot passed in by the parent via a prop
- it changes over time
- i can not be computed (static data)


in the app
 feauture : is state
- houses  :  yes
- house count : no
- default house photo : no
- bids : yes
- new bid  : yes
  

there is only one comoponent which owns the state, 
it is a component which introduces this state  

### Inverse data flow
 from up to bottom 1-way of data flow

 which child needs to change the parent

 ### where to go next
 - practice fundamentals first
 - creatge an app by yourself
 - design first
 - do advanced courses
 - relatec topics
   - typescripts
   - Redux (centralize app's state management  in a storage) 
      (can not be recommended to use at all times)
   - React Query (compplexity to a lesser degree) share state between few components