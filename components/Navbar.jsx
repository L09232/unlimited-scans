import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
        <div class="navbar">
            <div class="logo">
                <Link href='/'>
                    <a>
                        <Image src='/temo1.png' width={190} height={16} />
                    </a>
                </Link>
            </div>

            <div class="menu-items">
                <input type="text" name="" id="" placeholder="Cerca su unlimitedscans.it" />
                <Link href='/Archive'>
                        <button>Archivio</button>
                </Link>

                <Link href='/Genres'>
                        <button>Generi</button>
                </Link>
            </div>

            <div class="mobile-items">
                <div class="search-icon">
                    <span class="material-symbols-outlined search-input">
                        search
                        </span>

                        <span class="material-symbols-outlined menu-input">
                            menu
                    </span>
                </div>
                
                    <div class="search-bar-hide">
                        <input type="text" placeholder="Cerca su unlimitedscans.it" />
    
                        <div class="close-btn">

                            <span class="material-symbols-outlined omb">
                                close
                            </span>
                            
                        </div>

                    </div>

            </div>
        </div>

        <div class="hidden-menu">
                <button>Generi</button>
                <button>Archivio</button>
        </div>

        <div class="line"></div>
    </header>
    );
}

export default Navbar;