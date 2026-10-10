
import Link from "next/link";

export default function Creer() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Nouveau questionnaire</h2>
          <p>Renseignez les informations du questionnaire.</p>
        </div>

        <form>
          <div>
            <label htmlFor="titre">Titre</label>
            <input
              id="titre"
              name="titre"
              type="text"
              placeholder="Titre du questionnaire"
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description du questionnaire"
              rows={4}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            disabled
          >
            Enregistrer
          </button>
        </form>

        <p>
          <Link href="/">← Retour à l'accueil</Link>
        </p>
      </div>
    </section>
  );
}
