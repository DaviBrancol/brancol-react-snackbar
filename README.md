# @brancol/react-snackbar

Snackbar Component developed for React JS.

This project was developed for custom styles, but is best integrated with Tailwind CSS.
You can find more about the Tailwind CSS framework [here](https://tailwindcss.com/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Props](#props)
- [Options](#options)
- [Projects](#projects)

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
        <button onClick={() => snackbar.showSuccess('Success Message')}>
          Show Success
        </button>
        <button onClick={() => snackbar.showWarning('Warning Message')}>
          Show Warning
        </button>
        <button onClick={() => snackbar.showDanger('Danger Message')}>
          Show Danger
        </button>
      </div>
    </div>
  )
}
```

## Examples

Want more examples on how to use this snackbar or more use cases for your application?

Checkout my javascript [React Tailwind - Base Project]("https://github.com/DaviBrancol/React-Tailwind")
Or if you using typescript [React Tailwind - Typescript Base Project]("https://github.com/DaviBrancol/React-Tailwind-Typescript")

## Props

Here is a full detailed list of the props you can send to use the SnackbarProvider.

| Name                   | Type            | Default | Description                                            | Values                               |
| ---------------------- | --------------- | ------- | ------------------------------------------------------ | ------------------------------------ |
| defaultPosition        | string          | tr      | Position of the Snackbar                               | ['tl', 'tc', 'tr', 'bl', 'bc', 'br'] |
| defaultDisplayDuration | number          | 5000    | Time that the Snackbar will be displayed               | 0 - 100000                           |
| defaultAnimationDelay  | number          | 500     | Time that the Snackbar will take to fadein and fadeout | 100 - 3000                           |
| showIcon               | boolean         | true    | Indicates if the left icon will be displayed           | true - false                         |
| showCloseIcon          | boolean         | true    | Indicates if the close icon will be displayed          | true - false                         |
| render                 | (props) => Node | null    | A custom Snackbar component with all props             | ReactNode                            |

## Options

When calling the useSnackbar open methos, you can send a list of options for that specific open.

| Name             | Type    | Description                                            | Values                                      |
| ---------------- | ------- | ------------------------------------------------------ | ------------------------------------------- |
| duration         | number  | Time that the Snackbar will be displayed               | 100 - 1000                                  |
| animationDelay   | number  | Time that the Snackbar will take to fadein and fadeout | 0 - 100000                                  |
| position         | string  | Position of the Snackbar                               | ['tl', 'tc', 'tr', 'bl', 'bc', 'br']        |
| displayIcon      | boolean | Indicates if the left icon will be displayed           | true - false                                |
| displayCloseIcon | boolean | Indicates if the close icon will be displayed          | true - false                                |
| style            | string  | The style to be used as background and text            | ['success', 'warning', 'danger', 'primary'] |

## Projects

You can find other projects and more stuff in my:

[Github Profile](https://github.com/DaviBrancol)
[Personal Website](https://davibrancol.com.br)
[Instagram Profile](https://instagram.com/davibrancol17)
