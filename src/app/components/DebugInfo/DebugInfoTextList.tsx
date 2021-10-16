import { DebugInfoSection } from './DebugInfoSection';

type Props = {
  items: Array<string>;
  title: string;
};

export function DebugInfoTextList(props: Props) {
  return (
    <DebugInfoSection title={props.title}>
      <ul
        style={{
          maxHeight: '250px',
          overflowX: 'hidden',
          overflowY: 'scroll',
        }}
      >
        {props.items.map((item) => (
          <li
            key={item}
            style={{
              display: 'block',
              height: '25px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </DebugInfoSection>
  );
}
