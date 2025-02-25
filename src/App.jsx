import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CreateNewProductForm from "./features/products/CreateNewProductForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route
                path="products/:productId"
                element={<ProductDetailPage />}
              />
              <Route path="products/new" element={<CreateNewProductForm />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="aboutus" element={<AboutUsPage />} />
              <Route path="contact" element={<ContactUsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "1.8rem",
              maxWidth: "50rem",
              padding: "1.6rem 2.4rem",
              backgroundColor: "var(--color-off-white-1)",
              color: "var(--color-brown-black-2)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
