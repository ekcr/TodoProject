import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    const date = new Date();
    return (
        <footer className='footer'>
            <p>Copyright {date.getFullYear()}</p>
        </footer>
  )
}
