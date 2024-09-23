// In react components you can render other react components or html elements.

//  THE ONLY EXCEPTION IS IF YOU USE BRACES {} then you can render any javascript expression.

function ListGroup() {

    let items = [
        'Norbury',
        'Streatham',
        'Tooting',
        'Balham',
        'Clapham',
    ];

    items = [];
    
    return (
        <>
        <h1>Locations</h1>
        {items.length === 0 ? <p>No items to display</p> : null}
        <ul className="list-group">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
