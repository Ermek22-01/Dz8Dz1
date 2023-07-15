import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

export const addNote = createAsyncThunk(
    'notes/addNote' ,
    async (note, { rejectWithValue}) => {
        try {
            const response = await axios.post ('https://dummyjson.com/products/add' , note);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateNote = createAsyncThunk(
    'notes/updateNote' ,
    async (note, { rejectWithValue}) => {
        try {
            const response = await axios.put(`https://dummyjson.com/api/v1/note/${note.id}`, note)
            return response.data;
        }catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
)

const initialState={data:'',loading:false,error:''}

const notesSlice = createSlice({
    name:'notes',
    initialState:initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(addNote.fulfilled, (state, action) =>{
                state.data=action.payload
                state.loading=false
                state.error=''
            })
            .addCase(addNote.pending, (state, action) =>{
                state.data=''
                state.loading=true
                state.error=''
            })
            .addCase(addNote.rejected, (state, action) =>{
                state.data=''
                state.loading=false
                state.error=action.payload
            })
            .addCase(updateNote.fulfilled, (state, action) =>{
                const { id, completed } = action.payload;
                const noteToUpdate = state.initialState.find((note) => note.id === id);
                if (noteToUpdate) {
                    noteToUpdate.completed = completed;
                }
            });
    },
})
export default notesSlice.reducer;












