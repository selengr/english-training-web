'use client'

import { sendGAEvent } from '@next/third-parties/google'

export function EventButton() {
  return (
    <button
      onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'myButton' })}
    >
      Click me!
    </button>
  )
}