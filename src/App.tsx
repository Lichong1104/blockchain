import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import Layouts from "./layouts";
import AssessmentCenter from "./pages/assessmentCenter";
import MyEditor from "./pages/experimentalCenter/edit";
import ExperimentalCenterExploitation from "./pages/experimentalCenter/exploitation";
import ExperimentalCenterPrinciple from "./pages/experimentalCenter/principle";
import Remix from "./pages/experimentalCenter/remix";
import Test from "./pages/experimentalCenter/test";
import LearnCenter from "./pages/learCenter";
import Login from "./pages/login";
import Introduce from "./pages/experimentalCenter/course/introduce";
import Interaction1 from "./pages/experimentalCenter/course/interaction1";
import Interaction2 from "./pages/experimentalCenter/course/interaction2";
import Interaction3 from "./pages/experimentalCenter/course/interaction3";
import Interaction4 from "./pages/experimentalCenter/course/interaction4";
import Interaction5 from "./pages/experimentalCenter/course/interaction5";
import Interaction6 from "./pages/experimentalCenter/course/interaction6";
import Interaction7 from "./pages/experimentalCenter/course/interaction7";
import Interaction8 from "./pages/experimentalCenter/course/interaction8";
import Shoouqian1 from "./pages/experimentalCenter/course/shouqian1";
import Shouqian2 from "./pages/experimentalCenter/course/shouqian2";
import Shouqian1 from "./pages/experimentalCenter/course/shouqian1";
import Shouqian3 from "./pages/experimentalCenter/course/shouqian3";
import Shuzirenminbi from "./pages/experimentalCenter/Shuzirenminbi";
function App() {
  return (
    <Layouts>
      <div className="App">
        <Routes>
          <Route
            path="/learnCenter/index"
            element={
              <PrivateRoute>
                <LearnCenter />
              </PrivateRoute>
            }
          />
          <Route
            index
            element={
              <PrivateRoute>
                <AssessmentCenter />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/principle"
            element={
              <PrivateRoute>
                <ExperimentalCenterPrinciple />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/exploitation"
            element={
              <PrivateRoute>
                <ExperimentalCenterExploitation />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/edit"
            element={
              <MyEditor />
              // <PrivateRoute>

              // </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/remix"
            element={
              <PrivateRoute>
                <Remix />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/test"
            element={
              <PrivateRoute>
                <Test />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/shuzirenminbi"
            element={
              <PrivateRoute>
                <Shuzirenminbi />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/introduce"
            element={
              <PrivateRoute>
                <Introduce />
              </PrivateRoute>
            }
          />

          <Route
            path="/experimentalCenter/course/interaction1"
            element={
              <PrivateRoute>
                <Interaction1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/interaction2"
            element={
              <PrivateRoute>
                <Interaction2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/interaction3"
            element={
              <PrivateRoute>
                <Interaction3 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/interaction4"
            element={
              <PrivateRoute>
                <Interaction4 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/interaction5"
            element={
              <PrivateRoute>
                <Interaction5 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/interaction6"
            element={
              <PrivateRoute>
                <Interaction6 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/interaction7"
            element={
              <PrivateRoute>
                <Interaction7 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/interaction8"
            element={
              <PrivateRoute>
                <Interaction8 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/shouqian1"
            element={
              <PrivateRoute>
                <Shouqian1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/shouqian2"
            element={
              <PrivateRoute>
                <Shouqian2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/experimentalCenter/course/shouqian3"
            element={
              <PrivateRoute>
                <Shouqian3 />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Layouts>
  );
}

export default App;
