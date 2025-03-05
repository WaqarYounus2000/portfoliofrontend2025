// import './App.css';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { MenuBar } from "./MenuBar";
// import { Section1 } from "./Section1";
// import { Section2 } from "./Section2";
// import { Section3 } from "./Section3";
// import { Section4 } from "./Section4";
// import { ResumeSection } from "./ResumeSection";
// import { ProtectedRoutes } from "./ProtectedRoutes";
// import { LoginPageComp } from "./LoginPageComp";
// import { Dashboard } from "./Dashboard";
// import { Error } from "./Errorpage";
// import { MyProvider } from './MyContext';
// import Addurls from './Addurls';
// import AddSkills from './AddSkills';
// import ResumeUpload from './ResumeUpload';
// import UpdateProfile from './UpdateProfile';

// function App() {


//   const queryClient = new QueryClient()


//   return (



//     <div className="App">


//       <QueryClientProvider client={queryClient}>

//         <BrowserRouter>

//           <MenuBar />
//           <MyProvider>
//             <Routes>
//               <Route exact path="/" element={<Section1 />} />
//               <Route exact path="about" element={<Section2 />} />
//               <Route exact path="resume" element={<ResumeSection />} />
//               <Route exact path="contact" element={<Section4 />} />
//               <Route exact path="project" element={<Section3 />} />
//               <Route path="*" element={<Error />} />
//               <Route path="login" element={<LoginPageComp />} />

//               <Route element={<ProtectedRoutes />}>
//                 <Route path="dashboard" element={<Dashboard />}>
//                   <Route path="/dashboard/addurls" element={<Addurls />} />
//                   <Route path="/dashboard/addskills" element={<AddSkills />} />
//                   <Route path="/dashboard/resume" element={<ResumeUpload />} />
//                   <Route path="/dashboard/UpdateProfile" element={<UpdateProfile />} />
//                 </Route>
//               </Route >
//             </Routes>
//           </MyProvider>

//         </BrowserRouter>

//       </QueryClientProvider>


//     </div>
//   );
// }

// export default App;



import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { MenuBar } from "./MenuBar";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { ResumeSection } from "./ResumeSection";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LoginPageComp } from "./LoginPageComp";
import { Dashboard } from "./Dashboard";
import { Error } from "./Errorpage";
import { MyProvider } from './MyContext';
import Addurls from './Addurls';
import AddSkills from './AddSkills';
import ResumeUpload from './ResumeUpload';
import UpdateProfile from './UpdateProfile';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>


      <QueryClientProvider client={queryClient}>
        <MyProvider>
          <BrowserRouter>
            <MenuBar />
            <Routes>
              <Route path="/" element={<Section1 />} />
              <Route path="about" element={<Section2 />} />
              <Route path="resume" element={<ResumeSection />} />
              <Route path="contact" element={<Section4 />} />
              <Route path="project" element={<Section3 />} />
              <Route path="*" element={<Error />} />
              <Route path="login" element={<LoginPageComp />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoutes />}>
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="addurls" element={<Addurls />} />
                  <Route path="addskills" element={<AddSkills />} />
                  <Route path="resume" element={<ResumeUpload />} />
                  <Route path="updateprofile" element={<UpdateProfile />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </MyProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
