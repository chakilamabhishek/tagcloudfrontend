import React from 'react';
import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing';

/**
 * Custom label component for the CirclePackingCanvas.
 * Renders a Text with tag and frequency information.
 *
 * @param {Object} data - Data object containing id and value properties.
 * @returns {JSX.Element} - JSX element representing the label component.
 */
const labelComponent = (data) => {
  return <p>Tag: {data.id}, Frequency: {data.value}</p>;
};

/**
 * CirclePackingCanvas component.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data object for the CirclePackingCanvas.
 * @returns {JSX.Element} - JSX element representing the CirclePackingCanvas component.
 */
const CirclePackingCanvas = ({ data }) => {
  return (
    <ResponsiveCirclePackingCanvas
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }} // Set the margins for the canvas
      id="name"
      colors={{ scheme: 'accent' }}
      colorBy="id"
      childColor={{
        from: 'color',
        modifiers: [['brighter', 0.4]],
      }}
      padding={6} // Set the padding between circles
      leavesOnly={true} // Only render leaf nodes (circles without children)
      enableLabels={true} // Enable labels for each circle
      label="id" // Use the "id" property as the label
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 2.4]],
      }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]],
      }}
      tooltip={labelComponent} // Use the custom label component as the tooltip
    />
  );
};

export default CirclePackingCanvas;
