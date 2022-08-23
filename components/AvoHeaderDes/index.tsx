
//a interface to get the correct props of container father and extendes.
interface titleAvoDes extends Pick<TProduct, 'name' | 'price' | 'image' | 'id'>{
    description: string
}

//import custom module styles
import styles from './styles.module.css';

const AvoHeaderDes  = (props: titleAvoDes) => {
    
    const { name, price, image, id, description } = props;
    
    // we return a section for avo description

    return (
        <section className={styles.section}>
            <figure className={styles.figure}>
                <img src={image} alt={id} />
            </figure>
            <div className={styles.div}>
                <h2>{name} <span>${price}</span></h2>

                <p>{description}</p>
            </div>

        </section>
    )
};

export { AvoHeaderDes }