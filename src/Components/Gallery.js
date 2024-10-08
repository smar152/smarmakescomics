import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

/**
 * React class to show an image that opens a modal with pagination
 */
const Gallery = ({
  hasCover = false,
  images = [],
  imgContainerClasses = "col",
  imgClasses = "img-fluid w-100 clickable",
  stores = null,
}) => {
  const [firstImage, ...restOfImages] = images;
  const [isOpen, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentImage = images[currentIndex];
  const imagesBelow = hasCover ? restOfImages : images;
  const {
    src: currentSrc,
    subtitle: currentSubtitle,
    description: currentDescription,
    style: currentStyle,
    className: currentClassName,
  } = currentImage;
  const [modalStyle] = React.useState(getModalStyle);

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      outline: "none",
    };
  }

  const handleOpen = (actualIndex) => {
    setOpen(true);
    setCurrentIndex(actualIndex);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showNextComicPage = () => {
    let nextIndex = currentIndex + 1;

    if (nextIndex >= images.length) {
      nextIndex = 0;
    }

    setCurrentIndex(nextIndex);
  };

  const showPreviousIllustration = () => {
    let previousIndex = currentIndex - 1;

    if (previousIndex < 0) {
      previousIndex = images.length - 1;
    }

    setCurrentIndex(previousIndex);
  };

  const useStyles = makeStyles((theme) => ({
    galleryModal: {
      position: "absolute",
      // width: 700,
      // height: "90vh",
      backgroundColor: theme.palette.background.paper,
      // border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  return (
    <div className="row">
      {/* cover */}
      {hasCover && (
        <div className="col-12 col-md-5 pb-4">
          <img
            onClick={() => {
              const actualIndex = 0;
              handleOpen(actualIndex);
            }}
            className="img-fluid comicPage"
            src={process.env.PUBLIC_URL + firstImage.src}
          />
        </div>
      )}
      {/* description */}
      {hasCover && (
        <div className="col-12 pt-3 col-md-7">
          <div className="row">
            <p id="pageSubtitle">{firstImage.subtitle}</p>
          </div>
          <div className="row">
            <p id="pageDescription">{firstImage.description}</p>
            {stores}
          </div>
        </div>
      )}
      {/* rest of pages */}
      <div className="col-12">
        <div className="row">
          {imagesBelow.map(({ src }, index) => {
            return (
              <div className={imgContainerClasses} key={index}>
                <img
                  onClick={() => {
                    const actualIndex = hasCover ? index + 1 : index;
                    handleOpen(actualIndex);
                  }}
                  className={imgClasses}
                  src={src}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Modal */}
      <Modal open={isOpen} onClose={handleClose}>
        <div
          style={modalStyle}
          className={`${classes.galleryModal} smarModal d-flex flex-column justify-content-center align-items-center`}
        >
          <div className="d-flex flex-row align-items-center justify-content-end w-100">
            <CloseIcon onClick={handleClose}></CloseIcon>
          </div>
          <div className="row d-flex flex-row align-items-center justify-content-between w-100">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <ArrowBackIosOutlinedIcon
                className="scaledIcon"
                onClick={showPreviousIllustration}
              />
            </div>

            {hasCover && <img className="illustrationImage" src={currentSrc} />}
            {!hasCover && (
              <img className="illustrationImage" src={currentImage.fullSrc} />
            )}

            <div className="d-flex flex-column align-items-center justify-content-center">
              <ArrowForwardIosOutlinedIcon
                className="scaledIcon"
                onClick={showNextComicPage}
              />
            </div>
          </div>
          <p id="simple-modal-description" className="mt-4">
            {hasCover && `Page ${currentIndex} out of ${images.length - 1}`}
            {!hasCover && `${currentImage.description}`}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
