import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import { ROUTES } from './routes/routes'

import "./styles/index.css";

const container = document.getElementById("app");
const queryClient = new QueryClient();

createRoot(container).render(
  <StrictMode>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={ROUTES} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>,
);