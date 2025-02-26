import React from "react";

// Importing images
import picture1 from "../assets/img/picture1.jpg";
import picture2 from "../assets/img/picture2.jpg";
import picture4 from "../assets/img/picture4.jpg";
import picture5 from "../assets/img/Picture5.png";
import picture7 from "../assets/img/picture7.jpg";
import picture16 from "../assets/img/picture16.jpg";
import picture17 from "../assets/img/picture17.jpg";
import picture18 from "../assets/img/picture18.jpg";

const Gallery = () => {
    return (
        <section id="Gallery">
            <div className="gallery">
                <figure className="gallery-item">
                    <img src={picture1} alt="Gallery Image 1" />
                </figure>
                <figure className="gallery-item">
                    <img src={picture5} alt="Gallery Image 2" />
                </figure>
                <figure className="gallery-item">
                    <img src={picture18} alt="Gallery Image 3" />
                </figure>
                <figure className="gallery-item">
                    <img src={picture4} alt="Gallery Image 4" />
                </figure>
                <div className="gallery-text">
                    <h2>
                        <span id="Dept_of">Department of</span>{" "}
                        <span id="IT">Information   </span>
                        <span id="dept"> Technology</span>
                    </h2>
                </div>
                <figure className="gallery-item">
                    <img src={picture17} alt="Gallery Image 5" />
                </figure>
                <figure className="gallery-item">
                    <img src={picture7} alt="Gallery Image 6" />
                </figure>
                <figure className="gallery-item">
                    <img src={picture16} alt="Gallery Image 7" />
                </figure>
                <figure className="gallery-item">
                    <img src={picture2} alt="Gallery Image 8" />
                </figure>
            </div>
            <hr className="line-2" />
        </section>
    );
};

export default Gallery;
