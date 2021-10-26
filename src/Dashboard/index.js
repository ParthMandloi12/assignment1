import React, {useState, useRef, useEffect} from 'react';
import Header from './Header';
import {getDummyUserList} from './fetuchUserList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from "./styles";
import { debounce } from "@material-ui/core";

function Dashboard(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [userList,setUserList] = useState([])
    const [totalRecord,setTotalRecord] = useState()
    const parentDivRef = useRef();
    const LIMIT = 20;
    useEffect(() => {
        getDummyUserList(page,LIMIT).then((res) => {
            setUserList((prev) => [...prev, ...res.data])
            setTotalRecord(res?.total)
          });
    },[page])
    function checkHasMore() {
        return page * LIMIT < totalRecord;
      }
    const handlePagination = debounce((page) => {
        if (!checkHasMore() ) return;
        setPage(page);
      }, 200);
    
      const handleScroll = (e) => {
        let element = e.target;
        let bottom =
          e.target.scrollHeight - element.scrollTop - element.clientHeight < 20;
        if (bottom) {
          handlePagination(page + 1);
        }
      };
    
  return (
    <div >
        <Header {...props}/>
            <div
                className="scrollbarclass"
                ref={parentDivRef}
                onScroll={handleScroll}
                style={{marginTop:64}}
            >
                {userList.map((user) => {
                    return (
                        <div 
                            key={user.id} 
                            className={classes.cardBlock}
                        >
                                <Card 
                                    className={classes.cardStyle}
                                    sx={{ maxWidth: 345 }}
                                >
                                    <CardContent className={classes.alignContent}>
                                        <div className={classes.circularImgBlock}>
                                            <img
                                                className={classes.img}
                                                alt="User Profile"
                                                src={user.picture}
                                            />
                                        </div>
                                        <div className={classes.alignName}>
                                            {user?.firstName}{" "}{user?.lastName}
                                        </div>
                                    </CardContent>
                                </Card>
                        </div>
                    );
                })}
            </div>
    </div>
  );
}

export default Dashboard;
