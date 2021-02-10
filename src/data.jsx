import { v4 as uuidv4 } from 'uuid';

const data = [
	{
		uuid: uuidv4(),
		title:"Platon",
		subtitle:'Le Challenge',
		description: "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."
	},
	{
		uuid: uuidv4(),
		title: "Solane",
		subtitle: "Solane est le premier vendeur de fraises du Poitou-Charentes",
		description: "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné."
	},
	{
		uuid: uuidv4(),
		title: "Sedal",
		subtitle: "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
		description:"Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, 'les derniers seront les premiers'."
	}
]

export default data;