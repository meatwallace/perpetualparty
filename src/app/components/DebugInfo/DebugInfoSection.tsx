import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export function DebugInfoSection(props: Props) {
  return (
    <section style={styles.container}>
      <h3 style={styles.title}>{props.title}</h3>
      {props.children}
    </section>
  );
}

const styles = {
  container: {
    marginBottom: "16px"
  },
  title: {
    fontSize: "16px",
    marginBottom: "8px"
  }
};
