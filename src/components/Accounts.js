import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiHotelBedLine,RiGlobalLine,RiTimeFill} from 'react-icons/ri'
import {GrUserSettings} from 'react-icons/gr';
import {FaUserEdit} from 'react-icons/fa';
import {BiLinkExternal,BiCheckCircle} from 'react-icons/bi';
import '../App.css'

export default function Accounts() {
    return (
        <div className="p-5 bg-gray-200 h-auto">

            <div className="flex flex-row justify-between">
                <div>
                    <img src="./images/nomadrental-logo@1X.png"></img>
                </div>
                <div className="flex space-x-2">
                    <h4 className="mt-2">Choose a city</h4>
                    <div className="relative">
                        <img src="./images/Rectangle 313@1X.png"/>
                        <GiHamburgerMenu className="absolute ml-3 -mt-8"></GiHamburgerMenu>
                    </div>
                </div>
            </div>

            {/* <div className="flex justify-center"><h1 className="">Bookings</h1></div> */}

            <div className="flex space-x-24 mt-14">

                <div className="flex-col space-y-12">

                    <div className="relative">
                        <img src="./images/Path@1X.png"></img>
                        <h4 className="absolute ml-5 -mt-12">JD</h4>
                    </div>

                    <div className="">
                        <h4>John Doa</h4>
                        <h4>Premium Nomad</h4>
                    </div>

                    <div className="space-y-5">
                    <div className="relative flex space-x-2 mt-8">
                        <button className="bg-blue-500 inline-block rounded px-10 text-white focus:outline-none">Bookings</button>
                        <img className="absolute ml-5 mt-1.5" src="./images/inbox@1X.png"/>
                    </div>

                    <div className="px-5 flex-col space-y-4">
                        <div className="flex space-x-2">
                        <RiHotelBedLine></RiHotelBedLine>
                        <span className="text-xs">Refer and Earn</span>
                        </div>

                        <div className="flex space-x-2">
                        <GrUserSettings/>
                        <span className="text-xs">Account Seetings</span>
                        </div>
                   </div>
                   <h2>Support</h2>
                   <div className="px-5 flex-col space-y-4">
                        <div className="flex space-x-2">
                        <RiGlobalLine></RiGlobalLine>
                        <span className="text-xs">Contact Us</span>
                        </div>

                        <div className="flex space-x-2">
                        <BiLinkExternal/>
                        <span className="text-xs">FAQ</span>
                        </div>
                   </div>
                   </div>
                   <div className="flex">
                   <div className="flex items-center justify-center w-full mb-14">
                        <label 
                            for="toogleA"
                            className="flex items-center cursor-pointer"
                        >
                            <div className="relative">
                            <input id="toogleA" type="checkbox" className="hidden" />
                            <div
                                className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                            ></div>
                            <div
                                className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                            ></div>
                            </div>
                            <div
                            className="ml-3 text-gray-700 text-xs"
                            >
                            Sign out
                            </div>
                        </label>
                        
                        </div>
                   </div>
                </div>

                <div className="flex-col space-y-5">
                    <h1 className="">Account</h1>
                    <h4>Review and update your account details</h4>
                    <p>Please umake sure these details is up to date as they willbe used your bookings and communications with the hotel</p>
                    <div className="flex text-textcolor">
                        &#62;
                        <h2>Let more about our subscriptions</h2>
                    </div>

                    <div className="flex flex-col box-border rounded-lg shadow-md w-max h-max">
                        <div className="flex flex-row bg-white space-x-2 p-5">
                            <div>
                                <FaUserEdit className="text-gray-600"></FaUserEdit>
                            </div>
                            <div>
                                <label className="text-sm">John Doe</label>
                                <p className="text-xs">Please umake sure these details is up to date as they willbe used your bookings and communications with the hotel</p>
                            </div>
                        </div>
                        <div className="flex-col bg-gray-200 space-y-5 p-5">
                            <div className="flex flex-row space-x-5">
                                <div className="flex-col">
                                    <label>Your Name</label>
                                    <input
                                    name="email"
                                    value=""
                                    type="text" 
                                    placeholder="name"
                                    className="w-full p-2 rounded focus:outline-none"
                                    >
                                    </input>
                                </div>
                                <div className="flex-col">
                                    <label>Email</label>
                                    <input
                                    name="email"
                                    value=""
                                    type="text" 
                                    placeholder=" Email"
                                    className="w-full p-2 rounded focus:outline-none"
                                    >
                                    </input>
                                </div>
                            </div>
                            {/* sec 1 end */}
                            <div className="flex flex-row space-x-5">
                                <div className="flex-col">
                                    <label>Country</label>
                                    <div class="relative">
                                        <div className="w-8 h-10 pointer-events-none absolute right-0 flex">
                                        <span className="flex items-center leading-normal bg-gray-lighter border border-r-0 border-gray-light px-3 text-gray-dark text-sm">
                                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                                        </span>
                                        </div>
                                    
                                    <select className="border border-gray-300 center rounded-md text-gray-600 h-10 pl-5 pr-40 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                        <option>Thailand</option>
                                        <option>Malaysia</option>
                                        <option>Bangladesh</option>
                                        <option>Singapore</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="flex-col">
                                    <label>Phone</label>
                                    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <div class="flex -mr-px">
                                            <span className="flex items-center bg-gray-100 rounded rounded-r-none border border-r-0 border-gray-light px-3 whitespace-no-wrap text-gray-dark text-sm">@</span>
                                        </div>	
                                        <input type="text" className="w-full leading-normal flex-1 border h-10 border-gray-light rounded rounded-l-none px-3  focus:outline-none" placeholder="phone"/>
                                    </div>	
                                </div>
                            </div>
                            <hr className="bg-gray-500"/>
                            {/* sec 2 end */}
                            <div className="flex flex-row space-x-5">
                                <div className="flex-col">
                                    <label>Your Name</label>
                                    <input
                                    name="email"
                                    value=""
                                    type="text" 
                                    placeholder="name"
                                    className="w-full p-2 rounded focus:outline-none"
                                    >
                                    </input>
                                </div>
                                <div className="flex-col">
                                    <label>Email</label>
                                    <input
                                    name="email"
                                    value=""
                                    type="text" 
                                    placeholder=" Email"
                                    className="w-full p-2 rounded focus:outline-none"
                                    >
                                    </input>
                                </div>
                            </div>
                            {/* sec 3 end */}
                            <div className="text-right space-x-2">
                                <small>Your data will handled with care</small>
                                <button className="bg-blue-500 inline-block rounded p-2 text-white focus:outline-none">Update</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
