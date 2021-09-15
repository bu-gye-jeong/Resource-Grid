import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import resourceImage from "../resources/Resources.png";
// eslint-disable-next-line
import Resource from "../class/Resource";
import { Resources } from "../data/resources";

const RecipeDisplayer = styled.div`
  position: absolute;
  width: 50%;
  right: -5%;
  top: 0;
`;
const ResourceImage = styled.div`
  --imageSize: calc((var(--boxSize) / var(--boxRatio) - var(--margin)) / 5);
  --resourceGap: calc(var(--imageSize) * 9 / 8);
  --imageScale: calc(81 / 8);

  display: inline-block;

  box-sizing: content-box;
  margin-top: 0.3em;
  margin-right: 0.3em;

  width: var(--imageSize);
  height: var(--imageSize);

  background-image: url(${resourceImage});
  background-repeat: no-repeat;
  background-size: calc(100% * var(--imageScale));
  image-rendering: pixelated;
  filter: drop-shadow(
    calc(var(--min) / 500) calc(var(--min) / 500) 0 var(--colStrong)
  );
`;

/**
 * @param {Object} obj
 * @param {Resource} obj.data
 */
export function RecipeDisplayerContainer({ data }) {
  const have = useSelector((state) => state.save.items[data.name].have);

  const cost = data.cost(have);

  return cost ? (
    <RecipeDisplayer>
      {Object.entries(cost).map((v, i) => (
        <div key={i}>
          <ResourceImage
            style={{
              backgroundPosition: `calc(var(--resourceGap) 
                * -${Resources[v[0]].position.x}) 
                calc(var(--resourceGap) 
                * -${Resources[v[0]].position.y})`,
            }}
          />
          x {v[1]}
        </div>
      ))}
    </RecipeDisplayer>
  ) : (
    <></>
  );
}
