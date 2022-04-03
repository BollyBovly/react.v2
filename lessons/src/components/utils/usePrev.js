import { useEffect } from "react";


const usePrev = (value) => {
    const ref = usePrev();

    useEffect(() => {
        ref.current = value;
    })
    return ref.current
}