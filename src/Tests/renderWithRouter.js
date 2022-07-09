import userEvent from "@testing-library/user-event";
import { BrowserRouter, render } from "react-router-dom";

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, {wrapper: BrowserRouter}),
  }
};

export default renderWithRouter;
