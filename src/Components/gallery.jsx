import React from "react";

const Gallery = () => {
    return (
        <section id="Gallery">
            <div className="gallery">
                <figure className="gallery-item">
                    <img src="assets/img/picture1.jpg" alt="Gallery Image 1" />
                </figure>
                <figure className="gallery-item">
                    <img src="assets/img/Picture5.png" alt="Gallery Image 2" />
                </figure>
                <figure className="gallery-item">
                    <img src="assets/img/picture18.jpg" alt="Gallery Image 3" />
                </figure>
                <figure className="gallery-item">
                    <img src="assets/img/picture4.jpg" alt="Gallery Image 4" />
                </figure>
                <div className="gallery-text">
                    <h2>
                        <span id="Dept_of">Department of</span>{" "}
                        <span id="ITdept">Information Technology</span>
                    </h2>
                </div>
                <figure className="gallery-item">
                    <img src="assets/img/picture17.jpg" alt="Gallery Image 5" />
                </figure>
                <figure className="gallery-item">
                    <img src="assets/img/picture7.jpg" alt="Gallery Image 6" />
                </figure>
                <figure className="gallery-item">
                    <img src="assets/img/picture16.jpg" alt="Gallery Image 7" />
                </figure>
                <figure className="gallery-item">
                    <img src="assets/img/picture2.jpg" alt="Gallery Image 8" />
                </figure>
            </div>
            <hr className="line-2" />
        </section>
    );
};

export default Gallery;
