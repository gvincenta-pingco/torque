/*extract relevant torque data depending on:
1. what profile we are looking at
2. direction: "Open" or "Close"
*/
export const extractTorqueData = ({
  data,
  currentProfile,
  currentDirection,
}) => {
  const filteredData = data
    .filter(
      ({ Direction, Profile }) =>
        currentProfile === Profile && Direction === currentDirection //only allow matching profile & direction.
    )
    .map(({ AverageTorque, LastTorque, Position }) => {
      return {
        AverageTorque,
        LastTorque,
        x: Position, //relabel Position with 'x' for chartJS
      };
    });
  const labels = Array.from(new Set(filteredData.map(({ x }) => Number(x)))); //gives out x-axis labels

  return {
    dataset: filteredData,
    labels,
  };
};
