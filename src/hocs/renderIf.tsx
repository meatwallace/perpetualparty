import React from "react";

export function renderIf<T>(
  Component: React.ComponentType<T>,
  predicate: () => boolean
) {
  return (props: T) => {
    const result = predicate();

    if (!result) {
      return null;
    }

    return <Component {...props} />;
  };
}
