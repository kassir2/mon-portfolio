export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#1e40af', marginBottom: '1rem' }}>
        Bienvenue sur mon Portfolio
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#374151', textAlign: 'center', maxWidth: '600px' }}>
         <strong>Kassir TIDJANI</strong> , DATA ANALYST / IA , IOT / GESTION DE PROJET
          ( Diplômé d'un  Master en  Big Data , IA / IOT / gestion de Projet et spécialisé dans  la conduite de projets à l'interface métiers et technique , je souhaite intégrer une équipe dynamique et passionnée pour accompagner les métiers dans l'exploitation des données . ).
      </p>
    </main>
  );
}
