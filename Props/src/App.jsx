import Card from "./Components/Card";

const App = () =>{
  return(
    <div className="parent">
      <Card user = 'Loin'  age = {22} img = "https://static.vecteezy.com/system/resources/thumbnails/049/671/131/small/lion-amazing-background-hd-wallpaper-photo.jpeg"/>
      <Card user = 'Tiger'  age = {20}  img = "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user = 'Wolf'  age = {24}  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_c1S4SuE0UkwfxAQpn1TNa1TAkhBqjqeDGo4Etkds6w&s=10"/>
      <Card user = 'Elephant'  age = {28}  img = "https://www.imageshine.in/uploads/gallery/Large-Animal-Elephant-HD-photos.jpg"/>
      <Card user = 'Quit'  age = {5}  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkQ33WmjlfWx-4M1yqqaJbNdlf11iVEfHLjyPE50PXA&s=10"/>
      <Card user = 'Rabit'  age = {8}  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllbScX5KHILDOTU7bc8m-QNRLIpK4GzgG3KK2hBIJCAQj1-ED1BbkdKUF&s=10"/>
    </div>
  )
}

export default App;