"use client";

import { data } from "../data";
import { FormElement } from "./_components/form-element";

export default function Home() {
  return (
    <div>
      <h1>
        Open <code>app/form-element.tsx</code> to see the reproduction
      </h1>
      {data.map((field) => {
        return (
          <div key={field.id} className="col-span-12 flex flex-col gap-4">
            <FormElement key={field.id} block={field} formId="123" />
          </div>
        );
      })}
    </div>
  );
}
