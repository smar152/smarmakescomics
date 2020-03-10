import React from "react";

const illustrations = {
  mermay: {
    src: "/img/IllustrationThumb0.jpg",
    title: "Mermaid has feelings",
    description: "Made for the Mermay challenge"
  },
  poisonous: {
    src: "/img/IllustrationThumb1.jpg",
    title: "Poisonous",
    description: "Made for the Inktober challenge"
  },
  trees: {
    src: "/img/IllustrationThumb2.jpg",
    title: "Trees",
    description: "Made for the Trees exhibition"
  }
};

export function getIllustrations() {
  return illustrations;
}
