'use client';

import Image from 'next/image';

const projets = [
  {
    titre: 'Plateforme de Recrutement',
    description: 'Application web pour gérer les candidatures, avec formulaire, tableau de bord recruteur, et gestion multilingue.',
    technologies: ['Next.js', 'Redux', 'Ant Design'],
    lien: 'https://github.com/kassir2/frontend-recrutement.git',
    image: '/recrutement.png', // mets une image dans public/
  },
  {
    titre: 'App Météo Mobile',
    description: 'Application mobile affichant la météo en temps réel par géolocalisation.',
    technologies: ['React Native', 'OpenWeather API'],
    image: '/meteo.png',
  },
  {
    titre: 'Projet java spring Boot et React',
    description: 'Ce projet est une application backend développee avec le framework spring boot.',
    technologies: ['Java EE'],
    image: '/dashboard.png',
  },
{
    titre: 'Atypikhouse , location abithats',
    description: 'ATYPIKHOUSE est une plateforme numérique innovante dédiée à la location d’hébergements atypiques (yourtes, cabanes, bulles, tiny houses, etc.), conçue pour offrir aux utilisateurs une expérience unique de réservation et de gestion des séjours.',
    technologies: ['Flutter'],
    lien: 'https://github.com/Yonathane2907/AtypikHouse.git',
    image: '/airbnb.png',
},



];

export default function Projets() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9fafb'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1e40af', textAlign: 'center', marginBottom: '2rem' }}>
        Mes Projets
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {projets.map((projet, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}>
            {projet.image && (
              <Image
                src={projet.image}
                alt={projet.titre}
                width={300}
                height={180}
                style={{ borderRadius: '8px', objectFit: 'cover', marginBottom: '1rem' }}
              />
            )}
            <h2 style={{ color: '#1e3a8a', fontSize: '1.5rem' }}>{projet.titre}</h2>
            <p style={{ color: '#374151', marginBottom: '0.5rem' }}>{projet.description}</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <strong>Technologies :</strong> {projet.technologies.join(', ')}
            </p>
            <a href={projet.lien} target="_blank" rel="noopener noreferrer" style={{
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Voir sur GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
