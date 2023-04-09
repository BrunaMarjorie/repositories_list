import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repository from "./pages/Repository";
import Main from "./pages/Main";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/repository/:repository" element={<Repository/>}/>
            </Routes>
        </BrowserRouter>
    )
}