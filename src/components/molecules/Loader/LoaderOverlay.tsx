import { Loader } from "lucide-react";
import { Overlay } from "./LoaderOverlay.styles";

export const LoaderOverlay = () => {
  return (
    <Overlay>
      <Loader />
    </Overlay>
  );
};
