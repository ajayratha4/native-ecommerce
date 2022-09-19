import {useDispatch} from 'react-redux';
import {openAlertSnackbar} from '../../redux/settings';

const useSnackbar = () => {
  const dispatch = useDispatch();

  const showAlert = message => {
    dispatch(
      openAlertSnackbar({
        open: true,
        message: message,
      }),
    );
  };
  return {showAlert};
};

export default useSnackbar;
