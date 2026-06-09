import React from 'react';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New function component starts here:

function Friend(){
    return (
      <div>
        <h1>{friends[0].title}</h1>
        <img 
          src={friends[0].src}
          alt={friends}
          width={200} />
      </div>
    );
}
export default Friend;