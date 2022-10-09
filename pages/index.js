import ContactScreen from "../screens/ContactScreen/ContactScreen";




export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();
  console.log(data);
  return {
    props: { 
      data,
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <div>
      <ContactScreen props = {props.data} />
    </div>
  )
}
