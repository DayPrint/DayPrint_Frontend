import '../style/styles.css';
import DisplayList from './DisplayList';
import React,{useState,useEffect} from 'react';
import postService from '../service/post.service';

const MainMyWorkplace = () => {
    const [data, setData] = useState([]);
  const [error, setError] = useState();


  const fetchData = async () => {
    try {

      const response = await postService.getpost();

      console.log("<= response => ");
      console.log(response);
      response.map(o => console.log(o));
      
      console.log(" <= data => ");
      setData(response);
      console.log(data.length);
    } catch (e) {
      setError(e);
    }
  }
  useEffect(() => { fetchData(); }, []);
    return (
        <div className="MyWorkplace">
            <DisplayList data={data}/>
        </div>
    )
}

export default MainMyWorkplace;
