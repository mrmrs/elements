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
