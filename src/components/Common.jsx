import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { BiBook } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import { IoCaretBack } from 'react-icons/io5'
function Common() {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100px";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <>
        
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto ">



                        <div id="mySidenav" class="sidenav">
                            <NavLink to="javascript:void(0)" class="closebtn" onClick={closeNav}><img src={require('../components/close.png').default} /></NavLink>

                            <div className="a">
                                <NavLink to="/Student"><BsPerson /></NavLink>
                                <p>Students</p>
                            </div>
                            <div className="a">
                                <NavLink to="/Lession"><BiBook /></NavLink>
                                <p>Lession Plan</p>
                            </div>
                            <div className="a">
                                <NavLink to="/Setting"><FiSettings /></NavLink>
                                <p>Settings</p>
                            </div>
                        </div>
                        <div className="head">
                            <span className="openbtn" onClick={openNav}><GoThreeBars /> </span>
                        </div>

                        <div className="row">
                            <p ><IoCaretBack />videos</p>
                            <input id="input" type="url" placeholder="Insert URL Here" />
                            <p className="text-center my-4">or</p>
                            <div className="upload col-4">
                                upload
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Common
