
// import {createStore,combineReducers,applyMiddleware} from "redux"
// import {thunk} from "redux-thunk"
// import { composeWithDevTools } from "redux-devtools-extension";

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { UserRedeucer, oneUserReducer, otherUsersReducer, profileReducer } from "./reducers/user.reducer";
import { TweetReducer, delUpTweetReducer, newTweetReducer, oneTweetReducer } from "./reducers/tweet.reducer";

const reducer = combineReducers({
    user:UserRedeucer,
    otherUser: otherUsersReducer,
    userDetail: oneUserReducer,
    tweetView: TweetReducer,
    tweetCreate: newTweetReducer,
    tweetDelete: delUpTweetReducer,
    profileUpdate:profileReducer,
    oneTweet:oneTweetReducer,
})

let initialState ={}

const middleware = [thunk]

const store = createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;