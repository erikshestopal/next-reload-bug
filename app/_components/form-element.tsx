"use client";

import { match } from "ts-pattern";
import { z } from "zod";
import { MultipleChoiceField } from "./multiple-choice";

/**
 * Instructions:
 * 1. Hit CMD + S a few times to trigger hot reload.
 * 2. Uncomment the code below and comment out the component at the bottom.
 * 3. Hit CMD + S again a few times and observe the tab freezing.
 */

// export const FormElement = z
//   .function()
//   .args(z.any())
//   .implement((props) => {
//     const id = props.block.id;
//     return match(props.block)
//       .with({ type: "multiple_choice" }, () => (
//         <MultipleChoiceField key={id} {...props} />
//       ))
//       .otherwise(() => {
//         return null;
//       });
//   });

export const FormElement = (props) => {
  const id = props.block.id;
  return match(props.block)
    .with({ type: "multiple_choice" }, () => (
      <MultipleChoiceField key={id} {...props} />
    ))
    .otherwise(() => {
      return null;
    });
};
