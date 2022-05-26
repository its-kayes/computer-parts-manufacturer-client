import React, { useEffect, useState } from 'react';

const useParts = () => {

    let [parts, setParts] = useState();

    useEffect(() => {
        fetch('https://enigmatic-lake-23819.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return parts;
};

export default useParts;