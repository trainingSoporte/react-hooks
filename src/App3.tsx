import { ChangeEvent, useState } from 'react';

function App3() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Nana azul',
      city: 'Hamburgo',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>)=> {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  const handleTitleChange =(e:ChangeEvent<HTMLInputElement>)=> {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  const handleCityChange = (e:ChangeEvent<HTMLInputElement>)=> {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  const handleImageChange = (e:ChangeEvent<HTMLInputElement>)=> {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Nombre:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Título:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        Ciudad:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Imagen:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      
      <p>
        <i>{person.artwork.title}</i>
        {' por '}
        {person.name}
        <br />
        (localizada en {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}

export default App3;
