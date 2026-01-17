import React from 'react';
import { Text } from 'react-native';

export default function HighlightText({ text, highlight, highlightStyle }) {
  if (!highlight) return <Text>{text}</Text>;

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <Text>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <Text key={index} style={highlightStyle}>
            {part}
          </Text>
        ) : (
          <Text key={index}>{part}</Text>
        )
      )}
    </Text>
  );
}

