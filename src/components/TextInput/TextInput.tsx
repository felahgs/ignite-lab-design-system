import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

import {
  TextInputRootProps,
  TextInputElementProps,
  TextInputIconProps,
} from "./TextInput.types";

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-4 h-12 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300"
      )}
    >
      {props.children}
    </div>
  );
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export function TextInputElement(props: TextInputElementProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none "
    />
  );
}

TextInputRoot.displayName = "Textinput.Root";
TextInputElement.displayName = "Textinput.Element";
TextInputIcon.displayName = "Textinput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputElement,
  Icon: TextInputIcon,
};
