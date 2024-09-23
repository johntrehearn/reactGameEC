
function ListGroup() {

    let items = [
        'Norbury',
        'Streatham',
        'Tooting',
        'Balham',
        'Clapham',
    ];

    items = [];

    if (items.length === 0) {
        return <> <h1>Locations</h1><p>No items</p> </>;
    }
    
    
    return (
        <>
        <h1>Locations</h1>
        <ul className="list-group">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
