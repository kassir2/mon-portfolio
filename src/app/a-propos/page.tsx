import Image from 'next/image';

export default function APropos() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          color: '#1e40af',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        À propos de moi
      </h1>

      <Image
        src="/kassir.jpg"
        alt="Photo de Kassir TIDJANI"
        width={200}
        height={200}
        style={{
          borderRadius: '50%',
          marginBottom: '1.5rem',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          fontSize: '1.1rem',
          maxWidth: '700px',
          textAlign: 'justify',
          color: '#374151',
          lineHeight: 1.8,
        }}
      >
        <p>
          Je suis Kassir TIDJANI, titulaire d&apos;un Master 2 en Big Data,
          Intelligence Artificielle, IoT et gestion de projet. Passionné par
          le développement web, l&apos;intelligence artificielle et la gestion
          de projet, mon objectif est de contribuer à des projets innovants
          tout en continuant à apprendre.
        </p>

        <p>
          Passionné par les données et les technologies, je suis actuellement
          à la recherche d&apos;un premier CDI afin de développer mon expérience
          professionnelle.
        </p>

        <p>
          Grâce à mes expériences en développement web et en analyse de
          données, j&apos;ai contribué à des projets variés, tels que le
          développement d&apos;une application de ruche connectée pour une
          entreprise et l&apos;analyse prédictive du churn dans le cadre
          d&apos;un projet personnel.
        </p>

        <p>
          Ces expériences m&apos;ont permis de renforcer mes compétences
          techniques en Python, SQL et Power BI, ainsi qu&apos;avec des
          frameworks comme Laravel et Node.js. J&apos;ai également des
          connaissances en DevOps, notamment avec Docker et Kubernetes,
          ainsi qu&apos;en bases de données relationnelles et non relationnelles.
        </p>

        <p>
          Motivé, organisé et curieux, je souhaite apporter ma rigueur et mon
          esprit analytique à une équipe ambitieuse. Mon objectif est de
          continuer à apprendre tout en contribuant activement à des projets
          innovants ayant un impact concret.
        </p>
      </div>
    </main>
  );
}
