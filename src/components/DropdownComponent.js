import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';



const SortedMenu = ({uniqueSuperheros,sortComics,setComicData}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By Name
            </Dropdown.Toggle>
            <Button id="collectionsButton" onClick={setComicData}>Collections</Button>

            <Dropdown.Menu>
                {uniqueSuperheros.map(name => {
                    return (
                        <Dropdown.Item onClick={() => { sortComics(name) }}>{name.superhero}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortedMenu