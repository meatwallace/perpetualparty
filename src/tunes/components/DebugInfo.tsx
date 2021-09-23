import { isProduction } from "../../config";

export function DebugInfo(props: { data: Record<string, unknown> }) {
  if (isProduction) {
    return null;
  }

  // TODO: style
  return (
    <div>
      <span>Debug Info</span>
      <pre>{JSON.stringify(props.data)}</pre>
    </div>
  );
}
