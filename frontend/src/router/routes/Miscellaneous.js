
import Home from '../../views/Miscellaneous/Home'
import Terms from '../../views/Miscellaneous/Terms'
import InformationsMidia from '../../views/Miscellaneous/InformationsMidia'
import About from '../../views/Miscellaneous/About'
import BugReport from '../../views/Miscellaneous/BugReport'
import Contact from '../../views/Miscellaneous/Contact'
import ReportingCenter from '../../views/Miscellaneous/ReportingCenter'

export default [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/terms",
        element: <Terms />
    },
    {
        path: "/informations-for-midia",
        element: <InformationsMidia />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/bug-report",
        element: <BugReport />
    },
    {
        path: "/reporting-center",
        element: <ReportingCenter />
    }
]