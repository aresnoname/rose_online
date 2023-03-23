//
//

// database (const) = dropList // está no outro arquivo!

// div que irá servir de container para a lista de itens ou monstros
var divContainerList = document.getElementById("droplist__show-content");

// Funções

function loadingShow() {
  const divLoading = document.getElementsByClassName("droplist__show-loading");
  divLoading[0].classList.add("is-active"); // toggle test
}

function loadingHidden() {
  const divLoading = document.getElementsByClassName("droplist__show-loading");
  divLoading[0].classList.remove("is-active");
}

function divClean() {
  divContainerList.innerHTML = "";
}

function createDivElement(elementID, elementClass, elementReceive) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", elementID);
  newDiv.classList.add(elementClass);

  elementReceive.appendChild(newDiv);

  const getElementID = document.getElementById(elementID);

  return getElementID;
}

function createSpanElement(elementClass, elementContent, elementReceive) {
  const newSpan = document.createElement("span");
  newSpan.classList.add(elementClass);

  const content = document.createTextNode(elementContent);
  newSpan.appendChild(content);

  elementReceive.appendChild(newSpan);
}

function createSpanFather(
  elementID,
  elementClass,
  elementContent,
  elementReceive
) {
  const newSpan = document.createElement("span");
  newSpan.classList.add(elementClass);
  newSpan.setAttribute("id", elementID);

  const content = document.createTextNode(elementContent);
  newSpan.appendChild(content);

  elementReceive.appendChild(newSpan);

  const getID = document.getElementById(elementID);

  return getID;
}

function loadAllMonsters() {
  loadingShow();

  for (mobs in dropList.mob) {
    const divList = createDivElement(mobs, "list", divContainerList);

    const divListHeader = createDivElement(
      `${mobs}-header`,
      "list__header",
      divList
    );
    const divListContent = createDivElement(
      `${mobs}-content`,
      "list__content",
      divList
    );

    createSpanElement("list__header-monster", mobs, divListHeader);

    createSpanElement(
      "list__header-level",
      dropList.mob[mobs].level,
      divListHeader
    );

    createSpanElement(
      "list__header-map",
      dropList.mob[mobs].map,
      divListHeader
    );

    dropList.mob[mobs].drops.forEach((itens) => {
      createSpanElement("list__content-item", itens, divListContent);
    });
  }

  setTimeout(() => {
    loadingHidden();
  }, 1000);
}

function loadItens(item) {
  loadingShow();

  let error = true;
  for (itens in dropList.item) {
    if (itens.toLowerCase() == item.toLowerCase()) {
      const divList = createDivElement(itens, "list", divContainerList);

      const divListHeader = createDivElement(
        `${itens}-header`,
        "list__header",
        divList
      );
      const divListContent = createDivElement(
        `${itens}-content`,
        "list__content",
        divList
      );

      createSpanElement("list__header-item", itens, divListHeader);

      for (monster in dropList.item[itens].monsters) {
        const spanFather = createSpanFather(
          monster,
          "list__content-monster",
          monster,
          divListContent
        );

        createSpanElement(
          "list__content-map",
          `[ ${dropList.item[itens].monsters[monster].map} ]`,
          spanFather
        );
      }

      error = false;
    }
  }

  setTimeout(() => {
    loadingHidden();
  }, 1000);

  return error;
}

function loadAllItens(item) {
  loadingShow();

  for (itens in dropList.item) {
    const divList = createDivElement(itens, "list", divContainerList);

    const divListHeader = createDivElement(
      `${itens}-header`,
      "list__header",
      divList
    );
    const divListContent = createDivElement(
      `${itens}-content`,
      "list__content",
      divList
    );

    createSpanElement("list__header-item", itens, divListHeader);

    for (monster in dropList.item[itens].monsters) {
      const spanFather = createSpanFather(
        monster,
        "list__content-monster",
        monster,
        divListContent
      );

      createSpanElement(
        "list__content-map",
        `[ ${dropList.item[itens].monsters[monster].map} ]`,
        spanFather
      );
    }
  }

  setTimeout(() => {
    loadingHidden();
  }, 1000);
}

// Campo de pesquisar por itens
const divDatalist = document.getElementById("droplist__search-list");
const inputSearch = document.getElementById("droplist__search-input");
const btnSearch = document.getElementById("droplist__search-submit");

for (itens in dropList.item) {
  let newOption = document.createElement("option");
  newOption.setAttribute("value", itens);
  divDatalist.appendChild(newOption);
}

btnSearch.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputSearch.value != "" && inputSearch.value != " ") {
    divClean();

    const result = loadItens(inputSearch.value);

    if (result == true) {
      alert(`${inputSearch.value} -> O nome digitado não foi encontrado!`);
    }

    inputSearch.value = "";
  }
});

// Campo de pesquisar por categorias (select)
const selectCategory = document.getElementById("droplist__category-select");

selectCategory.addEventListener("change", function () {
  divClean();

  if (selectCategory.value == "mob") {
    loadAllMonsters();
  } else if (selectCategory.value == "item") {
    loadAllItens();
  }
});
