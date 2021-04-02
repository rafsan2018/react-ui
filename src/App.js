import React from 'react';
import {Link} from 'react-router-dom';
import {GoKey} from 'react-icons/go';

function App() {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex-column space-y-5 h-full">
          <div className="space-y-5 p-5">
              <div className="relative flex-column">
                <img src="./images/Path@1X.png"></img>
                <GoKey className="absolute ml-5 -mt-10 text-white"/>
              </div>
              <h1>Hi There</h1>
              <p>Sign in to manage to your listings and booking request on nomad rental</p>
              <div className="flex text-textcolor">
                &#62;
                <h2>Let more about our subscriptions</h2>
              </div>
          </div>

          <div className="flex flex-col bg-gray-200 p-8 space-y-4">
                     <div>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 block">Email Address</label>
                                <input
                                 name="email"
                                 value=""
                                 type="text" 
                                 placeholder="Enter Email"
                                 className="w-full p-2 rounded focus:outline"
                                 >
                                 </input>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600  block">Password</label>
                                <input 
                                 name="password"
                                 value=""
                                 type="text" 
                                 placeholder="password"
                                 className="w-full p-2 border border-gray-300 rounded"
                                 ></input>
                            </div>

                            <div>
                                <button className="w-full py-2 px-4 bg-blue-600 rounded-md text-white">
                                  <Link to="/booking">Submit</Link>
                                </button>
                            </div>
                        </form>
                        </div>

                    <div className="flex h-auto bg-green-500 w-1"></div>

                     <div className="flex justify-center">
                       <h6 className="text-sm">Don't have an account?<span className="text-blue-500">Sign Up</span></h6>
                     </div>
            </div>
          
          </div>
         
        <div className="flex-1 ">
          <img src="./images/frontpage--header__slide-01@1X.png" className="h-screen"></img>
        </div>
        </div>
    </div>
  );
}

export default App;


