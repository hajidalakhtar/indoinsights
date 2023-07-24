import React from "react";

export default function TitleIconCard({title, icon, fontSize}) {
    return (
        <div className=" inline-flex mb-3">
            <div className={'inline-flex w-52  rounded-full '} role="alert">
                <p className={`${fontSize} font-semibold `}>{title}</p>
                {icon}
            </div>
        </div>
    )
}
