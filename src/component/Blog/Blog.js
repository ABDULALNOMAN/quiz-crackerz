import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-400'>
            <dl className='container mx-auto'>
                <dt>what is the purpess of react router</dt> 
                <dd className='ml-10'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</dd>
                <dt>how does context api work </dt> 
                <dd className='ml-10'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on</dd>
                <dt>what is useref</dt> 
                <dd className='ml-10'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</dd>
            </dl>
        </div>
    );
};

export default Blog;