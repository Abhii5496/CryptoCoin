import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./Conntext/ThemeContext";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import axios from "axios";
import CoinPage from "./Pages/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./Conntext/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signin"
              element={<PublicRoute component={Signin} />}
            />
            <Route
              path="/signup"
              element={<PublicRoute component={SignUp} />}
            />
            <Route
              path="/account"
              element={<ProtectedRoute component={Account} />}
            />
            <Route path="/coin/:coinId" element={<CoinPage />}>
              <Route path=":coinId" />
            </Route>
          </Routes>
          <Footer />
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
