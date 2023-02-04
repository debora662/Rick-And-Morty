import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards({ characters, onClose }) {

   return (
      <div className={styles.cartas}>
         {characters.map((character) => {
            return (
               <Card
                  id={character.id}
                  key={character.id}
                  character={character}
                  onClose={onClose}
               />
            )
         })}
      </div>
   )
}
