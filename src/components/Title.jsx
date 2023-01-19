import {memo} from 'react'

function Title() {
    console.log('Title being rendered');

  return (
    <h2>Our Counter App</h2>
  )
}

export default memo(Title)