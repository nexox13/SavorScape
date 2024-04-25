import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import ContentBoxHeader from './ContentBoxHeader';

function ContentBox() {
    const { colorTheme, searchSubmit } = useAppContext();
    
    return (
        <div className='w-3/4 h-3/4 z-50 p-4 opacity-1'>
            {searchSubmit && (
                <div className={`${colorTheme} rounded-lg shadow-md p-4`}>
                    <ContentBoxHeader/>
                    {/* Content */}
                    <div>HELLO2</div>
                </div>
            )}
        </div>
    );
}

export default ContentBox;
