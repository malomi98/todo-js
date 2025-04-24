const listeTaches = document.getElementById("listeTaches");
const ajouterBtn = document.getElementById("ajouterBtn");
const popup = document.getElementById("popup");
const validerAjout = document.getElementById("validerAjout");
const tacheInput = document.getElementById("tacheInput");
const filtre = document.getElementById("filtre");
const toggleDark = document.getElementById("toggleDark");

let taches = [];

ajouterBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

validerAjout.addEventListener("click", () => {
  const texte = tacheInput.value.trim();
  if (texte) {
    const tache = {
      texte,
      date: new Date().toLocaleDateString(),
      faite: false
    };
    taches.push(tache);
    tacheInput.value = "";
    popup.style.display = "none";
    afficherTaches();
  }
});

function afficherTaches() {
  listeTaches.innerHTML = "";
  let filtreValeur = filtre.value;
  let filtered = taches.filter(t => {
    if (filtreValeur === "faites") return t.faite;
    if (filtreValeur === "nonfaites") return !t.faite;
    return true;
  });

  filtered.forEach((tache, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>\${tache.texte}</strong><br/>
        <span class="task-meta">Ajoutée le : \${tache.date}</span>
      </div>
      <div>
        <button onclick="marquerFaite(\${index})">\${tache.faite ? "❌" : "✅"}</button>
        <button onclick="supprimerTache(\${index})">🗑️</button>
      </div>
    `;
    listeTaches.appendChild(li);
  });
}

function supprimerTache(index) {
  taches.splice(index, 1);
  afficherTaches();
}

function marquerFaite(index) {
  taches[index].faite = !taches[index].faite;
  afficherTaches();
}

filtre.addEventListener("change", afficherTaches);

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
