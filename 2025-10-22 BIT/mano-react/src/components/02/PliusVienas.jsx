import { useState } from 'react';

export default function PlusOne() {

    const [sk, setSk] = useState(0);

    const addOne = () => {
        setSk(sk + 1);
    };

    return (
        <>
            <button onClick={addOne}>+1</button>
            <h2>{sk}</h2>
        </>
    );
}