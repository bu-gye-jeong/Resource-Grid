// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import resourceImage from "../resources/Resources.png";
// eslint-disable-next-line
import Resource from "../class/Resource";
import { buy } from "../slices/saveSlice";

const ResourceGridItem = styled.div`
  --margin: calc(var(--cellSize) / 10);
  --boxRatio: 1.3;
  --boxSize: calc(var(--cellSize) - var(--margin));

  margin: calc(var(--margin) / 2);

  width: calc(var(--boxSize) / var(--boxRatio));
  height: calc(var(--boxSize));

  background-color: var(--colMain3);
  border-radius: calc(var(--boxSize) / 15);
  box-shadow: var(--baseShadow);

  transform: scale(1);
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0, 0.79, 0.32, 1);

  &:hover {
    width: calc(var(--boxSize) / var(--boxRatio) * 2);
    background-color: var(--colMain4);
    transform: scale(1.4);
    z-index: 1;
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
const textGoLeft = keyframes`
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  50% {
    transform: translateX(-100%);
  }
  50.0001% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;
const ResourceName = styled.div`
  overflow: hidden;

  &::after {
    --shadowSize: calc(var(--boxSize) / 10);

    min-width: 100%;

    display: inline-block;

    content: attr(name);

    color: var(--colReverse);
    animation: ${textGoLeft} 3s linear infinite;
  }
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

  return data ? (
    <ResourceGridItem onClick={handleClick}>
      <ResourceInfo>
        <span>
          <ResourceImage
            style={{
              backgroundPosition: `calc(var(--resourceGap) * -${data.position.x}) calc(var(--resourceGap) * -${data.position.y})`,
            }}></ResourceImage>
          <ResourceQuantity>{items[data.name].have}</ResourceQuantity>
        </span>
        <span>
          <ResourceName
            name={data.name.replace(
              /(.)([A-Z])/g,
              (_, g1, g2) => `${g1} ${g2}`
            )}></ResourceName>
        </span>
      </ResourceInfo>
    </ResourceGridItem>
  ) : (
    <ResourceGridItem style={{ opacity: 0, pointerEvents: "none" }} />
  );
}

export default RescouceGridItem;
