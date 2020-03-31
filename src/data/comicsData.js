import React from "react";

const comics = {
  myalo: {
    thumbSrc: "/img/comicCovers/MyaloCover.jpg",
    src: "/img/illustrations/Mermay10.jpg",
    title: "Το Μυαλό μου και μία Λίρα",
    subtitle: "44 σελίδες, 2019",
    description: "Αυτοβιογραφικά κομιξάκια μπλα μπλα μπλα"
  },
  croissanakia: {
    thumbSrc: "/img/comicCovers/CroissanakiaCover.jpg",
    src: "/img/illustrations/Mermay10.jpg",
    title: "Τα Κρουασανάκια δεν είναι τα Ίδια",
    subtitle: "24 σελίδες, 2018",
    description: "Θανατηφόρα έλξη μπλα μπλα μπλα."
  }
};

export function getComics() {
  return comics;
}
