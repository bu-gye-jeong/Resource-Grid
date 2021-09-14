// import { useState } from 'react';
import styled from "styled-components";
import RescouceGridItem from "./RescouceGridItem.js";
import { ResourceArr } from "../data/resources.js";
import { savefile } from "../saveload.js";

const RescouceGrid = styled.div`
  --cellSize: calc(var(--min) / 9);

  flex: 9;

  display: grid;
  grid-template-columns: repeat(9, minmax(var(--cellSize), 1fr));
  grid-auto-rows: var(--cellSize);
  grid-auto-columns: var(--cellSize);
  place-items: center;
`;
const OtherContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--colReverseWeak);
  font-weight: bold;
  font-size: 2em;
  opacity: 0.3;

  flex: 7;
`;

function ResourceGrid() {
  return (
    <>
      <RescouceGrid>
<<<<<<< HEAD
        {ResourceArr.map((resource, index) => (
          <RescouceGridItem data={resource} key={index} />
        ))}
=======
          {ResourceArr.map((resource, index) => (
            <RescouceGridItem
              key={resource !== null ? resource.name : `empty_${index}`}
              data={resource}
              save={savefile.resources[index]}
              index={index}
            />
          ))}
>>>>>>> 9f4a3ac894378e72abbe08268ec7d4c9ae5e2ec7
      </RescouceGrid>
      <OtherContents>- Nothing -</OtherContents>
    </>
  );
}

export default ResourceGrid;
