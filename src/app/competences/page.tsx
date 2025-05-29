'use client';

export default function Competences() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1e40af', textAlign: 'center', marginBottom: '2rem' }}>
        Mes Compétences
      </h1>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#1e3a8a' }}>🧠 Langages</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>Python</li>
          <li>HTML / CSS / SASS</li>
          <li>PHP</li>

        </ul>

        <h2 style={{ color: '#1e3a8a', marginTop: '1.5rem' }}>🛠️ Frameworks & Librairies</h2>
        <ul>
          <li>React / Next.js</li>
          <li>Redux</li>
          <li>Ant Design / Tailwind CSS</li>
          <li>Flutter</li>
          <li>WordPress</li>
        </ul>

        <h2 style={{ color: '#1e3a8a', marginTop: '1.5rem' }}>📊 Autres Compétences</h2>
        <ul>
          <li>Scrum / Méthodes Agile</li>
          <li>UML / Draw.io</li>
          <li>Git / GitHub</li>
          <li>Notions de CI/CD</li>
          <li>Cascard</li>
        </ul>

        <h2 style={{ color: '#1e3a8a', marginTop: '2rem' }}>📄 Mon CV</h2>
        <a
          href="/cv-kassir-tidjani.pdf"
          download
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#1e40af',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          Télécharger mon CV
        </a>
      </section>
    </main>
  );
}
