import { DebugInfoSection } from "./DebugInfoSection";

type Props = {
  items: Array<string>;
  title: string;
};

export function DebugInfoTextList(props: Props) {
  return (
    <DebugInfoSection title={props.title}>
      <ul style={styles.list}>
        {props.items.map((item) => (
          <li key={item} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </DebugInfoSection>
  );
}

const styles = {
  list: {
    maxHeight: "250px",
    overflowX: "hidden",
    overflowY: "scroll"
  },
  item: {
    display: "block",
    height: "25px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
};
