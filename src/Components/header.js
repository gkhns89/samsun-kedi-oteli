import React from 'react'

function header() {
  return (
    <header>
        <div aria-label='header-content' className='w-full h-32 bg-gray-400 flex flex-row items-center justify-between px-12'>
            <div aria-label='header-logo' className='w-48 h-full bg-red-300'>
                <img src='./images/logo.png' alt='logo' className='h-full w-full object-contain' />
            </div>
            <nav aria-label='header-nav' className='min-w-64 h-full bg-green-300'>
            <ul className='w-full h-full flex flex-row items-center justify-between'>
                <li>Hakkımızda</li>
                <li>Hizmetlerimiz</li>
                <li>S.S.S.</li>
                <li>İletişim</li>
            </ul>
            </nav>
        </div>
    </header>
  )
}

export default header