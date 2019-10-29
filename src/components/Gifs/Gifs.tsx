import React from "react";

interface IProps {
  children: React.ReactNode;
}

function Gifs({ children }: IProps) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group d-flex">{children}</ul>
    </div>
  );
}

function GifDiv ({ children }: IProps) {
    return <li className="list-group-item">{children}</li>
}

export { Gifs, GifDiv };