//import components
import { Layout } from '../containers/Layout'

//import styles
import '../GlobalStyles.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp