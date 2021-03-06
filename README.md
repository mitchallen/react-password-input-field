@mitchallen/react-password-input-field
==
PasswordInputField React component
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-password-input-field">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-password-input-field.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-password-input-field">
    <img src="https://codecov.io/gh/mitchallen/react-password-input-field/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-password-input-field">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-password-input-field.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-password-input-field">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-password-input-field.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-password-input-field">
    <img src="https://img.shields.io/github/license/mitchallen/react-password-input-field.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/react-password-input-field --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import PasswordInputField from '@mitchallen/react-password-input-field';
```

__NOTE:__ PasswordInputField must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<PasswordInputField />
```

* * *

## Simple Test

```
$ create-react-app react-password-input-field-test
$ cd react-password-input-field-test/
$ npm install @mitchallen/react-password-input-field --save
$ npm install --save material-ui
```

### Modify src/App.js

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Must include MuiThemeProvider!
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PasswordInputField from '@mitchallen/react-password-input-field';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <PasswordInputField />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
```

Run the app

```
npm start
```

* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

```
$ npm test
```    
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-password-input-field.git](https://bitbucket.org/mitchallen/react-password-input-field.git)
* [github.com/mitchallen/react-password-input-field.git](https://github.com/mitchallen/react-password-input-field.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.4

* CircleCI explicity installs react@15.6.2
* Updated doc gen dependency

#### Version 0.1.3

* updated react peer dependency to allow for 16.x

#### Version 0.1.2

* Installed eslint as dev dependency
* Added ```run: yarn add react``` to ```.circleci/config.yml```
* React is now a peer only dependency

#### Version 0.1.1 

* Updated documentation

#### Version 0.1.0 

* initial release

* * *