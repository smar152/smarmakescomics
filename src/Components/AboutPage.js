import React from "react";
import * as serviceWorker from "../serviceWorker";

const AboutPage = (props) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 col-md-5 ">
          <h3>Η Σμαρ</h3>
          <p>
            γενήθηκε το 1991 και πάντα ζωγράφιζε καραγκιοζάκια. Σπούδασε
            πληροφορική, άσχετο, αλλά μιας και τα λέμε.
          </p>
          <p>
            Έχει εικονογραφήσει το παιδικό βιβλίο "Τα Δυο Μικρά Αυγά" και είναι
            πιο γνωστή για τη σειρά κόμικς "Μαλάκα Λεσβίες!".
          </p>
          <p>
            Μένει στην Αθήνα, καταναλώνει σχεδόν αποκλειστικά πόντκαστ, και
            αναρωτιέται αν θα είναι κάποτε έτοιμη για τις ευθύνες κανα-δυό
            γατιών.
          </p>
          <p>
            Update: Μένει με δύο γατιά.
          </p>

          <div className="contact">
            <h3>Επικοινωνία</h3>
            <a href="mailto:smarmakescomics@gmail.com">
              <img src="../img/circle_email.png" alt="instagram" />
            </a>
            <a href="https://twitter.com/SmarMakesComics/">
              <img src="../img/circle_twitter.png" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/smarmakescomics/">
              <img src="../img/circle_insta.png" alt="instagram" />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <img src="../img/about_pic.jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

serviceWorker.unregister();
