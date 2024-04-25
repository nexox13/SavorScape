import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

function ContentBoxHeader() {
    const { colorTheme } = useAppContext();
    return (
        <div className='bg-white opacity-1 rounded-xl'>
            <div className={` rounded-lg shadow-md p-4`}>
                HELLOOOO
            </div>
        </div>
    );
}

export default ContentBoxHeader;
