import homeImage from './IMG/back-4.jpg';
import servicesImage from "./IMG/back-3.jpg"
import about from "./IMG/back-2.jpg"
import contact from './IMG/back-1.jpg'

const cardData = [
    {
        title: "Home",
        description: "kaart 1",

        content: [<p>

            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique s
            unt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo min
            us id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Tempo
            ribus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates rep
            udiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."


        </p>,
        <p>Dit is extra inhoud voor de Home kaart.</p>],
        image: homeImage
    },
    {
        title: "Services",
        description: "kaart 2",
        content: [<p>Dit is de inhoud voor de Home kaart.</p>],
        image: servicesImage
    },
    {
        title: "About",
        description: "kaart 3",
        content: [<p>Dit is de inhoud voor de Home kaart.</p>, <p>Dit is extra inhoud voor de Home kaart.</p>],
        image: about
    },
    {
        title: "Contact",
        description: "kaart 4",
        content: [<p>Dit is de inhoud voor de Home kaart.</p>, <p>Dit is extra inhoud voor de Home kaart.</p>],
        image: contact
    }
]

export default cardData
