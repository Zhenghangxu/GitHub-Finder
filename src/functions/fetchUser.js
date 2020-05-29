export const fetchUser = async (url)=>{
  const header = new Headers();
  const request = await fetch(url,{
    method:"GET",
    headers:{
      "Content-type":"application/json",
      "Authorization":`token ${process.env.REACT_APP_GITHUB_CLIENT_ACCESS_TOLKEN}`,  
    }
  });
  return request.json();
}