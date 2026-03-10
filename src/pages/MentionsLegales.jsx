import { Link } from "react-router-dom";
import { resetCookieConsent } from "@/hooks/useCookieConsent";
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
              <strong>Moulin de la Marigotière — Traiteur de Thiberville</strong>
              <br />
              François Duperrey — Maître Restaurateur
              <br />
              203 Rue des Métiers
              <br />
              27230 Thiberville, France
            </p>
            <p className="mt-4">
              Email :{" "}
              <a
                href="mailto:contact.moulin.marigotiere@gmail.com"
                className="text-[#9B1227] underline hover:opacity-80"
              >
                contact.moulin.marigotiere@gmail.com
              </a>
            </p>
            <p className="mt-2 text-base text-base-content/70">
              Directeur de la publication : François Duperrey
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>OVH SAS</strong>
              <br />
              2 rue Kellermann
              <br />
              59100 Roubaix, France
              <br />
              Tél. : +33 9 72 10 10 07
              <br />
              <a
                href="https://www.ovhcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B1227] underline hover:opacity-80"
              >
                www.ovhcloud.com
              </a>
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
              Données (RGPD — UE 2016/679), vous disposez d'un droit d'accès,
              de rectification, de suppression, de limitation du traitement et
              d'opposition aux données personnelles vous concernant.
            </p>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse :{" "}
              <a
                href="mailto:contact.moulin.marigotiere@gmail.com"
                className="text-[#9B1227] underline hover:opacity-80"
              >
                contact.moulin.marigotiere@gmail.com
              </a>
            </p>

            <h3 className="text-xl font-cormorant-sc text-[#9B1227] mt-6 mb-3">
              Données collectées
            </h3>
            <p>
              Les seules données personnelles collectées sur ce site proviennent
              du formulaire de contact. Les informations recueillies (nom, email,
              téléphone, adresse, message) sont utilisées uniquement pour
              répondre à vos demandes de devis et ne sont en aucun cas
              transmises ou vendues à des tiers.
            </p>
            <p className="mt-2">
              Ces données sont envoyées par email via le service{" "}
              <a
                href="https://www.mailjet.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B1227] underline hover:opacity-80"
              >
                Mailjet
              </a>{" "}
              (sous-traitant conforme au RGPD) et ne sont pas stockées dans une
              base de données sur le serveur.
            </p>

            <h3 className="text-xl font-cormorant-sc text-[#9B1227] mt-6 mb-3">
              Durée de conservation
            </h3>
            <p>
              Les données transmises via le formulaire de contact sont conservées
              le temps nécessaire au traitement de votre demande, et au maximum
              3 ans à compter du dernier échange.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Cookies
            </h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre navigateur
              lors de la visite d'un site. Ce site utilise les cookies suivants :
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="table table-zebra w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-[#9B1227]">Cookie</th>
                    <th className="text-[#9B1227]">Type</th>
                    <th className="text-[#9B1227]">Finalité</th>
                    <th className="text-[#9B1227]">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>mdm_cookie_consent</code></td>
                    <td>Fonctionnel</td>
                    <td>Mémorise votre choix d'acceptation ou de refus des cookies</td>
                    <td>Permanente (localStorage)</td>
                  </tr>
                  <tr>
                    <td><code>theme</code></td>
                    <td>Fonctionnel</td>
                    <td>Mémorise votre préférence de mode clair/sombre</td>
                    <td>Permanente (localStorage)</td>
                  </tr>
                  <tr>
                    <td><code>_ga / _ga_*</code></td>
                    <td>Mesure d'audience</td>
                    <td>Google Analytics — statistiques de fréquentation anonymisées</td>
                    <td>13 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Les cookies fonctionnels sont nécessaires au bon fonctionnement du
              site et ne requièrent pas votre consentement.
            </p>
            <p className="mt-2">
              Les cookies de mesure d'audience (Google Analytics) ne sont
              déposés que si vous cliquez sur « Accepter » dans le bandeau
              affiché lors de votre première visite. L'adresse IP est
              anonymisée.
            </p>
            <p className="mt-4">
              Vous pouvez modifier votre choix à tout moment en cliquant sur le
              bouton ci-dessous ou via le lien « Gestion des cookies » en bas de
              chaque page.
            </p>
            <div className="mt-4">
              <button
                type="button"
                onClick={resetCookieConsent}
                className="btn btn-outline border-[#9B1227] text-[#9B1227] hover:bg-[#9B1227] hover:text-white hover:border-[#9B1227]"
              >
                Modifier mes préférences cookies
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Crédits
            </h2>
            <p>
              Conception, développement et photographies : Samm Développement
              <br />
              © {new Date().getFullYear()} Moulin de la Marigotière. Tous
              droits réservés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Litiges
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, et après tentative de résolution amiable, les
              tribunaux compétents seront ceux du ressort du siège social de
              l'éditeur.
            </p>
            <p className="mt-4 text-base text-base-content/70">
              Dernière mise à jour : mars 2026
            </p>
          </section>
        </div>
        </div>
      </main>
    </>
  );
}
