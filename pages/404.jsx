import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container-404">
            <div className="error">
                <h1>Errore 404</h1>
                <h2>Pagina non trovata</h2>
                <Link href='/'>
                        <button>Torna alla Home</button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;