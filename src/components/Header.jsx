import React from "react";
import { NavLink, Outlet } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MyHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinkClass = ({ isActive }) =>
		`transition-colors hover:text-red-300 ${isActive ? "text-red-500" : "text-white"}`;

	return (
		<div>
			<header className="bg-gray-950 p-6">
				<nav className="px-6 max-w-7xl mx-auto">
					{/* felső sor */}
					<div className="flex justify-between items-center">
						<div className="text-2xl font-bold">
							Absolute
							<span className="text-red-500">Filmszinház</span>
						</div>
						{/* asztali menü */}
						<div className="hidden min-[690px]:flex gap-8 font-bold items-center">
							<NavLink to={"/"} className={navLinkClass}>
								Kezdőlap
							</NavLink>
							<NavLink to={"/movies"} className={navLinkClass}>
								Filmek
							</NavLink>
							<NavLink to={"/tv"} className={navLinkClass}>
								Sorozatok
							</NavLink>
							<NavLink to={"/search"} className={navLinkClass}>
								Keresés
							</NavLink>
						</div>
						{/* hamburger menü */}
						<button
							type="button"
							className="min-[690px]:hidden text-3xl"
							aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
							aria-expanded={menuOpen}
							aria-controls="mobile-menu"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
						</button>
					</div>
					{/* alsó sor */}
					{menuOpen && (
						<div id="mobile-menu" className="flex min-[690px]:hidden flex-col gap-8 font-bold items-center pt-4">
							<NavLink to={"/"} className={navLinkClass}>
								Kezdőlap
							</NavLink>
							<NavLink to={"/movies"} className={navLinkClass}>
								Filmek
							</NavLink>
							<NavLink to={"/tv"} className={navLinkClass}>
								Sorozatok
							</NavLink>
							<NavLink to={"/search"} className={navLinkClass}>
								Keresés
							</NavLink>
						</div>
					)}
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MyHeader;
