import React from 'react';

type Props = {
  label: React.ReactText;
  value: React.ReactText;
};

export function DebugInfoProperty(props: Props) {
  return (
    <span
      style={{
        display: 'block',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          fontWeight: 600,
          minWidth: '200px',
        }}
      >
        {props.label}:
      </span>
      <span>{props.value}</span>
    </span>
  );
}
