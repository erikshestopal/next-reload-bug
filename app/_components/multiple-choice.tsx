import { z } from "zod";
import { FormElement } from "./form-element";

export const MultipleChoiceField = z
  .function()
  .args(z.any())
  .implement(({ block, formId }) => {
    const otherChildren = block.children.filter(
      (child) => child.type !== "choice"
    );

    return (
      <div>
        <button>click me to see if I'm frozen</button>
        {otherChildren.map((child) => (
          <FormElement key={child.id} block={child} formId={formId} />
        ))}
      </div>
    );
  });
