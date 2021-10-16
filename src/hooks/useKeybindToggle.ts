import { useToggle } from "react-use";
import { useHotkeys } from "react-hotkeys-hook";

export function useKeybindToggle(
  keybind: string,
  callback?: () => void
): [boolean, () => void] {
  const [isVisible, toggleVisible] = useToggle(false);

  const onKeybindPressed = () => {
    toggleVisible();
    callback?.();
  };

  useHotkeys(keybind, onKeybindPressed, {}, [isVisible, onKeybindPressed]);

  return [isVisible, toggleVisible];
}
