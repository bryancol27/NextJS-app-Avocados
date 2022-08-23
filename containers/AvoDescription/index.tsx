//import components
import { AvoHeaderDes } from "@components/AvoHeaderDes";

//import module styles
import styles from './styles.module.css';

//A interface to analice de current data on this container
interface config {
    data: TProduct,
    loading: boolean
}   

const AvoDescription = ( props: config ) => {

    const { data, loading } = props;

    return (
        <main className={styles.main}>
            <h1>About this Avocado</h1>

            {loading 
                ?<h1>Loading data</h1>
                
                : (
                    <AvoHeaderDes
                        name={data.name}
                        price={data.price}
                        image={data.image}
                        id={data.id}
                        description={data.attributes.description}
                    />
                )
            }
                    
            
                
        </main>
    )
} ;

export { AvoDescription }