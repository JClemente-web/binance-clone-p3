import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { styles } from './AssetAllocationChart.styles';

export type AssetSlice = {
  color: string;
  percent: number; // 0-100
};

type Props = {
  size?: number;
  strokeWidth?: number;
  slices: AssetSlice[];
};

export default function AssetAllocationChart({
  size = 120,
  strokeWidth = 18,
  slices,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let offsetAccumulated = 0;

  return (
    <View style={styles.wrapper}>
      <Svg width={size} height={size}>
        {slices.map((slice, index) => {
          const sliceLength = (slice.percent / 100) * circumference;
          const dashArray = `${sliceLength} ${circumference - sliceLength}`;
          const dashOffset = -offsetAccumulated;
          offsetAccumulated += sliceLength;

          return (
            <Circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={slice.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              fill="transparent"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
        })}
      </Svg>
    </View>
  );
}
