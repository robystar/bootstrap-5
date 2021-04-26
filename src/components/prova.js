import React, { Component } from "react";

import AsyncSelect from "react-select/async";
import { colourOptions } from "../db/data";
import comuni from "../db/comuni";

type State = {
  inputValue: string,
};

const filterOptions = (inputValue: string) => {
  let results = [];
  let re = RegExp('^' + inputValue, 'i');
  comuni.forEach(function(comune, index) {
      if (re.test(comune[1])) {
        results.push({"value":comune[0], "label":comune[1], "sigla":comune[2], "cap":comune[3]})
      }
  })
  return results
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterOptions(inputValue));
  }, 1000);
};

export default class WithCallbacks extends Component<*, State> {
  state = { inputValue: "" };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <div>
        <pre>inputValue: "{this.state.inputValue}"</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => `<strong>${option.label}</strong> ${option.value}`}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
