import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsListReducers from './StudentsCreateReducer';
import StudentDataReducers from './StudentDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers ({
    kimlikdogrulamaResponse:  kimlikdogrulamaReducers,
    studentsListResponse: StudentsListReducers,
    studentDataResponse: StudentDataReducers,
    studentUpdateResponse: StudentUpdateReducers
});