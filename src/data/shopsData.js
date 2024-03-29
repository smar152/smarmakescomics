const shops = {
  athens: {
    label: "Αθήνα",
    shops: {
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
  },
  thessaloniki: {
    label: "Θεσσαλονίκη",
    shops: {
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
  },
  nonGreek: {
    label: "Εκτός Ελλάδας",
    shops: {
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
  },
};

/**
 * Object with all stores by key for convenience
 * @type {{}}
 */
export const allStores = Object.keys(shops).reduce((stores, cityKey) => {
  Object.keys(shops[cityKey].shops).forEach((key) => {
    stores[key] = shops[cityKey].shops[key];
  });
  return stores;
}, {});

export const getNameForShopByKey = (key) => {
  const storeData = allStores[key];
  if (storeData && storeData.name) {
    return storeData.name;
  } else {
    return "Store label not found";
  }
};

export function getShops() {
  return shops;
}
