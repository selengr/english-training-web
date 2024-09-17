'use client'

import { sendGAEvent } from '@next/third-parties/google'

const page = () => {

  return (
    <button
      onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'myButton' })}
    >
      Click me!
    </button>
  )
}

export default page;

