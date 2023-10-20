
import AppComponent from '../../views/App/Feed'
import ProfileComponent from '../../views/App/Profile'
import PostComponent from '../../views/App/Post'
import NotificationsComponent from '../../views/App/Notifications'
import ConfigComponent from '../../views/App/Config'
import { redirectIfNotLogged } from '../validation/redirects'

export default [
    {
        path: "app",
        element: <AppComponent />,
        loader: redirectIfNotLogged
    },
    {
        path: "app/config",
        element: <ConfigComponent />,
        loader: redirectIfNotLogged
    },
    {
        path: "app/notifications",
        element: <NotificationsComponent />,
        loader: redirectIfNotLogged
    },
    {
        path: "app/profile/:profileId",
        element: <ProfileComponent />,
        loader: redirectIfNotLogged
    },
    {
        path: "app/profile",
        element: <ProfileComponent />,
        loader: redirectIfNotLogged
    },
    {
        path: "app/post/:postId",
        element: <PostComponent />,
        loader: redirectIfNotLogged
    }
]