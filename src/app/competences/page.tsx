'use client';

export default function Competences() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh'
    }}>
      <h1 style={{
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', // taille adaptative
      color: '#1e40af',
      textAlign: 'center',
      marginBottom: '2rem'
}}>
      Mes Compétences
      
      </h1>

      <section style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 1rem',           // Ajoute du padding horizontal sur petit écran
            wordWrap: 'break-word'       // Évite que le texte déborde
    }}>

        <h2 style={{ color: '#1e3a8a' }}>🧠 Langages</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li> Python </li>
          <li> HTML / CSS / SASS </li>
          <li> PHP </li>
          <li> Java </li>
        
        </ul>

        <h2 style={{ color: '#1e3a8a', marginTop: '1.5rem' }}>🛠️ Frameworks & Librairies</h2>
        <ul>
          <li> React / Next.js </li>
          <li> Redux </li>
          <li> Laravel </li>
          <li> Angular </li>
          <li> Ant Design / Tailwind CSS </li>
          <li> Flutter </li>
          <li> WordPress </li>
           <li> Spring Boot </li>
        </ul>

        <h2 style={{ color: '#1e3a8a', marginTop: '1.5rem' }}>📊 Autres Compétences</h2>
        <ul>
          <li> Scrum / Méthodes Agile </li>
           <li> Cycle en V </li>
          <li> UML / Draw.io </li>
          <li> Git / GitHub </li>
          <li> Notions de CI/CD </li>
          <li> Cascard </li>
        </ul>

       <h2 style={{ color: '#1e3a8a', marginTop: '1.5rem' }}>🎓 Certifications</h2>
        <ul>
          <li> Python , L'analyse de données (Linkedln Learning) </li>
          <li> L'essentiel de Power BI (SQL , PowerQuery  , Dax ) </li>
          <li> Se préparer au métier d'analyste de données (Microsoft et Linkedln) </li>
        </ul>

    

      </section>
    </main>
  );
}
