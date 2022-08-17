import { Outlet, Route, Routes } from "react-router-dom";
import { EventForm } from "../events/EventForm";
import { EventList } from "../events/EventList";

export const ApplicationViews = () => {
    return (
        <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>NUTSHELL</h1>
            <div>Your one-stop-shop for news, planning, and communication</div>
           {/* <EventList /> */}
            <Outlet />
          </>
        }>
        
     {/*   <Route path="events" element={ <EventForm />} />  */}
      
      </Route>
    </Routes>
    )
}