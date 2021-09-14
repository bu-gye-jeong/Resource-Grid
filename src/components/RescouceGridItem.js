// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import resourceImage from "../resources/Resources.png";
// eslint-disable-next-line
import Resource from "../class/Resource";
import { buy } from "../slices/saveSlice";
import { useEffect, useRef, useState } from "react";

const namespaceAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%) scale(0.2, 1);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1, 1);
  }
`;
const ResourceGridItem = styled.div`
  --margin: calc(var(--cellSize) / 10);
  --boxRatio: 1.3;
  --boxSize: calc(var(--cellSize) - var(--margin));

  display: inline-block;

  margin: calc(var(--margin) / 2);

  width: calc(var(--boxSize) / var(--boxRatio));
  height: calc(var(--boxSize));

  background-color: var(--colMain3);
  --bgCol: var(--colMain3);
  border-radius: calc(var(--boxSize) / 15);
  box-shadow: var(--baseShadow);

  transform: scale(1);
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0, 0.79, 0.32, 1);

  &:hover {
    width: calc(var(--boxSize) / var(--boxRatio) * 2);
    background-color: var(--colMain4);
    --bgCol: var(--colMain4);
    transform: scale(1.4);
    z-index: 1;
  }

  &:hover::before {
    content: attr(name);

    padding: 1% 5%;

    min-width: 60%;
    height: 15%;

    position: absolute;
    top: -15%;
    left: 5%;

    color: var(--colMainReverse);
    word-spacing: -0.3em;
    font-size: 0.9em;
    text-align: center;

    background-color: var(--colMain4);
    border-radius: calc(var(--cellSize) / 30);
    box-shadow: var(--baseShadow);

    animation: ${namespaceAppear} 0.4s cubic-bezier(0.12, 0.81, 0.31, 0.95);
  }
`;
const ResourceInfo = styled.div`
  display: flex;
  overflow: hidden;

  & > span {
    display: inline-block;

    width: calc(var(--boxSize) / var(--boxRatio));
    height: calc(var(--boxSize));
  }
`;
const ResourceImage = styled.div`
  --imageSize: calc(var(--boxSize) / var(--boxRatio) - var(--margin));
  --resourceGap: calc(var(--imageSize) * 9 / 8);
  --imageScale: calc(81 / 8);

  box-sizing: content-box;
  margin: calc(var(--margin) / 2);

  width: var(--imageSize);
  height: var(--imageSize);

  background-image: url(${resourceImage});
  background-repeat: no-repeat;
  background-size: calc(100% * var(--imageScale));
  image-rendering: pixelated;
  filter: drop-shadow(var(--baseShadow));
`;
const ResourceQuantity = styled.div`
  padding-right: calc(var(--boxSize) / 20);

  text-align: right;
  font-weight: bolder;
  color: var(--colReverse);
`;
const ResourceProgress = styled.div`
  border-radius: calc(var(--boxSize) / 15);

  left: 0;
  bottom: 0;

  position: absolute;

  width: 100%;

  background-color: var(--colOverlay);
`;
const ShadowBlocker = styled.div`
  position: absolute;
  background-color: var(--bgCol);
  animation: ${namespaceAppear} 0.4s cubic-bezier(0.12, 0.81, 0.31, 0.95);

  height: calc(var(--min) / 25);
  width: 99%;

  border-radius: calc(var(--boxSize) / 15);
`;

/**
 * @param {Object} obj
 * @param {Resource} obj.data
 */
function RescouceGridItem({ data }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(buy(data.name));
  };

  const items = useSelector((state) => state.save.items);
  const [progress, setProgress] = useState(0);
  const [isHover, setHover] = useState(false);
  let intervalId = useRef(0);

  const startTime = items[data.name].startTime;

  useEffect(() => {
    clearInterval(intervalId.current);
    setProgress(0);
    if (startTime !== 0) {
      intervalId.current = setInterval(() => {
        setProgress(
          Math.floor(
            Math.min(
              (new Date().getTime() - startTime) / 10 / data.craftTime,
              100
            )
          )
        );
      }, 100);
    }
  }, [startTime, data.craftTime]);

  return (
    <ResourceGridItem
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      name={data.name.replace(/(.)([A-Z])/g, (_, g1, g2) => `${g1} ${g2}`)}>
      <ShadowBlocker />
      <ResourceProgress style={{ height: progress + "%" }} />
      <ResourceInfo>
        <span>
          <ResourceImage
            style={{
              backgroundPosition: `calc(var(--resourceGap) * -${data.position.x}) calc(var(--resourceGap) * -${data.position.y})`,
            }}></ResourceImage>
          <ResourceQuantity>{items[data.name].have}</ResourceQuantity>
        </span>
      </ResourceInfo>
    </ResourceGridItem>
  );
}

export function EmptyGridItem() {
  return <ResourceGridItem style={{ opacity: 0, pointerEvents: "none" }} />;
}

export default RescouceGridItem;
