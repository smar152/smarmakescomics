const shops = {
  athens: {
    solaris: {
      name: "Solaris",
      area: "Εξάρχεια",
      website: "https://solaris.gr/",
    },
    comicStrip: {
      name: "Comic Strip",
      area: "Εξάρχεια",
      website: "https://comicstrip.gr/",
    },
    jemma: {
      name: "Jemma",
      area: "Πειραιάς ",
      website: "https://jemmacomics.com/",
    },
    tilt: {
      name: "Tilt",
      area: "Εξάρχεια ",
      website: "https://tilt.gr/",
    },
    comicconshop: {
      name: "Comicon Shop",
      area: "Εξάρχεια ",
      website: "http://comicon-shop.gr//",
    },
    lefik: {
      name: "Λέσχη Φίλων Κόμικς",
      area: "Γκάζι ",
      website: "https://www.lefik.gr/",
    },
    starComics: {
      name: "Star Comics",
      area: "Αγία Παρασκευή ",
      website: "https://www.starcomics.gr/",
    },
    beaver: {
      name: "Beaver",
      area: "Γκάζι",
      website: "https://beaver.gr",
    },
  },
  thessaloniki: {
    akyvernites: {
      name: "Ακυβέρνητες Πολιτείες",
      area: "Κέντρο",
      website: "https://akybernitespoliteies.org/",
    },
    cosmicRealms: {
      name: "Cosmic Realms",
      area: "Κέντρο",
      website: "https://www.cosmicrealms.gr/",
    },
  },
  nonGreek: {
    otherNature: {
      name: "Other Nature",
      area: "Berlin",
      website: "https://other-nature.de/",
    },
    travellingMan: {
      name: "Travelling Man",
      area: "Manchester",
      website: "https://travellingman.com/",
    },
  },
};

export function getShops() {
  return shops;
}
