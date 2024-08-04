import React from 'react'

export default function Footer() {
  const footerStyle={
    position :'relative',
    top: '100vh',
    width: "100%",

  }
  return (

    <footer className='bg-dark text-light py-3 text-center' style={footerStyle}>
       <p>
        Copyright &copy; Mytodolist.com
       </p>
    </footer>
  )
}
