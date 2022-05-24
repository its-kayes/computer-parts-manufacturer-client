import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1  className='flex justify-center font-mono uppercase font-bold text-6xl my-16'> This is Blogs Section </h1>
            <div className='parts'>
                <div>
                    <h1 className='font-bold text-xl my-8 '>
                        How will you improve the performance of a React Application ?
                    </h1>
                    <div className='p-2'>
                        <li>Keeping component state local where necessary.</li>
                        <li> Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import() </li>
                        <li> Windowing or list virtualization in React. </li>
                        <li> Lazy loading images in React. </li>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-xl my-8 '>
                        What are the different ways to manage a state in a React application?
                    </h1>
                    <div className='p-2'>
                        <h1> There are four main types of state you need to properly manage in your React apps: </h1>
                        <li>Local state</li>
                        <li>Global state</li>
                        <li>Server state</li>
                        <li>URL state</li>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-xl my-8 '> How does prototypical inheritance work? </h1>
                    <div className='p-2'>
                        <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. </p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-xl my-8 '>What is a unit test? Why should write unit tests?</h1>
                    <div>
                        <p className='p-2'>
                            Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-xl my-8 '>
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </h1>
                    <div className='p-2'>
                        <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                        <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        </li>
                        <li>You will lose control of the state across all components.
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;