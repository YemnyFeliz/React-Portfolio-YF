import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [currentPage, setCurrentPage] = useState(useLocation().pathname);

    return (
        <NavBar currentPage={currentPage} setPage={setCurrentPage} />
    );

}