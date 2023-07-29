import React from 'react'

export const About = () => {
    let mydiv={
        // width: "85vh",
        textalign: "justify",
        margin: "10px auto"
    }
  return (
    <div className='text-center ' style={mydiv}>
        <h2>About</h2>
        <p>
        MyTaskTracker is a user-friendly and efficient ToDo List web application built using React, designed to help users stay organized and manage their daily tasks with ease. The app provides a clean and intuitive interface, making it perfect for both personal and professional use.
        </p>
    </div>
  )
}
