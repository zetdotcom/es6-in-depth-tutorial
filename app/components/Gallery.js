import React, {Component} from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        {this
          .props
          .items
          .map((item, index) => {
            let alternate = "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return (
              <div key={index} className="book">

                <img
                  src={imageLinks !== undefined
                  ? imageLinks.thumbnail
                  : alternate}
                  alt="book image"
                  className="book-img"/>
                <div className="book-text">
                  {title}
                </div>
              </div>
            )
          })
}
      </div>
    )
  }
}

export default Gallery;