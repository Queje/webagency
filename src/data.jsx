import { v4 as uuidv4 } from 'uuid';

const data = [
	{
		uuid: uuidv4(),
		title:"Platon",
		imageurl:"data:image/jpeg;base64,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",
		subtitle:'Le Challenge',
		description: "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."
	},
	{
		uuid: uuidv4(),
		title: "Solane",
		imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDw90vaoHIZ4nQTjNmkyZ2aJ2PiBsy0oFuQ&usqp=CAU",
		subtitle: "Solane est le premier vendeur de fraises du Poitou-Charentes",
		description: "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné."
	},
	{
		uuid: uuidv4(),
		title: "Sedal",
		imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEe78dbnHY4vFPU7CTgcGivK6wYNuIz1RDA&usqp=CAU",
		subtitle: "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
		description:"Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, 'les derniers seront les premiers'."
	}
]

export default data;