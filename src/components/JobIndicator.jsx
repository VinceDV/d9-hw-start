import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

// per leggere un valore dal Redux Store ho bisogno dell'hook
// chiamato useSelector

import { useSelector } from 'react-redux'

const JobIndicator = () => {
  const navigate = useNavigate()

  const JobContent = useSelector((state) => state.job.content)
  // useSelector è un hook che riceve come parametro una callback (una funzione)
  // questa funzione viene arricchita da Redux con a sua volta un parametro "state"
  // che rappresenta in qualsiasi momento l'INTERO contenuto del Redux Store
  console.log('JobContent', JobContent)

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate('/Job')}>
        <FaShoppingCart />
        <span className="ml-2">{JobContent.length}</span>
      </Button>
    </div>
  )
}

export default JobIndicator