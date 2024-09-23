
function ListGroup() {

    const items = [
        'Norbury',
        'Streatham',
        'Tooting',
        'Balham',
        'Clapham',
    ];

    items.map(item => <li>{item}</li>)
    


  return (
    <>
        <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        </ul>
    </>
  );
}

export default ListGroup;
