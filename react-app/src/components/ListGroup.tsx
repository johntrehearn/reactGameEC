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
