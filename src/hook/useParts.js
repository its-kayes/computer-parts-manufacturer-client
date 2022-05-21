import React, { useEffect, useState } from 'react';

const useParts = () => {

    let [parts, setParts] = useState();

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return parts;
};

export default useParts;