import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
// CART innanzitutto deve LEGGERE il contenuto di state.cart.content
// CART deve anche rimuovere un elemento dall'array content

const FavJobs = () => {
  // scriviamo qui gli hooks!
  const lavori = useSelector((state) => state.cart.content);
  const dispatch = useDispatch();

  return (
    <Row className="d-flex justify-content-center">
      <h2>Favorite Jobs</h2>
      <Col sm={12} className="d-flex justify-content-center">
        <ul className="p-0">
          {lavori.map((job, i) => (
            <li key={i} className="my-2 d-flex justify-content-between">
              <Link className="" to={`/${job}`}>
                {job}
              </Link>
              <Button
                className="ml-5"
                variant="danger"
                onClick={() => {
                  // dobbiamo rimuovere un elemento da state.cart.content
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: i,
                  });
                  alert("Job discarded");
                }}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default FavJobs;
