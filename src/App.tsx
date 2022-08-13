import React from 'react';
import './App.css';
import type {RouteObject} from "react-router-dom";
import {useRoutes} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryAdd from "./component/category/CategoryAdd";
import CategoryUpdate from "./component/category/CategoryUpdate";
import ProtectedRoutes from "./auth/ProtectedRoutes";

function App() {


    // const dispatch = useAppDispatch()
    // dispatch(getCurrentUser2())


    let routes: RouteObject[] = [
        {index: true, element: <Login/>},
        {
            path: "/",
            element: <ProtectedRoutes/>,
            children: [
                {path: "/dashboard", element: <Dashboard/>},
                {
                    path: "/category",
                    children: [
                        {path: "add", element: <CategoryAdd/>},
                        {path: "update/:id", element: <CategoryUpdate/>}
                    ]
                },
            ]
        },

    ]
    let element = useRoutes(routes);
    return (
        <div className="App">
            {element}
            {/*<BrowserRouter>*/}
            {/*    /!*<UserContext.Provider value={{userContext,setUserContext}}>*!/*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Login/>}/>*/}
            {/*        <Route element={<ProtectedRoutes/>}>*/}
            {/*            <Route path="/dashboard" element={<Dashboard/>}/>*/}
            {/*            <Route path="/category">*/}
            {/*                <Route path="add" element={<CategoryAdd/>}/>*/}
            {/*                <Route path="update/:id" element={<CategoryUpdate/>}/>*/}
            {/*            </Route>*/}
            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*    /!*</UserContext.Provider>*!/*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App
