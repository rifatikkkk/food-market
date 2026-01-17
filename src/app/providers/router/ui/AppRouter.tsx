import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";
import { Suspense } from "react";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<>loading...</>}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
