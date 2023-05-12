import React from 'react';
import style from "../Loader/Loader.module.css";
import {CircularProgress} from "react-cssfx-loading";

const Loader = () => {
    return (
        <div className={style.loader}>
            <CircularProgress color="#1976d2" width="100px" height="100px" duration="3s"/>
        </div>
    )
}

export default Loader;