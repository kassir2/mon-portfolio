import Image from 'next/image';
export default function APropos() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1e40af', marginBottom: '1rem' }}>
        À propos de moi
      </h1>
      <Image
        src="/kassir.jpg"
        alt="Photo de Kassir TIDJANI"
        width={200}
        height={200}
        style={{
          borderRadius: '100%',
          marginBottom: '1.5rem',
          objectFit: 'cover'
        }}
      />
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', textAlign: 'center', color: '#374151' }}>
        Je suis Kassir TIDJANI , étudiant en informatique à l’IMIE de Paris. Passionné par le développement web,l’intelligence artificielle et la gestion de projet , mon objectif est de contribuer à des projets innovants tout en continuant à apprendre.
        Dans la vie quotidienne, je suis quelqu’un de sociable qui pratique du sport notamment la marche rapide , le football. Cela m’aide non seulement à avoir l’esprit d’équipe , l’endurance et aussi à être très à l’aise au contact des autres.
      </p>
    </main>
  );
}
