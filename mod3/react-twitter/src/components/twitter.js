import React, { useEffect, useState } from 'react';
import Tweet from './tweet';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import css from './twitter.css';

const MAX_CHARS = 280;

export default function Twitter() {
  const [tweets, setTweets] = useState([]);
  const [charsRemaining, setCharsRemaining] = useState(MAX_CHARS);
  const [tweetDisable, setTweetDisable] = useState(true);
  const [charClass, setCharClass] = useState('classOk');

  useEffect(() => {
    const fetchTweets = async () => {
      const res = await axios('http://localhost:3001/tweets');

      setTweets(res.data);
    };
    fetchTweets();
  }, []);

  const handleSubmit = (e) => {
    const inputTweet = document.querySelector('#inputTweet');

    e.preventDefault();

    axios
      .post('http://localhost:3001/tweets', {
        id: uuidv4(),
        value: inputTweet.value,
      })
      .then(function (res) {
        // console.log(res);
        setTweets([...tweets, res.data]);
        setCharsRemaining(MAX_CHARS);
        inputTweet.value = '';
        inputTweet.focus();
        checkTweetDisabled(MAX_CHARS);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:3001/tweets/' + id)
      .then(function (res) {
        // console.log(res);
        setTweets(
          tweets.filter((tweet) => {
            return tweet.id !== id;
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function checkCharClass(remChars) {
    if (remChars >= 10) {
      setCharClass('classOk');
    } else if (remChars <= 9 && remChars >= 0) {
      setCharClass('classWarning');
    } else {
      setCharClass('classDanger');
    }
  }

  const checkTweetDisabled = (remChars) => {
    if (remChars === MAX_CHARS || remChars < 0) {
      setTweetDisable(true);
    } else {
      setTweetDisable(false);
    }
  };

  const handleCountChars = (e) => {
    if (e.target.value === ' ') {
      e.target.value = '';
      return;
    }

    const lengthInput = e.target.value.length;
    const remChars = MAX_CHARS - lengthInput;

    setCharsRemaining(remChars);
    checkTweetDisabled(remChars);
    checkCharClass(remChars);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode == 13) {
      if (!tweetDisable) {
        handleSubmit(e);
      }
    }
  };

  return (
    <div>
      <label>Escreva aqui:</label>
      <br />
      <textarea
        onChange={handleCountChars}
        id="inputTweet"
        onKeyDown={handleKeyDown}
      ></textarea>
      <br />
      <form id="tweetForm" onSubmit={handleSubmit}>
        <span className={charClass}>
          {charsRemaining} caracter(es) restante(s)
        </span>
        <button style={{ marginLeft: '10px' }} disabled={tweetDisable}>
          Twittar
        </button>
      </form>
      <div>
        <ul>
          {tweets.map((item) => (
            <Tweet key={item.id} tweet={item} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}
