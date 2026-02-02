import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import CursorBubble from "./components/fragments/CursorBubble";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <CursorBubble />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
