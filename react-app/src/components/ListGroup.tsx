// In react components you can render other react components or html elements.

//  THE ONLY EXCEPTION IS IF YOU USE BRACES {} then
function ListGroup() {

    let items = [
        'Norbury',
        'Streatham',
        'Tooting',
        'Balham',
        'Clapham',
    ];


    
    const getMessage = () => {
        return items.length === 0 ? <p>No items to display</p> : null;
    };

    // It is better to use a function as functions can have paramenters. So you can do different things based on the parameters / different conditions.

    return (
        <>
        <h1>Locations</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
