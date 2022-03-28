import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Audio } from  'react-loader-spinner';
import { useNavigate } from "react-router-dom";

const DataShow = () => {
    const [data, setDataa] = useState<any>([]);
    const [pageNum, setPageNum]= useState<any>(0);
    const[loading, setLoading] = useState<any>(true);

    let navigate = useNavigate();
    const handleClick = (item : any) => {
        navigate(`/${item.objectID}`,{state: item});
    }

    useEffect(()=>{
        ApiCall(pageNum);
        setTimeout(() => {
            setPageNum(pageNum+1)
          }, 10000);
    },[pageNum])

    const ApiCall = (value :any) => {
        var raw = "";

        var requestOptions = {
            method: 'GET',
            body: raw,
            redirect: 'follow'
        };
        setLoading(true);
        fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page="+ value)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setDataa([...data, ...result.hits])
            })
            .finally(() => {
                setLoading(false);
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><h2>Author</h2></TableCell>
                            <TableCell align="center"><h2>Title</h2></TableCell>
                            <TableCell align="center"><h2>Created_At</h2></TableCell>
                        </TableRow>
                    </TableHead>


                    { loading===true ? (
                      <Audio color="#00BFFF" height={80} width={80} />

                  ) :  <TableBody>
                  {data.map((item:any)=>{
                      return(
                       <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          onClick={() => {
                            handleClick(item);
                          }}
                      >
                          <TableCell align="center">{item.author}</TableCell>
                          <TableCell align="center">{item.title}</TableCell>
                          <TableCell align="center">
                         { moment(item.created_at).format("DD MMM YYYY")}</TableCell>

                      </TableRow>
                      )
                  })}
             </TableBody>
                  }
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataShow