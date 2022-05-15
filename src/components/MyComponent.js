class MyComponent extends React.Components {
    render() {
        return <p>Hallo</p>, { this.props.name }
    }
}
////////////
function MyComponent(props) {

    return (<p>Hallo</p>, { this.props.name })
}
////////////
const MyComponent = (props) => {

    return (<p>Hallo</p>, { this.props.name })
}