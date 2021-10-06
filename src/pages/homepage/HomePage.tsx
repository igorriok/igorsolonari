import React from "react";
import {texts} from "../../config/text";
import "./HomePage.css";
import isImage from "./is.jpg";


interface HomePageProps {
	lang: string;
}


export default function HomePage(props: HomePageProps) {
	const {lang} = props;
	
	
	return (
		<div className="page">
			
			<div id={"homePageContent"}>
				
				<header>
					<div className={"headerBlock"}>
						<img className={"textImage"} id={"is"} src={isImage} alt={""}/>
					</div>
					
					<div className={"headerBlock"}>
						<p>
							{
								texts.get("greeting")?.get(lang)
							}
						</p>
						
						
					</div>
				</header>
				
			</div>

		</div>
	);
}
