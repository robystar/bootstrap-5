import React, { Component } from "react";
import AsyncSelect from "react-select/async";
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

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, 10);
  });


export default class SelectComune extends Component {
  render() {
    return (
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
    );
  }
}
