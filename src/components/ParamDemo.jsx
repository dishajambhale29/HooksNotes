//lets see useparam in react

import { useParams ,BrowserRouter,Route,Routes,Link } from "react-router-dom"

function Student(){
    const {id}=useParams();
    return(
        <>
        <div>
            <h2>Student Details</h2>
            <p>Student id:{id}</p>
        </div>
        </>
    )

}

export default function ParamDemo()
{
    return(
        <>
        <h1>Param Demo</h1>
        <BrowserRouter>
        <nav>
            <a href="/student/101">Student 101</a><br />
           <a href="/student/102">Student 102</a><br />
        </nav>
        <Routes>
            <Route path="/student/:id" element={<Student/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}