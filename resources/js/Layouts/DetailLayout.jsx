import {Header} from "@/Components/Layout/index.jsx";
import React from "react";

export default function DetailLayout({auth, user, header, children}) {
    return (
        <div
            style={{
                backgroundColor: "#F1F2F2"
            }}
        >
            <Header
                auth={auth}
            />
            <div className="max-w-6xl mx-auto lg:px-2 pt-20 min-h-screen">
                {children}
            </div>
        </div>

    );
}
