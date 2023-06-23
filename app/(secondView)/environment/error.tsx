'use client'

import React from 'react';

export default function Error({ error, reset }) {
    React.useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!  here environment </h2>
            <h2>Something went wrong!  here environment </h2>
            <h2>Something went wrong!  here environment </h2>
            <h2>Something went wrong!  here environment </h2>
            <button onClick={reset}>
                Try again
            </button>
        </div>
    );
}
