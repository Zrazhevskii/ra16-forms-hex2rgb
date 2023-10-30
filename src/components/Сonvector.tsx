import React, { useState } from 'react';

interface IItem {
    rgb: string | undefined;
}

const checkHex = (value: string) => {
    const regex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    const arr = [];

    if (regex.test(value) ? true : false) {
        arr.push(parseInt(value.slice(1, 3), 16));
        arr.push(parseInt(value.slice(3, 5), 16));
        arr.push(parseInt(value.slice(5, 7), 16));
        return `rgb(${arr.toString()})`;
    } else {
        return 'Ошибка!'
    }
    
};

const Сonvectors = () => {
    const [input, setInput] = useState<IItem>({
        rgb: '',
    });

    let { rgb } = input;

    const handler = (e: any) => {
        e.preventDefault();

        let value = e.target.value;

        if (value.length < 7 || value.length > 7) {
            setInput({
                rgb: 'Ошибка!',
            });
        } else if (value.length === 7) {
            let checkValue: string | undefined = checkHex(value);
            setInput({
                rgb: checkValue,
            });
        }
    };

    return (
        <div
            className='flex justify-center mx-auto h-screen pt-40 py-2.5'
            style={{ backgroundColor: `${rgb}` }}
        >
            <form
                action=''
                className='flex flex-col bg-gray-200 border border-gray-800 items-center w-44 h-40'
            >
                <label htmlFor='check' className=''>
                    HEX:
                </label>
                <input
                    type='text'
                    id='check'
                    onInput={(e) => handler(e)}
                    className='input mx-auto text-center border border-gray-300 text-sm rounded-lg block w-40 p-2.5'
                    required
                />
                <label htmlFor='result' className=''>
                    RGB:
                </label>
                <input
                    type='text'
                    id='result'
                    value={rgb}
                    className='result mx-auto bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg block w-40 p-2.5'
                    disabled
                />
            </form>
        </div>
    );
};

export default Сonvectors;
