// DC 게임 페이지 JS
import React from "react";
import isrc from "./ImgSrc";

const GAEMS = () => {
    return(
        <>
            <h2>GAEMS 페이지</h2>
            <img src={isrc.games} />
        </>
    );
};

export default GAEMS;