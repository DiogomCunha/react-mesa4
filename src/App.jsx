import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Fast-Food House</h1>
      <main>
       
    
          <Card
          img= "https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400" 
          title="Feijoada"
          p="Prato Principal"

          />
          <Card
          img= "https://www.sabornamesa.com.br/media/k2/items/cache/7ad7f11d190c995ba540f7eeb4073ef6_XL.jpg" 
          title="Camarão"
          p="Frutos do Mar"

          />
          <Card
          img= "https://receitinhas.com.br/wp-content/uploads/2022/08/Coxinha-de-charque.jpg" 
          title="Coxinha"
          p="Salgadinho"

          />
          <Card
          img="https://www.receiteria.com.br/wp-content/uploads/torta-de-limao-com-tortinhas-01.jpg"
          title="Torta de Limão"
          p="Sobremesa"

          />
          <Card
          img= "https://www.publicitarioscriativos.com/wp-content/uploads/2022/01/Coca-Cola-anuncia-versao-alcoolica-de-refrigerante-em-parceria-com-a-Corona-2-1024x576.png" 
          title="Coca-Cola"
          p="Bebida"

          />
       
      </main>
      <Footer />
    </div>
  );
}
export default App;
