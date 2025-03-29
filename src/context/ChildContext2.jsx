import {useContext} from "react";
import React from 'react';
import {FloatContext, LanguageContext, PriorityColorContext, ThemeContext} from "./context.jsx";

const ChildContext2 = () => {
    const theme = useContext(ThemeContext);
    const priorityColor = useContext(PriorityColorContext)
    const language = useContext(LanguageContext);
    const float = useContext(FloatContext);
    return (
        <>
            <div className="AppContext" style={{backgroundColor: theme}}>
                <p>Current language: {language}</p>
                <p>We currently on height: <span style={{color: priorityColor}}>{float}m.</span></p>
            </div>
        </>
    )
}

export default ChildContext2;
