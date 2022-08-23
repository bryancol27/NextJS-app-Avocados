//import components
import { Layout } from '../containers/Layout'

//import styles
import '../GlobalStyles.css';

// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp