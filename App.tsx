import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";
import CalculatorPage from "./pages/CalculatorPage";
import QuotePage from "./pages/QuotePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "calculator",
        element: <CalculatorPage />,
      },
      {
        path: "quote",
        element: <QuotePage />,
      },
      // Placeholders for routes requested in spec
      { path: "about", element: <PlaceholderPage title="About Solaris" /> },
      { path: "residential", element: <PlaceholderPage title="Residential Solar Solutions" /> },
      { path: "commercial", element: <PlaceholderPage title="Commercial Solar Solutions" /> },
      { path: "industrial", element: <PlaceholderPage title="Industrial Solar" /> },
      { path: "products", element: <PlaceholderPage title="Solar Products" /> },
      { path: "process", element: <PlaceholderPage title="Installation Process" /> },
      { path: "subsidy", element: <PlaceholderPage title="Government Subsidies & Financing" /> },
      { path: "projects", element: <PlaceholderPage title="Case Studies & Projects" /> },
      { path: "testimonials", element: <PlaceholderPage title="Customer Testimonials" /> },
      { path: "blog", element: <PlaceholderPage title="Solar Resources & Blog" /> },
      { path: "faq", element: <PlaceholderPage title="Frequently Asked Questions" /> },
      { path: "contact", element: <PlaceholderPage title="Contact Us" /> },
      { path: "careers", element: <PlaceholderPage title="Careers at Solaris" /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
