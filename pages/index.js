import ContactScreen from "../screens/ContactScreen/ContactScreen";


// For this technical assignment the demands were to fetch a list of data and to deploy the website into 
// So i decided to use Next.js for it as it makes fetching api's very easier and we dont have to use external library like axios and hooks like use state
// next also has integration with vercel which will make deployment alot easier 


/**
 * this function is a custom next js fucntion, since the api we are fetching is a a static fake data we use this function 
 * to efficiently use it
 * @param {*} context : comes with the boiler plate of Next
 * @returns data: returns the data from the Api
 */

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();
  return {
    props: { 
      data,
    }, // will be passed to the page component as props
  }
}

/**
 * according to conventional architecture we have made a folder for screeens and a seperate folder for components and here it will just 
 * call the screen component
 * @param {*} props : passes the fetched data to ContactScreen
 * @returns 
 */
export default function Home(props) {
  return (
    <div>
      <ContactScreen props = {props.data}/>
    </div>
  )
}
