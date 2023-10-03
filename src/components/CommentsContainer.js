import React from "react";
import CommentsList from "./CommentsList";

const CommentsData = [
  {
    name: "Charan Gs",
    text: "Lorem ipsum burksd ssfe",
    replies: [
      {
        name: "Charan Gs",
        text: "Lorem ipsum burksd ssfe",
        replies: [
          {
            name: "Charan Gs",
            text: "Lorem ipsum burksd ssfe",
            replies: [
              {
                name: "Charan Gs",
                text: "Lorem ipsum burksd ssfe",
                replies: [],
              },
              {
                name: "Charan Gs",
                text: "Lorem ipsum burksd ssfe",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Charan Gs",
    text: "Lorem ipsum burksd ssfe",
    replies: [],
  },
  {
    name: "Charan Gs",
    text: "Lorem ipsum burksd ssfe",
    replies: [],
  },
  {
    name: "Charan Gs",
    text: "Lorem ipsum burksd ssfe",
    replies: [
      {
        name: "Charan Gs",
        text: "Lorem ipsum burksd ssfe",
        replies: [],
      },
      {
        name: "Charan Gs",
        text: "Lorem ipsum burksd ssfe",
        replies: [],
      },
      {
        name: "Charan Gs",
        text: "Lorem ipsum burksd ssfe",
        replies: [],
      },
    ],
  },
  {
    name: "Charan Gs",
    text: "Lorem ipsum burksd ssfe",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl py-2 mb-1">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
