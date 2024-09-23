
function ListGroup() {

    const items = [
        'Norbury',
        'Streatham',
        'Tooting',
        'Balham',
        'Clapham',
    ];

    
    
    
    return (
        <>
        <h1>Locations</h1>
        <ul className="list-group">
            {items.map(item => <li>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
