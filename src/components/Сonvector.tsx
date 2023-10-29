import React, { useState } from 'react';
import { IColor } from './models';

interface IItem {
    hex: string,
    rgb: string,
}

const Сonvectors = () => {
    const [color, setColor] = useState<IItem>({
        hex: '',
        rgb: '',
    })
    const {hex, rgb} = color;

    const hendler = (e: any) => {
        e.preventDefault();

        console.log(e.target.value)
    } 

    return (
        <div className='flex justify-center mx-auto h-screen bg-white mt-40 py-2.5'>
            <form action="" className='flex flex-col items-center w-44 h-40'>
                <label htmlFor="check" className=''>Цвет</label>
                <input type="text" id='check' onInput={(e) => hendler(e)} className='input mx-auto border border-gray-300 text-sm rounded-lg block w-40 p-2.5' required/>
                <label htmlFor="result" className=''>RBG</label>
                <input type="text" id='result' className='result mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-40 p-2.5' required/>
            </form>
        </div>
    )
    
};

export default Сonvectors;
