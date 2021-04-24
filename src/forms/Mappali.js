import React from "react";
import { useFieldArray } from "react-hook-form";


let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
  const { fields, append, remove, prepend } = useFieldArray({
    name: "mappali"
  });

  renderCount++;

  return (
    <>
      <ul>
          Mappali:
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                {...register(`mappali.${index}.foglio`)}
                defaultValue={item.foglio}
              />
              <input
                {...register(`mappali.${index}.mappale`)}
                defaultValue={item.mappale}
              />
              <input
                {...register(`mappali.${index}.subalterno`)}
                defaultValue={item.subalterno}
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append();
          }}
        >
          append
        </button>

        <button
          type="button"
          onClick={() => {
            prepend();
          }}
        >
          prepend
        </button>

      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
