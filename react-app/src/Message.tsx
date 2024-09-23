// in the braces{} we can write any javascript expression that returns a value
// we can also write JS statements
function Message() {
    const name = 'John';
    if (name) {
        return <h1>Hello {name}</h1>;
    }
    return <h1>Hello Guest</h1>;
}

export default Message;