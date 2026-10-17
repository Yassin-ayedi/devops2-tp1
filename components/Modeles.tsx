
const modeles = [
  {
    title: "Quiz de connaissances",
    text: "Évaluez les connaissances des participants avec des questions à choix multiples.",
  },
  {
    title: "Questionnaire de satisfaction",
    text: "Recueillez les avis et les suggestions de vos participants.",
  },
  {
    title: "Évaluation de formation",
    text: "Mesurez les acquis après une formation grâce à des questions adaptées.",
  },
];

export default function Modeles() {
  return (
    <section id="modeles">
      <div className="container">
        <div className="section-head">
          <h2>Nos modèles</h2>
          <p>
            Choisissez un modèle adapté à vos besoins et créez votre questionnaire.
          </p>
        </div>

        <div className="cards">
          {modeles.map((modele, i) => (
            <div className="card" key={modele.title}>
              <div className="num">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3>{modele.title}</h3>
              <p>{modele.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
