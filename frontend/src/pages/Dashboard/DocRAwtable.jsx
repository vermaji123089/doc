import React from 'react'
import DocAppTable from './DocAppTable'

const DocRAwtable = () => {
    const docters = useSelector((state) => state.docters.docters);    


  return (
    <div>
        <DocAppTable docters={docters} />
    </div>
  )
}

export default DocRAwtable