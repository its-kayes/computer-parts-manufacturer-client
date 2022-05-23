import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=' bg-black '>
            <div className='flex justify-between items-center text-white p-20'>
                <div className=''>
                    <div>
                        <h1 className='text-7xl font-bold font-mono'> Emrul Kayes </h1>
                        <p className='text-xl font-bold '> Web Developer </p>
                        <p className='text-lg'> kayes.ek8@gmail.com </p>
                        <p className='py-5'> I am a web developer. In the last few months I have completed more than 10+ websites project.
                            <p> I'm expert in HTML, CSS and JavaScript. As a library component I'm expert in both Bootstrap and TailwindCSS. </p>

                            Also expert in React js as a JavaScript framework. As a backend good at Node.js and Express.js. Also have good knowledge at Mongodb database </p>
                    </div>
                </div>
                <img className='w-1/4 rounded-3xl' src="https://i.ibb.co/7GsGMZ9/1640680010421-1.jpg" alt="" />
            </div>


            <div className='flex justify-around py-16 '>
                <div class="card w-96 bg-base-100 shadow-xl image-full ">
                    <figure><img src="https://i.ibb.co/HDnH5FR/warehouse-mobile.webp" alt="Shoes" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title">Clothing Warehouse</h2>
                        <p>It's a warehouse where a lot of cloth are stored for sell</p>
                        <div class="card-actions justify-end">
                            <a href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Live View </a>
                            {/* <a  class="btn btn-primary" >Buy Now</button> */}
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/fXF1hg0/Screenshot-174.png" className='p-3' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Bike Review</h2>
                        <p>It's a Bike Review Website based on a bike.</p>
                        <div class="card-actions justify-end">
                            <a href="https://bike-review-react-route-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
                            {/* <a  class="btn btn-primary" >Buy Now</button> */}
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Royal Convention Center</h2>
                        <p> It's a Conventional Center for Wedding Arrangements </p>
                        <div class="card-actions justify-end">
                            <a href="https://weading-by-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
                            {/* <a  class="btn btn-primary" >Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-white flex justify-around my-8'>
                <div className=' '>
                    <h1 className='text-3xl font-mono font-bold my-2'> List of Technology that I know </h1>
                    <div className='flex justify-around'>
                        <div className='p-10'>
                            <li className='p-1'> HTML </li>
                            <li className='p-1'> CSS </li>
                            <li className='p-1'> BOOTSTRAP </li>
                            <li className='p-1'> TAILWINDCSS </li>
                            <li className='p-1'> JAVASCRIPT </li>
                            <li className='p-1'> REACT JS </li>
                        </div>

                        <div className='p-10'>
                            <li className='p-1'> NODE JS </li>
                            <li className='p-1'> EXPRESS </li>
                            <li className='p-1'> MONGODB </li>
                            <li className='p-1'> FIREBASE </li>
                            <li className='p-1'> PAYMENT METHOD </li>
                            <li className='p-1'> HEROKU </li>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-mono font-bold my-2'> Educational Information  </h1>
                    <div className='my-10'>
                        <p> Studies B.sc in  Computer Science Engineering </p>
                        <p> Student of Shanto-Mariam University of Creative Technology </p>
                        <p> Last year of B.sc  </p>
                    </div>
                </div>
            </div>

            <dir>
                <div className='flex justify-evenly py-20'>
                    <a href="nkedin.com/in/emrul-kayes-b61895237/"> <i class="fa-brands fa-linkedin text-8xl"> </i></a>
                    <a href="https://github.com/its-kayes"> <i class="fa-brands fa-github text-8xl"> </i>  </a> 
                    <a href="https://www.facebook.com/kayes0000000/"> <i class="fa-brands fa-facebook text-8xl"></i> </a>
                    
                    {/* <i class="fa-brands fa-linkedin text-8xl"> </i>
                    <i class="fa-brands fa-facebook text-8xl "> </i> */}
                </div>
            </dir>
        </div>
    );
};

export default MyPortfolio;