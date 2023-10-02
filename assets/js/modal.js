const modal = document.getElementById("modal");

function insertModalContent(pokemonInfo) {
    let info = `
    <div class="modal">
    <div class="modal-content ${pokemonInfo.type}">
      <div class="modal-header">
        <span class="modal-name">${pokemonInfo.name}</span>
        <span class="modal-number">#${pokemonInfo.number}</span>
        <button id="closeModal" type="button"><a href="#" class="close"></a></button>
  
        <div class="detail">
          <ol class="types">
            ${pokemonInfo.types
              .map((type) => `<li class="type ${type}">${type}</li>`)
              .join("")}
          </ol>
        </div>
      </div>
  
      <div class="modal-details">
        <div class="modal-img-container">
          <img class="modal-img" src="${pokemonInfo.photo}" alt="${
      pokemonInfo.name
    }">
        </div>
  
        <div class="details-container">
          <div class="modal-char-container">
            <div class="modal-char-content">
              <span class="modal-title">Base XP</span>
              <span class="modal-title">Height</span>
              <span class="modal-title">Weight</span>
              
            </div>
            <div class="modal-char-content">
              <span>${pokemonInfo.base_experience}</span>
              <span>${pokemonInfo.height}</span>
              <span>${pokemonInfo.weight}</span>
  
            </div>
            </div>
            <div class="modal-ability-container">
              <span class="modal-itle">Abilities</span>
              <span>
              ${pokemonInfo.abilities
                .map(
                  (ability) =>
                    `${ability}`.charAt(0).toUpperCase() + `${ability}`.slice(1)
                )
                .join(", ")}
            </span>
            </div>
  
          <span class="modal-separator"></span>
  
          <div class="stats-container">
            <div class="modal-stats">
              <span class="modal-title">HP</span>
              <span class="modal-title">Attack</span>
              <span class="modal-title">Defense</span>
              <span class="modal-title">SP Attack</span>
              <span class="modal-title">SP Defense</span>
              <span class="modal-title">Speed</span>
            </div>
            <div class="modal-stats-value">
                ${pokemonInfo.stats
                  .map(
                    (stat) => `<span class="modal-stat-container">
                  <span class="stat-value">${stat[1]}</span>
                  <span class="stat-bar ${
                    stat[1] >= 50 ? "green" : "red"
                  }"></span>
                </span>`
                  )
                  .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
          `;
    modal.innerHTML = info;
  
    modal.style.display = "block";
  
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => (modal.style.display = "none"));
  
    const values = document.getElementsByClassName("stat_value");
    const bars = document.getElementsByClassName("stat_bar");
    for (let i = 0; i < values.length; i++) {
      bars[i].style.width = values[i].textContent + "px";
    }
  }