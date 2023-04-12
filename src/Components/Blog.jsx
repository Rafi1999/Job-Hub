import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
        <h3 className='font-medium underline text-3xl text-center mb-10 font-serif pt-3  pb-3 banner'>Blogs</h3>
        <div className='my-10 font-serif space-x-2 space-y-2 border rounded-md border-slate-700'>
            <h2 className='text-3xl text-center underline mt-2 mb-5 font-medium'>Some Common Question</h2>
            <h3 className='text-xl  font-medium'>A. When should you use context API?</h3><p className='text-xl'>Ans : The Context API in React should be used when you have data or state that needs to be shared between multiple components at different levels of the component tree, without the need to pass data through props.</p>
<h3 className='text-xl  font-medium'>B. What is a custom hook?</h3><p className='text-xl'>Ans : A custom hook in React is a JavaScript function that uses built-in hooks or other custom hooks to provide reusable functionality in a declarative way. Custom hooks allow you to extract common logic and state management into a reusable function, which can then be used across multiple components.</p>
<h3 className='text-xl  font-medium'>C. What is useRef?</h3><p className='text-xl'>Ans : useRef is a feature in React that allows to create a reference to an element or a value that persists across multiple renders of a component. It returns an object that can be used to store any value, and this value will remain the same across all renders of the component.</p>
<h3 className='text-xl  font-medium'>D. What is useMemo?</h3><p className='text-xl'>Ans : The React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies update. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</p>
        </div>
        </div>
        
    );
};

export default Blog;