import RedoAnimText from "./ReDoAnimText";
import CursorBlinker from "./CursorBlinker";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  return (
    <span>
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}
