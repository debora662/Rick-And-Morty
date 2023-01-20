import { useState } from "react";
import styles from "./Search.module.css"

export default function SearchBar({onSearch}) {

   const [characterID, setCharacterID] = useState("")

   const handleInputChange = (event) => {
      setCharacterID(event.target.value)
   }

   return (
      <div className={styles.container}>
         <input className={styles.search} type='search' placeholder="Search..." value={characterID} onChange={handleInputChange} />
         <button className={styles.btn} onClick={() => onSearch(characterID)}>Agregar</button>
      </div>
   );
}
