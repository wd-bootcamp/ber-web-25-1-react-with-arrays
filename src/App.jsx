import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import Comment from "./components/Comment";

const comments = [
  {
    id: "comment-10",
    user: "SimplyMe",
    text: "Amazing picture!",
    upvotes: 4,
  },
  {
    id: "comment-2",
    user: "NatureLover",
    text: "The colors are just incredible. Where was this taken?",
    upvotes: 18,
  },
  {
    id: "comment-3",
    user: "PixelPusher",
    text: "Great composition! The lighting is perfect.",
    upvotes: 15,
  },
  {
    id: "comment-4",
    user: "WanderlustSoul",
    text: "Adding this to my travel bucket list!",
    upvotes: 12,
  },
  {
    id: "comment-5",
    user: "ArtisticEye",
    text: "The details are stunning. Well done!",
    upvotes: 10,
  },
  {
    id: "comment-6",
    user: "DailyViewer",
    text: "Wow, just wow. Thanks for sharing!",
    upvotes: 8,
  },
  {
    id: "comment-7",
    user: "AdventureSeeker",
    text: "This makes me want to explore!",
    upvotes: 7,
  },
  {
    id: "comment-8",
    user: "CreativeMind",
    text: "I'm inspired by this photo!",
    upvotes: 6,
  },
  {
    id: "comment-9",
    user: "LandscapeLover",
    text: "Beautiful landscape. Love it!",
    upvotes: 5,
  },
  {
    id: "comment-1",
    user: "PhotoFanatic",
    text: "This shot is absolutely breathtaking!",
    upvotes: 23,
  },
];

export default function App() {
  const [sortingOrder, setSortingOrder] = useState("desc");

  const sortedComments = comments.toSorted((a, b) => {
    if (sortingOrder === "asc") {
      return a.upvotes - b.upvotes;
    } else {
      return b.upvotes - a.upvotes;
    }
  });

  return (
    <main className="app">
      <h1 className="app__title">MyPic</h1>
      <img
        className="app__image"
        src="https://images.pexels.com/photos/7004697/pexels-photo-7004697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <button
        onClick={() => {
          if (sortingOrder === "asc") {
            setSortingOrder("desc");
          } else {
            setSortingOrder("asc");
          }
        }}
      >
        change order
      </button>
      <ul className="app__comments">
        {sortedComments.map((comment) => (
          <li key={comment.id}>
            <Comment
              user={comment.user}
              text={comment.text}
              upvotes={comment.upvotes}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

// We need a key so that React can find each element, if the order of the
// rendered elements changes.
// Key must have two abilities:
// 1. has to be unique
// 2. it must be independent of the place in the array (don't use the Index!!!)
// 3. ids have to be consistent over render cycles ( don't use key={crypto.randomUUID()})
