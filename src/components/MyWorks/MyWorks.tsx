import './MyWorks.scss'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

function MyWorks() {
  return (
    <div className='my-works'>
      <h1>The projects I've worked on:</h1>
      <div className='all-cards'>
        <Card 
        title='Booki'
        subTitle="HTML & CSS">
          <ul>
            <li>Initiation à l'HTML & CSS</li>
            <li>Savoir reproduire une maquette à l'identique</li>
            <li>Travail de la responsiveness</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View on GitHub" />
          </div>
        </Card>
        <Card 
        title='Nina Carducci'
        subTitle='JavaScript'>
          <ul>
            <li>Récupérer des données frontend</li>
            <li>Gestion du DOM avec JavaScript</li>
            <li>Gestion des évènements utilisateurs</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View on GitHub" />
          </div>
        </Card>
        <Card 
        title='Sophie Bluel'
        subTitle='SEO Optimizations'>
          <ul>
            <li>Optimiser les performances d'un site</li>
            <li>Optimiser la SEO & accessibilité</li>
            <li>Rédiger un cahier de recette</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View on GitHub" />
          </div>
        </Card>
        <Card 
        title='Kasa'
        subTitle='React.js'>
          <ul>
            <li>Initialiser un site avec Vite</li>
            <li>Création d'une Single Page Application</li>
            <li>Utilisation des pages & components de React</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View on GitHub" />
          </div>
        </Card>
        <Card 
        title='Mon Vieux Grimoire'
        subTitle='Node.js & Express.js'>
          <ul>
            <li>Green coding & database sécurisée</li>
            <li>Système CRUD avec authentification</li>
            <li>Implémenter un modèle logique optimisé</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View on GitHub" />
          </div>
        </Card>
        <Card 
        title='Mon Portfolio'
        subTitle='Vous y êtes.'>
          <ul>
            <li>Déploiement d'un site avec GitHub Pages</li>
            <li>Design d'un site sous React & React Router</li>
            <li>Rédaction d'un contenu propre et séduisant</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View on GitHub" />
          </div>
        </Card>
        <Card 
        title='Floriant Dupont'
        subTitle='Site web en ligne'>
          <ul>
            <li>Site web HTML&CSS seulement</li>
            <li>Réalisé sur place avec suivi client</li>
            <li>Code simple sur demande du client</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View live" />
          </div>
        </Card>
        <Card 
        title='Sarge'
        subTitle='Discord.js'>
          <ul>
            <li>Premier projet de backend</li>
            <li>Gestion d'un environnement sécurisé</li>
            <li>Programmation JavaScript continue</li>
          </ul>
          <div className='card-buttons'>
            <Button label="View on GitHub" />
          </div>
        </Card>
        <Card 
        title='Et ensuite ?'
        subTitle='On continue'>
          <ul>
            <li>Développer la maîtrise de React</li>
            <li>Découvrir Next, Vue et Angular</li>
            <li>Développer mes connaissances de C#</li>
          </ul>
          <div className='card-buttons'>
            <Button label="Just you wait." />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MyWorks