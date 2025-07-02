import Header from "../components/Header-component/Header";
import ProdutosRederizados from "../components/Produtos";

export default function Home() {
  return (
    <main className="flex-col flex space-y-10">
      <Header />
      <ProdutosRederizados />

      {/* <Modal>
        <Modal.Header></Modal.Header>
        <MOdal.Body>
          <div className="col">
            <Form>
              <Form.Input></Form.Input>
            </Form>
          </div>
        </MOdal.Body>
      </Modal> */}
    </main>
  );
}
