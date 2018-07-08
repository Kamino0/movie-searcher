import React from 'react';

import Header from '../components/header';

const Page = ({
  children
}) => {
  return (
    <div>
      <Header />
      <main className='main-content'>
        {children}
      </main>
    </div>
  )
}

export default Page;
