import { useDispatch } from "react-redux";
import { debounce } from "debounce";
import { search, gender } from "../../redux/action/user";

export default function useFilter() {
    const dispatch = useDispatch();

    const handleSearch = debounce((e) => {
        dispatch(search(e))
      }, 600)

    const handleGender = (e) => {
        dispatch(gender(e))
    }
    return {
        handleSearch,
        handleGender
    }    
}