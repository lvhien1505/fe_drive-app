import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PublicRoute from 'components/routes/PublicRoute';
import PrivateRoute from 'components/routes/PrivateRoute';

import ScreenLogin from 'screens/auth/ScreenLogin';
import ScreenRegister from 'screens/auth/ScreenRegister';

const ScreenMyDrive = lazy(() => import('screens/drive/ScreenMyDrive'));
const ScreenSharedWithMe = lazy(() =>
    import('screens/drive/ScreenSharedWithMe')
);
const ScreenRecent = lazy(() => import('screens/drive/ScreenRecent'));
const ScreenStarred = lazy(() => import('screens/drive/ScreenStarred'));
const ScreenTrash = lazy(() => import('screens/drive/ScreenTrash'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>....Loading</div>}>
                <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="" element={<ScreenLogin />} />
                        <Route path="/register" element={<ScreenRegister />} />


                        <Route path="drive" element={<PrivateRoute />}>
                            <Route
                                path="my-drive"
                                element={<ScreenMyDrive />}
                            />
                            <Route
                                path="shared-with-me"
                                element={<ScreenSharedWithMe />}
                            />
                            <Route path="recent" element={<ScreenRecent />} />
                            <Route path="starred" element={<ScreenStarred />} />
                            <Route path="trash" element={<ScreenTrash />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
