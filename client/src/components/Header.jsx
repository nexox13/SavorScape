import React from 'react';
import Icon from './Icon';
import Search from './Search';

function Header() {
  return (
    <div className="sticky top-0 h-20 flex justify-evenly items-center bg-gray-300 opacity-80">
        <Icon src={"https://picsum.photos/50"}  alt="Profile picture" link={"http://localhost:8080"}/>
        <Icon src={"https://picsum.photos/50"}  alt="Profile picture" link={"http://localhost:8080"}/>
        
        <Search/>

        <Icon src={"https://picsum.photos/50"}  alt="Profile picture" link={"http://localhost:8080"}/>
        <Icon src={"https://picsum.photos/50"}  alt="Profile picture" link={"http://localhost:8080"}/>
    </div>
  );
}

export default Header;
