import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function NewsPage() {
  const { stateName, districtName, constituencyName, mandalName } = useParams();
  const [newsData, setNewsData] = useState([]);
  let apiUrl = `your_backend_api_url/${stateName}`;

  if (districtName) {
    apiUrl += `/${districtName}`;
  }

  if (constituencyName) {
    apiUrl += `/${constituencyName}`;
  }

  if (mandalName) {
    apiUrl += `/${mandalName}`;
  }

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setNewsData(response.data); // Update the state with fetched news data
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
      });
  }, [apiUrl]);

  return (
    <div>
      {/* Render your news content using the newsData state */}
      {newsData.map((newsItem, index) => (
        <div key={index}>
          {/* Render individual news items here */}
          <h2>{newsItem.title}</h2>
          <p>{newsItem.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsPage;
