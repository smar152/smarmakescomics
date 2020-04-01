import React from "react";

const comics = {
  myalo: {
    coverSrc: "/img/comicCovers/MyaloCover.jpg",
    src: "/img/illustrations/Mermay10.jpg",
    title: "Το Μυαλό μου και μία Λίρα",
    subtitle: "2019 | 44 σελίδες | zine | αυτοβιογραφικό",
    description:
      "Αυτό το κόμικ είναι έτσι κι αλλιώς, προέκυψε κάπως και μιλάει για τα τάδε θέματα. Μικρή περιγραφή ανάμεσα στο εξώφυλλο και τα δείγματα των σελίδων.  Curabitur nec leo imperdiet, consequat leo id, blandit justo. Aenean gravida ex non ligula semper vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus dui eget lacus placerat porttitor. Morbi eget ullamcorper turpis. Sed maximus posuere ipsum, et bibendum ante finibus ac.",
    page1src: "/img/comicPages/Myalo_1.jpg",
    page2src: "/img/comicPages/Myalo_2.jpg",
    page3src: "/img/comicPages/Myalo_3.jpg"
  },
  croissanakia: {
    coverSrc: "/img/comicCovers/CroissanakiaCover.jpg",
    src: "/img/illustrations/Mermay10.jpg",
    title: "Τα Κρουασανάκια δεν είναι τα Ίδια",
    subtitle: "24 σελίδες, 2018",
    description: "Θανατηφόρα έλξη μπλα μπλα μπλα."
  }
};

export function getComics() {
  return comics;
}
