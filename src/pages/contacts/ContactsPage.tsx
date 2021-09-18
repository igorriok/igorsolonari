import React, {useEffect} from 'react';
import {texts} from "../../config/text";
import './ContactsPage.css';
// @ts-ignore
import bees from "./bees.jpg"


interface HomePageProps {
	lang: string;
	facebookSdkLoaded: boolean;
}

export default function ContactsPage(props: HomePageProps) {
	
	const { lang, facebookSdkLoaded } = props;
	
	console.log(facebookSdkLoaded);
	
	useEffect(() => {
		// @ts-ignore
		window.FB?.XFBML?.parse();
	});
	
	
	return (
		<div className="page">
			
			{/*<div className={"contactsHeaderImageContainer"}>*/}
				<img className={"contactsHeaderImage"} src={bees} alt={""}/>
			{/*</div>*/}
			
			<div className={"contactContainer"}>
				
				<h4 className={"contactsTitle"}>
					{
						texts.get(lang)?.get("contacts") + ":"
					}
				</h4>
				
				<div className={"contactInfo"}>
					<p>
						{
							texts.get(lang)?.get("companyName")
						}
					</p>
					<p>
						{
							texts.get(lang)?.get("fiscalCode")
						}
					</p>
					<p>
						{
							texts.get(lang)?.get("legalAddress")
						}
					</p>
					<p>
						{
							texts.get(lang)?.get("workshop")
						}
					</p>
					
					<table>
						<tbody>
							<tr>
								<td>
									{
										texts.get(lang)?.get("phones")
									}
								</td>
								<td>
									<a href="tel:+373-69287777">+373-69287777</a>
								</td>
							</tr>
							<tr>
								<td>
								</td>
								<td>
									<a href="tel:+373-60231313">+373-60231313</a>
								</td>
							</tr>
							<tr>
								<td>
									{
										texts.get(lang)?.get("fax")
									}
								</td>
								<td>
									<a href="tel:+373-22603221">+373-22603221</a>
								</td>
							</tr>
						</tbody>
					</table>
					
					<p>
						Email:&nbsp;
						<a href={"mailto:"+texts.get(lang)?.get("email")}>
							{
								texts.get(lang)?.get("email")
							}
						</a>
					</p>
					
					{
						facebookSdkLoaded &&
						<div style={{marginTop: 16}}>
							<div
								className="fb-messengermessageus"
								// @ts-ignore
								messenger_app_id="1081561225688381"
								page_id="1492358727740007"
								color="blue"
								size="large"
							/>
						</div>
					}
					
				</div>
			</div>
		</div>
	)
}