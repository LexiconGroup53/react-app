export const Switch = ({choice, children}) => {
    return children.find(child => child.props.value === choice);
}