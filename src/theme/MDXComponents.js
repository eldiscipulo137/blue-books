import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import LinePin from "../components/line-pin/line_pin";
import YogaAf from "../components/yoga-af/yoga-af";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  Pin: LinePin,
  Af: YogaAf,
};
