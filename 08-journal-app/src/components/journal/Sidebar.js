import React from 'react'
import { JournalEntries } from './JournalEntries'
import {useDispatch} from "react-redux";
import {startLogout} from "../../actions/auth";

export const Sidebar = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Milena</span>
                </h3>

                <button className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />    

        </aside>
    )
}
