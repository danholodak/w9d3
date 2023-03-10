const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  // console.log(options.headers)
  options.headers = {
    // Your code here
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...options.headers,
    //object destructuring
  };

 let response =  await fetch(url, options);
 if(response.ok){
   return response.json();

 }else{
   throw new Error(response);
 }
}
export function followUser(id){
  return customFetch(`/users/${id}/follow`,{method: "POST"} )
}
export function unfollowUser(id){
  return customFetch(`/users/${id}/follow`,{method: "DELETE"} )
}
