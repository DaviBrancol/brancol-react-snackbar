# @brancol/react-snackbar

Snackbar Component developed for React JS.

This project was developed for custom styles. You have a set of props that can change the snackbar appearance, but you may also create your own with the SnackbarProvider render prop.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Props](#props)
- [Options](#options)
- [Projects](#projects)
- [ChangeLog](#changelog)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install @brancol/react-snackbar
    $ yarn add @brancol/react-snackbar

## Usage

To use the snackbar you must place a Context Provider on the top of the project.

### index.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import SnackbarProvider from '@brancol/react-snackbar'

ReactDOM.render(
  <SnackbarProvider>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
)
```

### App.js

```jsx
import React from 'react'
import { useSnackbar } from '@brancol/react-snackbar'

export function App() {
  const snackbar = useSnackbar()
  return (
    <div>
      <h1>App</h1>
      <div>
        <button onClick={() => snackbar.showSuccess('Success Message')}>Show Success</button>
        <button onClick={() => snackbar.showWarning('Warning Message')}>Show Warning</button>
        <button onClick={() => snackbar.showDanger('Danger Message')}>Show Danger</button>
      </div>
    </div>
  )
}
```

## Examples

Want more examples on how to use this snackbar or more use cases for your application?

Checkout my Javascript [React Tailwind - Base Project]("https://github.com/DaviBrancol/React-Tailwind")<br>
Or if you using Typescript [React Tailwind - Typescript Base Project]("https://github.com/DaviBrancol/React-Tailwind-Typescript")<br>

## Props

Here is a full detailed list of the props you can send to use the SnackbarProvider.

| Name                   | Type            | Default                      | Description                                            | Values                               |
| ---------------------- | --------------- | ---------------------------- | ------------------------------------------------------ | ------------------------------------ |
| defaultPosition        | string          | tr                           | Position of the Snackbar                               | ['tl', 'tc', 'tr', 'bl', 'bc', 'br'] |
| defaultDisplayDuration | number          | 5000                         | Time that the Snackbar will be displayed               | 1000 - 100000                        |
| defaultAnimationDelay  | number          | 500                          | Time that the Snackbar will take to fadein and fadeout | 100 - 3000                           |
| successColor           | string          | '#28c960'                    | Default success color of the Snackbar                  | HEX Color                            |
| warningColor           | string          | '#f49716'                    | Default warning color of the Snackbar                  | HEX Color                            |
| dangerColor            | string          | '#fc5050'                    | Default danger color of the Snackbar                   | HEX Color                            |
| successIcon            | string          | 'fa fa-check-circle'         | Default success icon of the Snackbar                   | FontAwesome Icon                     |
| warningIcon            | string          | 'fa fa-exclamation-triangle' | Default warning icon of the Snackbar                   | FontAwesome Icon                     |
| dangerIcon             | string          | 'fa fa-exclamation-circle'   | Default danger icon of the Snackbar                    | FontAwesome Icon                     |
| showIcon               | boolean         | true                         | Indicates if the left icon will be displayed           | true - false                         |
| showCloseIcon          | boolean         | true                         | Indicates if the close icon will be displayed          | true - false                         |
| render                 | (props) => Node | null                         | A custom Snackbar component with all props             | ReactNode                            |

## Options

When calling the useSnackbar open methos, you can send a list of options for that specific open.

| Name             | Type    | Description                                            | Values                               |
| ---------------- | ------- | ------------------------------------------------------ | ------------------------------------ |
| duration         | number  | Time that the Snackbar will be displayed               | 1000 - 100000                        |
| animationDelay   | number  | Time that the Snackbar will take to fadein and fadeout | 100 - 3000                           |
| position         | string  | Position of the Snackbar                               | ['tl', 'tc', 'tr', 'bl', 'bc', 'br'] |
| displayIcon      | boolean | Indicates if the left icon will be displayed           | true - false                         |
| displayCloseIcon | boolean | Indicates if the close icon will be displayed          | true - false                         |

## Tests

This snackbar component is already tested using [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/). You may create your own tests using this modules as well.

## Projects

You can find other projects and more stuff in my:

[Github Profile](https://github.com/DaviBrancol)<br>
[Personal Website](https://davibrancol.com.br)<br>
[Instagram Profile](https://instagram.com/davibrancol17)<br>

## ChangeLog Header

#### 0.2.3

- Bugfix on mobile responsivity.
- Bugfix on position fixed.
- Bugfix on pointer events from the snackbar.
- Bugfix on z-index for 99999.

#### 0.2.0

- Added tests with jest for a better security of the module.
- Fixed bugs with custom duration and position in show call.
- Fixed some css names for better using and testing.

#### 0.1.0

- Removed Tailwind must need from CSS.
- Added custom css class for styling.
- Fixed props from Options and Provider.
- Updated docs with new Props.
- Updated some padding visuals.
