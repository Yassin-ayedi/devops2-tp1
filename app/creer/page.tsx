
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Creer() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  const formulaireValide =
    titre.trim().length > 0 && description.trim().length > 0;

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Nouveau questionnaire</h2>
          <p>Renseignez le titre et la description du questionnaire.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="titre">Titre</label>
            <input
              id="titre"
              name="titre"
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="Titre du questionnaire"
              required
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description du questionnaire"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!formulaireValide}
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
