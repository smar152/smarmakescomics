import React from "react";
import * as serviceWorker from "../serviceWorker";

const AboutPage = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <p>
            Η Σμαρ γενήθηκε το 1991 και πάντα ζωγράφιζε καραγκιοζάκια. Σπούδασε
            πληροφορική, άσχετο, αλλά μιας και τα λέμε.
          </p>
          <p>
            Έχει εικονογραφήσει το παιδικό βιβλίο "Τα Δυο Μικρά Αυγά" και είναι
            πιο γνωστή για τη σειρά κόμικς "Μαλάκα Λεσβίες!".
          </p>
          <p>
            Μένει στην Αθήνα, καταναλώνει σχεδόν αποκλειστικά πόντκαστ, και
            αναρωτιέται αν θα είναι κάποτε έτοιμη για τις ευθύνες μίας γάτας.
          </p>
        </div>
        <div className="col-6">
          <img src="../img/about_pic.jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

serviceWorker.unregister();
