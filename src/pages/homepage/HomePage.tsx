import React from 'react';
import {texts} from "../../config/text";
import './HomePage.css';


interface HomePageProps {
	lang: string;
}


export default function HomePage(props: HomePageProps) {
	
	const { lang } = props;
	
	
	return (
		<div className="page" style={{ backgroundColor: "Transparent" }}>
			
			<div id={"homePageContent"}>
				
				<div className={"greeting"} style={{ height: window.innerHeight }}>
					
					<h1 id={"greetingText"}>
						{
							texts.get("greeting")?.get(lang)
						}
					</h1>
				
				</div>
	
				
			</div>

		</div>
	)
}