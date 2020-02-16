import React from "react";
import { Marker } from "./Marker";
import { useStateMap, useDispatchMap } from "../hooks/mapHook";

export const MarkerList = () => {
  const { markers } = useStateMap();
  const mapDispatch = useDispatchMap();
  return (
    <>
      {markers?.map((marker, index) => (
        <Marker
          key={index}
          marker={marker}
          handleRemove={() =>
            mapDispatch({ type: "REMOVE_MARKER", payload: { marker } })
          }
        />
      ))}
    </>
  );
};
