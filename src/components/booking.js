import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiHotelBedLine,RiGlobalLine,RiTimeFill} from 'react-icons/ri'
import {GrUserSettings} from 'react-icons/gr';
import {FaCheckCircle,FaRegCalendarCheck,FaReceipt,FaStar,FaPaperPlane} from 'react-icons/fa';
import {BiLinkExternal,BiCheckCircle} from 'react-icons/bi';
import '../App.css'
import { Link } from 'react-router-dom';

export default function Booking() {
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
                        <small className="text-xs">
                           <Link to="/account">Account Seetings</Link> 
                        </small>
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

                   <div className="flex flex-row">
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
                    <h1 className="">Bookings</h1>
                    <h4>Your current Upcoming stays</h4>
                    <p>Please update the propety with your travel plans should change or if you wish to make any changes to your staay</p>
                    <div className="flex text-textcolor">
                        &#62;
                        <h2>Let more about our subscriptions</h2>
                    </div>

                    <div className="flex flex-row">
                        <div className="box-border rounded-md shadow bg-white">
                            <img src="./images/boutiqe.jpg" className="h-72 w-72"/>
                        </div>
                        <div className="flex-col space-y-2 box-border rounded-md shadow-md">
                            <div className="bg-white p-5 space-y-5 w-auto">
                            <div className="space-y-2">
                                <h2>Gardeen View</h2>
                                <div className="flex space-x-2">
                                    <FaCheckCircle className="text-gray-400"/>
                                    <span className="text-xs">Booking request received</span>
                                </div>
                                <div className="flex space-x-2">
                                    <RiTimeFill className="text-blue-500"/>
                                    <span className="text-xs text-blue-500">Awating information from hotel</span>
                                </div>
                            </div> 
                            {/* section 1 end */}
                            <hr/>
                            <div className="space-y-2">
                                <h2>Superior Premium</h2>
                                <div className="flex space-x-8">
                                    <div className="flex-col space-y-2">
                                        <div className="flex space-x-2">
                                            <FaRegCalendarCheck className="text-gray-400"/>
                                            <span className="text-xs text-gray-400">Check in</span>
                                        </div>
                                        <strong className="text-sm ml-5">July 9th,2018</strong>
                                    </div>
                                    <div className="flex-col space-y-2">
                                       <div className="flex space-x-2">
                                            <FaReceipt className="text-gray-400"/>
                                            <span className="text-xs text-gray-400">Referances</span>
                                        </div>
                                        <strong className="text-sm ml-5">#UC311K</strong>
                                    </div>
                                </div>
                            </div>
                            {/* section 2 end */}
                        </div>
                            <div className="bg-gray-200 px-5 space-y-2">
                                    <div className="flex space-x-2 text-green-500">
                                        <FaStar/>
                                        <strong className="text-xs">Rate your stay</strong>
                                    </div>
                                    <hr className="bg-gray-400"/>
                                    <div className="flex space-x-2">
                                        <FaPaperPlane className="text-gray-500"/>
                                        <span className="text-xs">Email the property</span>
                                    </div>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
