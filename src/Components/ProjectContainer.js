/** @format */

import React from "react";
import styled from "styled-components";

export default function ProjectContainer({
  picture,
  text,
  description,
  items,
  link,
}) {
  return (
    <Hero>
      <Image img={`${picture}`}></Image>
      <div id="container">
        <a>{text}</a>
        <p>{description}</p>
        <ul>
          {items &&
            items.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
        </ul>
        <a href={link}>
          <i
            className="fab fa-github"
            style={{ color: "white", marginLeft: "15px", marginTop: "10px" }}
          ></i>
        </a>
      </div>
    </Hero>
  );
}

const Image = styled.div`
  width: 460px;
  height: 320px;
  border-radius: 5px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    width: 400px;
    height: 260px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
  }
  @media (max-width: 568px) {
    width: 250px;
    height: 130px;
  }
`;

const Hero = styled.div`
  position: relative;

  font-weight: 600;

  ul {
    margin-top: 10px;
    display: flex;
  }

  li {
    list-style: none;
    color: #9900fa;
    margin: 5px;
  }

  #container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    width: 80%;
  }

  a {
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
    color: #9900fa;
  }

  li {
    border: 1px solid #9900fa;
    padding: 2px 4px;
  }

  p {
    color: white;
  }
  &:hover {
    #container {
      display: block;
    }
  }
  &:hover ${Image} {
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    a {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    margin: 20px;
    p {
      display: none;
    }
  }
`;
