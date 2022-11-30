import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../Features/User/userSlice";
import movieReducer from "../Features/Movie/movieSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		movie: movieReducer,
	},
	middleWare: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
