import React, { useEffect, useState } from 'react';

const useParts = () => {

    let [parts, setParts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return parts;
};

export default useParts;