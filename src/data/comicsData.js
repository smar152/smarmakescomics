import React from "react";

const comics = {
  myalo: {
    coverSrc: "/img/comicCovers/MyaloCover.jpg",
    title: "Το Μυαλό μου και μία Λίρα",
    subtitle: "2019 | 44 σελίδες | zine | αυτοβιογραφικό",
    year: "2019",
    description:
      "Ένα περίπου καθημερινό κομιξοημερολόγιο. Περιέχει και μία κομιξοέκθεση σε σχέση με κάτι χάπια.",
    page1src: "/img/comicPages/Myalo_1.jpg",
    page2src: "/img/comicPages/Myalo_2.jpg",
    page3src: "/img/comicPages/Myalo_3.jpg",
  },
  croissanakia: {
    coverSrc: "/img/comicCovers/CroissanakiaCover.jpg",
    title: "Τα Κρουασανάκια δεν είναι τα Ίδια",
    subtitle: "24 σελίδες, 2018",
    year: "2018",
    description:
      "Καλοκαίρι, ελληνική επαρχία. Η Ζωή είναι μία θαυμαστή φουρνάρισσα που αγαπάει αυτό που κάνει και το χωριό την αγαπάει γι’αυτό. <br>Δυσκολεύεται όμως να βρει τον έρωτα, γιατί, είπαμε, ελληνική επαρχία.<br>Μέχρι που εμφανίζεται πάνω στη μηχανή η μπουτς των ονείρων της.<br>Ένα κόμικ για τον κεραυνοβόλο λεσβιακό έρωτα και ό,τι συνεπάγεται αυτός.",
    page1src: "/img/comicPages/croissanakia_1.jpg",
    page2src: "/img/comicPages/croissanakia_2.jpg",
    page3src: "/img/comicPages/croissanakia_3.jpg",
  },
  malakaLesvies4: {
    coverSrc: "/img/comicCovers/malakaLesvies4Cover.png",
    title: "Μαλάκα Λεσβίες! #4",
    subtitle: "24 σελίδες, 2017",
    year: "2017",
    description:
      "Κι άλλα χιουμοριστικά στριπάκια για τις παρανοήσεις, τον παραλογισμό και τις προσδοκίες της λεσβιακής και μπάι ζωής. Τα στριπάκια είναι εντελώς αυτοτελή - δε χρειάζεται να έχετε διαβάσει τα προηγούμενα για να καταλάβετε κάτι.",
    page1src: "/img/comicPages/mlkLesvies4_1.jpg",
    page2src: "/img/comicPages/mlkLesvies4_2.jpg",
  },
  antio: {
    coverSrc: "/img/comicCovers/pesAntioCover.jpg",
    title: "Πες Αντίο",
    subtitle: "24 σελίδες, 2016",
    year: "2016",
    description:
      "Αυτό το κόμικ έγινε στα πλαίσια του 23 Heures de la BD, ένα τσάλεντζ για 23 σελίδες κόμικ σε 23 ώρες, με το θέμα Western. Δύο καουμπόησες δυσκολεύονται πολύ να συνεννοηθούν.",
    page1src: "/img/comicPages/pesAntio_1.jpg",
    page2src: "/img/comicPages/pesAntio_2.jpg",
  },
  malakaLesvies3: {
    coverSrc: "/img/comicCovers/malakaLesvies3Cover.png",
    title: "Μαλάκα Λεσβίες! #3",
    subtitle: "24 σελίδες, 2016",
    year: "2016",
    description:
      'Η σειρά επιστρέφει δυναμικά με ακόμα περισσότερο σουρρεαλισμό για την ελληνική πραγματικότητα και τις ζωές των λεσβιών και μπάι γυναικών μέσα σε αυτή. Φέτος μας απασχολεί περισσότερο από ποτέ το ερώτημα: "Τι θα πει η κοινωνία;!" Τα στριπάκια είναι εντελώς αυτοτελή - δε χρειάζεται να έχετε διαβάσει τα προηγούμενα για να καταλάβετε κάτι. Προτεινόμενο για καλύτερη αυτοέκδοση στα Ελληνικά Βραβεία Κόμικς.',
    page1src: "/img/comicPages/mlkLesvies3_1.jpg",
    page2src: "/img/comicPages/mlkLesvies3_2.jpg",
  },
  malakaLesvies2: {
    coverSrc: "/img/comicCovers/malakaLesvies2Cover.jpg",
    title: "Μαλάκα Λεσβίες! #2",
    subtitle: "24 σελίδες, 2015",
    year: "2015",
    description:
      'Το δεύτερο τεύχος του "Μαλάκα Λεσβίες", με περισσότερα στριπάκια για τη ζωή των λεσβιών και μπάι γυναικών στην ελληνική πραγματικότητα. Καθημερινότητα, σχέσεις, γονείς, μπούρδες που ακούμε και μπούρδες που λέμε!',
    page1src: "/img/comicPages/mlkLesvies2_1.jpg",
    page2src: "/img/comicPages/mlkLesvies2_2.jpg",
  },
  malakaLesvies1: {
    coverSrc: "/img/comicCovers/malakaLesvies1Cover.png",
    title: "Μαλάκα Λεσβίες! #1",
    subtitle: "24 σελίδες, 2014",
    year: "2014",
    description:
      "Το κόμικ που έγινε ανάρπαστο στο ComicDom 2014! Στριπάκια για αντιδράσεις, μύθους και την καθημερινότητα των λεσβιών στην Αθήνα. Προτεινόμενο για καλύτερη αυτοέκδοση στα Ελληνικά Βραβεία Κόμικς.",
    page1src: "/img/comicPages/mlkLesvies1_1.png",
    page2src: "/img/comicPages/mlkLesvies1_2.png",
  },
};

export function getComics() {
  return comics;
}
