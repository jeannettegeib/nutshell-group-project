import { Outlet, Route, Routes } from "react-router-dom";

export const ApplicationViews = () => {
    return (
        <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>NUTSHELL</h1>
            <div>Your one-stop-shop for news, planning, and communication</div>

            <Outlet />
          </>
        }
      >
      </Route>
    </Routes>
    )
}