'use client'; // nécessaire si tu ajoutes du JS interactif plus tard

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1e40af',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Accueil
      </Link>
      <Link href="/a-propos" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        À propos
      </Link>
      <Link href="/mes-projets" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Mes Projets
      </Link>
      <Link href="/competences" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Mes Compétences</Link>

    </nav>
  );
}
