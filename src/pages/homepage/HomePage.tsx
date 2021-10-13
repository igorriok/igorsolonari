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
				
				<header id={"homePageHeader"}>
					
					<div className={"block"}>
						<img className={"textImage"} id={"is"} src={isImage} alt={""}/>
					</div>
					
					<div className={"block"}>
						<p>
							{
								texts.get("greeting")?.get(lang)
							}
						</p>
						
						
					</div>
					
				</header>
				
				<div id={"homePageBody"}>
				
					<div className={"block"}>
						
						<h3>
							{
								texts.get("fullstackLabel")?.get(lang)
							}
						</h3>
						
						<p>
							{
								texts.get("fullstackBody")?.get(lang)
							}
						</p>
						
					</div>
					
					<div className={"block"}>
						
						<h3>
							{
								texts.get("supplyChainAnalystLabel")?.get(lang)
							}
						</h3>
						
						<p>
							{
								texts.get("supplyChainAnalystBody")?.get(lang)
							}
						</p>
					
					</div>
				
				</div>
				
			</div>

		</div>
	);
}
