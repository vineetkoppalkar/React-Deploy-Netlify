import React, { Component } from 'react'

class RandomGIF extends Component {

  state = {
    url: 'https://media.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif'
  }

  componentDidMount = async () => {
    const response = await fetch(process.env.REACT_APP_GIF_URL);
    const json = await response.json();
    this.setState({url: json.data.image_original_url});
  }

  render() {
    const { url } = this.state;
    return (
      <div>
        <img src={url} alt="gif" />
      </div>
    )
  }
}

export default RandomGIF;