import React from "react";
import {texts} from "../../config/text";
import "./ContactsPage.css";


interface HomePageProps {
	lang: string;
}

export default function ContactsPage(props: HomePageProps) {
	const {lang} = props;
	
	
	return (
		<div className="page">
			
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
					
					
				</div>
			</div>
		</div>
	);
}
