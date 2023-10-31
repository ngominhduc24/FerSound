import React, { useState } from 'react';
import './Body.css';

function Body() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const database = {
    users: [
      // ... (Danh sách người dùng)
    ],
    song: [
      {
        "id": 1,
        "name": "Dance Monkey",
        "singer": "Tones and I",
        "author": "Tones and I",
        "thumbnail": "https://i.ytimg.com/vi/1__CAdTJ5JU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
        "dateUpload": "2021-10-10",
        "views": 100,
        "userId": 1
      },
      {
        "id": 2,
        "name": "Shape of You",
        "singer": "Ed Sheeran",
        "author": "Ed Sheeran",
        "thumbnail": "https://i.ytimg.com/vi/1__CAdTJ5JU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
        "views": 375,
        "dateUpload": "2022-09-29",
        "userId": 1
      },
      {
        "id": 3,
        "name": "Let Me Down Slowly",
        "singer": "Alec Benjamin",
        "author": "Alec Benjamin",
        "thumbnail": "https://i.ytimg.com/vi/1__CAdTJ5JU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
        "views": 126,
        "dateUpload": "2023-01-01",
        "userId": 1
      },
      {
        "id": 3,
        "name": "Beatifulday",
        "singer": "Den Vau",
        "author": "Den Vau",
        "thumbnail": "https://i.ytimg.com/vi/1__CAdTJ5JU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
        "views": 126,
        "dateUpload": "2023-02-01",
        "userId": 1
      },
      {
        "id": 3,
        "name": "Candy",
        "singer": "Ngai",
        "author": "Ngai",
        "thumbnail": "https://i.ytimg.com/vi/1__CAdTJ5JU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
        "views": 126,
        "dateUpload": "2023-02-01",
        "userId": 1
      },
      // ... (Danh sách bài hát)
    ],
    // ... (Các phần khác của cơ sở dữ liệu)
  };
  const songs = database.song;

  const performSearch = () => {
    // Thực hiện tìm kiếm dựa trên searchQuery ở đây
    // Đây là ví dụ đơn giản, bạn có thể thay đổi nội dung của setSearchResults
    const sampleSearchResults = [
      'Bài hát 1',
      'Bài hát 2',
      'Bài hát 3',
    ];

    setSearchResults(sampleSearchResults);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Bạn muốn nghe gì..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button onClick={performSearch}>Tìm kiếm</button>
        </div>
        <div className="account-info" onClick={toggleOptions}>
          {/* Đặt nội dung tài khoản ở đây */}
          {showOptions && (
            <div className="account-options">
              <div>Đăng xuất</div>
              <div>Tài khoản</div>
            </div>
          )}
        </div>
      </div>
      <h3>Các tìm kiếm gần đây</h3>
      <div className="search-results">
        {/* Kết quả tìm kiếm */}
        {songs.map((song, index) => (
          <div className="song-card" key={index}>
            <img src={song.thumbnail} alt={song.name} />
            <p className= "song-name">{song.name}</p>
            <p>{song.singer}</p>
          </div>
        ))}
      </div>
      <h3>Duyệt tất cả</h3>
      <div className="search-results-2">
        {/* Kết quả tìm kiếm */}
        {songs.map((song, index) => (
          <div className="song-card-2" key={index}>
            <img src={song.thumbnail} alt={song.name} />
            <p className= "song-name">{song.name}</p>
            <p>{song.singer}</p>
          </div>
        ))}
      </div> 
      <div className="search-results-2">
        {/* Kết quả tìm kiếm */}
        {songs.map((song, index) => (
          <div className="song-card-2" key={index}>
            <img src={song.thumbnail} alt={song.name} />
            <p className= "song-name">{song.name}</p>
            <p>{song.singer}</p>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default Body;
