import { DebugInfoProperty } from "./DebugInfoProperty";
import { DebugInfoSection } from "./DebugInfoSection";

type Props = {
  title: string;
  data: Array<[string, React.ReactText]>;
};

export function DebugInfoProperties(props: Props) {
  return (
    <DebugInfoSection title={props.title}>
      {props.data.map(([label, value]) => (
        <DebugInfoProperty key={label} label={label} value={value} />
      ))}
    </DebugInfoSection>
  );
}
