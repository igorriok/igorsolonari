import React from 'react';
import {texts} from "../../config/text";
import './HomePage.css';
// @ts-ignore
import fieldsVideo from './lavandafields.mp4';
import logo from '../../elements/footer/logo_usa.png';
import Footer from "../../elements/footer/Footer";
import {Product} from "../../entities/Product";
import ProductsShowroom from "../../elements/products/products_showroom/ProductsShowroom";


interface HomePageProps {
	lang: string;
	products: Product[];
}


export default function HomePage(props: HomePageProps) {
	
	const { lang, products } = props;
	//const [ products, setProducts ] = useState<Product[]>([]);
	
	
	
	
	// TODO: add dots under product images
	return (
		<div className="page" style={{ backgroundColor: "Transparent" }}>
			
			<div className={"homePageVideoContainer"}>
				<video autoPlay muted playsInline loop >
					<source src={fieldsVideo} type="video/mp4" />
				</video>
			</div>
			
			<div id={"homePageContent"}>
				
				<div className={"greeting"} style={{ height: window.innerHeight }}>
	
					<img
						src={logo}
						alt={""}
						className={"logo"}
						id={"logo"}
					/>
					
					<h1 id={"greetingText"}>
						{
							texts.get(lang)?.get("greeting")
						}
					</h1>
	
					<div id="firebaseui-auth-container"/>
				
				</div>
	
				{
					products?.length > 0 &&
						<ProductsShowroom
							lang={lang}
							products={products}
						/>
				}
				
				<Footer lang={lang} />
				
			</div>

		</div>
	)
}