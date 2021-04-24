import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import ReactDOM from "react-dom";

import "./styles.css";

let renderCount = 0;

function fetchData() {
  return new Promise((resolve) => {
    resolve({
      keyValue: [
        { name: "2a", value: "2b" },
        { name: "2c", value: "2d" }
      ]
    });
  });
}

function NestedArray({ control, name }) {
  const { fields, append, remove } = useFieldArray({ name, control });

  return (
    <>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <Controller
              as={<input />}
              name={`${name}[${index}].name`}
              control={control}
              defaultValue={item.name}
            />
            <Controller
              as={<input />}
              name={`${name}[${index}].value`}
              control={control}
              defaultValue={item.value}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          append({ name: "", value: "" });
        }}
      >
        append inner
      </button>
    </>
  );
}

function App() {
  const { register, control, handleSubmit, setValue } = useForm({
    defaultValues: {
      test: [
        {
          firstName: "Bill",
          lastName: "Luo",
          keyValue: [
            { name: "1a", value: "1b" },
            { name: "1c", value: "1d" }
          ]
        },
        { firstName: "Jack", lastName: "Foo", keyValue: [] }
      ]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  async function onFetchData() {
    const data = await fetchData();

    setValue("test[1].keyValue", data.keyValue);
  }

  const onSubmit = (data) => console.log("data", data);

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                {...register(`test[${index}].firstName`)}
                defaultValue={`${item.firstName}`}
              />

              <input
                {...register(`test[${index}].lastName`)}
                defaultValue={`${item.lastName}`}
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
            append({ firstName: "appendBill", lastName: "appendLuo" });
          }}
        >
          append outer
        </button>

        <button type="button" onClick={onFetchData}>
          fetch data
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
