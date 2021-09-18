import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import './Toolbar.css';
import {texts} from "../../config/text";
import {User} from "../../entities/User";
import {publicRoutes} from "../../config/routes";
import CartIcon from "../cart/CartIcon";
import firebase from "firebase";
//import logo from './logo.jpg';



interface ToolbarProps {
	lang: string;
	setLang: any;
	user: User | null;
	database: firebase.database.Database | undefined;
	cart: object;
}

export default function Toolbar(props: ToolbarProps) {
	
	const { lang, setLang, user, database, cart } = props;
	const [ openMenu, setOpenMenu ] = useState<boolean>(false);
	const [ openLanguageSelect, setOpenLanguageSelect ] = useState<boolean>(false);
	
	
	const onLanguageSelect = (language: string) => {
		setLang(language);
		setOpenLanguageSelect(false);
		
		localStorage.setItem("lang", language);
	}
	
	function handleClick(e: MouseEvent) {
		//console.dir(e);
		// @ts-ignore
		if (e?.target?.id !== "menuButton" && e?.target?.id !== "menuIcon") {
			setOpenMenu(false);
		}
		
		// @ts-ignore
		if (e?.target?.id !== "languageButton") {
			setOpenLanguageSelect(false);
		}
	}
	
	useEffect(() => {
		
		document.addEventListener("click", handleClick);
		
		return () => {
			document.removeEventListener("click", handleClick);
		}
	},[]);
	
	
	return (
		<div className="topNav">
			
			<div className="toolbar">
				
				<div className={"leftToolsContainer"}>
					
					<div className="languageDropdown" id={"languageDropdown"}>
						
						<button
							id={"languageButton"}
							className="btn button toolBarButton"
							onClick={() => setOpenLanguageSelect(!openLanguageSelect)}
						>
							{
								lang
							}
						</button>
						
						{
							openLanguageSelect &&
								<div className="languageDropdownContent">
									{
										Array.from(texts.keys()).map((language: string) => {
											return (
												lang === language ?
													<span key={language} onClick={() => onLanguageSelect(language)} className={"selected"}>
														{
															language
														}
													</span>
													:
													<span key={language} onClick={() => onLanguageSelect(language)}>
														{
															language
														}
													</span>
											)
										})
									}
								</div>
						}
					
					</div>
					
					<div className="toolBarButton">
						
						<NavLink to={"/login"} >
							{
								user ?
									<img src={user?.photoURL} alt={""}/>
									:
									<span className="material-icons">
										account_circle
									</span>
							}
						</NavLink>
					
					</div>
					
					<CartIcon
						cart={cart}
					/>
					
				</div>
				
				{/*<img
					src={logo}
					alt={""}
					className={"logo"}
					id={"logo"}
				/>*/}
				
				<div className="navigationLinks">
					{
						publicRoutes.map(route => {
							return (
								<NavLink
									key={route.name}
									activeClassName={"active"}
									to={route.path}
								>
									{
										texts.get(lang)?.get(route.name)
									}
								</NavLink>
							)
						})
					}
					
				</div>
				
				<div className="menuDropdown">
					
					<button
						id={"menuButton"}
						className="btn button"
						onClick={() => setOpenMenu(!openMenu)}
					>
						<i className="material-icons" id={"menuIcon"}>
							menu
						</i>
					</button>
					
					{
						openMenu &&
                        <div className="menuDropdownContent" onClick={() => setOpenMenu(false)}>
							{
								publicRoutes.map(route => {
									return (
										<NavLink
											key={route.name}
											activeClassName={"active"}
											to={route.path}
										>
											{
												texts.get(lang)?.get(route.name)
											}
										</NavLink>
									)
								})
							}
                        </div>
					}
				
				</div>
			
			</div>
		</div>
	);
}