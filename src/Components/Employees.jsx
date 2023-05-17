import React from 'react';
import { useUser } from '@/context/userContext';


function EmployeeDashboard() {
  // const [employees, setEmployees] = useState(Users);

  // Fetch employees data from API or define it locally
  // useEffect(() => {
  //   // Fetch employees data from API or define it locally
  //   const fetchData = async () => {
  //     // Fetch employees data from API
  //     const response = await fetch('https://api.example.com/employees');
  //     const data = await response.json();
  //     setEmployees(data);
  //   };

  //   fetchData();
  // }, []);
  const { user} = useUser();


  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Employee Details</h1>
      
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Department</th>
            {/* <th className="py-2 px-4 border-b">Position</th>
            <th className="py-2 px-4 border-b">Salary</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {user.map((employee) => ( */}
            <tr key={user.id}>
              <td className="py-2 px-4 text-center">{user.id}</td>
              <td className="py-2 px-4 text-center">{user.name}</td>
              <td className="py-2 px-4 text-center">{user.department}</td>
              {/* <td className="py-2 px-4 border-b">{user.position}</td>
              <td className="py-2 px-4 border-b">{user.salary}</td> */}
            </tr>
          {/* // ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDashboard;