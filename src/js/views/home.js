import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card1 } from "../component/card1.js";
import { Card2 } from "../component/card2.js";

import { Context } from "../store/appContext";

export const Home = () => {
	let imagearrayplanets = [
		"https://i1.wp.com/www.sopitas.com/wp-content/uploads/2013/05/Tatooine-06.jpg",
		"http://pm1.narvii.com/7085/faea62f605034f7bd132dc8a59a6b2be07bdb694r1-950-672v2_uhq.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/f/f6/Star_Wars_in_Guatemala.jpg",
		"https://blog.es.playstation.com/tachyon/sites/14/2015/11/unnamed-file-54.jpg?resize=1088,600&crop_strategy=smart",
		"https://i.pinimg.com/originals/62/c1/bd/62c1bd67d39cdcf4d507f16b35f90f4f.jpg",
		"https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg",
		"https://i.pinimg.com/originals/a4/b0/3d/a4b03dad3f1d22a1e76c742051cc17b4.jpg",
		"https://starwarsblog.starwars.com/wp-content/uploads/2015/10/Screen-Shot-2015-11-05-at-11.25.23-AM-2400x1200-315787586849.png",
		"https://www.ecured.cu/images/3/38/Coruscant_distrito_del_Senado.jpg",
		"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780"
	];

	let imagearraycharacters = [
		"https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/featured_image/2018/09/24/1537835785388/luke-skywalker.jpg",
		"https://i1.wp.com/wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po.jpg?fit=1000%2C600&ssl=1",
		"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/03/15885120366138.jpg",
		"https://i2.wp.com/wipy.tv/wp-content/uploads/2020/06/darth-vader-es-el-sith-mas-poderoso.jpg?fit=1000%2C600&ssl=1",
		"https://lafuerzanoticias.files.wordpress.com/2018/07/leia-organa-1-tall.jpg?w=1536&h=768&crop=1",
		"https://cdn.lanetaneta.com/wp-content/uploads/2020/07/Star-Wars-Por-que-Owen-Lars-no-reconocio-a-C-3PO-780x470.jpg",
		"https://lumiere-a.akamaihd.net/v1/images/databank_shmiskywalkerlars_01_169_7449f0a8.jpeg?region=341%2C0%2C878%2C878",
		"https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg?1451853235",
		"https://pbs.twimg.com/media/EouvaiYVoAAmmQ0.jpg",
		"https://i.blogs.es/cd0fbf/ewan/1366_2000.jpeg"
	];

	const { store, actions } = useContext(Context);

	let backstyle = {
		backgroundColor: "rgb(37, 36, 36 )"
	};

	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap"
	};

	return (
		<div className="container-flux p-5" style={backstyle}>
			<h1 className="my-5">Planets</h1>
			<div className="row overflow-scroll" style={over}>
				{store.planets.map((item, index) => {
					return (
						<Card1
							key={index}
							title={item.name}
							population={item.population}
							favorite={item.name}
							index={index}
							image={imagearrayplanets[index]}
						/>
					);
				})}
			</div>
			<h1 className="my-5">Characters</h1>
			<div className="row" style={over}>
				{store.characters.map((item, index) => {
					return (
						<Card2
							key={index}
							title={item.name}
							gender={item.gender}
							eye={item.eye_color}
							hair={item.hair_color}
							favorite={item.name}
							index={index}
							image={imagearraycharacters[index]}
						/>
					);
				})}
			</div>
		</div>
	);
};