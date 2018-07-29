# Elements

WIP

Prototyping kit.

Easily style html elements with values from your design system.
Harness the power of react and css-in-js while writing semantic Html.

Made with:

- Create-react-app 
- Styled-System 
- Glamorous

## Getting started

```
git clone git@github.com:mrmrs/elements.git
```

```
npm i && npm start
```

This will open up the app to localhost:3000 (unless that port is occupied and you opt to use a different port).

To edit the page you see at localhost:3000 go to 
```
src/pages/Home.js
```


### Element example

#### H1.js

```js
import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const H1 = glamorous.h1(
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  {
    boxSizing: 'border-box',
  },
)

H1.defaultProps = {
  lineHeight: 1.25
}

export default H1
```

Reference and style elements in your jsx like so
```jsx
<H1 fontSize={[ 2,3,5 ]} textAlign='center' color='#bada55'>
  First heading element
</H1>
```

You can compose elements together or create single element components
that are styled in a custom way. 

#### Example Component

```
// src/components/SlabStat.js
import React from 'react'
import PropTypes from 'prop-types'

// Import needed elements

import Dl from '../elements/Dl'
import Dt from '../elements/Dt'
import Dd from '../elements/Dd'

const SlabStat = ({term, description, ...props}) => {
  return (
    <Dl {...props}>
      <Dt fontSize={1} mb={1} children={term} />
      <Dd ml={0} fontSize={[2, 3, 4]} fontWeight={700} maxWidth="34em" children={description} />
    </Dl>
  )
}

SlabStat.propTypes = {
  term: PropTypes.string,
  description: PropTypes.string,
}

SlabStat.defaultProps = {
  term: 'This is a label',
  description: 'A short description',
}

export default SlabStat
```
