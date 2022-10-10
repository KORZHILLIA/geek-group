import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage"));
const CategoryFiller = lazy(() => import("./modules/CategoryFiller"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading Page...</p>}>
      <Routes>
        <Route path="/main" element={<MainPage />}>
          <Route path=":category" element={<CategoryFiller />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
