import React, { useCallback, useEffect, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Alex')

    const updateCounter = useCallback(() =>{
        console.log('before: ', count);
        setCount((prevCount) => prevCount + 1)
    }, [count])

    return (
        <>
            <div>
                <h3>{count}</h3>
                <h3>{name}</h3>
                <button onClick={updateCounter}>Click</button>
                <button onClick={() => {
                    setName((prevName) => prevName + count)
                }}>
                Click
                </button>
            </div>
        </>
    )
}

