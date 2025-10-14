import React from 'react'
import footerContact from "../api/footerApi.json"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

function Footer() {

    const footerIcon ={
        MdPlace: <MdPlace/>,
        IoCallSharp: <IoCallSharp/>,
        TbMailPlus: <TbMailPlus/>,
    };

  return (
    <footer className='footer-section'>
      <div className='container grid grid-three-cols'>
        {
            footerContact.map((curData, index)=>{
                return(
                    <div className='footer-contact' key={index}>
                        <div className='icon'>{footerIcon[curData.icon]}</div>
                        <div className='footer-contact-text'>
                            <p>{curData.title}</p>
                            <p>{curData.details}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>

      <div className='copyright-area'>
        <div className='container'>
            <div className='grid grid-two-cols'>
                <div className='copyright-text'>
                    <p>
                        Copyright &copy; 2025, All Right Reserved
                        <NavLink to="https://github.com/satyajit-pradhan522/WorldAtlas" target='_blank'>
                            Satyajit Pradhan
                        </NavLink>
                    </p>
                </div>
                <div className='footer-menu'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://www.instagram.com/mr__satyajit_/" target='_blank'>
                                Social
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://github.com/satyajit-pradhan522/WorldAtlas">
                                Source Code
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
