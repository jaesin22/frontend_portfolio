import React from 'react';

import Button from '../atom/button/Button';

function Header() {
  const styles = 'hover:text-[#2D36CE] border-b-[#2D36CE] font-bold';

  return (
    <header>
      <div className='w-screen bg-white border-b flex justify-between h-12'>
        <div className='w-3/5 flex justify-between mx-auto'>
          <Button label='Resume' className={` ${styles}`} />
          <Button label='Portfolio' className={` ${styles}`} />
          <Button label='Github' className={` ${styles}`} />
          <Button label='Blog' className={` ${styles}`} />
        </div>
      </div>
    </header>
  );
}

export default Header;
