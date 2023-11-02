import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { Hamburger4 } from '../components/Hamburger_4'
import { ExpByCategory } from '../components/ExpByCategory'
import { EmpDistributionPie } from '../components/EmpDistributionPie'
import { ExpenseTable } from './ExpenseTable'

export const Analytics = () => {
    return (
        <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundSize:'cover', backgroundPosition:'center' }}>
            <div className="row">
                <div className="col-3">
                    <Hamburger4 />
                </div>
                <div className="col-9">
                    <div className="display-5 shadow-lg rounded p-3 fw-semibold text-light" style={{ backgroundColor: "#304D6D" }}>Project Name</div>
                    <p className='my-3 p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo esse quia enim obcaecati vel, doloremque ab, dolorum praesentium ipsam blanditiis voluptatem dolor adipisci quasi modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sapiente magnam necessitatibus omnis cumque sed aliquid, cum velit beatae nulla sequi unde placeat illum eos, eligendi culpa obcaecati enim laboriosam autem, deserunt quod quos quam blanditiis. Eos nihil, sapiente inventore molestiae quae asperiores saepe laudantium iusto, corporis quas eligendi doloremque?</p>
                    <div className="team p-2">
                        <h3>Manager: XYZ</h3>
                        <h3>Employees: </h3>
                        <div className="overflow-auto scroll" style={{ maxHeight: "350px", minHeight: "350px" }}>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item bg-light">Employee 1</li>
                                <li className="list-group-item bg-light">Employee 2</li>
                                <li className="list-group-item bg-light">Employee 3</li>
                                <li className="list-group-item bg-light">Employee 4</li>
                                <li className="list-group-item bg-light">Employee 5</li>
                                <li className="list-group-item bg-light">Employee 6</li>
                                <li className="list-group-item bg-light">Employee 7</li>
                                <li className="list-group-item bg-light">Employee 8</li>
                                <li className="list-group-item bg-light">Employee 9</li>
                                <li className="list-group-item bg-light">Employee 10</li>
                                <li className="list-group-item bg-light">Employee 11</li>
                                <li className="list-group-item bg-light">Employee 12</li>
                                <li className="list-group-item bg-light">Employee 13</li>
                                <li className="list-group-item bg-light">Employee 14</li>
                                <li className="list-group-item bg-light">Employee 15</li>
                            </ol>
                        </div>
                    </div>
                    <div className='mt-4 shadow-lg rounded p-2'>
                        <h3 className='p-2'>Expense Based on Category</h3>
                        <ExpByCategory />
                    </div>
                    <div className='mt-4 shadow-lg rounded p-2'>
                        <h3 className='p-2'>Expense Based on Employee Use</h3>
                        <EmpDistributionPie size={800} labelcolor={"#000"}  justifycontent="justify-content-center"/>
                    </div>
                    <div className='mt-4 shadow-lg rounded p-2'>
                        <h3 className='mb-3 p-2'>Expenses: </h3>
                        <div className="expense-table ms-5">
                            <ExpenseTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

