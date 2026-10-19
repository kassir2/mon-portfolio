export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#1e40af',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Bienvenue sur mon Portfolio
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#374151',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: 1.8,
        }}
      >
        <strong>Kassir TIDJANI</strong>, DATA ANALYST / IA / IoT / GESTION DE
        PROJET. Diplômé d&apos;un Master en Big Data, IA et IoT, spécialisé
        dans la conduite de projets à l&apos;interface entre les métiers et
        la technique, je souhaite intégrer une équipe dynamique et passionnée
        pour accompagner les métiers dans l&apos;exploitation des données.
      </p>
    </main>
  );
}
