import axios from "axios";
import { useCallback, useState } from "react";
import apiRoutes from "../api/apiRoutes";

function useTeachersApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeachers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get(apiRoutes.getAllTeachers);
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

    const fetchTeacherId = useCallback(async (id) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiRoutes.getTeacherById(id));
        setData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, []);

	   const postNewTeacher = useCallback(async (newTeacher) => {
       setIsLoading(true);
       setError(null);
       try {
        await axios.post(apiRoutes.addTeacher, newTeacher);
       } catch (error) {
         setError(error.message);
       } finally {
         setIsLoading(false);
       }
     }, []);

	    const updateTeacher = useCallback(async (id, teacher) => {
        setIsLoading(true);
        setError(null);
        try {
          await axios.put(apiRoutes.updateTeacher(id), teacher);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }, []);
	    const deleteTeacher = useCallback(
        async (id) => {
          setIsLoading(true);
          setError(null);
          try {
            await axios.delete(apiRoutes.deleteTeacher(id));
            await fetchTeachers();
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        },
        [fetchTeachers]
      );

  return {
    data,
    isLoading,
    error,
    fetchTeachers,
    fetchTeacherId,
    postNewTeacher,
    updateTeacher,
    deleteTeacher,
  };
}

export default useTeachersApi;
