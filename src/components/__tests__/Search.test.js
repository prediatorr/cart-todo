import { render } from "@testing-library/react";
import Body from "../Body";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Restaurant_Data } from "./data";
import { Provider } from "react-redux";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Restaurant_Data);
    },
  });
});

test("Search results on Homepage", () => {
const  body=render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //console.log(Body);
  const search = body.getByTestId("search-btn");
});
