import Head from 'next/head'
const Meta = (props) => (      
<Head>
<title>{props.title}</title>
<meta name="description" content={props.desc} />
<meta property="og:type" content="website" />
<meta name="og:title" property="og:title" content={props.title} />
<meta name="og:description" property="og:description" content={props.desc} />
<meta property="og:site_name" content="Bit Project" />
<meta property="og:url" content="https://bitproject.org" />  
<link rel="icon" type="image/png" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/favicon.ico" />
</Head>
)
export default Meta