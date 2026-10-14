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
      Je suis Kassir TIDJANI , Titulaire d'un Master 2 en Big Data , IA/IOT et en gestion de projet  . Passionné par le développement web,l’intelligence artificielle et la gestion de projet , mon objectif est de contribuer à des projets innovants tout en continuant à apprendre.
      Passionné par les données et les technologies, je suis actuellement à la recherche d'un premier  CDI afin de commencer a m'impregner du monde professionnelle.
      Avec une expérience significative en développement web et en analyse de données, j'ai contribué à des projets variés tels que le développement d'une application de ruche connectée  pour une entreprise et l'analyse prédictive du churn, réalisée dans le cadre d'un projet personnel. Ces expériences m'ont permis de renforcer mes compétences techniques en Python, SQL, Power BI, ainsi qu'en frameworks comme Laravel et Node.js. J'ai également une bonne connaissance des outils DevOps tels que Docker et Kubernetes, et je suis à l'aise avec les bases de données relationnelles et non relationnelles.
      Motivé, organisé et curieux, je m'engage à apporter ma rigueur et mon esprit analytique à une équipe ambitieuse. Mon objectif est de continuer à apprendre tout en contribuant activement à des projets innovants qui auront un impact concret.
      </p>
    </main>
  );
}
