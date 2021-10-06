import React, {useEffect, useState} from 'react';
import './Toolbar.css';
import {texts} from "../../config/text";


const languages: string[] = ["EN", "RO", "RU"];


interface ToolbarProps {
	lang: string;
	setLang: any;
}

export default function Toolbar(props: ToolbarProps) {
	
	const { lang, setLang } = props;
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
										languages.map((language: string) => {
											return (
													<span key={language} onClick={() => onLanguageSelect(language)} className={lang === language ? "selected" : ""}>
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
						
					
					
					</div>
					
					
				</div>
				
				<div className="navigationLinks">
					
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
							
                        </div>
					}
				
				</div>
			
			</div>
		</div>
	);
}