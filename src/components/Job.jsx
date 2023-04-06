import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Alert from 'react-bootstrap'
const Job = ({ data }) => {
  const dispatch = useDispatch()
return (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9} className='d-flex justify-content-between'>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      <Button
      type='button'
                color="primary"
                onClick={() => {
                  // qui dovremmo azionare la generazione di un nuovo stato
                  // --> "dispatchando" un'action
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: data.company_name,
                    // il type rappresenta il "nome" della action
                    // il payload rappresenta il "contenuto" della action
                  })
                  alert("Job added to favorites.")
                }}
              >
                ADD TO FAVORITE JOBS
              </Button>
    </Col>
  </Row>
)}

export default Job
