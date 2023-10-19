import { useState, Component } from "react";
import Paginacion from "../components/paginacion";

export const ExamplePaginacion = () => {
  const [limit, setLimit] = useState(10);
  const [activePage, setActivePage] = useState(1); // Iniciar en la página 1
  const data = Array.from({ length: 10000 }, (_, index) => index + 1);

  const total = data.length;
  const startIndex = (activePage - 1) * limit;
  const endIndex = startIndex + limit;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div className="vh-100 vw-100">
      <div style={{ marginBottom: 100 }}>
        <ul>
          {displayedData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Paginacion
        limitOptions={[10, 100, 200, 300, 400, 500]}
        limit={limit}
        setLimit={setLimit}
        total={total}
        setActivePage={setActivePage}
        activePage={activePage}
      />
    </div>
  );
};

export class ExamplePaginacion_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      activePage: 5,
      data: Array.from({ length: 10000 }, (_, index) => index + 1),
    };
  }

  setLimit = (limit) => {
    this.setState({ limit });
  };

  setActivePage = (activePage) => {
    this.setState({ activePage });
  };

  render() {
    const { limit, activePage, data } = this.state;
    const total = data.length;
    return (
      <div className="vh-100 vw-100">
        <div style={{ marginBottom: 100 }}>
          <ul>
            {data
              .slice((activePage - 1) * limit, activePage * limit)
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </div>
        <Paginacion
          limitOptions={[10, 100, 200, 300, 400, 500]}
          limit={limit}
          setLimit={this.setLimit}
          total={total}
          setActivePage={this.setActivePage}
          activePage={activePage}
        />
      </div>
    );
  }
}
