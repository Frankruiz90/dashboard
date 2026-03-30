export const getUsers = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   if (!res.ok) throw new Error('error fetching users'); 
    return res.json()
}