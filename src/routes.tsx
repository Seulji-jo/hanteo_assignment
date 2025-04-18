import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout";
import Category from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ path: "category", Component: Category }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
