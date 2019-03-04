import React, { Component, Fragment } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';
import Modal from './Modal';

export class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1,
    modalImg: null
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState(prevState => ({
        images: prevState.images.concat(res.data)
      }))
    );
  };

  imageClicked = (id, img) => {
    console.log(
      `image ${id} has been clicked whose full screen image is ${img}`
    );
    this.setState({ modalImg: img });
  };

  closeModal = () => this.setState({ modalImg: null });

  render() {
    const { images, modalImg } = this.state;
    if (images.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <Fragment>
        {modalImg && (
          <Modal
            show={modalImg !== null}
            header="Image header"
            onClose={this.closeModal}
            overlay={true}
          >
            <img src={modalImg} alt="" />
          </Modal>
        )}
        <div className="images">
          <InfiniteScroll
            dataLength={images.length}
            next={this.fetchImages}
            hasMore={true}
            scrollThreshold={0.65}
          >
            {images.map(image => (
              <Image
                key={image.id}
                image={image}
                imageClicked={this.imageClicked}
              />
            ))}
          </InfiniteScroll>
        </div>
      </Fragment>
    );
  }
}

export default Images;
