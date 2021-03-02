import {Col, Table } from 'reactstrap';

const Students=({list})=>{
    const students=list.map((item)=>{
        return(
            <tr key={item.id} className="item">
                <td>{item.Name}</td>
                <td>{item.Age}</td>
            </tr>
        )
})
return (
<div>
    <Col sm={{ size: 9, offset: 1}}>
    <Table dark>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
          {students}
      </tbody>
    </Table>
    </Col>
</div>
)
}
export default Students;