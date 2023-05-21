import React, { Component } from 'react';
import CirclePackingCanvas from './CirclePackingCanvas';

const THRESHOLD_LIMIT = 15;

class App extends Component {
  constructor(props) {
    super(props);

    // Component state.
    this.state = {
      tagcloudFrequency: [],
      isLoading: true,
      tagcloudFrequencyWithLikesAndRetweets :[],
    };
  }

  componentDidMount() {
    // Fetch tag clouds data from our backend server ..
    fetch('http://localhost:3005/gettagclouds?threshold='+THRESHOLD_LIMIT)
      .then((response) => response.json())
      .then((data) => {
        // Update component state with fetched data
        this.setState({ tagcloudFrequency: data.tagFrequency, tagcloudFrequencyWithLikesAndRetweets: data.tagFrequencywithlikesAndRetweets, isLoading: false });
      })
      .catch((error) => {
        console.error('Error fetching tag clouds:', error);
        this.setState({ isLoading: false });
      });
  }

  /**
   * Converts tag data to the required format for CirclePackingCanvas.
   *
   * @param {Array} tags - Array of tag objects.
   * @returns {Array} - Converted data array for CirclePackingCanvas.
   */
  convertTagsToData(tags) {
    return tags.map((tag) => { return { name: tag.tag, value: tag.frequency } });
  }

  render() {
    const { tagcloudFrequency,tagcloudFrequencyWithLikesAndRetweets, isLoading } = this.state;

    if (isLoading) {
      // Show loading indicator while data is being fetched
      return <div>Loading...</div>;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>Tag Cloud with Original Tweets</h1>
          <div className="App" style={{ height: 500, width: 600 , border: '1px solid black', borderStyle: 'solid'}}>
            <CirclePackingCanvas
              data={{ name: 'root', children: this.convertTagsToData(tagcloudFrequency) }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', marginLeft:'20px', flexDirection: 'column', borderLeft: '5px solid black', paddingLeft: '20px' }}>
          <h1>Tag Cloud with Added likes And Retweets</h1>
          <div className="App" style={{ height: 500, width: 600 , border: '1px solid black', borderStyle: 'solid' }}>
            <CirclePackingCanvas
              data={{ name: 'root', children: this.convertTagsToData(tagcloudFrequencyWithLikesAndRetweets) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
