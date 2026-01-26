import SEO from "../components/SEO";

export default function MentionsLegales() {
  return (
    <>
      <SEO
        title="Mentions légales"
        description="Mentions légales du site Moulin de la Marigotière : éditeur, hébergement, protection des données personnelles et cookies."
        keywords="mentions légales, traiteur Thiberville, données personnelles, cookies"
      />
      <main className="bg-base-100">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-12 text-base-content">
            Mentions Légales
          </h1>

        <div className="space-y-8 font-inter text-lg text-base-content">
          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Éditeur du site
            </h2>
            <p>
              Traiteur de Thiberville
              <br />
              François Duperrey - Maître Restaurateur
              <br />
              203 Rue des Métiers
              <br />
              27230 Thiberville
              <br />
              France
            </p>
            <p className="mt-4">
              Téléphone : [À compléter]
              <br />
              Email : contact@traiteur-thiberville.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par :<br />
              [Nom de l'hébergeur]
              <br />
              [Adresse de l'hébergeur]
              <br />
              [Code postal et ville]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble de ce site relève de la législation française et
              internationale sur le droit d'auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>
            <p className="mt-4">
              La reproduction de tout ou partie de ce site sur un support
              électronique quel qu'il soit est formellement interdite sauf
              autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Protection des données personnelles
            </h2>
            <p>
              Conformément à la loi « Informatique et Libertés » du 6 janvier
              1978 modifiée et au Règlement Général sur la Protection des
              Données (RGPD), vous disposez d'un droit d'accès, de
              rectification, de suppression et d'opposition aux données
              personnelles vous concernant.
            </p>
            <p className="mt-4">
              Pour exercer ce droit, vous pouvez nous contacter à l'adresse :
              contact@traiteur-thiberville.fr
            </p>
            <p className="mt-4">
              Les données collectées via le formulaire de contact sont utilisées
              uniquement pour répondre à vos demandes et ne sont en aucun cas
              transmises à des tiers.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Cookies
            </h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience
              utilisateur et mémoriser vos préférences (mode d'affichage
              clair/sombre). Des cookies de mesure d'audience peuvent aussi être
              utilisés (Google Analytics) afin de comprendre la fréquentation du
              site et améliorer son contenu.
            </p>
            <p className="mt-4">
              Vous pouvez accepter ou refuser ces cookies via le bandeau affiché
              lors de votre première visite, et modifier votre choix à tout
              moment via le lien « Gestion des cookies » en bas de page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Crédits
            </h2>
            <p>
              Conception et développement : [À compléter]
              <br />
              Photographies : [À compléter]
              <br />
              Création : {new Date().getFullYear()}
            </p>
          </section>
        </div>
        </div>
      </main>
    </>
  );
}
