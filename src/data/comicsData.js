import React from "react";

const comics = {
  myalo: {
    coverSrc: "/img/comicCovers/MyaloCover.jpg",
    title: "Το Μυαλό μου και μία Λίρα",
    subtitle: "44 σελίδες | αυτοβιογραφικό | 2019",
    year: "2019",
    description:
      "Ένα περίπου καθημερινό κομιξοημερολόγιο από αυτοτελή βιογραφικά κόμικ που δημιουργήθηκαν από το Νοέμβρη του 2018 έως τον Μάρτιο του 2019. Πρωτοδημοσιεύτηκαν ως προσχέδια στο Patreon μου ως εβδομαδιαία ανταμοιβή για τα άτομα που με υποστήριζαν. Περιέχει και μία έξτρα κομιξοέκθεση σε σχέση με κάτι χάπια.",
    pages: [
      "/img/comicPages/Myalo_1.jpg",
      "/img/comicPages/Myalo_2.jpg",
      "/img/comicPages/Myalo_3.jpg",
    ],
    availableStores: {
      solaris: {
        url:
          "https://solaris.gr/product/%cf%84%ce%bf-%ce%bc%cf%85%ce%b1%ce%bb%ce%bf-%ce%bc%ce%bf%cf%85-%ce%ba%ce%b1%ce%b9-%ce%bc%ce%b9%ce%b1-%ce%bb%ce%b9%cf%81%ce%b1/",
      },
      akyvernites: {
        url:
          "https://akybernitespoliteies.org/book/%CF%84%CE%BF-%CE%BC%CF%85%CE%B1%CE%BB%CE%BF-%CE%BC%CE%BF%CF%85-%CE%BA%CE%B1%CE%B9-%CE%BC%CE%B9%CE%B1-%CE%BB%CE%B9%CF%81%CE%B1-%CE%B5%CE%BD%CE%B1-%CE%BA%CE%BF%CE%BC%CE%B9%CE%BE%CE%BF%CE%B7%CE%BC%CE%B5%CF%81%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BF",
      },
    },
  },
  croissanakia: {
    coverSrc: "/img/comicCovers/CroissanakiaCover.jpg",
    title: "Τα Κρουασανάκια δεν είναι τα Ίδια",
    subtitle: "24 σελίδες | ιστορία | 2018",
    year: "2018",
    description: (
      <p>
        Καλοκαίρι, ελληνική επαρχία. Η Ζωή είναι μία θαυμαστή φουρνάρισσα που
        αγαπάει αυτό που κάνει και το χωριό την αγαπάει γι’αυτό. <br />
        Δυσκολεύεται όμως να βρει τον έρωτα, γιατί, είπαμε, ελληνική επαρχία.
        <br />
        Μέχρι που εμφανίζεται πάνω στη μηχανή η μπουτς των ονείρων της.
        <br />
        Ένα κόμικ για τον κεραυνοβόλο λεσβιακό έρωτα και ό,τι συνεπάγεται αυτός.
      </p>
    ),
    pages: [
      "/img/comicPages/croissanakia_1.jpg",
      "/img/comicPages/croissanakia_2.jpg",
    ],
    availableStores: {
      solaris: {
        url:
          "https://solaris.gr/product/%ce%ba%cf%81%ce%bf%cf%85%ce%b1%cf%83%ce%b1%ce%bd%ce%b1%ce%ba%ce%b9%ce%b1-%ce%b4%ce%b5%ce%bd-%ce%b5%ce%b9%ce%bd%ce%b1%ce%b9-%cf%84%ce%b1-%ce%b9%ce%b4%ce%b9%ce%b1/",
      },
      comicStrip: {
        url:
          "https://comicstrip.gr/el-gr/comics/ellhnika/ta-kroyasanakia-den-einai-ta-idia",
      },
      akyvernites: {
        url:
          "https://akybernitespoliteies.org/book/%CF%84%CE%B1-%CE%BA%CF%81%CE%BF%CF%85%CE%B1%CF%83%CE%B1%CE%BD%CE%B1%CE%BA%CE%B9%CE%B1-%CE%B4%CE%B5%CE%BD-%CE%B5%CE%B9%CE%BD%CE%B1%CE%B9-%CF%84%CE%B1-%CE%B9%CE%B4%CE%B9%CE%B1",
      },
    },
  },
  malakaLesvies4: {
    coverSrc: "/img/comicCovers/malakaLesvies4Cover.png",
    title: "Μαλάκα Λεσβίες! #4",
    subtitle: "24 σελίδες | κόμικ στριπ | 2017",
    year: "2017",
    description:
      "Κι άλλα χιουμοριστικά στριπάκια για τις παρανοήσεις, τον παραλογισμό και τις προσδοκίες της λεσβιακής και μπάι ζωής. Τα στριπάκια είναι εντελώς αυτοτελή - δε χρειάζεται να έχετε διαβάσει τα προηγούμενα για να καταλάβετε κάτι.",
    pages: [
      "/img/comicPages/mlkLesvies4_1.jpg",
      "/img/comicPages/mlkLesvies4_2.jpg",
    ],
    availableStores: {
      solaris: {
        url:
          "https://solaris.gr/product/%ce%bc%ce%b1%ce%bb%ce%b1%ce%ba%ce%b1-%ce%bb%ce%b5%cf%83%ce%b2%ce%b9%ce%b5%cf%83-4/",
      },
      tilt: {
        url:
          "https://tilt.gr/product/%ce%bc%ce%b1%ce%bb%ce%b1%ce%ba%ce%b1-%ce%bb%ce%b5%cf%83%ce%b2%ce%b9%ce%b5%cf%83-4/",
      },
      akyvernites: {
        url:
          "https://akybernitespoliteies.org/book/%CE%BC%CE%B1%CE%BB%CE%B1%CE%BA%CE%B1-%CE%BB%CE%B5%CF%83%CE%B2%CE%B9%CE%B5%CF%83-4",
      },
    },
  },
  antio: {
    coverSrc: "/img/comicCovers/pesAntioCover.jpg",
    title: "Πες Αντίο",
    subtitle: "24 σελίδες | ιστορία | 2016",
    year: "2016",
    description:
      "Αυτό το κόμικ έγινε στα πλαίσια του 23 Heures de la BD, ένα τσάλεντζ για 23 σελίδες κόμικ σε 23 ώρες, με το θέμα Western. Δύο καουμπόησες δυσκολεύονται πολύ να συνεννοηθούν.",
    pages: ["/img/comicPages/pesAntio_1.jpg", "/img/comicPages/pesAntio_2.jpg"],
    availableStores: {
      comicStrip: {
        url: "https://comicstrip.gr/el-gr/comics/ellhnika/pes-antio",
      },
      tilt: {
        url:
          "https://tilt.gr/product/%cf%80%ce%b5%cf%83-%ce%b1%ce%bd%cf%84%ce%b9%ce%bf/",
      },
      akyvernites: {
        url:
          "https://akybernitespoliteies.org/book/%CF%80%CE%B5%CF%83-%CE%B1%CE%BD%CF%84%CE%B9%CE%BF",
      },
    },
  },
  malakaLesvies3: {
    coverSrc: "/img/comicCovers/malakaLesvies3Cover.png",
    title: "Μαλάκα Λεσβίες! #3",
    subtitle: "24 σελίδες | κόμικ στριπ | 2016",
    year: "2016",
    description:
      'Η σειρά επιστρέφει δυναμικά με ακόμα περισσότερο σουρρεαλισμό για την ελληνική πραγματικότητα και τις ζωές των λεσβιών και μπάι γυναικών μέσα σε αυτή. Φέτος μας απασχολεί περισσότερο από ποτέ το ερώτημα: "Τι θα πει η κοινωνία;!" Τα στριπάκια είναι εντελώς αυτοτελή - δε χρειάζεται να έχετε διαβάσει τα προηγούμενα για να καταλάβετε κάτι. Προτεινόμενο για καλύτερη αυτοέκδοση στα Ελληνικά Βραβεία Κόμικς.',
    pages: [
      "/img/comicPages/mlkLesvies3_1.jpg",
      "/img/comicPages/mlkLesvies3_2.jpg",
    ],
    availableStores: {
      solaris: {
        url:
          "https://solaris.gr/product/%ce%bc%ce%b1%ce%bb%ce%b1%ce%ba%ce%b1-%ce%bb%ce%b5%cf%83%ce%b2%ce%b9%ce%b5%cf%83-3/",
      },
      tilt: {
        url:
          "https://tilt.gr/product/%ce%bc%ce%b1%ce%bb%ce%b1%ce%ba%ce%b1-%ce%bb%ce%b5%cf%83%ce%b2%ce%b9%ce%b5%cf%83-3/",
      },
      akyvernites: {
        url:
          "https://akybernitespoliteies.org/book/%CE%BC%CE%B1%CE%BB%CE%B1%CE%BA%CE%B1-%CE%BB%CE%B5%CF%83%CE%B2%CE%B9%CE%B5%CF%83-3",
      },
    },
  },
  malakaLesvies2: {
    coverSrc: "/img/comicCovers/malakaLesvies2Cover.jpg",
    title: "Μαλάκα Λεσβίες! #2",
    subtitle: "24 σελίδες | κόμικ στριπ | 2015",
    year: "2015",
    description:
      'Το δεύτερο τεύχος του "Μαλάκα Λεσβίες", με περισσότερα στριπάκια για τη ζωή των λεσβιών και μπάι γυναικών στην ελληνική πραγματικότητα. Καθημερινότητα, σχέσεις, γονείς, μπούρδες που ακούμε και μπούρδες που λέμε!',
    pages: [
      "/img/comicPages/mlkLesvies2_1.jpg",
      "/img/comicPages/mlkLesvies2_2.jpg",
    ],
    availableStores: {
      comicStrip: {
        url: "https://comicstrip.gr/el-gr/comics/ellhnika/malaka-lesbies!-2",
      },
      jemma: {
        url: "https://jemmacomics.com/malaka-lesvies-2-omg-lesbians-2",
      },
      tilt: {
        url:
          "https://tilt.gr/product/%ce%bc%ce%b1%ce%bb%ce%b1%ce%ba%ce%b1-%ce%bb%ce%b5%cf%83%ce%b2%ce%b9%ce%b5%cf%83-2/",
      },
      akyvernites: {
        url:
          "https://akybernitespoliteies.org/book/%CE%BC%CE%B1%CE%BB%CE%B1%CE%BA%CE%B1-%CE%BB%CE%B5%CF%83%CE%B2%CE%B9%CE%B5%CF%83-2",
      },
    },
  },
  malakaLesvies1: {
    coverSrc: "/img/comicCovers/malakaLesvies1Cover.png",
    title: "Μαλάκα Λεσβίες! #1",
    subtitle: "24 σελίδες | κόμικ στριπ | 2014",
    year: "2014",
    description:
      "Το κόμικ που έγινε ανάρπαστο στο ComicDom 2014! Στριπάκια για αντιδράσεις, μύθους και την καθημερινότητα των λεσβιών στην Αθήνα. Προτεινόμενο για καλύτερη αυτοέκδοση στα Ελληνικά Βραβεία Κόμικς.",
    pages: [
      "/img/comicPages/mlkLesvies1_1.png",
      "/img/comicPages/mlkLesvies1_2.png",
    ],
    availableStores: {
      solaris: {
        url:
          "https://solaris.gr/product/%ce%bc%ce%b1%ce%bb%ce%b1%ce%ba%ce%b1-%ce%bb%ce%b5%cf%83%ce%b2%ce%b9%ce%b5%cf%83/",
      },
      comicStrip: {
        url: "https://comicstrip.gr/el-gr/comics/ellhnika/malaka-lesbies!",
      },
      tilt: {
        url:
          "https://tilt.gr/product/%ce%bc%ce%b1%ce%bb%ce%b1%ce%ba%ce%b1-%ce%bb%ce%b5%cf%83%ce%b2%ce%b9%ce%b5%cf%83-1/",
      },
    },
  },
};

export function getComics() {
  return comics;
}
