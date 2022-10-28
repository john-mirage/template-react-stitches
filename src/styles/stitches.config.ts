import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
    space: {
      4: "0.25rem",
    }
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
  },
});
