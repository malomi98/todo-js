const ajouterBtn = document.getElementById("ajouterBtn");
const popup = document.getElementById("popup");
const validerAjout = document.getElementById("validerAjout");
const tacheInput = document.getElementById("tacheInput");
const listeTaches = document.getElementById("listeTaches");

ajouterBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

validerAjout.addEventListener("click", () => {
  const tache = tacheInput.value.trim();
  if (tache !== "") {
    ajouterTache(tache);
    tacheInput.value = "";
    popup.style.display = "none";
  }
});

function ajouterTache(texte) {
  const li = document.createElement("li");
  li.textContent = texte;

  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  btnSupprimer.onclick = () => {
    listeTaches.removeChild(li);
  };

  li.appendChild(btnSupprimer);
  listeTaches.appendChild(li);
}

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
