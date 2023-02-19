import { Button } from 'react-bootstrap'

const MainLayout = (props) => {
    return (
        <div>
            <h1>MainLayout</h1>
            <Button as="a" variant="primary">
                Button as link
            </Button>
            {props.children}
        </div>
    )
}

export default MainLayout