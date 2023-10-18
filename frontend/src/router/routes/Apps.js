
import AppComponent from '../../views/App/Feed'
import ProfileComponent from '../../views/App/Profile'
import PostComponent from '../../views/App/Post'
import NotificationsComponent from '../../views/App/Notifications'
import ConfigComponent from '../../views/App/Config'

export default [
    {
        path: "app",
        element: <AppComponent />
    },
    {
        path: "app/config",
        element: <ConfigComponent />
    },
    {
        path: "app/notifications",
        element: <NotificationsComponent />
    },
    {
        path: "app/profile/:profileId",
        element: <ProfileComponent />
    },
    {
        path: "app/post/:postId",
        element: <PostComponent />
    }
]