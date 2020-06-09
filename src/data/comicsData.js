import React from "react";

const comics = {
  myalo: {
    coverSrc: "/img/comicCovers/MyaloCover.jpg",
    title: "Το Μυαλό μου και μία Λίρα",
    subtitle: "2019 | 44 σελίδες | zine | αυτοβιογραφικό",
    year: "2019",
    description:
      "Αυτό το κόμικ είναι έτσι κι αλλιώς, προέκυψε κάπως και μιλάει για τα τάδε θέματα. Μικρή περιγραφή ανάμεσα στο εξώφυλλο και τα δείγματα των σελίδων.  Curabitur nec leo imperdiet, consequat leo id, blandit justo. Aenean gravida ex non ligula semper vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus dui eget lacus placerat porttitor. Morbi eget ullamcorper turpis. Sed maximus posuere ipsum, et bibendum ante finibus ac.",
    page1src: "/img/comicPages/Myalo_1.jpg",
    page2src: "/img/comicPages/Myalo_2.jpg",
    page3src: "/img/comicPages/Myalo_3.jpg",
  },
  croissanakia: {
    coverSrc: "/img/comicCovers/CroissanakiaCover.jpg",
    title: "Τα Κρουασανάκια δεν είναι τα Ίδια",
    subtitle: "24 σελίδες, 2018",
    year: "2018",
    description: "Θανατηφόρα έλξη μπλα μπλα μπλα.",
  },
  malakaLesvies4: {
    coverSrc: "/img/comicCovers/malakaLesvies4Cover.png",
    title: "Μαλάκα Λεσβίες! #4",
    subtitle: "24 σελίδες, 2017",
    year: "2017",
    description:
      "Κι άλλα χιουμοριστικά στριπάκια για τις παρανοήσεις, τον παραλογισμό και τις προσδοκίες της λεσβιακής και μπάι ζωής. Τα στριπάκια είναι εντελώς αυτοτελή - δε χρειάζεται να έχετε διαβάσει τα προηγούμενα για να καταλάβετε κάτι.",
  },
  antio: {
    coverSrc: "/img/comicCovers/pesAntioCover.jpg",
    title: "Πες Αντίο",
    subtitle: "24 σελίδες, 2016",
    year: "2016",
    description: "Καουμπόησες μπλα μπλα.",
  },
  malakaLesvies3: {
    coverSrc: "/img/comicCovers/malakaLesvies3Cover.png",
    title: "Μαλάκα Λεσβίες! #3",
    subtitle: "24 σελίδες, 2016",
    year: "2016",
    description:
      'Η σειρά επιστρέφει δυναμικά με ακόμα περισσότερο σουρρεαλισμό για την ελληνική πραγματικότητα και τις ζωές των λεσβιών και μπάι γυναικών μέσα σε αυτή. Φέτος μας απασχολεί περισσότερο από ποτέ το ερώτημα: "Τι θα πει η κοινωνία;!" Τα στριπάκια είναι εντελώς αυτοτελή - δε χρειάζεται να έχετε διαβάσει τα προηγούμενα για να καταλάβετε κάτι.  Προτεινόμενο για καλύτερη αυτοέκδοση στα Ελληνικά Βραβεία Κόμικς.',
  },
  malakaLesvies2: {
    coverSrc: "/img/comicCovers/malakaLesvies2Cover.jpg",
    title: "Μαλάκα Λεσβίες! #2",
    subtitle: "24 σελίδες, 2015",
    year: "2015",
    description:
      'Το δεύτερο τεύχος του "Μαλάκα Λεσβίες", με περισσότερα στριπάκια για τη ζωή των λεσβιών και μπάι γυναικών στην ελληνική πραγματικότητα. Καθημερινότητα, σχέσεις, γονείς, μπούρδες που ακούμε και μπούρδες που λέμε!',
  },
  malakaLesvies1: {
    coverSrc: "/img/comicCovers/malakaLesvies1Cover.png",
    title: "Μαλάκα Λεσβίες! #1",
    subtitle: "24 σελίδες, 2014",
    year: "2014",
    description:
      "Το κόμικ που έγινε ανάρπαστο στο ComicDom 2014! Στριπάκια για αντιδράσεις, μύθους και την καθημερινότητα των λεσβιών στην Αθήνα. Προτεινόμενο για καλύτερη αυτοέκδοση στα Ελληνικά Βραβεία Κόμικς.",
  },
};

export function getComics() {
  return comics;
}
