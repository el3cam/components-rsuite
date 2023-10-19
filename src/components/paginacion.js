import "rsuite/dist/rsuite.min.css";
import es_ES from "rsuite/locales/es_ES";
import { Pagination ,CustomProvider} from "rsuite";

const Paginacion = ({
  total,
  limit,
  setLimit,
  setActivePage,
  activePage,
  limitOptions,
}) => {
  function preSetlimit(limit) {
    setActivePage(1);
    setLimit(limit);
  }
  const customEs = {
    ...es_ES,
    Pagination: { ...es_ES.Pagination, limit: "{0} / página" },
  };
  return (
    <>
      <style>
        {`.rs-picker-toggle-value {
          width: 100px !important;
        }`}
      </style>
      <CustomProvider locale={customEs}>
        <Pagination
          layout={["total", "-", "pager", "|", "limit"]}
          size={"xs"}
          prev
          next
          first
          last
          total={total} // Total de columnas
          limit={limit} // limite de mostrados
          limitOptions={limitOptions} //Modificar el limite de resultados
          maxButtons={10}
          activePage={activePage} // Pagina activa
          onChangePage={setActivePage}
          onChangeLimit={preSetlimit} // para modificar el limite
        />
      </CustomProvider>
    </>
  );
};

export default Paginacion;
