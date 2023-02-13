import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <meta charSet="utf-8" />
          <meta name="description" content="A força de um guerreiro está em sua determinação, não em sua arma." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ecademia de Jiu-Jitsu Brasileiro" />
          <meta property="og:description" content="melhore sua condição física, aumente sua autoestima e aprenda mais sobre si mesmo e seus limites cognitivos."/>
          <meta property="og:image" content="https://scontent.flis5-4.fna.fbcdn.net/v/t39.30808-6/301807013_412883174280914_2503888661294524388_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1dio4OkqeKQAX8yYUVS&_nc_ht=scontent.flis5-4.fna&oh=00_AfBL3HqAe9M_Jm4aFAbpPAprflmZ2aJ5YvDI0jcu536Uag&oe=63EF025B"/>
          <meta property="og:image:alt" content="Ecommerce de atersanatos"/>
          <meta property="og:image:width" content="1280"/>
          <meta property="og:image:height" content="720"/>
          <meta property="og:locale" content="pt"/>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
