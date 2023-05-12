import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchMainEmployees} from './actions/employees';
import {addToCache} from './redux/employees';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import PageIcon from '@rsuite/icons/Page';
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";

import {Button} from 'rsuite'

import {Tree} from 'rsuite';
import {useState, useEffect} from "react";

function App() {
    const data = useSelector(state => state.employees.node)
    const stateCache = useSelector(state => state.employees.cache)
    const dispatch = useDispatch()
    const [employeesID, setemployeesID] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);

    const handleEditOpen = (employeesID) => {
        setemployeesID(employeesID);
        setOpenEdit(true);
    };

    const handleEditClose = () => {
        setOpenEdit(false);
    };

    useEffect(() => {
        dispatch(fetchMainEmployees());
    }, []);

    async function fetchNodes(item) {

        if (stateCache[item.value]) {
            return stateCache[item.value]
        }
        return new Promise((resolve) => {
            fetch('http://localhost:4444/employeesParent/' + item.value)
                .then(response => response.json())
                .then((json) => {
                    dispatch(addToCache(item.value, json, resolve));
                })

        }).then(() => {
                return stateCache[item.value]
            }
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Test 3
                </p>
                <Tree
                    data={data}
                    style={{width: 280}}
                    getChildren={(nodeIds, item) => fetchNodes(nodeIds, item)}
                    renderTreeNode={node => {
                        return (
                            <>
                                {node.children ? <FolderFillIcon/> : <PageIcon/>} {node.label}
                                <div>
                                    <Button onClick={() => handleEditOpen(node.value)} className="nodeButton">Open</Button>
                                </div>
                            </>
                        );
                    }}
                />
                <EmployeeForm openEdit={openEdit} handleEditClose={handleEditClose} employeesID={employeesID}/>
            </header>
        </div>
    );
}

export default App;
