import styles from '../styles/SidebarComp.module.css';

/*export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/api/archive');
    const { data } = await res.json();

    return {
        props: { cards: data }
    }

}
*/

const Sidebar = ({cards}) => {
    return (
            <div class={styles.sidebars}>
            <div class={styles.sidebar}>
                <div class="name-container">
                    <h2><span class="material-symbols-outlined">
                        account_circle
                        </span> ACCOUNT</h2>
                    <hr />
                </div>
                    <div class={styles.contentaccount}>

                        <p>Hai gia un account? <a href="#">Accedi!</a></p>
                        <br />
                        <p>Oppure <a href="#">Registrati!</a></p>

                    </div>
                
            </div>    
            <div class={styles.nodb}>
                <div class="name-container">
                    <h2><span class="material-symbols-outlined">
                        grade
                        </span> TOP DEL MESE</h2>
                    <hr />
                </div>
                <div class="content-side">
                    <div class="item-side">
                        <div class="number">
                            <span class="material-symbols-outlined">
                                looks_one
                                </span>
                        </div>
                        <div class="namebox">
                            <a href="/manhwa/Solo-Leveling-read/solo-leveling"><p>Solo Leveling</p><span class="material-symbols-outlined pointer">
                                import_contacts
                                </span>
                            </a> 
                        </div>
                    </div>
                    <div class="item-side">
                        <div class="number">
                            <span class="material-symbols-outlined">
                                looks_two
                                </span>
                        </div>
                        <div class="namebox">
                            <a href="#"><p>Tensei shitara slime datta ken</p><span class="material-symbols-outlined pointer">
                                import_contacts
                                </span>
                            </a>    
                        </div>
                    </div>
                    <div class="item-side">
                        <div class="number">
                            <span class="material-symbols-outlined">
                                looks_3
                                </span>
                        </div>
                        <div class="namebox">
                            <a href="#"><p>The Beggining After The End</p><span class="material-symbols-outlined pointer">
                                import_contacts
                                </span>
                            </a> 
                        </div>
                    </div>
                    <div class="item-side">
                        <div class="number">
                            <span class="material-symbols-outlined">
                                looks_4
                                </span>
                        </div>
                        <div class="namebox">
                            <a href="#"><p>Player</p><span class="material-symbols-outlined pointer">
                                import_contacts
                                </span>
                            </a> 
                        </div>
                    </div>
                    <div class="item-side">
                        <div class="number">
                            <span class="material-symbols-outlined">
                                looks_5
                                </span>
                        </div>
                        <div class="namebox">
                            <a href="/manhwa/Magic-Emperor-read/magic-emperor"><p>Magic Emperor</p><span class="material-symbols-outlined pointer">
                                import_contacts
                                </span>
                            </a> 
                        </div>
                    </div>

                </div>
                
            </div>    
            <div class={styles.sidebar} id='ult'>
                <div class="name-container">
                    <h2><span class="material-symbols-outlined">
                        add_box
                        </span> ULTIME AGGIUNTE</h2>
                    <hr />
                </div>

                <div class={styles.contentsidewrap}>
                    <div class={styles.itemwrap}>
                        <a href="/Manhua/The-Beginning-After-The-End-read/tbate">
                        <img src="https://melsen203.github.io/Tets/Images/tbate1.jpg" />
                        </a>
                        <div class={styles.nameitemwrap}>
                            <a href="/Manhua/The-Beginning-After-The-End-read/tbate">
                            <h3>The Beginning After The End</h3>
                            </a>
                            <div class={styles.descriptionwrap}>
                                <p>Tipo: <span>Manhua</span></p>
                                <p>Stato: <span>In Corso</span></p>
                                <p>Aggiunto il: <span>11/09/2022</span></p>  
                            </div>
                        </div>
                    </div>
                        <div class={styles.itemwrap}>
                            <a href="/manhwa/Magic-Emperor-read/magic-emperor">
                            <img src="https://melsen203.github.io/Tets/Images/magic-emperor.png" />
                            </a>
                            <div class={styles.nameitemwrap}>
                                <a href="/manhwa/Magic-Emperor-read/magic-emperor">
                                <h3>Magic Emperor</h3>
                                </a>
                                <div class={styles.descriptionwrap}>
                                    <p>Tipo: <span>Manhua</span></p>
                                    <p>Stato: <span>In Corso</span></p>
                                    <p>Aggiunto il: <span>6/09/2022</span></p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>  
        </div>
    );
}

export default Sidebar;