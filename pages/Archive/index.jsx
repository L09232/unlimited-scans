import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";
import Image from "next/image";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { cards: data.slice(0, 12), }
    }

}

const Archive = ({cards}) => {
    return (
        <>

        <Head>
            <title>Unlimited Scans - Archivio</title>
        </Head>

        <main>
            <div className="container">
                <div className="name-container">
                    <h2><span className="material-symbols-outlined">
                    inventory_2
                    </span> ARCHIVIO</h2>
                        <hr />
                </div>
                {cards.map(card => (
                    <div key={card.id} className='item'>

                        <Link href={'/Archive/' + card.id}>
                            <img src={card.logo} alt={card.name}/>
                        </Link>

                        <div className="info">
                            <Link href={'/Archive/' + card.id}>
                                <h3>{ card.name }</h3>
                            </Link>

                            <p>Tipo: {card.type}</p>
                            <p>Stato: {card.status}</p>
                            <br />
                            <div className="line-c">
                                <hr />
                            </div>
                            <p>{card.trama}</p>

                        </div>
                    </div>
                ))}
            </div>

        </main>
        </>
    );
}

export default Archive;