'use client'

import { sendGAEvent } from '@next/third-parties/google'

const page = () => {

    return (
        <button
            className='mt-56'
            onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'myButton' })}
        >
            Click me!
        </button>
    )
}

export default page;

