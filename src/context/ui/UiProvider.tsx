import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Site } from "../../interfaces";
import { UiContext, uiReducer } from "./";

export interface UiState {
	isMenuOpen: boolean;
	isSearchOpen: boolean;
	isCartOpen: boolean;
	site: Site
}

const UI_INITIAL_STATE: UiState = {
	isMenuOpen: false,
	isSearchOpen: false,
	isCartOpen: false,
	site: {
		_id: "w",
		title: "Piccoletti",
		domain: "piccoletti.com",
		logo: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647095547/piccoletti-logo_j6hxbw.jpg",
		// logo: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648919933/Ferreteria/l91xephj1ctcxor7h06d.png",
		numberPhone: "68175851",
		address: "av fatima",
		type: "ecommerce",
		categories: [
			{
				_id: 'men',
				name: 'ferreteria',
				featured: [
					{
						name: 'New Arrivals',
						href: '#',
						description: 'ropa para mujer',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
						imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
					},
					
				],
				sections: [
					{
						_id: 'clothing',
						name: 'Clothing',
						href: '#',
						description: 'ropa para mujer',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
						imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
						items: [
							{ name: 'Tops', href: '#' },
							{ name: 'Pants', href: '#' },
							{ name: 'Sweaters', href: '#' },
							{ name: 'T-Shirts', href: '#' },
							{ name: 'Jackets', href: '#' },
							{ name: 'Activewear', href: '#' },
							{ name: 'Browse All', href: '#' },
						],
					},
					
				],
			},
		],
		pages: [
			{ name: 'linea automotiva', href: '/' },
		],
	}
};

export const UiProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [site, setSite] = useState([]);
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
	useEffect(() => {
		fetch(`${process.env.APIS_URL}/api/site/${process.env.API_SITE}`)
			.then(res => res.json())
			.then(data => {
				dispatch({
	 				type: '[UI] - initialSite',
					payload: data
				})
			})
	}, [])
	// useEffect(() => {
	//   fetch('http://localhost:8000/api/robots')
	//     .then(res => res.json())
	//     .then(data => {
	//       dispatch({
	// 				type: '[UI] - initialSite',
	//         payload: {
	//           ...UI_INITIAL_STATE,
	//           sites: data?.data,
	//         }
	//       });
	//     });
	// }, []);


	const toggleSideMenu = () => {
		dispatch({ type: "[UI] - ToggleMenu" });
	};
	const toggleSideSearch = () => {
		dispatch({ type: "[UI] - ToggleSearch" });
	};
	const toggleSideCart = () => {
		dispatch({ type: "[UI] - ToggleCart" });
	};

	return (
		<UiContext.Provider
			value={{
				...state,

				// Methods
				toggleSideMenu,
				toggleSideSearch,
				toggleSideCart,

			}}
		>
			{children}
		</UiContext.Provider>
	);
};
