import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("./modules/MainPage"));

const Routes = () => {
  <Suspense fallback={<p>Loading Page...</p>}>
    <Routes>
      <Route path="main" element={<MainPage />} />
    </Routes>
  </Suspense>;
};
