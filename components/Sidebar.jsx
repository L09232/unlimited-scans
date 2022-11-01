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
            <div class={styles.sidebar} id='ult'>
                <div class="name-container">
                    <h2><span class="material-symbols-outlined">
                        add_box
                        </span> ULTIME AGGIUNTE</h2>
                    <hr />
                </div>

                <div class={styles.contentsidewrap}>
                    <div class={styles.itemwrap}>
                        <img src="https://melsen203.github.io/Tets/Images/tbate1.jpg" />
                        <div class={styles.nameitemwrap}>
                            <h3>The Beginning After The End</h3>
                            <div class={styles.descriptionwrap}>
                                <p>Tipo: <span>Manhua</span></p>
                                <p>Stato: <span>In Corso</span></p>
                                <p>Aggiunto il: <span>11/09/2022</span></p>  
                            </div>
                        </div>
                    </div>
                        <div class={styles.itemwrap}>
                            <img src="https://melsen203.github.io/Tets/Images/magic-emperor.png" />
                            <div class={styles.nameitemwrap}>
                                <h3>Magic Emperor</h3>
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