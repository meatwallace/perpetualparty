import React from "react";

type Props = {
  label: React.ReactText;
  value: React.ReactText;
};

export function DebugInfoProperty(props: Props) {
  return (
    <span style={styles.line}>
      <span style={styles.label}>{props.label}: </span>
      <span style={styles.value}>{props.value}</span>
    </span>
  );
}

const styles = {
  line: {
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginBottom: "4px"
  },
  label: {
    fontWeight: 600,
    display: "inline-block",
    minWidth: "200px"
  },
  value: {}
};
