import { Fragment, useState } from "react";
import CustomerList from "./CustomerList";
import List from "./List";

const SearchCustomers = () => {
  const [list, setList] = useState(List);

  return (
    <Fragment>
      <div>
        <input
          type="text"
          placeholder="search customer"
          onChange={(e) => {
            const filtered = List.filter((data) =>
              data.name.includes(e.target.value)
            );
            setList(filtered);
          }}
        />
      </div>
      <CustomerList customers={list} />
    </Fragment>
  );
};

export default SearchCustomers;
