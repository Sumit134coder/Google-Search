import React , {createContext,useContext,useState} from 'react'


const ResultContext = createContext();
const baseURL= 'https://google-search3.p.rapidapi.com/api/v1'

export  const ResultContextProvider = ({children})=>{

    const [ results , setResults]  = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [ searchTerm , setSearchTerm] = useState('rick roll');

    // /videos , /search,/images
    const getResults = async (type) =>{
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}` , {
            method:'GET',
            headers:{
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                 'x-rapidapi-key': '4919ec3d94mshc5986b5245062b2p1ee1acjsn4bd7dddfb4b4'
            }
        });

        const data =  await response.json();

        console.log(data)

        setResults(data);
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = ()=> useContext(ResultContext);