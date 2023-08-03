import { useEffect, useState } from "react";

function useColorMode() {
  const [colorMode, setColorMode] = useState<any>("");

  useEffect(() => {
    //classList of body
    const bodyClasses = window.document.body.classList;
    //simple constant
    const className = "dark";
    // logic that will add or remove className variable
    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
}

export default useColorMode;
