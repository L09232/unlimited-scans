import styles from '../../styles/mangaPage.module.css';
import Link from "next/link";
import Sidebar from '../../components/Sidebar'
import Head from 'next/head';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();

    const paths = data.map(cards => {
        return {
            params: {id: cards.id.toString()},
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { cards: data }
    }
}

const MangaPage = ({ cards }) => {
    return (
        <>

        <Head>
            <title>Unlimited Scans - {cards.name}</title>
        </Head>
        
        <main>

            <div className={styles.container}>

                <div className={styles.content}>

                    <div className={styles.nameWrap}>
                        <img src={cards.logo} />

                        <div className={styles.val}>
                            <h3>{cards.name}</h3>
                        </div>

                    </div>


                    <div className={styles.description}>

                        <h1>{cards.name}</h1>

                        <div className={styles.descWrap}>

                            <p><span className="material-symbols-outlined">
                                layers
                                </span> Generi:</p>  


                                <div className={styles.genres}>
                                    <span>{cards.genres}</span>
                                </div> 

                            <p><span className="material-symbols-outlined">
                                hourglass_empty
                                </span> 
                                
                                Stato: {cards.status}</p>
                            <br />
                            <p><span className="material-symbols-outlined">
                                book
                                </span> 

                                Tipo: {cards.type}</p>
                            <br /><p><span className="material-symbols-outlined">
                                post_add
                                </span>

                                Anno di uscita: {cards.release}</p>
                            <br />
                            <p><span className="material-symbols-outlined">
                                contact_page
                                </span> Autore: {cards.author}</p>
                            <br />
                            <p><span className="material-symbols-outlined">
                                edit_square
                                </span> Artista: {cards.artist}</p>
                            <br />

                            <p><span className="material-symbols-outlined">
                                translate
                                </span> Traduttore/i:</p>
                            <br />
                            <div className={styles.translatorInfo}>

                                <div className={styles.tLogo}>
                                    <img src={cards.tLogo} />
                                </div>

                                <p>{cards.translators}</p>
                            </div>
                            
                        </div>
                    </div>


                    <div className={styles.nodb}>
                        <Link href='#'>
                            <p><span className="material-symbols-outlined help">
                                bug_report
                                </span> Segnala un Problema</p>
                        </Link>
                        <Link href='#'>
                            <p><span className="material-symbols-outlined help">
                                keyboard_arrow_left
                                </span> Primo Capitolo</p>
                        </Link>
                        <Link href='#'>
                            <p>Ultimo Capitolo <span className="material-symbols-outlined help">
                                keyboard_arrow_right
                                </span></p>
                        </Link>
                    </div>                 
                </div>
                <div className={styles.content} id='ult'>
                    <div className={styles.plot}>
                        <h3>Trama</h3>
                            <div className={styles.line}>
                                <hr />
                            </div>
                        <p>{cards.trama}</p>
                    </div>
                </div>

                <div className={styles.chapBox}>

                </div>
                
            </div>

            <Sidebar />
        </main>
        </>
    );
}

export default MangaPage;